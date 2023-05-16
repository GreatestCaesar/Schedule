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
                    <div class="menu-item active-btn">
                        Преподаватели
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
                        <div class="block-table-teachers">
                            <table class="table-teachers">
                                <tr>
                                    <td hidden>#</td>
                                    <td>Изображение</td>
                                    <td>ФИО</td>
                                    <td>Кафедра</td>
                                    <td>Должность</td>
                                    <td>Ученая степень</td>
                                    <td>Ученое звание</td>
                                    <td>Период занятий</td>
                                </tr>
                                @foreach($teachers as $teacher)
                                    <tr>
                                        <td hidden>{{$teacher->id}}</td>
                                        <td><img src="{{ url('storage/'.$teacher->image) /*asset('storage/app/public/'.$teacher->image)*/ }}" alt="Photo teacher"
                                                 class="img-teacher_admin"></td>
                                        <td>{{$teacher->full_name}}</td>
                                        <td class="td-with-hint">{{$teacher->department_id}}<span
                                                class="hint-for-td">{{$teacher->department->full_name}}</span></td>
                                        <td class="td-with-hint">{{$teacher->post_id}}<span
                                                class="hint-for-td">{{$teacher->post->full_name}}</span></td>
                                        <td class="td-with-hint">{{$teacher->degree_id}}<span
                                                class="hint-for-td">{{$teacher->degree->full_name}}</span></td>
                                        <td class="td-with-hint">{{$teacher->rank_id}}<span
                                                class="hint-for-td">{{$teacher->rank->full_name}}</span></td>
                                        <td>{{date('d.m.Y', strtotime($teacher->date_start)) }}
                                            -{{date('d.m.Y', strtotime($teacher->date_end)) }}</td>
                                    </tr>
                                @endforeach
                            </table>
                            <div class="block-table-control teacher-table-control">
                                @if(count($teachers)>0)
                                    {{$teachers->links()}}
                                @endif
                                <div class="block-table-content-control">
                                    <span class="block-table-add-content content-control-item" id="add-teacher">
                                        <a href="{{route('teacher.create')}}">Добавить</a>
                                    </span>
                                    <span class="block-table-add-content content-control-item" id="edit-teacher">
                                        Редактировать
                                    </span>
                                    <form class="form-for-delete"
                                          id="form_delete">
                                        @csrf
                                        @method('delete')
                                        <button type="button" onclick="checkDelete(); return false;" class="block-table-remove-content content-control-item"
                                                id="del-teacher">
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
            @if(count($teachers)>0)
                {{ $teachers->toArray()['current_page'] }}
            @endif
        </div>
        <div hidden id="count_elem">
            @if(count($teachers)>0)
                {{ count($teachers->toArray()['data']) }}
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
    <script src="{{asset('js/scriptAdminTeacher.js')}}"></script>
@endsection
