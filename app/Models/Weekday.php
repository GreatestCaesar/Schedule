<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Weekday extends Model
{
    use HasFactory;
    protected $guarded = false;
    public $timestamps = false;

    public function schedules(){
        return $this->hasMany(Schedule::class, 'weekday_id','id');
    }
}
