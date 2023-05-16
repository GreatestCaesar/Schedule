@extends('layouts.adminTemplate')
@section('adminContent')

    <main class="main">
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
                        <div class="block-add-object">
                            <form action="{{route('object.store')}}" method="post">
                                @csrf
                                <div class="block-add-object-item content-add-item">
                                    <div class="add-schedule-row add-content-row">
                                        <div class="add-object-row-column add-content-row-column">
                                            Название:
                                        </div>
                                        <div class="add-object-row-column add-content-row-column">
                                            <input name="full_name" type="text" class="text-field-add-content"
                                                   autocomplete="off" required/>
                                        </div>
                                    </div>
                                    <div class="add-object-row add-content-row">
                                        <div class="add-object-row-column add-content-row-column">
                                            Сокращенное название:
                                        </div>
                                        <div class="add-object-row-column add-content-row-column">
                                            <input name="abbreviated_name" type="text" class="text-field-add-content"
                                                   autocomplete="off" required/>
                                        </div>
                                    </div>
                                </div>
                                <div class="block-add-object-item content-add-item">
                                    <div class="block-add-data-control">
                                        <button type="submit" class="block-add-data-item btn-add-data">
                                            Добавить
                                        </button>
                                        <span class="block-add-data-item btn-cancel-data" id="add-schedule-cancel">
                                            <a href="{{route('object.index')}}">Отмена</a>
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
