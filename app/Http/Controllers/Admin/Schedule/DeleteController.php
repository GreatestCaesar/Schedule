<?php

namespace App\Http\Controllers\Admin\Schedule;

use App\Models\Schedule;
use function redirect;

class DeleteController extends BaseController
{
    public function __invoke(Schedule $schedule){
        if(request()->ajax()){
            $schedule->delete();
            return true;
        }
        $schedule->delete();
        return redirect()->route('schedule.index');
    }
}
