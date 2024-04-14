<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class FavoriteAlbumsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        DB::table('favorite_albums')->insert([
            [
                'name' => 'Album 1',
                'artist' => 'Artist 1',
                'image' => 'album1.jpg',
                'url' => 'https://example.com/album1',
                'listeners' => 500,
                'playcount' => 2000,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Album 2',
                'artist' => 'Artist 2',
                'image' => 'album2.jpg',
                'url' => 'https://example.com/album2',
                'listeners' => 800,
                'playcount' => 3000,
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
