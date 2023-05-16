<?php

namespace App\Http\Filters\Teacher;

use App\Http\Filters\AbstractFilter;
use Illuminate\Database\Eloquent\Builder;

class TeacherFilter extends AbstractFilter
{
        public const FULL_NAME = 'full_name';
        public const DEPARTMENT_ID = 'department_id';
        public const POST_ID = 'post_id';
        public const DEGREE_ID = 'degree_id';
        public const RANK_ID = 'rank_id';
        public const DATE_START = 'date_start';
        public const DATE_END = 'date_end';

    protected function getCallbacks(): array
    {
        // TODO: Implement getCallbacks() method.
        return [
            self::FULL_NAME => [$this, 'fullName'],
            self::DEPARTMENT_ID => [$this, 'departmentId'],
            self::POST_ID => [$this, 'postId'],
            self::DEGREE_ID => [$this, 'degreeId'],
            self::RANK_ID => [$this, 'rankId'],
            self::DATE_START => [$this, 'dateStart'],
            self::DATE_END => [$this, 'dateEnd'],
        ];
    }

    public function applay(Builder $builder)
    {
        // TODO: Implement applay() method.
    }

    public function fullName(Builder $builder, $value){
        $builder->where('full_name', 'like', "%".$value."%");
    }

    public function departmentId(Builder $builder, $value){
        $builder->where('department_id', $value);
    }

    public function postId(Builder $builder, $value){
        $builder->where('post_id', $value);
    }

    public function degreeId(Builder $builder, $value){
        $builder->where('degree_id', $value);
    }

    public function rankId(Builder $builder, $value){
        $builder->where('rank_id', $value);
    }

    public function dateStart(Builder $builder, $value){
        $builder->where('date_start', $value);
    }

    public function dateEnd(Builder $builder, $value){
        $builder->where('date_end', $value);
    }
}
