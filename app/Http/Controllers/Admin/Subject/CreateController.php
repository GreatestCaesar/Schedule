<?php

namespace App\Http\Controllers\Admin\Subject;

use function view;

class CreateController extends BaseController
{
    public function __invoke(){
        return view('admin.create.adminObject');
    }
}
