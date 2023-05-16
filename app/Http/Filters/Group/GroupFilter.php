<?php

namespace App\Http\Filters\Group;

use App\Http\Filters\AbstractFilter;
use Illuminate\Database\Eloquent\Builder;

class GroupFilter extends AbstractFilter
{
        public const NAME = 'name';
        public const CODE = 'code';
        public const COURSE = 'course';
        public const TYPE_EDUCATION_ID = 'type_education_id';
        public const DATE_START = 'date_start';
        public const DATE_END = 'date_end';

    protected function getCallbacks(): array
    {
        // TODO: Implement getCallbacks() method.
        return [
            self::NAME => [$this, 'name'],
            self::CODE => [$this, 'code'],
            self::COURSE => [$this, 'course'],
            self::TYPE_EDUCATION_ID => [$this, 'typeEducationId'],
            self::DATE_START => [$this, 'dateStart'],
            self::DATE_END => [$this, 'dateEnd'],
        ];
    }

    public function applay(Builder $builder)
    {
        // TODO: Implement applay() method.
    }

    public function name(Builder $builder, $value){
        $builder->where('name', 'like', $value);
    }

    public function code(Builder $builder, $value){
        $builder->where('code', 'like', $value);
    }

    public function course(Builder $builder, $value){
        $builder->where('course', $value);
    }

    public function typeEducationId(Builder $builder, $value){
        $builder->where('type_education_id', $value);
    }

    public function dateStart(Builder $builder, $value){
        $builder->where('date_start', $value);
    }

    public function dateEnd(Builder $builder, $value){
        $builder->where('date_end', $value);
    }
}
