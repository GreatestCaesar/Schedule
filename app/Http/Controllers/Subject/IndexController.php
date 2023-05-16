<?php

namespace App\Http\Controllers\Subject;

use App\Http\Controllers\Controller;
use App\Http\Filters\Teacher\TeacherFilter;
use App\Http\Requests\Teacher\FilterRequest;
use App\Http\Resources\Schedule\ScheduleResource;
use App\Http\Resources\Subject\SubjectResource;
use App\Http\Resources\Teacher\TeacherResource;
use App\Models\Subject;
use App\Models\Teacher;

class IndexController extends Controller
{
    public function __invoke(){
        $objects = Subject::all();
        return SubjectResource::collection($objects);
    }
}
