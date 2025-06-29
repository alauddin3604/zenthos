<?php

namespace App\Actions;

use App\Models\User;
use Illuminate\Support\ValidatedInput;

final readonly class UpdateUserProfileAction
{
    /**
     * Update the given user's profile information.
     */
    public function run(User $user, ValidatedInput $data): void
    {
        $user->fill($data->toArray());

        if ($user->isDirty('email')) {
            $user->email_verified_at = null;
        }

        $user->save();
    }
}
