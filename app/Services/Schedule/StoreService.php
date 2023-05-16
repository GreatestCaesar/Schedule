<?php

namespace App\Services\Schedule;

use App\Models\Schedule;

class StoreService
{
    public function store($data){
        $weekNumb = "";
        $subGroup = "";

        $k = $data['week_one'];
        if($k == "true"){
            $weekNumb = $weekNumb."1";
        }
        $k = $data['week_two'];
        if($k == "true"){
            $weekNumb = $weekNumb . "2";
        }
        $k = $data['week_three'];
        if($k == "true"){
            $weekNumb = $weekNumb . "3";
        }
        $k = $data['week_four'];
        if($k == "true"){
            $weekNumb = $weekNumb . "4";
        }
        if(strlen($weekNumb)==0){
            $weekNumb = $weekNumb."0";
        }
        $k = $data['subgroup_one'];
        if($k == "true"){
            $subGroup = "1";
            $k = $data['subgroup_two'];
            if($k == "true"){
                $subGroup = "0";
            }
        }else{
            $k = $data['subgroup_two'];
            if($k == "true"){
                $subGroup = "2";
            }else{
                $subGroup = "0";
            }
        }
        return Schedule::firstOrCreate([
            'group_id' => $data['group_id'],
            'teacher_id' => $data['teacher_id'],
            'object_id' => $data['object_id'],
            'lesson_form_id' => $data['lesson_form_id'],
            'week_number' => $weekNumb,
            'weekday_id' => $data['weekday_id'] == null ? 1 : $data['weekday_id'],
            'subgroup' => $subGroup,
            'class_time_id' => $data['class_time_id'] == null ? 1 : $data['class_time_id'],
            'building' => $data['building'],
            'auditorium' => $data['auditorium'],
            'date' => $data['date'],
            'date_start' => $data['date_start'],
            'date_end' => $data['date_end'],
            'time' => $data['time']
        ]);
    }
}
