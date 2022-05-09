@extends('layouts.app')

@section('title')
{{$category->name}}
@endsection

@section('content')

<section class="bg-light pt-content pb-5">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="mx-auto mb-5 mb-lg-0 mb-lg-3">
            <h1 class="title text-left text-dark-4">{{$category->name}}</h1>
            <!--p class="text-left mt-3 post-description">
                LADAKH sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
            </p-->
          </div>
        </div>    
        <div class="col-lg-12 mt-5 pl-5 pr-5">  
            <div class="row pl-5 pr-5">
                    @foreach($articles as $article)
                    <a class="col-lg-4 col-sm-6 col-12 mt-4" href="{{url('article/'.$article->slug)}}">
                        <div class="card-pro">
                            <img src="{{$article->thumbnail->real_path}}">
                        </div>     
                        <div class="card-pro-text">
                            <h4 class="titleArticles">{{$article->title}}</h4>   
                        </div>     
                    </a>
                @endforeach
                
            </div>
        </div>     
      </div>
    </div>
  </section>


@endsection