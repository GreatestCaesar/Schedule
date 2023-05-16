@extends('layouts.main')
@section('content')
    <header class="header">
        <div class="header__container _container">
            <a href="http://bsac.by" class="header__logo">
                <img class="img-logo" src="{{ asset('img/header/logo.png') }}"
                     alt="Белорусская государственная академия связи">
            </a>
            <div class="header__name_site">
                Белорусская государственная академия связи
            </div>
            <div class="header__info" id="header__info">
                <div class="info_item">
                    <span id="current-week-numb">{{ $week }}</span> учебная неделя
                </div>
                <div class="info_item">
                    <span id="current-date">{{ $date }}</span>
                </div>
            </div>
        </div>
    </header>
    <main class="main">
        <div class="main__selection-panel selection-panel">
            <div class="selection-panel_container _container">
                <div class="selection-panel_body">
                    <label class="selection-panel_teacher radio-btn active-btn" id="teacher-panel-button">
                        <input checked type="radio" class="radio" name="radio-displays">
                        <span>Расписание занятий для преподавателей</span>
                    </label>
                    <label class="selection-panel_student radio-btn" id="student-panel-button">
                        <input type="radio" class="radio" name="radio-displays">
                        <span>Расписание занятий для студентов</span>
                    </label>
                </div>
            </div>
        </div>
        <div class="main__block-selection">
            <div class="container-teacher" id="container-teacher">
                <div class="block-selection_container _container">
                    <div class="block-selection_body">
                        <div class="block-selection_column" id="block-find-teacher">
                            <label class="block-selection_item item-selection item-teacher-find">
                                <span class="block-selection_find-hint">
                                    Преподаватель
                                </span>
                                <input type="text" class="block-selection_search-field text-field"
                                   id="text-field-teacher" list="teachers" autocomplete="off"/>
                                <datalist id="teachers">
                                </datalist>
                                <button type="button" class="button-find button-find-teacher"
                                    id="button-find-teacher">
                                </button>
                                <div id="teacher-find-error">Расписание для данного преподавателя не найдено</div>
                            </label>
                        </div>
                        <div class="block-selection_column" id="block-info-teacher">
                            <div class="block-selection_item item-selection item-teacher-info item-info" id="teacher-info">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container-student" id="container-student">
                <div class="block-selection_container _container">
                    <div class="block-selection_body">
                        <div class="block-selection_column student-selection_column" id="block-find-student">
                            <label class="block-selection_item item-selection item-student-find">
                                <span class="block-selection_find-hint">
                                    Группа
                                </span>
                                <input type="text" class="block-selection_search-field text-field"
                                       id="text-field-student" list="groups" autocomplete="off"/>
                                <datalist id="groups">
                                </datalist>
                                <button type="button" class="button-find" id="button-find-student"></button>
                                <div id="student-find-error">Расписание для данной группы не найдено</div>
                            </label>
                        </div>
                        <div class="block-selection_column student-selection_column" id="block-info-student">
                            <div class="block-selection_item item-selection item-student-info item-info" id="student-info">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="main__block-hiding-main-content">
            <div class="main__block-type-lessons">
                <div class="main__block-type-lessons_container _container">
                    <div class="main__block-type-lessons_body">
                        <label class="main__block-type_lesson radio-btn active-type-btn active-btn" id="type-lesson">
                            <input checked type="radio" class="radio" name="radio-type">
                            <span>Занятия</span>
                        </label>
                        <label class="main__block-selection-type-session radio-btn" id="type-session">
                            <input checked type="radio" class="radio" name="radio-type">
                            <span>Сессия</span>
                        </label>
                    </div>
                </div>
            </div>
            <div class="main__block-hiding-block">
                <div class="main__block-hiding-block_container _container">
                    <div class="main__block-hiding-block_body">
                        <div class="hiding-block_filters">
                            <div class="filters_body">
                                <div class="filters_column">
                                    <div class="filters_item">
                                        <div class="filters_item_body">
                                            <div class="filters_item_body_row">
                                                Неделя:
                                            </div>
                                            <div class="filters_item_body_row" id="filter_week">
                                                <div class="filters_item_body_row_column">
                                                    <label class="filters_item_body_row_column_item">
                                                        <input type="checkbox" class="checkbox" id="week-one">
                                                        <span class="text-checkbox">1</span>
                                                    </label>
                                                </div>
                                                <div class="filters_item_body_row_column">
                                                    <label class="filters_item_body_row_column_item">
                                                        <input type="checkbox" class="checkbox" id="week-two">
                                                        <span class="text-checkbox">2</span>
                                                    </label>
                                                </div>
                                                <div class="filters_item_body_row_column">
                                                    <label class="filters_item_body_row_column_item">
                                                        <input type="checkbox" class="checkbox" id="week-three">
                                                        <span class="text-checkbox">3</span>
                                                    </label>
                                                </div>
                                                <div class="filters_item_body_row_column">
                                                    <label class="filters_item_body_row_column_item">
                                                        <input type="checkbox" class="checkbox" id="week-four">
                                                        <span class="text-checkbox">4</span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="filters_column subgroup-filter">
                                    <div class="filters_item">
                                        <div class="filters_item_body">
                                            <div class="filters_item_body_row">
                                                Подгруппы:
                                            </div>
                                            <div class="filters_item_body_row">
                                                <div class="filters_item_body_row_column">
                                                    <label class="filters_item_body_row_column_item">
                                                        <input type="checkbox" class="checkbox" id="subgroup-one"
                                                               checked>
                                                        <span class="text-checkbox">1</span>
                                                    </label>
                                                </div>
                                                <div class="filters_item_body_row_column">
                                                    <label class="filters_item_body_row_column_item">
                                                        <input type="checkbox" class="checkbox" id="subgroup-two"
                                                               checked>
                                                        <span class="text-checkbox">2</span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="hiding-block_current-schedule">
                            <div class="hiding-block_current-schedule_body schedule_body" id="current-schedule">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="main__block-basic_lessons">
                <div class="main__block-basic_lessons_container _container">
                    <div class="main__block-basic_lessons_body" id="week-schedule">

                    </div>
                </div>
            </div>
        </div>
    </main>
    <footer class="footer">
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
@endsection
