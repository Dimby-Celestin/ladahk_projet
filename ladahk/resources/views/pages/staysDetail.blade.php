@extends('layouts.app')

@section('title')
Posts page
@endsection

@section('content')

<section class="bg-light pt-content pb-5">
    <div class="container">
      <div class="row">
        <div class="col-12 col-lg-12 mt-5">
            <div class="mx-auto mb-3 mb-lg-0 mb-lg-3 mt-2">
                <div class="d-flex">
                    <h1 class="col-12 titleStayDetail text-left mt-5 pl-0">{{ isset($business->property_name) ? $business->property_name : $business->name}}</h1> 
                </div>
                <p class="text-left ml-0 pl-0 description mt-3">{{strtoupper($business->category["name"])}}</p>
            </div>            
        </div> 
        @php
            $nbrImg = count($images);
        @endphp
        @if( $nbrImg > 0)
            <div class="col-5 col-lg-4 text-right pt-2 pr-0">
                <!--button class="btn btn-outline-dark pull-right text-theme font-bold" type="button" data-toggle="modal" data-target="#modal1">
                    Show all Photos
                </button-->
            </div>   
        @endif 
        <div class="col-lg-12 mt-4 pb-4 mb-5"> 
            @if (count($business->banners))
            <div class="main-carousel">
                @foreach ($business->banners as $item)
                    <div class="carousel-cell">
                        <img class="carousel-cell-image"
    src="{{$item->realPath}}" alt="" />
                    </div>
                @endforeach
                
                </div>
                @endif
      
        </div>    
        <div class="col-8 col-lg-8 hr-75 mt-5 pl-0 ml-3"> 
            <h1 class="titleStayDetail mt-4">Details</h1>
            @php
                $boptionNumber = count($business->highlights);
            @endphp
            <p class="s-title text-left text-dark-4">
                <div class="row">
                    @for($i = 0; $i < $boptionNumber; $i++)
                        <h5 class="col-3 description1"> 
                        ・{{ucfirst($business-> highlights[$i]["name"])}}
                        </h5> 
                    @endfor  
                </div>                     
            </p>                          
        </div>  
        <div class="col-4 col-lg-3 text-right mt-5"> 
            <h1 class="startFrom text-right text-dark-4 mt-5 pt-3">Starts from</h1>
            <h4 class="priceStartNight text-right">₹{{ $business->price_start }}/<span>night</span></h4> 
            <a href="{{$business->website_address}}" class="visitWebsite btn btn-warning pull-right btn-theme-orange font-light-bt mt-3">
                Visit Website
            </a>                        
        </div>   
        <div class="col-lg-8 mt-5 hr-75 pb-4 pl-0 ml-3">  
            <p class="description2 text-left pr-5">
           {{$business->about}}
            </p>                      
        </div>   
        
        <div class="col-8 col-lg-8 hr-75 mt-4 pb-5 pl-0 ml-3"> 
            <h1 class="titleStayDetail">Room Details</h1> 
                <div class="row">                       
                @foreach ($business->rooms as $room)
                    <div class="bord mt-3 col-4 offset-1 ml-3">   
                        <h4 class="s-title text-left font-bold mt-5">
                            {{ucfirst($room->pivot->customTitle)}}
                        </h4> 
                        <p class="s-title text-left">
                            {{ucfirst($room->pivot->customSubtitle)}}
                        </p>  
                    </div> 
                @endforeach
                </div>
        </div>

            

        <div class="col-7 col-lg-8 hr-75 mt-4 pb-5 pl-0 ml-3"> 
            <h1 class="titleStayDetail">Amenities</h1>  
                    <p class="s-title text-left text-dark-4">
                        <div class="row">
                            @foreach($business->amenities as $amenitie)
                                <h5 class="col-3 description1"> 
                                ・{{ ucfirst($amenitie->name) }}
                                </h5> 
                            @endforeach 
                        </div>                      
                    </p>                         
            <button class="btn btn-outline-dark pull-right text-theme font-bold mt-4" type="button">
                Show all Amenities
            </button>
        </div> 

        <div class="col-12 col-lg-12 mt-4 pb-4 "> 
            <h1 class="titleStayDetail mb-4">Location</h1>  
            
            <div class="map" id="mapid"></div>  

            <div class="row address mt-5"> 
                <div class="col-12 col-md-6 mt-4 pb-4 pl-3"> 
                    <h4 class="adress text-left">Address</h4> 
                    <p class="s-title text-left">{{ $business->address_business }}</p>                      
                </div>  
                <div class="col-12 col-md-6 mt-4 pb-4"> 
                    <h4 class="adress text-left">Nearby</h4> 
                    <p class="s-title text-left">{{ $business->nearby }}</p>                         
                </div>  
            </div>  
            <div class="col-12 col-lg-8 hr-75 mt-4 pb-4"></div> 
        </div> 
        <div class="col-lg-12 mt-5 pb-4">  
            
            <div class="d-flex">
                <h1 class="titleStayDetail w-75">More places nearby</h1>  
                <div class="text-right pt-2 w-25">
                    <h4>1/3</h4>  
                </div> 
            </div> 
            
            <div class="row">
                @foreach($businessNears as $businessNear)
                <div class="col-lg-4 col-sm-6 col-12 mt-3 mb-3">
                    <div class="cardPro">        
                        <a href="{{url('/staysDetail/'.$businessNear->id)}}">            
                            <img class="d-block w-100" src="{{$businessNear->banner->realPath }}" alt="First slide">
                        </a>
                    </div>     
                    <div class="card-pro-text">
                        <div class="gg">     
                            <h3 class="businessCatName" >{{ strtoupper($businessNear->category["name"]) }}</h3>     
                            <h4 class="businessName" > {{ $businessNear->name}}</h4>  
                            <div class="spacer-hr"></div>
                        </div>     
                        <div class="d-flex mt-1">
                            @foreach($businessNear->highlights as $highlight)
                                <h3 class="descript mt-2"> 
                                    ・{{ucfirst($highlight->name)}}
                                </h3> 
                                <span class="mr-2"></span>
                            @endforeach                         
                        </div>
                        <h4 class="priceN">₹ {{$businessNear->price_start}} /<span>night</span></h4> 
                    </div>     
                </div>
                @endforeach
                                               
            </div>
        </div>            


        <!-- Modal fullscreen Single view -->
        <div class="modal fade fullscreen" id="modalSingle" tabindex="-1" role="dialog" aria-labelledby="modalSingle" aria-hidden="true">
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
                            @foreach($business->banners as $galery)
                                <li data-target="#carouselExampleIndicators" data-slide-to="{{ $loop->index }}" class="{{ $loop->first ? 'active' : '' }}"></li>
                            @endforeach
                        </ol>
                        <div class="carousel-inner" role="listbox">
                            @foreach( $business->banners as $galery )
                            <div class="carousel-item {{ $loop->first ? 'active' : '' }}">
                                <img class="d-block img-fluid" src="{{$galery->realPath}}" alt="gallery images">
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
                </div>
            </div>
        </div>

      </div>
    </div>

    


    @if(isset($business) && $business->lat)
        <input type="hidden" value="{{$business->lat}}" id="lat">
        <input type="hidden" value="{{$business->lng}}" id="lng">
    @endif

  </section>
