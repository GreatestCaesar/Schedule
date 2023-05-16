<?php

namespace App\Services\Schedule;

class CheckService
{
    public function transformation($data){
        $weekNumb = "";
        $subGroup = "";
        if(array_key_exists('week_one', $data)){
            $k = $data['week_one'];
            if($k == "true"){
                $weekNumb = $weekNumb."1";
            }
        }
        if(array_key_exists('week_two', $data)){
            $k = $data['week_two'];
            if($k == "true"){
                $weekNumb = $weekNumb . "2";
            }
        }
        if(array_key_exists('week_three', $data)){
            $k = $data['week_three'];
            if($k == "true"){
                $weekNumb = $weekNumb . "3";
            }
        }
        if(array_key_exists('week_four', $data)){
            $k = $data['week_four'];
            if($k == "true"){
                $weekNumb = $weekNumb . "4";
            }
        }
        if(strlen($weekNumb)==0){
            $weekNumb = $weekNumb."0";
        }
        if(array_key_exists('subgroup_one', $data)){
            $k = $data['subgroup_one'];
            if($k == "true"){
                $subGroup = $subGroup . "1";
            }
            if(array_key_exists('subgroup_two', $data)){
                $k = $data['subgroup_two'];
                if($k == "true"){
                    $subGroup = "0";
                }
            }
        }else{
            if(array_key_exists('subgroup_two', $data)){
                $k = $data['subgroup_two'];
                if($k == "true"){
                    $subGroup = $subGroup . "2";
                }
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
        return $dataActual;
    }
}
