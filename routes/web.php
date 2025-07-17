<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BooksController;

Route::get('/', function () {
    return Inertia::render('Home');
});

Route::resource('books', BooksController::class);

// Route::middleware(['web'])->group(function () {
//     Route::resource('books', BooksController::class);
// });
