<?php

namespace Tests\Feature\Auth;

use Illuminate\Support\Facades\Hash;
use PHPUnit\Framework\Attributes\Test;
use Tests\TestCase;

class PasswordUpdateTest extends TestCase
{
    const PROFILE_ROUTE = '/profile';

    #[Test]
    public function password_can_be_updated(): void
    {
        $user = $this->createUser();

        $response = $this
            ->actingAs($user)
            ->from(self::PROFILE_ROUTE)
            ->put('/password', [
                'current_password' => 'password',
                'password' => 'new-password',
                'password_confirmation' => 'new-password',
            ]);

        $response
            ->assertSessionHasNoErrors()
            ->assertRedirect(self::PROFILE_ROUTE);

        $this->assertTrue(Hash::check('new-password', $user->refresh()->password));
    }

    #[Test]
    public function correct_password_must_be_provided_to_update_password(): void
    {
        $user = $this->createUser();

        $response = $this
            ->actingAs($user)
            ->from(self::PROFILE_ROUTE)
            ->put('/password', [
                'current_password' => 'wrong-password',
                'password' => 'new-password',
                'password_confirmation' => 'new-password',
            ]);

        $response
            ->assertSessionHasErrors('current_password')
            ->assertRedirect(self::PROFILE_ROUTE);
    }
}
