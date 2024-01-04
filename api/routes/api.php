<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\AuthenticationController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\BranchController;

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
    Route::post('/register', 'register');
    /*
    Forget password fields:
    - email
    - token (hidden value)

    pass the token value to 'reset_pass' from the email

    */
    Route::post('/forget-password','forget_pass');
    Route::post('/reset-password','reset_pass');
});

// SUPER ADMIN ROUTES ============================================================
Route::middleware(['api', 'role:super admin'])->group(function () {

    Route::controller(AuthenticationController::class)->group(function () {
        Route::post('sa/register', 'register');
        Route::post('sa/logout', 'logout');
    });

    Route::controller(UserController::class)->group(function () {
        Route::get('super_admin_user', 'user');
        Route::get('sa/users', 'userList');
    });

    Route::controller(BranchController::class)->group(function () {
        Route::get('/branches', 'index');
        Route::post('/branches', 'store');
    });
});

Route::middleware(['api', 'role:manager'])->group(function () {

    Route::post('m/logout', [AuthenticationController::class, 'logout']);

    Route::controller(UserController::class)->group(function () {
        Route::get('super_admin_user', 'user');
    });
});
