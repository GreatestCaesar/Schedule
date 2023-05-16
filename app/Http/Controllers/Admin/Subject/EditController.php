<?php

namespace App\Http\Controllers\Admin\Subject;

use App\Models\Subject;
use function view;

class EditController extends BaseController
{
    public function __invoke(Subject $object){
        return view('admin.edit.adminObject', compact('object'));
    }
}
