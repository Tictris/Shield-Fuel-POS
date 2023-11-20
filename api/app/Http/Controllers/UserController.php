<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    public function user(){
        $user = Auth::user();

        return response()->json([
            'user' => $user
        ], 200);
    }

    public function userList(){

        $users = User::role('admin')->with('roles')->get();

        return response()->json([
            'users' => $users
        ], 200);
    }
}
