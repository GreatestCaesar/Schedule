<?php

namespace App\Http\Controllers\Admin\Teacher;

use App\Http\Requests\Teacher\UpdateRequest;
use App\Models\Teacher;
use Illuminate\Support\Facades\Storage;
use function redirect;

class UpdateController extends BaseController
{
    public function __invoke(UpdateRequest $request, Teacher $teacher){
        $data = $request->validated();

        $data['image'] = Storage::disk('public')->put('/images', $data['image']);
        $this->service->update($teacher, $data);

        return redirect()->route('teacher.index');
    }
}
