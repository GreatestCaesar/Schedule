<?php

namespace App\Http\Controllers\Admin\Group;

use App\Http\Requests\Group\UpdateRequest;
use App\Models\Group;
use function redirect;

class UpdateController extends BaseController
{
    public function __invoke(UpdateRequest $request, Group $group){
        $data = $request->validated();

        $this->service->update($group, $data);

        return redirect()->route('group.index');
    }
}
