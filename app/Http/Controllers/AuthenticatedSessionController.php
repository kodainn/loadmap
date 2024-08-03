<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use Constants\FlashMsgKey;
use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use App\Models\User;
use App\Usecases\Auth\LoginAction;
use App\Usecases\Auth\Exceptions\UserNotFoundException;
use App\Usecases\Auth\Exceptions\PasswordMismatchException;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;

class AuthenticatedSessionController extends Controller
{
    public function create(): Response
    {
        return Inertia::render('LoginPage');
    }


    public function store(
        LoginRequest $request,
        LoginAction $action,
        User $user
    ): RedirectResponse
    {
        try {
            $action($request, $user);

            return to_route('home.index');
        } catch(UserNotFoundException $e) {
            return to_route('login')->with(
                    FlashMsgKey::ErrorMessage,
                    __('flash_message.user_not_found'));
        } catch(PasswordMismatchException $e) {
            return to_route('login')->with(
                    FlashMsgKey::ErrorMessage,
                    __('flash_message.password_mismatch'));
        }
    }

    public function destroy(Request $request): RedirectResponse
    {
        Auth::guard('web')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect('/');
    }
}
