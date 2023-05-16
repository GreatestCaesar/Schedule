@extends('layouts.adminTemplate')
@section('adminContent')

    <main class="main">
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
                        <div class="block-add-group">
                            <form action="{{route('group.store')}}" method="post">
                                @csrf
                                <div class="block-add-group-item content-add-item">
                                    <div class="add-group-row add-content-row">
                                        <div class="add-group-row-column add-content-row-column">
                                            Название:
                                        </div>
                                        <div class="add-group-row-column add-content-row-column">
                                            <input name="name" type="text" pattern="^[А-ЯёЁ]+$"
                                                   title="Только заглавные буквы русского алфавита"
                                                   class="text-field-add-content" autocomplete="off" required/>
                                        </div>
                                    </div>
                                    <div class="add-group-row add-content-row">
                                        <div class="add-group-row-column add-content-row-column">
                                            Номер:
                                        </div>
                                        <div class="add-group-row-column add-content-row-column">
                                            <input name="code" type="number" class="text-field-add-content" max="1000"
                                                   autocomplete="off" required/>
                                        </div>
                                    </div>
                                    <div class="add-group-row add-content-row">
                                        <div class="add-group-row-column add-content-row-column">
                                            Курс:
                                        </div>
                                        <div class="add-group-row-column add-content-row-column">
                                            <select name="course" class="select" required>
                                                <option disabled selected value></option>
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="add-group-row add-content-row">
                                        <div class="add-group-row-column add-content-row-column">
                                            Вид образования:
                                        </div>
                                        <div class="add-group-row-column add-content-row-column">
                                            <select name="type_education_id" class="select" required>
                                                <option disabled selected value></option>
                                                @foreach($typeEduc as $typeItem)
                                                    <option value="{{$typeItem->id}}">{{$typeItem->name}}</option>
                                                @endforeach
                                            </select>
                                        </div>
                                    </div>
                                    <div class="add-group-row add-content-row">
                                        <div class="add-group-row-column add-content-row-column">
                                            Период занятий:
                                        </div>
                                        <div class="add-group-row-column add-content-row-column column-date">
                                            <div class="add-date-start add-date">
                                                <input name="date_start" type="date" class="date"
                                                       @if(date("n")>8) min="{{ date("Y-0n-0j", mktime(0,0,0, 9, 1, date("Y"))) }}"
                                                       max="{{ date("Y-0n-j", mktime(0,0,0, 8, 31, date("Y")+1)) }}"
                                                       @else min="{{ date("Y-0n-0j", mktime(0,0,0, 9, 1, date("Y")-1)) }}"
                                                       max="{{ date("Y-0n-j", mktime(0,0,0, 8, 31, date("Y"))) }}"
                                                       @endif required/>
                                            </div>
                                            <div class="add-date-end add-date">
                                                <input name="date_end" type="date" class="date"
                                                       @if(date("n")>8) min="{{ date("Y-0n-0j", mktime(0,0,0, 9, 1, date("Y"))) }}"
                                                       max="{{ date("Y-0n-j", mktime(0,0,0, 8, 31, date("Y")+1)) }}"
                                                       @else min="{{ date("Y-0n-0j", mktime(0,0,0, 9, 1, date("Y")-1)) }}"
                                                       max="{{ date("Y-0n-j", mktime(0,0,0, 8, 31, date("Y"))) }}"
                                                       @endif required/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="block-add-group-item content-add-item">
                                    <div class="block-add-data-control">
                                        {{--<span class="block-add-data-item btn-add-data" id="add-group-ok">
                                            Добавить
                                        </span>--}}
                                        <button type="submit" class="block-add-data-item btn-add-data">
                                            Добавить
                                        </button>
                                        <span class="block-add-data-item btn-cancel-data" id="add-group-cancel">
                                            <a href="{{route('group.index')}}">Отмена</a>
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
