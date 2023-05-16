<?php

namespace App\Http\Controllers\Teacher;

use App\Http\Controllers\Controller;
use App\Http\Filters\Teacher\TeacherFilter;
use App\Http\Requests\Teacher\FilterRequest;
use App\Http\Resources\Schedule\ScheduleResource;
use App\Http\Resources\Teacher\TeacherResource;
use App\Models\Teacher;

class IndexController extends Controller
{
    public function __invoke(FilterRequest $request){
        $data = $request->validated();
        $filter = app()->make(TeacherFilter::class, ['queryParams' => array_filter($data)]);
        $teachers = Teacher::filter($filter)->get();
        return TeacherResource::collection($teachers);
    }
}
