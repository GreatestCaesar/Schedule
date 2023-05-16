@extends('layouts.adminTemplate')
@section('adminContent')

    <main class="main">
        <div class="warning_check" id="warning_check">
            <div class="warning">
            </div>
            <div class="question">
                <span id="message_check"></span>
                <div class="answer">
                    <div id="check_yes">Да</div>
                    <div id="check_no">Нет</div>
                </div>
            </div>
        </div>
        <div class="main__block-admin_container block-admin _container_admin">
            <div class="main__block-admin_body">
                <div class="block-admin-item menu">
                    <div class="menu-item">
                        <a href="{{route('group.index')}}">Группы</a>
                    </div>
                    <div class="menu-item">
                        <a href="{{route('teacher.index')}}">Преподаватели</a>
                    </div>
                    <div class="menu-item">
                        <a href="{{route('object.index')}}">Предметы</a>
                    </div>
                    <div class="menu-item active-btn">
                        Расписание
                    </div>
                </div>
                <div class="block-admin-item">
                    <div class="block-admin-for-tables tables">
                        <div class="block-add-schedule">
                            <form id="form_add_schedule">
                                @csrf
                                <div class="block-add-schedule-item content-add-item">
                                    <div class="add-schedule-row add-content-row">
                                        <div class="add-schedule-row-column add-content-row-column">
                                            Группа:
                                        </div>
                                        <div class="add-schedule-row-column add-content-row-column">
                                            <select name="group_id" id="group_id" class="select" required>
                                                <option disabled selected value></option>
                                                @foreach($groups as $group)
                                                    <option
                                                        value="{{$group->id}}">{{$group->name.$group->code}}</option>
                                                @endforeach
                                            </select>
                                        </div>
                                    </div>
                                    <div class="add-schedule-row add-content-row">
                                        <div class="add-schedule-row-column add-content-row-column">
                                            Преподаватель:
                                        </div>
                                        <div class="add-schedule-row-column add-content-row-column">
                                            <select name="teacher_id" id="teacher_id" class="select" required>
                                                <option disabled selected value></option>
                                                @foreach($teachers as $teacher)
                                                    <option value="{{$teacher->id}}">{{$teacher->full_name}}</option>
                                                @endforeach
                                            </select>
                                        </div>
                                    </div>
                                    <div class="add-schedule-row add-content-row">
                                        <div class="add-schedule-row-column add-content-row-column">
                                            Предмет:
                                        </div>
                                        <div class="add-schedule-row-column add-content-row-column">
                                            <select name="object_id" id="object_id" class="select" required>
                                                <option disabled selected value></option>
                                                @foreach($subjects as $subject)
                                                    <option
                                                        value="{{$subject->id}}">{{$subject->abbreviated_name}}</option>
                                                @endforeach
                                            </select>
                                        </div>
                                    </div>
                                    <div class="add-schedule-row add-content-row">
                                        <div class="add-schedule-row-column add-content-row-column">
                                            Форма занятия:
                                        </div>
                                        <div class="add-schedule-row-column add-content-row-column">
                                            <select name="lesson_form_id" class="select" required id="select_for_form">
                                                <option disabled selected value></option>
                                                @foreach($lessonForms as $lessonForm)
                                                    <option
                                                        value="{{$lessonForm->id}}">{{$lessonForm->abbreviated_name}}</option>
                                                @endforeach
                                            </select>
                                        </div>
                                    </div>
                                    <div class="add-schedule-row add-content-row" id="time_block">
                                        <div class="add-schedule-row-column add-content-row-column">
                                            Время:
                                        </div>
                                        <div class="add-schedule-row-column add-content-row-column">
                                            <input name="time" id="time_input" type="time"
                                                   class="text-field-add-content"
                                                   autocomplete="off"/>
                                        </div>
                                    </div>
                                    <div class="add-schedule-row add-content-row" id="week">
                                        <!-- -->
                                        <div class="add-schedule-row-column add-content-row-column">
                                            Неделя:
                                        </div>
                                        <div class="add-schedule-row-column add-content-row-column add-row-column-week">
                                            <div class="add-row-column-week_column">
                                                <label class="add-row-column-week_column_item">
                                                    <input name="week_one" type="checkbox" class="checkbox"
                                                           id="week_one"
                                                           required>
                                                    <span class="text-checkbox">1</span>
                                                </label>
                                            </div>
                                            <div class="add-row-column-week_column">
                                                <label class="add-row-column-week_column_item">
                                                    <input name="week_two" type="checkbox" class="checkbox"
                                                           id="week_two"
                                                           required>
                                                    <span class="text-checkbox">2</span>
                                                </label>
                                            </div>
                                            <div class="add-row-column-week_column">
                                                <label class="add-row-column-week_column_item">
                                                    <input name="week_three" type="checkbox" class="checkbox"
                                                           id="week_three" required>
                                                    <span class="text-checkbox">3</span>
                                                </label>
                                            </div>
                                            <div class="add-row-column-week_column">
                                                <label class="add-row-column-week_column_item">
                                                    <input name="week_four" type="checkbox" class="checkbox"
                                                           id="week_four"
                                                           required>
                                                    <span class="text-checkbox">4</span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>                                   <!---->
                                    <div class="add-schedule-row add-content-row" id="weekday">
                                        <div class="add-schedule-row-column add-content-row-column">
                                            День недели:
                                        </div>
                                        <div class="add-schedule-row-column add-content-row-column">
                                            <select name="weekday_id" id="weekday_id" class="select">
                                                <option disabled selected value></option>
                                                @foreach($weekadays as $weekaday)
                                                    <option value="{{$weekaday->id}}">{{$weekaday->name}}</option>
                                                @endforeach
                                            </select>
                                        </div>
                                    </div>
                                    <div class="add-schedule-row add-content-row" id="subgroup">
                                        <div class="add-schedule-row-column add-content-row-column">
                                            Подгруппа:
                                        </div>
                                        <div
                                            class="add-schedule-row-column add-content-row-column add-row-column-subgroup">
                                            <div class="add-row-column-subgroup_column">
                                                <label class="add-row-column-subgroup_column_item checkbox-all-group">
                                                    <input name="subgroup_all" type="checkbox" class="checkbox"
                                                           id="subgroup_all" required>
                                                    <span class="text-checkbox text-checkbox-all-group-hint">0</span>
                                                </label>
                                            </div>
                                            <div class="add-row-column-subgroup_column">
                                                <label class="add-row-column-subgroup_column_item">
                                                    <input name="subgroup_one" type="checkbox" class="checkbox"
                                                           id="subgroup_one" required>
                                                    <span class="text-checkbox">1</span>
                                                </label>
                                            </div>
                                            <div class="add-row-column-subgroup_column">
                                                <label class="add-row-column-subgroup_column_item">
                                                    <input name="subgroup_two" type="checkbox" class="checkbox"
                                                           id="subgroup_two" required>
                                                    <span class="text-checkbox">2</span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>                                   <!---->
                                    <div class="add-schedule-row add-content-row" id="class_time">
                                        <div class="add-schedule-row-column add-content-row-column">
                                            Пара:
                                        </div>
                                        <div class="add-schedule-row-column add-content-row-column">
                                            <select name="class_time_id" id="class_time_id" class="select">
                                                <option disabled selected value></option>
                                                @foreach($classTimes as $classTime)
                                                    <option
                                                        value="{{$classTime->id}}">{{$classTime->id.'.'.$classTime->time_start.'-'.$classTime->time_end}}</option>
                                                @endforeach
                                            </select>
                                        </div>
                                    </div>                                      <!---->
                                    <div class="add-schedule-row add-content-row">
                                        <div class="add-schedule-row-column add-content-row-column">
                                            Корпус:
                                        </div>
                                        <div class="add-schedule-row-column add-content-row-column">
                                            <select name="building" id="building" class="select" required>
                                                <option disabled selected value></option>
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>В</option>
                                            </select>
                                        </div>
                                    </div>                                   <!---->
                                    <div class="add-schedule-row add-content-row">
                                        <div class="add-schedule-row-column add-content-row-column">
                                            Аудитория:
                                        </div>
                                        <div class="add-schedule-row-column add-content-row-column">
                                            <input name="auditorium" id="auditorium" type="text"
                                                   class="text-field-add-content"
                                                   autocomplete="off" required/>
                                        </div>
                                    </div>                                 <!---->
                                    <div class="add-schedule-row add-content-row" id="date_for_session">
                                        <div class="add-teacher-row-column add-content-row-column">
                                            Дата:
                                        </div>
                                        <div class="add-teacher-row-column add-content-row-column">
                                            <input
                                                @if(date("n")>8) min="{{ date("Y-0n-0j", mktime(0,0,0, 9, 1, date("Y"))) }}"
                                                max="{{ date("Y-0n-j", mktime(0,0,0, 8, 31, date("Y")+1)) }}"
                                                @else min="{{ date("Y-0n-0j", mktime(0,0,0, 9, 1, date("Y")-1)) }}"
                                                max="{{ date("Y-0n-j", mktime(0,0,0, 8, 31, date("Y"))) }}"
                                                @endif name="date" id="date" type="date" class="date"/>
                                        </div>
                                    </div>
                                    <div class="add-schedule-row add-content-row" id="date_for_semester">
                                        <div class="add-schedule-row-column add-content-row-column">
                                            Период занятий:
                                        </div>
                                        <div class="add-schedule-row-column add-content-row-column column-date">
                                            <div class="add-date-start add-date">
                                                <input
                                                    @if(date("n")>8) min="{{ date("Y-0n-0j", mktime(0,0,0, 9, 1, date("Y"))) }}"
                                                    max="{{ date("Y-0n-j", mktime(0,0,0, 8, 31, date("Y")+1)) }}"
                                                    @else min="{{ date("Y-0n-0j", mktime(0,0,0, 9, 1, date("Y")-1)) }}"
                                                    max="{{ date("Y-0n-j", mktime(0,0,0, 8, 31, date("Y"))) }}"
                                                    @endif name="date_start" type="date" class="date" id="date_start"/>
                                            </div>
                                            <div class="add-date-end add-date">
                                                <input
                                                    @if(date("n")>8) min="{{ date("Y-0n-0j", mktime(0,0,0, 9, 1, date("Y"))) }}"
                                                    max="{{ date("Y-0n-j", mktime(0,0,0, 8, 31, date("Y")+1)) }}"
                                                    @else min="{{ date("Y-0n-0j", mktime(0,0,0, 9, 1, date("Y")-1)) }}"
                                                    max="{{ date("Y-0n-j", mktime(0,0,0, 8, 31, date("Y"))) }}"
                                                    @endif name="date_end" type="date" class="date" id="date_end"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="block-add-schedule-item content-add-item">
                                    <div class="block-add-data-control">
                                        <button type="submit" class="block-add-data-item btn-add-data"
                                                onclick="checkSchedule(); return false;">
                                            Добавить
                                        </button>
                                        <span class="block-add-data-item btn-cancel-data" id="add-object-cancel">
                                            <a href="{{route('schedule.index')}}">Отмена</a>
                                        </span>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
    <footer class="footer footer_admin">
        <div class="footer_container _container">
            <div class="footer_body">
                Created by:
                <br>
                Гисич Юлиан, Лагун Алеся, Рябычина Ольга Петровна
                <br>
                © 2021-{{ date("Y") }} Белорусская государственная академия связи
            </div>
        </div>
    </footer>
    <script src="{{asset('js/scriptScheduleAdd.js')}}"></script>
@endsection
