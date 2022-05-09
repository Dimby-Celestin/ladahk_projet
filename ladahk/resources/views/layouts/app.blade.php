<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">

<head>
    <meta charset="utf-8" />
    <link rel="apple-touch-icon" sizes="76x76" href="{{asset('img/favicon.png')}}">
    <link rel="icon" type="image/png" href="{{asset('img/favicon.png')}}">
    <link src="http://maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/simple-jscalendar@1.4.4/source/jsCalendar.min.css" integrity="sha384-44GnAqZy9yUojzFPjdcUpP822DGm1ebORKY8pe6TkHuqJ038FANyfBYBpRvw8O9w" crossorigin="anonymous">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />



    <title>@yield('title') | {{ config('app.name', 'Laravel Starter') }}</title>
    <meta content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0, shrink-to-fit=no' name='viewport' />
    <meta name="description" content="">
    <meta name="keyword" content="{">

    @include('includes.meta')


    <!-- Shortcut Icon -->
    <link rel="shortcut icon" href="{{asset('img/favicon.png')}}">
    <link rel="icon" type="image/ico" href="{{asset('img/favicon.png')}}" />


    @stack('before-styles')

    <!-- Google fonts-->
    <link rel="stylesheet" href="{{ asset('css/main.css')}}">
    <link rel="stylesheet" href="{{ asset('css/style.css')}}">


    <!-- Add the slick-theme.css if you want default styling -->
    <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"/>
    <!-- Add the slick-theme.css if you want default styling -->
    <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick-theme.css"/>
   
    @stack('after-styles')

</head>

<body class="{{isset($body_class) ? $body_class : ''}} sidebar-collapse">

    <!-- Header Block -->
    @include('includes.header')
    <!-- / Header Block -->
    
    <div class="wrapper">
    
        @yield('content')
        
        <!-- Footer block -->
        @include('includes.footer')
        <!-- / Footer block -->
    </div>
</body>

<!-- Scripts -->
@stack('before-scripts')


<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>

<script src="{{ asset('js/main.js') }}"></script>


@stack('after-scripts')

<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>


</html>
