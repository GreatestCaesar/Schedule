<?php

namespace App\Http\Controllers\Admin\Teacher;

use App\Models\AcademicDegree;
use App\Models\AcademicRank;
use App\Models\Department;
use App\Models\Post;
use function view;

class CreateController extends BaseController
{
    public function __invoke(){
        $departments = Department::all();
        $posts = Post::all();
        $degrees = AcademicDegree::all();
        $ranks = AcademicRank::all();
        return view('admin.create.adminTeacher', compact('departments', 'posts', 'degrees', 'ranks'));
    }
}
