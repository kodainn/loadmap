<?php

namespace App\Http\Middleware;

use Constants\FlashMsgKey;
use Illuminate\Http\Request;
use Inertia\Middleware;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): string|null
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        return [
            ...parent::share($request),
            'auth' => [
                'user' => $request->user(),
            ],
            'flash' => [
                FlashMsgKey::ERROR_MESSAGE => fn () => $request->session()->get(FlashMsgKey::ERROR_MESSAGE),
                FlashMsgKey::SUCCESS_MESSAGE => fn () => $request->session()->get(FlashMsgKey::SUCCESS_MESSAGE)
            ],
        ];
    }
}
