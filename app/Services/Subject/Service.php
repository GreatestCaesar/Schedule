<?php

namespace App\Services\Subject;

use App\Models\Subject;

class Service
{
    public function store($data){
        Subject::firstOrCreate([
            'full_name' => $data['full_name'],
            'abbreviated_name'=> $data['abbreviated_name'],
        ],$data);
        //Subject::create($data);
    }

    public function update($object, $data){
        $object->update($data);
    }
}
