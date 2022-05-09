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
            <h1 class="title text-left text-dark-4">Explore ladakh.</h1>
            <!--p class="text-left mt-3 post-description">
                All categories
            </p-->
          </div>
        </div>    
        <div class="col-lg-12 mt-5 pl-5 pr-5">  
            <div class="row pl-5 pr-5">
                @foreach($categories as $category)
            <a href="{{url('cat/'.$category->slug)}}" class="col-lg-4 col-sm-6 col-12 mt-4">
                    <div class="card-pro">
                        <img src="{{$category->image->realPath}}">
                    </div>     
                    <div class="card-pro-text">
                        <h4>{{$category->name}}</h4>   
                    </div>     
                </a>
                @endforeach
                   
            </div>
        </div>     
      </div>
    </div>
  </section>


@endsection