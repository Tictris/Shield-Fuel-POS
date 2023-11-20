<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\AuthenticationController;
use App\Http\Controllers\UserController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::controller(AuthenticationController::class)->group(function () {
    Route::post('/login', 'login');
});

// SUPER ADMIN ROUTES ============================================================
Route::middleware(['api', 'role:super_admin'])->group(function () {

    Route::controller(AuthenticationController::class)->group(function () {
        Route::post('sa/register', 'register');
        Route::post('sa/logout', 'logout');
    });

    Route::controller(UserController::class)->group(function () {
        Route::get('super_admin_user', 'user');
        Route::get('sa/users', 'userList');
    });
});

Route::middleware(['api', 'role:manager'])->group(function () {

    Route::post('m/logout', [AuthenticationController::class, 'logout']);

    Route::controller(UserController::class)->group(function () {
        Route::get('super_admin_user', 'user');
    });
});
