<?php

namespace App\Http\Controllers\Admin\Subject;

use App\Http\Requests\Subject\UpdateRequest;
use App\Models\Subject;
use function redirect;

class UpdateController extends BaseController
{
    public function __invoke(UpdateRequest $request, Subject $object){
        $data = $request->validated();

        $this->service->update($object, $data);

        return redirect()->route('object.index');
    }
}
