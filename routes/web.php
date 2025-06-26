<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;

Route::get('/home', function () {
    // 'Home' refers to the Vue/React component at resources/js/Pages/Home.vue
    return Inertia::render('Home');
});

Route::get ('/', function(){
    return json_decode('{"message": "Hello, World!"}');
});