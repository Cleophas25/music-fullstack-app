<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Favorite_Artists extends Model
{
    use HasFactory;

     protected $fillable = [
        'name',
        'image',
        'url',
        'listeners',
        'playcount',
    ];

      public function user()
    {
        return $this->belongsToMany(User::class);
    }
    
}
