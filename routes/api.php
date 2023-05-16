<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group([
    'middleware' => 'api',
    'prefix' => 'auth'
], function ($router) {
    Route::post('login', 'AuthController@login');
    Route::post('logout', 'AuthController@logout');
    /*
    Route::post('refresh', 'AuthController@refresh');
    Route::post('me', 'AuthController@me');*/
});

Route::group(['namespace' => 'Group'], function () {
    Route::get('groups', 'IndexController');
});

Route::group(['namespace' => 'Schedule'], function () {
    Route::get('schedules', 'IndexController');
    Route::get('schedules/check', 'CheckController')->name("check");
    Route::post('799855594adc0f2bd7302c69d3234b5a', 'StoreController');
});

Route::group(['namespace' => 'Teacher'], function () {
    Route::get('teachers', 'IndexController');
});

Route::group(['namespace' => 'Subject'], function () {
    Route::get('subjects', 'IndexController');
});
