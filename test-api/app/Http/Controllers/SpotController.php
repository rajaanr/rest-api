<?php

namespace App\Http\Controllers;

use App\Http\Resources\SpotResource;
use App\Models\Societies;
use App\Models\Spot;
use Illuminate\Http\Request;

class SpotController extends Controller
{
    public function get($token){

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

    public function getById($id,$date,$token){

        $user = Societies::where('societies.login_tokens', $token)->first();

        if (!$user) {
         return response()->json('Unauthorixed',401);
        }
        else {
            $spot = Spot::findOrFail($id);

            return response()->json([
                'date' => date('F d,Y', strtotime($date)),
                    'spot' => [
                        'id' => $spot->id,
                        'name' => $spot->name,
                        'address' => $spot->address,
                        'serve' => $spot->serve,
                        'capacity' => $spot->capacity
                    ] ]);
        }

    }
}
