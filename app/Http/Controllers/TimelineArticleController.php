<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class TimelineArticleController extends Controller
{
    public function index()
    {
        return Inertia::render('TimelinePage');
    }
}
