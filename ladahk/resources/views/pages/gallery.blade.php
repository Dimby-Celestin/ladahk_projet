@extends('layouts.app')

@section('title')
Posts page
@endsection

@section('content')

<section class="bg-light pt-content pb-5" id="article">
    <div>
        <div class="header-image" style="background-image: url('{{asset('images/ashwini-chaudhary.jpg')}}');"> </div>
    </div>
    <section class="container mt-5" id="gallery">
        <div class="row">
            <div class="col-lg-12 d-flex mt-5">
                <a href="/gallery#gallery" class="filter inline-block {{ app('request')->input('q') == '' ? 'active' : '' }}">
                    All
                </a>
            @foreach($galleryCategory as $galeryCategory)
                <a href="/gallery?q={{ $galeryCategory->id }}#gallery" class="filter inline-block  {{ app('request')->input('q') == $galeryCategory->id ? 'active' : '' }}">
                    {{ $galeryCategory->name }}
                </a>
            @endforeach
              
            </div>    
            <div class="col-lg-12 d-flex hr"></div>     

            <div class="col-lg-12 mt-3">  
                <div class="row">
                    @foreach($gallery as $galery)
                        <div class="col-lg-3 col-md-4 col-sm-6 col-12 mt-4">
                            <div class="card-pro bg-grey" data-toggle="modal" data-target="#modal1">
                                <img class="d-block w-100" src="{{$galery->document->realPath}}" alt="gallery images">
                            </div>        
                        </div> 
                    @endforeach      
                </div>
            </div>     
        </div>
        <!-- Modal fullscreen -->
        <div class="modal fade fullscreen" id="modal1" tabindex="-1" role="dialog" aria-labelledby="modal1" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body pt-0">
                    <!-- carousel -->
                    <div id="carouselControls" class="carousel slide" data-ride="carousel">
                        <ol class="carousel-indicators">
                            @foreach($gallery as $galery)
                                <li data-target="#carouselExampleIndicators" data-slide-to="{{ $loop->index }}" class="{{ $loop->first ? 'active' : '' }}"></li>
                            @endforeach
                        </ol>
                        <div class="carousel-inner" role="listbox">
                            @foreach( $gallery as $galery )
                            <div class="carousel-item {{ $loop->first ? 'active' : '' }}">
                                <img class="d-block img-fluid bord-r-20" src="{{$galery->document->realPath}}" alt="gallery images">
                            </div>
                            @endforeach
                        </div>
                        <a class="carousel-control-prev" href="#carouselControls" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#carouselControls" role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </a>
                    </div>
                </div>
                <!--div class="modal-footer pt-0 pr-3">
                    <p class="text">LADAKH sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                </div-->
                </div>
            </div>
        </div>

    </section>
    <div class="col-lg-12 pb-4 mt-5 footer-pager text-center"> 

        <nav class="text-center">
            {{ $gallery->links() }}
        </nav>
        <h4 class="text-center mt-3">1 to {{ $gallery->count()}} of {{$gallery->total()}} images</h4> 
    </div>
  </section>


@endsection

