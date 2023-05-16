<?php

namespace App\Http\Resources\Teacher;

use Illuminate\Http\Resources\Json\JsonResource;

class TeacherResource extends JsonResource
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
            'image' => $this->image,
            'full_name' => $this->full_name,
            'department_id' => $this->department_id,
            'post_id' => $this->post_id,
            'degree_id' => $this->degree_id,
            'rank_id' => $this->rank_id,
            'date_start' => $this->date_start,
            'date_end' => $this->date_end,
            'schedule' => $this->schedules,
            'degree' => $this->degree,
            'post' => $this->post,
            'department' => $this->department,
        ];
    }
}
