<?php

namespace App\Http\Controllers\Admin\Group;

use App\Models\Group;
use App\Models\TypeEducation;
use function view;

class EditController extends BaseController
{
    public function __invoke(Group $group){
        $typeEduc = TypeEducation::all();
        return view('admin.edit.adminGroup', compact('group', 'typeEduc'));
    }
}
