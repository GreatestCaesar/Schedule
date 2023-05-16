<?php

namespace App\Http\Controllers\Admin\Subject;

use App\Models\Subject;
use function redirect;

class DeleteController extends BaseController
{
    public function __invoke(Subject $object){
        if(request()->ajax()){
            $object->delete();
            return true;
        }
        $object->delete();
        return redirect()->route('object.index');
    }
}
