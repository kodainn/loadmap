<?php

namespace App\Http\Controllers;

use App\Models\TempUser;
use App\Models\User;
use App\Usecases\RegisterUser\Exceptions\RegisteredUserException;
use App\Usecases\RegisterUser\StoreAction;
use Illuminate\Http\Request;
use Inertia\Inertia;

class RegisterUserController extends Controller
{
    public function store(
        Request $request,
        StoreAction $action,
        TempUser $tempUser,
        User $user
    )
    {
            if (! $request->hasValidSignature()) {
                abort(401);
            }
        try {
            $action($request, $tempUser, $user);

            return Inertia::render('RegisterComplatePage');
        } catch(RegisteredUserException $e) {
            return to_route('home.index');
        }
    }
}
