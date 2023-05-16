<?php

namespace App\Http\Controllers\Admin\Group;

use App\Models\Group;
use function redirect;

class DeleteController extends BaseController
{
    public function __invoke(Group $group){
        if(request()->ajax()){
            $group->delete();
            return true;
        }
        $group->delete();
        return redirect()->route('group.index');
    }
}
