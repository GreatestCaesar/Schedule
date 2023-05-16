<?php

namespace App\Http\Controllers\Admin\Schedule;

use App\Models\ClassTime;
use App\Models\Group;
use App\Models\LessonForm;
use App\Models\Subject;
use App\Models\Teacher;
use App\Models\Weekday;
use function view;

class CreateController extends BaseController
{
    public function __invoke(){
        $groups = Group::all();
        $message = "Невозможно заполнить расписание, т.к. в базе нет ";
        $display = "block";
        $educ_name = [];
        if(count($groups)==0) {
            $message = $message."ГРУПП";
            return view('admin.show.adminGroup', compact('groups','message', 'display', 'educ_name'));
        }
        $teachers = Teacher::all();
        if(count($teachers)==0) {
            $message = $message."ПРЕПОДАВАТЕЛЕЙ";
            return view('admin.show.adminTeacher', compact('teachers','message', 'display'));
        }
        $subjects = Subject::all();
        if(count($subjects)==0) {
            $message = $message."ПРЕДМЕТОВ";
            return view('admin.show.adminObject', compact('subjects','message', 'display'));
        }

        $lessonForms = LessonForm::all();
        $weekadays = Weekday::all();
        $classTimes = ClassTime::all();
        return view('admin.create.adminSchedule', compact('groups', 'teachers', 'subjects', 'lessonForms', 'weekadays', 'classTimes'));
    }
}
