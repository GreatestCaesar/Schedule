<?php

namespace App\Http\Controllers\Admin\Schedule;

use App\Http\Requests\Schedule\UpdateRequest;
use App\Models\Schedule;
use function redirect;

class UpdateController extends BaseController
{
    public function __invoke(UpdateRequest $request, Schedule $schedule){
        $data = $request->validated();

        $this->service->update($schedule, $data);

        return redirect()->route('schedule.index');
    }
}
