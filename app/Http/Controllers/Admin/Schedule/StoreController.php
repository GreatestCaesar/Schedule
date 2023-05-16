<?php

namespace App\Http\Controllers\Admin\Schedule;

use App\Http\Requests\Schedule\StoreRequest;
use function redirect;

class StoreController extends BaseController
{
    public function __invoke(StoreRequest $request){
        $data = $request->validated();

        $this->service->store($data);

        return redirect()->route('schedule.index');
    }
}
