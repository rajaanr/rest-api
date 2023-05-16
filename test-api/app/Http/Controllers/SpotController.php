<?php

namespace App\Http\Controllers;

use App\Http\Resources\SpotResource;
use App\Models\Societies;
use App\Models\Spot;
use Illuminate\Http\Request;

class SpotController extends Controller
{
    public function get(){
        $token = request()->header('Authorization');

        $user = Societies::where('societies.login_tokens', $token)->first();
        if(empty($token)){
            return response()->json('Missing Tokens',401);
        }
        else {
            if ($user) {
                $spot = Spot::all();
                return new SpotResource($spot);
            }
            else {
                return response()->json('Invalid Tokens',401);
            }
        }
    }
}
