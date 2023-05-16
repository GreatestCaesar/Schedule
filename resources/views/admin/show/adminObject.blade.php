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
                    <div class="menu-item">
                        <a href="{{route('group.index')}}">Группы</a>
                    </div>
                    <div class="menu-item">
                        <a href="{{route('teacher.index')}}">Преподаватели</a>
                    </div>
                    <div class="menu-item active-btn">
                        Предметы
                    </div>
                    <div class="menu-item">
                        <a href="{{route('schedule.index')}}">Расписание</a>
                    </div>
                </div>
                <div class="block-admin-item">
                    <div class="block-admin-for-tables tables">
                        <div class="block-table-object">
                            <table class="table-object">
                                <tr>
                                    <td hidden>#</td>
                                    <td width="80%">Название</td>
                                    <td width="20%">Сокращенное название</td>
                                </tr>
                                @foreach($subjects as $subject)
                                    <tr>
                                        <td hidden>{{$subject->id}}</td>
                                        <td width="80%">{{$subject->full_name}}</td>
                                        <td width="20%">{{$subject->abbreviated_name}}</td>
                                    </tr>
                                @endforeach
                            </table>
                            <div class="block-table-control object-table-control">
                                @if(count($subjects)>0)
                                    {{$subjects->links()}}
                                @endif
                                <div class="block-table-content-control">
                                    <span class="block-table-add-content content-control-item" id="add-object">
                                        <a href="{{route('object.create')}}">Добавить</a>
                                    </span>
                                    <span class="block-table-add-content content-control-item" id="edit-object">
                                        Редактировать
                                    </span>
                                    <form class="form-for-delete"
                                          id="form_delete">
                                        @csrf
                                        @method('delete')
                                        <button type="button" onclick="checkDelete(); return false;" class="block-table-remove-content content-control-item"
                                                id="del-object">
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
            @if(count($subjects))
                {{ $subjects->toArray()['current_page'] }}
            @endif
        </div>
        <div hidden id="count_elem">
            @if(count($subjects))
                {{ count($subjects->toArray()['data']) }}
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
    <script src="{{asset('js/scriptAdminObject.js')}}"></script>
@endsection
