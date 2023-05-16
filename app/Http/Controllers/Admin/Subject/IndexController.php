<?php

namespace App\Http\Controllers\Admin\Subject;

use App\Models\Subject;
use function view;

class IndexController extends BaseController
{
    public function __invoke(){
        $message = "";
        $display = "none";
        $subjects = Subject::orderBy("full_name")->paginate(10);
        return view('admin.show.adminObject', compact('subjects', 'message', 'display'));
    }
}
