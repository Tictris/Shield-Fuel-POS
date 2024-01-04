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

        if(Auth::user()->hasRole('super admin')){
            $users = User::role('admin')->with('roles')->orderBy('created_at', 'desc')->get();
        } elseif (Auth::user()->hasRole('admin')) {
            $users = User::role('manager')->with('roles')->orderBy('created_at', 'desc')->get();
        }

        return response()->json([
            'users' => $users
        ], 200);
    }
}
