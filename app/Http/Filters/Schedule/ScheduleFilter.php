<?php

namespace App\Http\Filters\Schedule;

use App\Http\Filters\AbstractFilter;
use Illuminate\Database\Eloquent\Builder;

class ScheduleFilter extends AbstractFilter
{
        public const GROUP_ID = 'group_id';
        public const TEACHER_ID = 'teacher_id';
        public const OBJECT_ID = 'object_id';
        public const LESSON_FORM_ID = 'lesson_form_id';
        public const WEEK_NUMBER = 'week_number';
        public const WEEKDAY_ID = 'weekday_id';
        public const SUBGROUP = 'subgroup';
        public const CLASS_TIME_ID = 'class_time_id';
        public const BUILDING = 'building';
        public const AUDITORIUM = 'auditorium';
        public const DATE = 'date';
        public const DATE_START = 'date_start';
        public const DATE_END = 'date_end';
        public const TIME = 'time';

    protected function getCallbacks(): array
    {
        // TODO: Implement getCallbacks() method.
        return [
            self::GROUP_ID => [$this, 'groupId'],
            self::TEACHER_ID => [$this, 'teacherId'],
            self::LESSON_FORM_ID => [$this, 'lessonFormId'],
            self::OBJECT_ID => [$this, 'objectId'],
            self::WEEK_NUMBER => [$this, 'weekNumber'],
            self::WEEKDAY_ID => [$this, 'weekDay'],
            self::SUBGROUP => [$this, 'subgroup'],
            self::CLASS_TIME_ID => [$this, 'classTimeId'],
            self::BUILDING => [$this, 'building'],
            self::AUDITORIUM => [$this, 'auditorium'],
            self::DATE => [$this, 'date'],
            self::DATE_START => [$this, 'dateStart'],
            self::DATE_END => [$this, 'dateEnd'],
            self::TIME => [$this, 'time'],
        ];
    }

    public function applay(Builder $builder)
    {
        // TODO: Implement applay() method.
    }

    public function groupId(Builder $builder, $value){
        $builder->where('group_id', $value);
    }

    public function teacherId(Builder $builder, $value){
        $builder->where('teacher_id', $value);
    }

    public function objectId(Builder $builder, $value){
        $builder->where('object_id', $value);
    }

    public function lessonFormId(Builder $builder, $value){
        $builder->where('lesson_form_id', $value);
    }

    public function weekNumber(Builder $builder, $value){
        $builder->where('week_number','like', "%".$value."%");
    }

    public function weekDay(Builder $builder, $value){
        $builder->where('weekday_id', $value);
    }

    public function subgroup(Builder $builder, $value){
        $builder->where('subgroup', $value);
    }

    public function classTimeId(Builder $builder, $value){
        $builder->where('class_time_id', $value);
    }

    public function building(Builder $builder, $value){
        $builder->where('building', 'like', "%".$value."%");
    }

    public function auditorium(Builder $builder, $value){
        $builder->where('auditorium', 'like', $value);
    }

    public function date(Builder $builder, $value){
        $builder->where('date', $value);
    }

    public function dateStart(Builder $builder, $value){
        $builder->where('date_start', ">", $value);
    }

    public function dateEnd(Builder $builder, $value){
        $builder->where('date_end', "<",$value);
    }

    public function time(Builder $builder, $value){
        $builder->where('time', $value);
    }
}
