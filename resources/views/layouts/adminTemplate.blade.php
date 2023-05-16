@extends('layouts.main')
@section('content')
    <header class="header">
        <div class="header__container _container_admin">
            <a href="{{route('main.index')}}" class="header__logo">
                <img class="img-logo" src="{{ asset('img/header/logo.png') }}" alt="БГАС">
            </a>
            <div class="header__name_site">
                Белорусская государственная академия связи
            </div>
            <div class="header__info">
                <div class="info-authorization">
                    Управление
                </div>
            </div>
            <div class="logout-admin">
                <a class="dropdown-item" href="{{ route('logout') }}"
                   onclick="event.preventDefault();document.getElementById('logout-form').submit();">
                   Выйти
                </a>

                <form id="logout-form" action="{{ route('logout') }}" method="POST" class="d-none">
                    @csrf
                </form>
            </div>
        </div>
    </header>
        @yield('adminContent')
@endsection
