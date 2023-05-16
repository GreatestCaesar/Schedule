<?php

namespace App\Services\Teacher;

use App\Models\Teacher;

class Service
{
    public function store($data){
        Teacher::firstOrCreate([
            'full_name' => $data['full_name'],
        ],$data);
        //Teacher::create($data);
    }

    public function update($teacher, $data){
        $teacher->update($data);
    }
}
