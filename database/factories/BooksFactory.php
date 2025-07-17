<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Books>
 */
class BooksFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'title' => $this->faker->sentence,
            'author' => $this->faker->name,
            'cover_image' => $this->faker->imageUrl(640, 480, 'books', true),
            'price' => $this->faker->randomFloat(2, 5, 100),
            'genre' => $this->faker->word,
            'description' => $this->faker->paragraph,
            'publish_date' => $this->faker->date(),
        ];
    }
}