@endsection

@push('after-scripts')
<script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"
integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA=="
crossorigin=""></script>
<script src="/js/flickity.pkgd.min.js"></script>
<script src="/js/fullscreen.js"></script>
@if(isset($business) && $business->lat)
<script>
var lat = $('#lat').val();
var lng = $('#lng').val();
    var marker, position;
    var mymap = L.map('mapid').setView([lat, lng], 13);
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
		maxZoom: 18,
		attribution: '',
		id: 'mapbox/streets-v11',
		tileSize: 512,
		zoomOffset: -1
    }).addTo(mymap);
</script>
<script>
    var latlng = new L.LatLng(lat, lng);
    marker = new L.marker(latlng);
    mymap.setView(latlng)
    mymap.panTo(latlng);
    mymap.addLayer(marker);    
</script>
@endif

<script>
    // jQuery
    var $carousel = $('.main-carousel').flickity(
        { "freeScroll": true,"imagesLoaded": true, "cellAlign": "left" }
    );
    $carousel.on( 'pointerUp.flickity', function( event, pointer ) {
        $('#modalSingle').modal('show');
    });

</script>
@endpush
@push('after-styles')
<link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
crossorigin=""/>
<link rel="stylesheet" href="/css/flickity.css" media="screen">
<style>
#mapid {
    height: 500px;
}
</style>
@endpush