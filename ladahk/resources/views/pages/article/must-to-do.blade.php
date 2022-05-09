@extends('layouts.app')

@section('title')
Posts page
@endsection

@section('content')

<section class="bg-light pt-content pb-5">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="mx-auto mb-5 mb-lg-0 mb-lg-3">
            <h1 class="titleArticle mt-5 pt-5">Must to do in Ladakh</h1>
            <p class="mt-3 pt-2 titleDescription it">
                Things you should do
            </p>
          <div class="col-lg-12 pl-5 mt-0 pr-5 pb-4 hr"> </div>
          </div>
        </div>
        <div class="col-lg-12 mt-5 pl-5 pr-5">  
            <div class="row pl-5 pr-5">
                @foreach($articles as $article)
                  <a href="{{url('article/'.$article->slug)}}" class="col-lg-4 col-sm-6 col-12 mt-4">
                      <div class="card-pro">
                          <img src="{{$article->thumbnail->realPath}}">
                      </div>     
                      <div class= mt-3 text-center">
                          <h4 class="titleArticles" >{{$article->title}}</h4>   
                      </div>     
                  </a>
                @endforeach
                   
            </div>
        </div>     
      </div>
    </div>
  </section>


@endsection