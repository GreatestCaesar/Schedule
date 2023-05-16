<?php

namespace App\Http\Controllers\Schedule;

use App\Http\Controllers\Controller;
use App\Http\Filters\Schedule\ScheduleFilter;
use App\Http\Requests\Schedule\FilterRequest;
use App\Http\Resources\Schedule\ScheduleResource;
use App\Models\Schedule;

class IndexController extends Controller
{
    public function __invoke(FilterRequest $request)
    {
        $data = $request->validated();
        $filter = app()->make(ScheduleFilter::class, ['queryParams' => array_filter($data)]);
        $schedules = Schedule::filter($filter)->get();
        return ScheduleResource::collection($schedules);
    }
}
