@extends('layouts.main')
@section('content')
    <header class="header">
        <div class="header__container _container">
            <a href="http://bsac.by" class="header__logo">
                <img class="img-logo" src="{{ asset('img/header/logo.png') }}" alt="Белорусская государственная академия связи">
            </a>
            <div class="header__name_site">
                Белорусская государственная академия связи
            </div>
            <div class="header__info">
                <div class="info-authorization">
                    Авторизация
                </div>
            </div>
        </div>
    </header>
    <main class="main main_login">
        <div class="main__block-login_container block-login _container">
            <div class="main__block-login_body">
                <form method="POST" action="{{ route('login') }}">
                    @csrf
                    <label class="block-login login-item">
                    <span>
                        Логин
                    </span>
                        <input name="name" value="{{ old('name') }}" autocomplete="off" required autofocus type="text" class="text-field-login"/>
                    </label>
                    <label class="block-password login-item">
                    <span>
                        Пароль
                    </span>
                        <input name="password" required  type="password" autocomplete="off" class="text-field-login"/>
                    </label>
                    <button type="submit" class="button-login">Вход</button>
                </form>
            </div>
        </div>
    </main>
    <footer class="footer footer_login">
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
    <script src="{{asset('js/scriptLogin.js')}}"></script>
@endsection
