<?php

namespace App\Http\Controllers\Admin\Teacher;

use App\Models\AcademicDegree;
use App\Models\AcademicRank;
use App\Models\Department;
use App\Models\Post;
use App\Models\Teacher;
use function view;

class EditController extends BaseController
{
    public function __invoke(Teacher $teacher){
        $departments = Department::all();
        $posts = Post::all();
        $degrees = AcademicDegree::all();
        $ranks = AcademicRank::all();
        return view('admin.edit.adminTeacher', compact('teacher','departments', 'posts', 'degrees', 'ranks'));
    }
}
