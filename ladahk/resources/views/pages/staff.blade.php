@extends('layouts.app')

@section('title')
Posts page
@endsection

@section('content')

<section class="bg-light pt-content pb-5" id="faq">
    <div class="header-top">
        <div class="header-image" style="background-image: url('{{asset('img/juliane-lieberman.png')}}');"> </div>
        <div class="text-center align-self-center title">
            <h3>Staff <span>page</span></h3>
            <p>
                lorem ipsum dolor ...
            </p>
        </div>
    </div>
    <div class="container mt-5">
        <div class="row">
            <div class="col-sm-10 offset-sm-1 col-lg-8 offset-lg-2">
                <label>page content</label>
            </div>    
        </div>
    </div>
  </section>


@endsection