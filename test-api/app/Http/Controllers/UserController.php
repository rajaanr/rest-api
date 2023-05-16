<?php

namespace App\Http\Controllers;

use App\Http\Resources\SocietiesResource;
use App\Models\Societies;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    public function login()
    {
       $validator = Validator::make(request()->all(),[
            'id_card_number' => 'required',
            'password' => 'required|min:6'
        ]);

        if ($validator->fails()) {
            return response()->json($validator->messages()
            ,402);
        }

        $credentials = request(['id_card_number','password']);

        if (!$auth = Auth::attempt($credentials)) {
            return response()->json(['error'=>'ID Card Number or Password Incorrect'],401);
        }

        $user = Societies::where('societies.id_card_number', request('id_card_number'))->first();

        $user->login_tokens = md5( auth()->user()->id_card_number);
        $user->update();

        //     return response()->json([
        //         'name' => auth()->user()->name,
        //         'born_date' => auth()->user()->born_date,
        //         'gender' => auth()->user()->gender,
        //         'address' => auth()->user()->address,
        //         'token' =>   md5(auth()->user()->id_card_number)
        //  ],200);

        return new SocietiesResource($user);


    }

    //logout
    public function logout(){
       $header = request()->header('Authorization');
        $user = Societies::where('societies.login_tokens', $header)->first();
       if(empty($header)){
        return response()->json('Token Is Missing',402);
       }
       else {
            if($user){
                $user->login_tokens = null;
                $user->update();
                return response()->json('Logout Succesfully',200);
            }
            else {
                return response()->json('Token is Invalid',401);
            }
       }
    }
    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request)
    {
       $validator =  Validator::make(request()->all(),[
            'name' => 'required|unique:users',
            'password' => 'required|min:6'
        ]);

        if ($validator->fails()) {
          return response()->json($validator->messages(),422);
        }

        $user = new User();
        $user->name = request('name');
        $user->password = Hash::make(request('password'));
        $user->save();

        return response()->json('User Dibuat');

    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
