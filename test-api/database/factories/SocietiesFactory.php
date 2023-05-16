<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\User>
 */
class SocietiesFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'id_card_number' => str_pad(random_int(0, 99999999), 8, '0', STR_PAD_LEFT),
            'password' => Hash::make("123456"),
            'name' => fake()->name(),
            'born_date' => fake()->date('Y-m-d'), // password
            'gender' => 'male',
            'address' => fake()->address(),
            'regional_id' => '1',
        ];
    }

    /**
     * Indicate that the model's email address should be unverified.
     */
    public function unverified(): static
    {
        return $this->state(fn (array $attributes) => [
            'email_verified_at' => null,
        ]);
    }
}
