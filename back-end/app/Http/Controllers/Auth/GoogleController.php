<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Laravel\Socialite\Facades\Socialite;
use App\Models\User;

class GoogleController extends Controller
{
    public function redirectToGoogle(){
        return Socialite::driver('google')->redirect();
    }

    public function handleGoogleCallback()
{
    try {
        $googleUser = Socialite::driver('google')->user();
        $user = User::where('google_id', $googleUser->getId())->first();
        
        if (!$user) {
            $newUser = User::create([
                'name' => $googleUser->getName(),
                'email' => $googleUser->getEmail(),
                'google_id' => $googleUser->getId(),
            ]);
            auth()->login($newUser);
        } else {
            auth()->login($user);
        }

        return redirect()->intended('dashboard');
    } catch (\Throwable $th) {
        dd('Something went wrong'. $th->getMessage());
    }
}
}
