<?php

namespace App\Http\Controllers\Admin\Schedule;

use App\Http\Controllers\Controller;
use App\Services\Schedule\CheckService;
use App\Services\Schedule\Service;
use App\Services\Schedule\StoreService;

class StoreBaseController extends Controller
{
    public $service;

    public function __construct(StoreService $service)
    {
        $this->service = $service;
    }
}
