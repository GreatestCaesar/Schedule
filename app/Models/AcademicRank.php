<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AcademicRank extends Model
{
    use HasFactory;
    protected $guarded = false;
    public $timestamps = false;

    public function teachers(){
        return $this->hasMany(Teacher::class, 'rank_id','id');
    }
}
