<?php

namespace App\Http\Resources\Schedule;

use Illuminate\Http\Resources\Json\JsonResource;

class ScheduleResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'group_id' => $this->group_id,
            'teacher_id' => $this->teacher_id,
            'object_id' => $this->object_id,
            'lesson_form_id' => $this->lesson_form_id,
            'week_number' => $this->week_number,
            'weekday_id' => $this->weekday_id,
            'subgroup' => $this->subgroup,
            'class_time_id' => $this->class_time_id,
            'building' => $this->building,
            'auditorium' => $this->auditorium,
            'date' => $this->date,
            'date_start' => $this->date_start,
            'date_end' => $this->date_end,
            'time' => $this->time,
        ];
    }
}
