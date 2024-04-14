<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class FavoriteArtistsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
     public function run()
    {
        DB::table('favorite_artists')->insert([
            [
                'name' => 'Artist 1',
                'image' => 'image1.jpg',
                'url' => 'https://example.com/artist1',
                'listeners' => 1000,
                'playcount' => 5000,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Artist 2',
                'image' => 'image2.jpg',
                'url' => 'https://example.com/artist2',
                'listeners' => 2000,
                'playcount' => 8000,
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
