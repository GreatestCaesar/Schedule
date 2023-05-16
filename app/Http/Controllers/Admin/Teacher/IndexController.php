<?php

namespace App\Http\Controllers\Admin\Teacher;

use App\Models\Teacher;
use function view;

class IndexController extends BaseController
{
    public function __invoke(){
        $message = "";
        $display = "none";
        $teachers = Teacher::orderBy("full_name")->paginate(3);
        return view('admin.show.adminTeacher', compact('teachers', 'message', 'display'));
    }
}
