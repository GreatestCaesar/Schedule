<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TypeEducation extends Model
{
    use HasFactory;
    protected $guarded = false;
    public $timestamps = false;
    protected $table = 'type_educations';

    public function groups(){
        return $this->hasMany(Group::class, 'type_education_id','id');
    }
}
