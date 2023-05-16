<?php

namespace App\Models;

use App\Models\Traits\Filterable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Group extends Model
{
    use HasFactory;
    use Filterable;
    protected $guarded = false;
    public $timestamps = false;

    public function schedules(){
        return $this->hasMany(Schedule::class, 'group_id','id');
    }

    public function typeEduc(){
        return $this->belongsTo(TypeEducation::class, 'type_education_id','id');
    }
}
