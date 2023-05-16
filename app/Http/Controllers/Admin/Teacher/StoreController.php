<?php

namespace App\Http\Controllers\Admin\Teacher;

use App\Http\Requests\Teacher\StoreRequest;
use Illuminate\Support\Facades\Storage;
use function redirect;

class StoreController extends BaseController
{
    public function __invoke(StoreRequest $request){
        $data = $request->validated();

        $data['image'] = Storage::disk('public')->put('/images', $data['image']);

        $this->service->store($data);

        return redirect()->route('teacher.index');
    }
}
