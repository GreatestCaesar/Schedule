<?php

namespace App\Http\Controllers\Admin\Group;

use App\Http\Requests\Group\StoreRequest;
use function redirect;

class StoreController extends BaseController
{
    public function __invoke(StoreRequest $request){
        $data = $request->validated();

        $this->service->store($data);

        return redirect()->route('group.index');
    }
}
