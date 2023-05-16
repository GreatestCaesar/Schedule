<?php

namespace App\Http\Controllers\Admin\Schedule;

use App\Models\Group;
use App\Models\LessonForm;
use App\Models\Schedule;
use App\Models\Subject;
use App\Models\Teacher;
use function view;

class IndexController extends BaseController
{
    public function __invoke()
    {
        $message = "";
        $display = "none";
        $times = [
            '1' => '08:00-09:40',
            '2' => '09:55-11:35',
            '3' => '12:15-13:55',
            '4' => '14:10-15:50',
            '5' => '16:20-18:00',
            '6' => '18:15-19:55',
            '7' => '20:10-21:50',
        ];
        $groups = Group::all();
        $teacher = Teacher::all();
        $subject = Subject::all();
        $lessonForm = LessonForm::all();
        $schedules = Schedule::orderBy("week_number")->paginate(8);
        return view('admin.show.adminSchedule', compact('schedules', 'message', 'display', 'times'));
    }
}
