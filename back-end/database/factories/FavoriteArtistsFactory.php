<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Favorite_Artists>
 */
class FavoriteArtistsFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => $this->faker->name(),
            'image' => $this->faker->name(),
            'url' => $this->faker->numberBetween(100, 400),
            'listeners' => $this->faker->name(),
            'playcount' => $this->faker->numberBetween(100, 400),
        ];
    }
}
