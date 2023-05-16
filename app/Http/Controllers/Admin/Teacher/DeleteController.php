<?php

namespace App\Http\Controllers\Admin\Teacher;

use App\Models\Teacher;
use function redirect;

class DeleteController extends BaseController
{
    public function __invoke(Teacher $teacher){
        if(request()->ajax()){
            $teacher->delete();
            return true;
        }
        $teacher->delete();
        return redirect()->route('teacher.index');
    }
}
