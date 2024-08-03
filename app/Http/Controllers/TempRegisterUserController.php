<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Http\Requests\TempRegisterUser\StoreRequest;
use App\Models\TempUser;
use App\Models\User;
use App\Usecases\TempRegisterUser\StoreAction;
use Exception;
use Inertia\Inertia;
use PDOException;

class TempRegisterUserController extends Controller
{
    public function create()
    {
        return Inertia::render('TempRegisterPage');
    }

    public function store(
        StoreRequest $request,
        StoreAction $action,
        TempUser $tempUser
    )
    {
        try {
            $action($request, $tempUser);
            return to_route('tempRegister.comp');
        } catch(Exception $e) {
            dd("エラーが発生しました。" . $e);   
        }
    }

    public function comp()
    {
        return Inertia::render('TempRegisterComplatePage');
    }
}
