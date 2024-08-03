<?php

declare(strict_types=1);

namespace App\Usecases\Auth;

use App\Http\Requests\Auth\LoginRequest;
use App\Models\User;
use App\Usecases\Auth\Exceptions\PasswordMismatchException;
use App\Usecases\Auth\Exceptions\UserNotFoundException;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class LoginAction
{
    public function __invoke(
        LoginRequest $request,
        User $user
    ): void
    {
        $loginTargetUser = $user->where('name', '=', $request->name)->first();
        if(empty($loginTargetUser))
            throw new UserNotFoundException();

        if(! Hash::check($request->password, $loginTargetUser->password))
            throw new PasswordMismatchException();
        
        $request->session()->regenerate();
        Auth::guard('web')->login($loginTargetUser);
    }
}