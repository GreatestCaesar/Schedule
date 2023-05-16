@extends('layouts.adminTemplate')
@section('adminContent')

    <main class="main">
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
                        <div class="block-add-teacher">
                            <form action="{{route('teacher.store')}}" method="post" enctype="multipart/form-data">
                                @csrf
                                <div class="block-add-teacher-item content-add-item">
                                    <div class="add-teacher-row add-content-row">
                                        <div class="add-teacher-row-column add-content-row-column">
                                            Фотография:
                                        </div>
                                        <div class="add-teacher-row-column add-content-row-column">
                                            <input name="image" type="file" accept="image/png,image/jpeg" required>
                                        </div>
                                    </div>
                                    <div class="add-teacher-row add-content-row">
                                        <div class="add-teacher-row-column add-content-row-column">
                                            ФИО:
                                        </div>
                                        <div class="add-teacher-row-column add-content-row-column">
                                            <input name="full_name" type="text" class="text-field-add-content"
                                                   autocomplete="off" required/>
                                        </div>
                                    </div>
                                    <div class="add-teacher-row add-content-row">
                                        <div class="add-teacher-row-column add-content-row-column">
                                            Кафедра:
                                        </div>
                                        <div class="add-teacher-row-column add-content-row-column">
                                            <select class="select" name="department_id" required>
                                                <option disabled selected value></option>
                                                @foreach($departments as $department)
                                                    <option
                                                        value="{{$department->id}}">{{$department->full_name}}</option>
                                                @endforeach
                                            </select>
                                        </div>
                                    </div>
                                    <div class="add-teacher-row add-content-row">
                                        <div class="add-teacher-row-column add-content-row-column">
                                            Должность:
                                        </div>
                                        <div class="add-teacher-row-column add-content-row-column">
                                            <select name="post_id" class="select" required>
                                                <option disabled selected value></option>
                                                @foreach($posts as $post)
                                                    <option value="{{$post->id}}">{{$post->full_name}}</option>
                                                @endforeach
                                            </select>
                                        </div>
                                    </div>
                                    <div class="add-teacher-row add-content-row">
                                        <div class="add-teacher-row-column add-content-row-column">
                                            Ученая степень:
                                        </div>
                                        <div class="add-teacher-row-column add-content-row-column">
                                            <select name="degree_id" class="select" required>
                                                <option disabled selected value></option>
                                                @foreach($degrees as $degree)
                                                    <option value="{{$degree->id}}">{{$degree->full_name}}</option>
                                                @endforeach
                                            </select>
                                        </div>
                                    </div>
                                    <div class="add-teacher-row add-content-row">
                                        <div class="add-teacher-row-column add-content-row-column">
                                            Учёное звание:
                                        </div>
                                        <div class="add-teacher-row-column add-content-row-column">
                                            <select name="rank_id" class="select" required>
                                                <option disabled selected value></option>
                                                @foreach($ranks as $rank)
                                                    <option value="{{$rank->id}}">{{$rank->full_name}}</option>
                                                @endforeach
                                            </select>
                                        </div>
                                    </div>
                                    <div class="add-teacher-row add-content-row">
                                        <div class="add-teacher-row-column add-content-row-column">
                                            Период занятий:
                                        </div>
                                        <div class="add-teacher-row-column add-content-row-column column-date">
                                            <div class="add-date-start add-date">
                                                <input
                                                    @if(date("n")>8) min="{{ date("Y-0n-0j", mktime(0,0,0, 9, 1, date("Y"))) }}"
                                                    max="{{ date("Y-0n-j", mktime(0,0,0, 8, 31, date("Y")+1)) }}"
                                                    @else min="{{ date("Y-0n-0j", mktime(0,0,0, 9, 1, date("Y")-1)) }}"
                                                    max="{{ date("Y-0n-j", mktime(0,0,0, 8, 31, date("Y"))) }}"
                                                    @endif name="date_start" type="date" class="date" required/>
                                            </div>
                                            <div class="add-date-end add-date">
                                                <input
                                                    @if(date("n")>8) min="{{ date("Y-0n-0j", mktime(0,0,0, 9, 1, date("Y"))) }}"
                                                    max="{{ date("Y-0n-j", mktime(0,0,0, 8, 31, date("Y")+1)) }}"
                                                    @else min="{{ date("Y-0n-0j", mktime(0,0,0, 9, 1, date("Y")-1)) }}"
                                                    max="{{ date("Y-0n-j", mktime(0,0,0, 8, 31, date("Y"))) }}"
                                                    @endif name="date_end" type="date" class="date" required/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="block-add-teacher-item content-add-item">
                                    <div class="block-add-data-control">
                                        <button type="submit" class="block-add-data-item btn-add-data">
                                            Добавить
                                        </button>
                                        <span class="block-add-data-item btn-cancel-data" id="add-teacher-cancel">
                                            <a href="{{route('teacher.index')}}">Отмена</a>
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
                © 2021-2022 Белорусская государственная академия связи
            </div>
        </div>
    </footer>
@endsection
