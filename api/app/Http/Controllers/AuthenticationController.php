<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;

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
        } else if(Auth::user()->hasRole('super_admin')){
            $user->assignRole('admin');
        } elseif (Auth::user()->hasRole('admin')) {
            $user->assignRole('manager');
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

    // LOGOUT ======================================================================================================
    public function logout(Request $request){
        $user = Auth::user();

        $user->tokens()->delete();

        return response()->json([
            'message'   => 'Logged out successfully!'
        ]);
    }

    // FORGET PASSWORD =============================================================================================
    public function forget_pass(Request $request){
        $request->validate([
            'email' => 'required|email|exists:users'
        ]);

        $token = Str::random(64);

        DB::table('password_resets')->insert([
            'email' => $request->email,
            'token' => $token,
            'created_at' => Carbon::now()
        ]);

        Mail::send('emails.forget-password', ['token' => $token], function ($message) use ($request) {
            $message->to($request->email);
            $message->subject('Reset Password');
        });

        return response()->json([
            'message' => 'Email sent successfully'
        ], 200);
    }
    // RESET PASSWORD ==============================================================================================
    public function reset_pass(Request $request){
        $request->validate([
            'email' => 'required|email|exists:users',
            'password' => 'required|confirmed',
            'password_confirmation' => 'required'
        ]);

        $updatePassword = DB::table('password_resets')
        ->where([
            'email'=>$request->email,
            'token' => $request->token
        ])->first();

        if(!$updatePassword){
            return response()->json([
                'message' => 'Invalid'
            ], 401);
        }

        User::where('email', $request->email)
        ->update([
            'password' => Hash::make($request->password)
        ]);

        return response()->json([
            'message' => 'password changed successfully'
        ], 200);

    }
}
