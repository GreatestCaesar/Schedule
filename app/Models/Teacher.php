<?php

namespace App\Models;

use App\Models\Traits\Filterable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Teacher extends Model
{
    use HasFactory;
    use Filterable;
    protected $guarded = false;
    public $timestamps = false;

    public function schedules(){
        return $this->hasMany(Schedule::class, 'teacher_id','id');
    }

    public function department(){
        return $this->belongsTo(Department::class, 'department_id','id');
    }

    public function post(){
        return $this->belongsTo(Post::class, 'post_id','id');
    }

    public function degree(){
        return $this->belongsTo(AcademicDegree::class, 'degree_id','id');
    }

    public function rank(){
        return $this->belongsTo(AcademicRank::class, 'rank_id','id');
    }
}
