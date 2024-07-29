<?php

namespace App\Usecases\RegisterUser;

use App\Models\TempUser;
use App\Models\User;
use App\Usecases\RegisterUser\Exceptions\RegisteredUserException;
use Illuminate\Http\Request;
class StoreAction
{
    public function __invoke(
        Request $request,
        TempUser $tempUser,
        User $user
    ): void
    {
        $targetTempUser = $tempUser->where('token', '=', $request->token)->first()->toArray();

        if(! $targetTempUser) return;
        $isUser = $user->where('name', '=', $targetTempUser['name'])->exists();
        if($isUser) {
            throw new RegisteredUserException();
            return;
        }

        $user->create($targetTempUser);
    }
}