<?php

namespace App\Http\Controllers\Admin\Group;

use App\Models\Group;
use function view;

class IndexController extends BaseController
{
    public function __invoke(){
        $message = "";
        $display = "none";
        $groups = Group::orderBy("name")->orderBy("code")->paginate(10);
        return view('admin.show.adminGroup', compact('groups', 'message', 'display'));
    }
}
