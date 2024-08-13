<?php

declare(strict_types=1);

namespace App\Usecases\RegisterUser;

use App\Models\TempUser;
use App\Models\User;
use App\Usecases\RegisterUser\Exceptions\RegisteredUserException;
use Illuminate\Http\Request;
class StoreAction
{
    public function __invoke(
        Request $request,
        TempUser $tempUserModel,
        User $userModel
    ): void
    {
        $targetTempUser = $tempUserModel->where('token', '=', $request->token)->first()->toArray();

        if(! $targetTempUser) return;
        $isUser = $userModel->where('name', '=', $targetTempUser['name'])->exists();
        if($isUser) {
            throw new RegisteredUserException();
            return;
        }

        $userModel->create($targetTempUser);
    }
}