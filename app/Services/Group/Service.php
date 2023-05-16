<?php

namespace App\Services\Group;

use App\Models\Group;

class Service
{
    public function store($data){
        Group::firstOrCreate([
            'name' => $data['name'],
            'code'=> $data['code'],
        ],$data);
        //Group::create($data);
    }

    public function update($group, $data){
        $group->update($data);
    }
}
