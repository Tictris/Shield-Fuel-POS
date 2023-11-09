<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;

class AuthenticationController extends Controller
{
    // REGISTRATION ==============================================================================================
    public function register(Request $request){

        $request->validate([
            'firstname' =>  'required|string',
            'lastname'  =>  'required|string',
            'email'     =>  'required|email|unique:users,email',
            'mobile'    =>  'required|string',
            'username'  =>  'required|string',
            'password'  =>  'required|string|min:8|confirmed',
        ]);

        $data = $request->all();
        $data['password']  = Hash::make($data['password']);
        $user = User::create($data);

        if(User::count() == 1){
            $user->assignRole('super_admin');
        }

        return response()->json([
            'message'       =>  'Registration Successful',
            'credentials'   =>  $user,
        ], 201);
    }

    // LOGIN =====================================================================================================
    public function login(Request $request){

        $request->validate([
            'email'     =>  'required|email',
            'password'  =>  'required'
        ]);

        $credential = $request->only('email', 'password');

        if(Auth::guard('web')->attempt($credential)){
            $user = User::query()->where('email', $request['email'])->first();
            $role = $user->roles;
            $token = $user->createToken('PERSONAL_ACCESS_TOKEN')->accessToken;

            return response()->json([
                'user'      =>  $user,
                'token'     =>  $token,
                'message'   =>  'logged in successful'
            ], 200);
        } else {
            return response()->json([
                'message'   =>  'Invalid credentials'
            ], 401);
        }
    }
}
