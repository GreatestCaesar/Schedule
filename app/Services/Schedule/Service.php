<?php

namespace App\Services\Schedule;

use App\Models\Schedule;

class Service
{
    public function store($data){
        $weekNumb = "";
        $subGroup = "";
        if(array_key_exists('week_one', $data)){
            $weekNumb = $weekNumb."1";
        }
        if(array_key_exists('week_two', $data)){
            $weekNumb = $weekNumb."2";
        }
        if(array_key_exists('week_three', $data)){
            $weekNumb = $weekNumb."3";
        }
        if(array_key_exists('week_four', $data)){
            $weekNumb = $weekNumb."4";
        }
        if(strlen($weekNumb)==0){
            $weekNumb = $weekNumb."0";
        }
        if(array_key_exists('subgroup_one', $data)){
            $subGroup = $subGroup."1";
            if(array_key_exists('subgroup_two', $data)){
                $subGroup = "0";
            }
        }else{
            if(array_key_exists('subgroup_two', $data)){
                $subGroup = $subGroup."2";
            }else{
                $subGroup = "0";
            }
        }
        $dataActual = [
            'group_id' => $data['group_id'],
            'teacher_id' => $data['teacher_id'],
            'object_id' => $data['object_id'],
            'lesson_form_id' => $data['lesson_form_id'],
            'week_number' => $weekNumb,
            'weekday_id' => $data['weekday_id'] == null ? 0 : $data['weekday_id'],
            'subgroup' => $subGroup,
            'class_time_id' => $data['class_time_id'] == null ? 0 : $data['class_time_id'],
            'building' => $data['building'],
            'auditorium' => $data['auditorium'],
            'date' => $data['date'],
            'date_start' => $data['date_start'],
            'date_end' => $data['date_end'],
            'time' => $data['time'],
        ];
        Schedule::firstOrCreate([
            'group_id' => $dataActual['group_id'],
            'teacher_id' => $dataActual['teacher_id'],
            'object_id' => $dataActual['object_id'],
            'lesson_form_id' => $dataActual['lesson_form_id'],
            'week_number' => $dataActual['week_number'],
            'weekday_id' => $dataActual['weekday_id'],
            'subgroup' => $dataActual['subgroup'],
            'class_time_id' => $dataActual['class_time_id'],
            'building' => $dataActual['building'],
            'auditorium' => $dataActual['auditorium'],
            'date' => $dataActual['date'],
            'date_start' => $dataActual['date_start'],
            'date_end' => $dataActual['date_end'],
            'time' => $dataActual['time'],
        ], $dataActual);
    }

    public function update($schedule, $data){
        $weekNumb = "";
        $subGroup = "";
        if(array_key_exists('week_one', $data)){
            $weekNumb = $weekNumb."1";
        }
        if(array_key_exists('week_two', $data)){
            $weekNumb = $weekNumb."2";
        }
        if(array_key_exists('week_three', $data)){
            $weekNumb = $weekNumb."3";
        }
        if(array_key_exists('week_four', $data)){
            $weekNumb = $weekNumb."4";
        }
        if(strlen($weekNumb)==0){
            $weekNumb = $weekNumb."0";
        }
        if(array_key_exists('subgroup_one', $data)){
            $subGroup = $subGroup."1";
            if(array_key_exists('subgroup_two', $data)){
                $subGroup = $subGroup."2";
            }
        }else{
            if(array_key_exists('subgroup_two', $data)){
                $subGroup = $subGroup."2";
            }else{
                $subGroup = "0";
            }
        }
        $dataActual = [
            'group_id' => $data['group_id'],
            'teacher_id' => $data['teacher_id'],
            'object_id' => $data['object_id'],
            'lesson_form_id' => $data['lesson_form_id'],
            'week_number' => $weekNumb,
            'weekday_id' => $data['weekday_id'] == null ? 0 : $data['weekday_id'],
            'subgroup' => $subGroup,
            'class_time_id' => $data['class_time_id'] == null ? 0 : $data['class_time_id'],
            'building' => $data['building'],
            'auditorium' => $data['auditorium'],
            'date' => $data['date'],
            'date_start' => $data['date_start'],
            'date_end' => $data['date_end'],
            'time' => $data['time']
        ];
        $schedule->update($dataActual);
    }
}
