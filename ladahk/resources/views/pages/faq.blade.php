@extends('layouts.app')

@section('title')
Posts page
@endsection

@section('content')

<section class="bg-light pt-content pb-5" id="faq">
    <div class="header-top">
        <div class="header-image" style="background-image: url('{{asset('img/juliane-lieberman.png')}}');"> </div>
        <div class="text-center align-self-center title">
            <h3>Everything <span>Answered</span></h3>
            <p>
                If you have more questions, please contact us at mail@mail.com
            </p>
        </div>
    </div>
    <div class="container mt-5">        
        @foreach($pages as $article )
        <div class="row mb-2">
            <div class="col-lg-12">
                <button class="btn btn-outline-dark btn-block " type="button" data-toggle="collapse" data-target="#_{{ $article->id }}" aria-expanded="false" aria-controls="_{{ $article->id }}">
                    {{ $article->title}} 
                    <svg version="1.1" fill="#707070" x="0px" y="0px" width="24px" height="24px" viewBox="0 0 53.76 53.76" style="enable-background:new 0 0 53.76 53.76;" xml:space="preserve">
                        <g><g>
                            <path d="M26.88,44.574L0,9.186h53.76L26.88,44.574z M4.709,11.521L26.88,40.715l22.172-29.193H4.709z"/>
                        </g></g>
                    </svg>
                </button>                            
            </div>

            <div class="col-lg-12">
                <div class="collapse" id="_{{ $article->id }}">
                    <div class="card card-block mt-2">
                       {!! $article->content !!}
                    </div>
                </div>
            </div> 
        </div>
        @endforeach           
    </div>
  </section>


@endsection