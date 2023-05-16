<?php

namespace App\Http\Controllers\Admin\Group;

use App\Models\TypeEducation;
use function view;

class CreateController extends BaseController
{
    public function __invoke(){
        $typeEduc = TypeEducation::all();
        return view('admin.create.adminGroup', compact('typeEduc'));
    }
}
