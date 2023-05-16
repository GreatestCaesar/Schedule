<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasFactory;
    protected $guarded = false;
    public $timestamps = false;

    public function teachers(){
        return $this->hasMany(Teacher::class, 'post_id','id');
    }
}
