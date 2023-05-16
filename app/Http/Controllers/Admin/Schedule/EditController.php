<?php

namespace App\Http\Controllers\Admin\Schedule;

use App\Models\ClassTime;
use App\Models\Group;
use App\Models\LessonForm;
use App\Models\Schedule;
use App\Models\Subject;
use App\Models\Teacher;
use App\Models\Weekday;
use function view;

class EditController extends BaseController
{
    public function __invoke(Schedule $schedule){
        $groups = Group::all();
        $teachers = Teacher::all();
        $subjects = Subject::all();
        $lessonForms = LessonForm::all();
        $weekadays = Weekday::all();
        $classTimes = ClassTime::all();
        return view('admin.edit.adminSchedule', compact('schedule', 'groups', 'teachers', 'subjects', 'lessonForms', 'weekadays', 'classTimes'));
    }
}
