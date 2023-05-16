<?php

namespace App\Http\Controllers\Schedule;

use App\Http\Controllers\Admin\Schedule\CheckBaseController;
use App\Http\Filters\Schedule\ScheduleFilter;
use App\Http\Requests\Schedule\StoreRequest;
use App\Models\Schedule;
use function app;

class CheckController extends CheckBaseController
{

    public function __invoke(StoreRequest $request)
    {
        if($request->ajax()){
            $data = $request->validated();
            $newData = $this->service->transformation($data);
            $this->checkOne($newData);
            $this->checkTwo($newData);
            if($this->checkOne($newData)){
                if($this->checkTwo($newData)){
                    return "Запись о данном занятии уже существует. Вы уверены, что хотите сохранить данные?";
                }else {
                    return "Данный преподаватель имеет занятие в это время. Вы уверены, что хотите сохранить данные?";
                }
            }else{
                if($this->checkTwo($newData)){
                    return "Для данной аудитории имеется занятие в это время. Вы уверены, что хотите сохранить данные?";
                }else {
                    return "";
                }
            }
        }
    }

    private function checkOne($data){
        if($data['lesson_form_id']<4) {
            $newData = [
                'teacher_id' => $data['teacher_id'],
                'week_number' => $data['week_number'],
                'weekday_id' => $data['weekday_id'],
                'class_time_id' => $data['class_time_id']
            ];
        }else{
            $newData = [
                'teacher_id' => $data['teacher_id'],
                'date' => $data['date'],
                'time' => $data['time'],
            ];
        }
        $filter = app()->make(ScheduleFilter::class, ['queryParams' => array_filter($newData)]);
        $schedules = Schedule::filter($filter)->get();
        if(count($schedules) > 0){
            return true;
        }
        return false;
    }

    private function checkTwo($data){
        if($data['lesson_form_id']<4){
            $newData = [
                'week_number' => $data['week_number'],
                'weekday_id' => $data['weekday_id'],
                'class_time_id' => $data['class_time_id'],
                'building' => $data['building'],
                'auditorium' => $data['auditorium']
            ];
        }else{
            $newData = [
                'date' => $data['week_number'],
                'time' => $data['time'],
                'building' => $data['building'],
                'auditorium' => $data['auditorium']
            ];
        }
        $filter = app()->make(ScheduleFilter::class, ['queryParams' => array_filter($newData)]);
        $schedules = Schedule::filter($filter)->get();
        if(count($schedules) > 0){
            return true;
        }
        return false;
    }
}
