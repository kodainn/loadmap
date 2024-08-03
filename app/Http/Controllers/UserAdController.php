<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class UserAdController extends Controller
{
    public function index()
    {
        return Inertia::render('AdPage');
    }
}
