<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class LessonForm extends Model
{
    use HasFactory;
    protected $guarded = false;
    public $timestamps = false;

    public function schedules(){
        return $this->hasMany(Schedule::class, 'lesson_form_id','id');
    }
}
