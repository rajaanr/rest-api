<?php

use App\Http\Controllers\ConsultationController;
use App\Http\Controllers\SpotController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::prefix('v1')->group( function(){
Route::apiResource('users', UserController::class);
Route::post('auth/login',[UserController::class, 'login']); //ga perlu token
Route::post('auth/register',[UserController::class,'create']);//gaperlu
Route::post('auth/logout/{token}',[UserController::class,'logout']);
Route::post('consultations/{token}',[ConsultationController::class,'request']);
Route::get('consultations/{token}',[ConsultationController::class,'get']);
Route::get('spots/{token}',[SpotController::class,'get']); ///belum selesaiiiiiii
Route::get('spots/{id}/{date}/{token}',[SpotController::class,'getByid']); ///belum selesaiiiiiii
});

