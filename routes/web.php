<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', 'ScheduleController@index')->name('main.index');

Route::group(['namespace' => 'Admin', 'prefix' => 'admin', 'middleware' => 'admin'], function () {
    Route::group(['namespace' => 'Group'], function () {
        Route::get('', 'IndexController')->name('group.index');
        Route::get('group', 'IndexController')->name('group.index');
        Route::get('group/create', 'CreateController')->name('group.create');
        Route::post('group', 'StoreController')->name('group.store');
        Route::get('group/{group}/edit', 'EditController')->name('group.edit');
        Route::patch('group/{group}', 'UpdateController')->name('group.update');
        Route::delete('group/{group}', 'DeleteController')->name('group.delete');
    });

    Route::group(['namespace' => 'Schedule'], function () {
        Route::get('schedule', 'IndexController')->name('schedule.index');
        Route::get('schedule/create', 'CreateController')->name('schedule.create');
        Route::post('schedule', 'StoreController')->name('schedule.store');
        Route::get('schedule/{schedule}/edit', 'EditController')->name('schedule.edit');
        Route::patch('schedule/{schedule}', 'UpdateController')->name('schedule.update');
        Route::delete('schedule/{schedule}', 'DeleteController')->name('schedule.delete');
    });

    Route::group(['namespace' => 'Subject'], function () {
        Route::get('object', 'IndexController')->name('object.index');
        Route::get('object/create', 'CreateController')->name('object.create');
        Route::post('object', 'StoreController')->name('object.store');
        Route::get('object/{object}/edit', 'EditController')->name('object.edit');
        Route::patch('object/{object}', 'UpdateController')->name('object.update');
        Route::delete('object/{object}', 'DeleteController')->name('object.delete');
    });

    Route::group(['namespace' => 'Teacher'], function () {
        Route::get('teacher', 'IndexController')->name('teacher.index');
        Route::get('teacher/create', 'CreateController')->name('teacher.create');
        Route::post('teacher', 'StoreController')->name('teacher.store');
        Route::get('teacher/{teacher}/edit', 'EditController')->name('teacher.edit');
        Route::patch('teacher/{teacher}', 'UpdateController')->name('teacher.update');
        Route::delete('teacher/{teacher}', 'DeleteController')->name('teacher.delete');
    });
});

//Route::get('/test', 'TestController@index');

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

/*
Route::group(['namespace' => 'Group'], function () {
    Route::get('/group', 'IndexController');
});

Route::group(['namespace' => 'Schedule'], function () {
    Route::get('/schedule', 'IndexController');
});

Route::group(['namespace' => 'Teacher'], function () {
    Route::get('/teacher', 'IndexController');
});*/
