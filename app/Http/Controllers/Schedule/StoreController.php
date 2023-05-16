<?php

namespace App\Http\Controllers\Schedule;

use App\Http\Controllers\Admin\Schedule\StoreBaseController;
use App\Http\Requests\Schedule\StoreRequest;

class StoreController extends StoreBaseController
{
    public function __invoke(StoreRequest $request)
    {
        $data = $request->validated();
        return $this->service->store($data);
    }
}
