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
                        <div class="block-table-schedule">
                            <table class="table-schedule">
                                <tr>
                                    <td hidden>#</td>
                                    <td class="active_column"><div class="stretch_class">Группа</div></td>
                                    <td><div class="stretch_class">Предмет</div></td>
                                    <td><div class="stretch_class">Преподаватель</div></td>
                                    <td><div class="stretch_class">Форма занятия</div></td>
                                    <td><div class="stretch_class">Неделя</div></td>
                                    <td><div class="stretch_class">День недели</div></td>
                                    <td><div class="stretch_class">Подгруппа</div></td>
                                    <td><div class="stretch_class">Пара</div></td>
                                    <td><div class="stretch_class">Корпус</div></td>
                                    <td class="td-wrap"><div class="stretch_class">Аудитория</div></td>
                                    <td><div class="stretch_class">Дата</div></td>
                                    <td><div class="stretch_class">Период</div></td>
                                    <td><div class="stretch_class">Время</div></td>
                                </tr>
                                @foreach($schedules as $schedule)
                                    <tr>
                                        <td hidden>{{$schedule->id}}</td>
                                        <td class="td-with-hint active_column"><div class="stretch_class">{{$schedule->group_id}}</div></td>
                                        <td class="td-with-hint"><div class="stretch_class">{{$schedule->teacher_id}}</div></td>
                                        <td class="td-with-hint"><div class="stretch_class">{{$schedule->object_id}}</div></td>
                                        <td class="td-with-hint"><div class="stretch_class">{{$schedule->lesson_form_id}}</div></td>
                                        <td><div class="stretch_class">{{$schedule->week_number}}</div></td>
                                        <td><div class="stretch_class">{{$schedule->weekday_id}}</div></td>
                                        <td><div class="stretch_class">{{$schedule->subgroup}}</div></td>
                                        <td class="td-with-hint"><div class="stretch_class">{{$schedule->class_time_id}}</div></td>
                                        <td><div class="stretch_class">{{$schedule->building}}</div></td>
                                        <td><div class="stretch_class">{{$schedule->auditorium}}</div></td>
                                        <td><div class="stretch_class">{{ $schedule->date == null ? "" : date('d.m.Y', strtotime($schedule->date)) }}</div></td>
                                        <td id="stretch_td"><div class="stretch_class stretch_date">{{ $schedule->date_start == null ? "" : date('d.m.Y', strtotime($schedule->date_start)) }}
                                            - {{ $schedule->date_end == null ? "" : date('d.m.Y', strtotime($schedule->date_end)) }}</div></td>
                                        <td><div class="stretch_class">{{ $schedule->time != null ? date('H:i', strtotime($schedule->time)) : ""}}</div></td>
                                    </tr>
                                    <tr hidden class="hint-for-tr">
                                        <td>
                                            {{$schedule->group->name.$schedule->group->code}}</td>
                                        <td>
                                            {{$schedule->teacher->full_name}}
                                        </td>
                                        <td>
                                            {{$schedule->object->abbreviated_name}}
                                        </td>
                                        <td>
                                            {{$schedule->form->abbreviated_name}}
                                        </td>
                                        <td>
                                            {{$schedule->weekday->name}}
                                        </td>
                                        <td>
                                            {{$times[$schedule->class_time_id]}}
                                        </td>
                                    </tr>
                                @endforeach
                            </table>
                            <div class="block-table-control">
                                @if(count($schedules)>0)
                                    {{$schedules->links()}}
                                @endif
                                <div class="block-table-content-control">
                                    <span class="block-table-add-content content-control-item" id="add-schedule">
                                        <a href="{{route('schedule.create')}}">Добавить</a>
                                    </span>
                                    <span class="block-table-add-content content-control-item" id="edit-schedule">
                                            Редактировать
                                    </span>
                                    <form class="form-for-delete"
                                          id="form_delete">
                                        @csrf
                                        @method('delete')
                                        <button type="button" onclick="checkDelete(); return false;"
                                                class="block-table-remove-content content-control-item"
                                                id="del-schedule">
                                            Удалить
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div hidden id="current_page">
            @if(count($schedules)>0)
                {{ $schedules->toArray()['current_page'] }}
            @endif
        </div>
        <div hidden id="count_elem">
            @if(count($schedules)>0)
                {{ count($schedules->toArray()['data']) }}
            @endif
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
    <script src="{{asset('js/scriptAdminSchedule.js')}}"></script>
@endsection
