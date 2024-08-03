<?php

declare(strict_types=1);

namespace App\Usecases\TempRegisterUser;

use App\Http\Requests\TempRegisterUser\StoreRequest;
use App\Jobs\SendRegisterUserMailJob;
use App\Models\TempUser;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class StoreAction
{
    public function __invoke(StoreRequest $request, TempUser $tempUser): void
    {
        $createTempUser = $request->all();
        $createTempUser['token'] = Str::random(64);
        $createTempUser['password'] = Hash::make($request->password);

        $createdTempUser = $tempUser->create($createTempUser);
        SendRegisterUserMailJob::dispatch($createdTempUser->email, $createdTempUser->token);
    }
}