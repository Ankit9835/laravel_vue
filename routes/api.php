<?php

use App\Http\Controllers\AuthController;

Route::group([

    'middleware' => 'api',
    'prefix' => 'auth'

], function ($router) {
    Route::post('/login', [App\Http\Controllers\AuthController::class, 'login']);
    Route::post('/logout', [App\Http\Controllers\AuthController::class, 'logout']);
    Route::post('/signup', [App\Http\Controllers\AuthController::class, 'signup']);
    Route::post('refresh', 'AuthController@refresh');
    Route::post('/me', [App\Http\Controllers\AuthController::class, 'me']);

});