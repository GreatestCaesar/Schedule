<?php

namespace App\Http\Controllers\Admin\Schedule;

use App\Http\Controllers\Controller;
use App\Services\Schedule\CheckService;
use App\Services\Schedule\Service;

class CheckBaseController extends Controller
{
    public $service;

    public function __construct(CheckService $service)
    {
        $this->service = $service;
    }
}
