@extends('layouts.adminTemplate')
@section('adminContent')
    <main class="main">
        <div class="warning" style="display: {{ $display}}">
            <span class="text-warning">{{$message}}</span>
            <span class="cancel-warning" id="cancel-warning">X</span>
        </div>
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
                    <div class="menu-item active-btn">
                        Группы
                    </div>
                    <div class="menu-item">
                        <a href="{{route('teacher.index')}}">Преподаватели</a>
                    </div>
                    <div class="menu-item">
                        <a href="{{route('object.index')}}">Предметы</a>
                    </div>
                    <div class="menu-item">
                        <a href="{{route('schedule.index')}}">Расписание</a>
                    </div>
                </div>
                <div class="block-admin-item">
                    <div class="block-admin-for-tables tables">
                        <div class="block-table-groups">
                            <table class="table-groups">
                                <tr>
                                    <td hidden>#</td>
                                    <td>Название</td>
                                    <td>Номер</td>
                                    <td>Курс</td>
                                    <td>Вид образования</td>
                                    <td>Период занятий</td>
                                </tr>
                                @foreach($groups as $group)
                                    <tr>
                                        <td hidden>{{$group->id}}</td>
                                        <td>{{$group->name}}</td>
                                        <td>{{$group->code}}</td>
                                        <td>{{$group->course}}</td>
                                        <td class="td-with-hint">{{$group->type_education_id}}<span
                                                class="hint-for-td">{{$group->typeEduc->name}}</span></td>
                                        <td>{{date('d.m.Y', strtotime($group->date_start)) }}
                                            -{{date('d.m.Y', strtotime($group->date_end)) }}</td>
                                    </tr>
                                @endforeach
                            </table>
                            <div class="block-table-control group-table-control">
                                @if(count($groups)>0)
                                    {{$groups->links()}}
                                @endif
                                <div class="block-table-content-control">
                                        <span class="block-table-add-content content-control-item" id="add-group">
                                            <a href="{{route('group.create')}}">Добавить</a>
                                        </span>
                                    <span class="block-table-add-content content-control-item" id="edit-group">
                                            Редактировать
                                        </span>
                                    <form class="form-for-delete" id="form_delete">
                                        @csrf
                                        @method('delete')
                                        <button type="submit" onclick="checkDelete(); return false;"
                                                class="block-table-remove-content content-control-item" id="del-group">
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
            @if(count($groups)>0)
                {{ $groups->toArray()['current_page'] }}
            @endif
        </div>
        <div hidden id="count_elem">
            @if(count($groups)>0)
                {{ count($groups->toArray()['data']) }}
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
    <script src="{{asset('js/scriptAdminGroup.js')}}"></script>
@endsection
