<?php

namespace App\Http\Controllers;

use App\Http\Resources\ConsultationResource;
use App\Models\Consultation;
use App\Models\Societies;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ConsultationController extends Controller
{
    public function request(){

        $token = request()->header('Authorization');
        $user = Societies::where('societies.login_tokens', $token)->first();

        if (empty($token)) {
            return response()->json('Token is Missing');
        }
        else {
            if ($user) {
                $consul = new Consultation();
                $consul->society_id = $user->id;
                $consul->doctor_id = '1';
                $consul->disease_history = request('disease_history');
                $consul->current_symptomps = request('current_symptomps');
                $consul->status = 'accepted';
                $consul->doctor_notes = 'ok';
                $consul->save();

                return response()->json('Successss');
            }
            else {
                return response()->json(['message' => 'Unauthorized']);
            }
        }
    }


    public function get() {
        $token = request()->header('Authorization');

        $user = Societies::where('societies.login_tokens', $token)->first();
        if(empty($token)){
            return response()->json('Missing Tokens',401);
        }
        else {
            if ($user) {
                $consul = Consultation::where('society_id', $user->id)->first();
                return new ConsultationResource($consul);
            }
            else {
                return response()->json('Invalid TOkens',401);
            }
        }
    }
}
