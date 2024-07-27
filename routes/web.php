<?php

use App\Http\Controllers\AnnouncementController;
use App\Http\Controllers\FollowUserArticleController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\SearchArticleController;
use App\Http\Controllers\TimelineArticleController;
use App\Http\Controllers\UserAdController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::controller(HomeController::class)->name('home')->group(function() {
    Route::get('/', 'index');
});


Route::controller(TimelineArticleController::class)->prefix('timeline')->name('timeline')->group(function() {
    Route::get('/', 'index');
});


Route::controller(FollowUserArticleController::class)->prefix('follow')->name('follow')->group(function() {
    Route::get('/', 'index');
});


Route::controller(UserAdController::class)->prefix('ad')->name('ad')->group(function() {
    Route::get('/', 'index');
});


Route::controller(AnnouncementController::class)->prefix('announcement')->name('announcement')->group(function() {
    Route::get('/', 'index');
});

Route::controller(SearchArticleController::class)->prefix('search')->name('search')->group(function() {
    Route::get('/', 'index');
});

require __DIR__.'/auth.php';
