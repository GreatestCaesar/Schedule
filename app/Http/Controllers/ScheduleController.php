<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

class ScheduleController extends Controller
{
    function getWeek(){
        $curDay = date("j");
        $curMonth = date("n");
        $curYear = date("Y");
        if($curMonth > 8){
            $startDate = date("Y-n-j", mktime(0,0,0, $curMonth+(-1*($curMonth-9)), $curDay+(1-$curDay), $curYear));
        }else{
            $startDate = date("Y-n-j", mktime(0,0,0, ($curMonth+(9-$curMonth)), $curDay+(1-$curDay), $curYear-1));
        }
        $startDateDay = date("j", strtotime($startDate));
        $startDateMonth = date("n", strtotime($startDate));
        $startDateYear = date("Y", strtotime($startDate));
        $dayWeekNumb = date("N", mktime(0,0,0, $startDateMonth, $startDateDay, $startDateYear));
        $newStartDate = date("Y-n-j", mktime(0,0,0, $startDateMonth, $startDateDay-($dayWeekNumb-1), $startDateYear));

        $week = (int)(((strtotime(date("Y-n-j"))-strtotime($newStartDate))/(60*60*24))/7+1);
        if(($week % 4) == 0){
            return 4;
        }else{
            return $week % 4;
        }
    }

    function index(){
        $week = $this->getWeek();
        $date = date("d.m.Y");
        return view('index', compact('week', 'date'));
    }
}
