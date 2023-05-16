<?php

namespace App\Http\Requests\Schedule;

use Illuminate\Foundation\Http\FormRequest;

class FilterRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'group_id' => 'integer',
            'teacher_id' => 'integer',
            'object_id' => 'integer',
            'lesson_form_id' => 'integer',
            'week_number' => 'string',
            'weekday_id' => '',
            'subgroup' => 'string',
            'class_time_id' => '',
            'building' => 'string',
            'auditorium' => 'string',
            'date' => '',
            'date_start' => '',
            'date_end' => '',
            'time' => '',
        ];
    }
}
