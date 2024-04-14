<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Favorite_Albums extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'artist',
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
