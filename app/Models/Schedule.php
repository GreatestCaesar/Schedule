<?php

namespace App\Models;

use App\Models\Traits\Filterable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Schedule extends Model
{
    use HasFactory;
    use Filterable;
    protected $guarded = false;
    public $timestamps = false;

    public function group(){
        return $this->belongsTo(Group::class, 'group_id','id');
    }

    public function teacher(){
        return $this->belongsTo(Teacher::class, 'teacher_id','id');
    }

    public function object(){
        return $this->belongsTo(Subject::class, 'object_id','id');
    }

    public function form(){
        return $this->belongsTo(LessonForm::class, 'lesson_form_id','id');
    }

    public function weekday(){
        return $this->belongsTo(Weekday::class, 'weekday_id','id');
    }

    public function time(){
        return $this->belongsTo(ClassTime::class, 'class_time_id','id');
    }
}
