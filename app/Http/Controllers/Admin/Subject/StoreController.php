<?php

namespace App\Http\Controllers\Admin\Subject;

use App\Http\Requests\Subject\StoreRequest;
use function redirect;

class StoreController extends BaseController
{
    public function __invoke(StoreRequest $request){
        $data = $request->validated();

        $this->service->store($data);

        return redirect()->route('object.index');
    }
}
