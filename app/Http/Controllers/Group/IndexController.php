<?php

namespace App\Http\Controllers\Group;

use App\Http\Controllers\Controller;
use App\Http\Filters\Group\GroupFilter;
use App\Http\Requests\Group\FilterRequest;
use App\Http\Resources\Group\GroupResource;
use App\Models\Group;

class IndexController extends Controller
{
    public function __invoke(FilterRequest $request){
        $data = $request->validated();
        $filter = app()->make(GroupFilter::class, ['queryParams' => array_filter($data)]);
        $groups = Group::filter($filter)->get();
        return GroupResource::collection($groups);
    }
}
