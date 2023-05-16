<?php

namespace App\Http\Controllers;

use App\Models\AcademicDegree;
use App\Models\AcademicRank;
use App\Models\ClassTime;
use App\Models\Department;
use App\Models\LessonForm;
use App\Models\Post;
use App\Models\TypeEducation;
use App\Models\Weekday;
use Illuminate\Http\Request;

class TestController extends Controller
{
    //
    function index(){
        $academDegrees = [
            [
                'abbreviated_name' => 'д.в.н.',
                'full_name' => 'доктор военных наук'
            ],
            [
                'abbreviated_name' => 'д.пед.н.',
                'full_name' => 'доктор педагогических наук'
            ],
            [
                'abbreviated_name' => 'д.пол.н.',
                'full_name' => 'доктор политических наук'
            ],
            [
                'abbreviated_name' => 'д.т.н.',
                'full_name' => 'доктор технических наук'
            ],
            [
                'abbreviated_name' => 'д.ф.н.',
                'full_name' => 'доктор философских наук'
            ],
            [
                'abbreviated_name' => 'д.фил.н.',
                'full_name' => 'доктор филологических наук'
            ],
            [
                'abbreviated_name' => 'д.ф-м.н.',
                'full_name' => 'доктор физико-математических наук'
            ],
            [
                'abbreviated_name' => 'д.х.н.',
                'full_name' => 'доктор химических наук'
            ],
            [
                'abbreviated_name' => 'д.э.н.',
                'full_name' => 'доктор экономических наук'
            ],
            [
                'abbreviated_name' => 'к.в.н.',
                'full_name' => 'кандидат военных наук'
            ],
            [
                'abbreviated_name' => 'к.пед.н.',
                'full_name' => 'кандидат педагогических наук'
            ],
            [
                'abbreviated_name' => 'к.пол.н.',
                'full_name' => 'кандидат политических наук'
            ],
            [
                'abbreviated_name' => 'к.т.н.',
                'full_name' => 'кандидат технических наук'
            ],
            [
                'abbreviated_name' => 'к.ф.н.',
                'full_name' => 'кандидат философских наук'
            ],
            [
                'abbreviated_name' => 'к.фил.н.',
                'full_name' => 'кандидат филологических наук'
            ],
            [
                'abbreviated_name' => 'к.ф-м.н.',
                'full_name' => 'кандидат физико-математических наук'
            ],
            [
                'abbreviated_name' => 'к.х.н.',
                'full_name' => 'кандидат химических наук'
            ],
            [
                'abbreviated_name' => 'к.э.н.',
                'full_name' => 'кандидат экономических наук'
            ],
            [
                'abbreviated_name' => '',
                'full_name' => ''
            ],
        ];

        foreach($academDegrees as $item) {
            AcademicDegree::create($item);
        }

        $academRanks = [
            [
                'abbreviated_name' => 'доц.',
                'full_name' => 'доцент'
            ],
            [
                'abbreviated_name' => 'проц.',
                'full_name' => 'профессор'
            ],
            [
            'abbreviated_name' => '',
            'full_name' => ''
            ],
        ];
        foreach($academRanks as $item2){
            AcademicRank::create($item2);
        }

        $classTimes = [
            [
                'time_start' => '08:00',
                'time_end' => '09:40'
            ],
            [
                'time_start' => '09:55',
                'time_end' => '11:35'
            ],
            [
                'time_start' => '12:15',
                'time_end' => '13:55'
            ],
            [
                'time_start' => '14:10',
                'time_end' => '15:50'
            ],
            [
                'time_start' => '16:20',
                'time_end' => '18:00'
            ],
            [
                'time_start' => '18:15',
                'time_end' => '19:55'
            ],
            [
                'time_start' => '20:10',
                'time_end' => '21:50'
            ],
        ];

        foreach($classTimes as $item3){
            ClassTime::create($item3);
        }

        $departments = [
            [
                'abbreviated_name' => 'ВК',
                'full_name' => 'Военная кафедра'
            ],
            [
                'abbreviated_name' => 'ГН',
                'full_name' => 'Гуманитарных наук'
            ],
            [
                'abbreviated_name' => 'ДОРЯИ',
                'full_name' => 'Довузовского образования и русского языка как иностранного'
            ],
            [
                'abbreviated_name' => 'ЗОЖ',
                'full_name' => 'Здорового образа жизни'
            ],
            [
                'abbreviated_name' => 'ИКТ',
                'full_name' => 'Инфокоммуникационных технологий'
            ],
            [
                'abbreviated_name' => 'МИФ',
                'full_name' => 'Математики и физики'
            ],
            [
                'abbreviated_name' => 'ОИТПС',
                'full_name' => 'Организации и технологии почтовой связи'
            ],
            [
                'abbreviated_name' => 'ПДО',
                'full_name' => 'Последипломного образования'
            ],
            [
                'abbreviated_name' => 'ПОСТ',
                'full_name' => 'Программного обеспечения сетей телекоммуникаций'
            ],
            [
                'abbreviated_name' => 'РИТ',
                'full_name' => 'Радио и информационных технологий'
            ],
            [
                'abbreviated_name' => 'ТС',
                'full_name' => 'Телекоммуникационных систем'
            ],
            [
                'abbreviated_name' => 'ЦЭ',
                'full_name' => 'Цифровой экономики'
            ],
        ];

        foreach($departments as $item4){
            Department::create($item4);
        }

        $posts = [
            [
                'abbreviated_name' => 'асс.',
                'full_name' => 'Ассистент'
            ],
            [
                'abbreviated_name' => 'доц.',
                'full_name' => 'Доцент'
            ],
            [
                'abbreviated_name' => 'зав. каф.',
                'full_name' => 'Заведующий кафедрой'
            ],
            [
                'abbreviated_name' => 'преп.',
                'full_name' => 'Преподаватель'
            ],
            [
                'abbreviated_name' => 'преп. I кат.',
                'full_name' => 'Преподаватель I категории'
            ],
            [
                'abbreviated_name' => 'преп. II кат.',
                'full_name' => 'Преподаватель II категории'
            ],
            [
                'abbreviated_name' => 'преп. высш. кат.',
                'full_name' => 'Преподаватель высшей категории'
            ],
            [
                'abbreviated_name' => 'проф.',
                'full_name' => 'Профессор'
            ],
            [
                'abbreviated_name' => 'ст. преп.',
                'full_name' => 'Старший преподаватель'
            ],
        ];

        foreach($posts as $item5){
            Post::create($item5);
        }

        $weekday = [
            [
                'name' => 'Понедельник'
            ],
            [
                'name' => 'Вторник'
            ],
            [
                'name' => 'Среда'
            ],
            [
                'name' => 'Четверг'
            ],
            [
                'name' => 'Пятница'
            ],
            [
                'name' => 'Суббота'
            ],
            [
                'name' => 'Воскресенье'
            ],
        ];

        foreach($weekday as $item6){
            Weekday::create($item6);
        }

        $typeEduc = [
            [
                'name' => 'ВО(заочное)'
            ],
            [
                'name' => 'ВО(дневное)'
            ],
            [
                'name' => 'Магистратура(заочное)'
            ],
            [
                'name' => 'Магистратура(дневное)'
            ],
            [
                'name' => 'ССО(заочное)'
            ],
            [
                'name' => 'ССО(дневное)'
            ],
        ];

        foreach($typeEduc as $item7){
            TypeEducation::create($item7);
        }

        $lessonForm = [
            [
                'abbreviated_name' => 'ЛК',
                'full_name' => 'Лекция'
            ],
            [
                'abbreviated_name' => 'ЛР',
                'full_name' => 'Лабораторная работа'
            ],
            [
                'abbreviated_name' => 'ПЗ',
                'full_name' => 'Практическое занятие'
            ],
            [
                'abbreviated_name' => 'экз',
                'full_name' => 'экзамен'
            ],
            [
                'abbreviated_name' => 'конс-ция',
                'full_name' => 'консультация'
            ]
        ];

        foreach($lessonForm as $item8){
            LessonForm::create($item8);
        }

        dump("created");
    }
}
