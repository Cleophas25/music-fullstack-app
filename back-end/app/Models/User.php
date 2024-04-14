<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    use HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
    'name',
    'email',
    'email_verified_at', 
    'password',
    'google_id', 
    'avatar', 
];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }

     public function favorite_Artists()
    {
        return $this->belongsToMany(Favorite_Artists::class);
    }
    
    public function favorite_Albums()
    {
        return $this->belongsToMany(Favorite_Albums::class);
    }

    public function run()
{
    User::factory()->count(50)->create();

    // Get all of the users
    $users = User::all();

    // Get all of the favorite artists
    $favoriteArtists = Favorite_Artists::all();

    // Attach a random number of favorite artists to each user
    foreach ($users as $user) {
        $user->favoriteArtists()->attach(
            $favoriteArtists->random(rand(1, 5))
        );
    }
}
}
