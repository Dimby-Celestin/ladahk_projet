@extends('layouts.app')

@section('title')
Posts page
@endsection

@section('content')

<section class="bg-light pt-content pb-5">
    <div class="container">
        <div class="row  mt-4">
            <div class="col-7 col-lg-8">
                <div class="mx-auto mb-3 mb-lg-0 mb-lg-3 ">
                    <h1 class="myBusinessName text-left text-dark-4 mt-5">{{$business->name}}</h1>                
                    <p class="text-left descriptionMyBusiness ml-0 pl-0">{{$business->category->name}}</p>
                </div>            
            </div> 
        </div> 
        <form method="post" action="" id="business-form" enctype="multipart/form-data">
        
        <div class="">
            <div class="col-lg-12 md-2 pb-4">
                <div class="mt-4 mb-4 text-right">
                    <input 
                    id="inputazaza"
                    type="file" 
                    accept="image/*"
                    name="file_data"
                    data-upload-url="/api/v1/business/{{$business->id}}/ajaxUpload" 
                    data-min-file-count="1"
                    data-show-caption="false"
                    data-browse-label="Upload images"
                    data-browse-class="m-2  btn btn-light" 
                    class="col-3 m-2 d-inline-block input-file"/>
                    <div>(400 x 900)</div>
                </div>
                    <div class="main-carousel" data-flickity='{ "freeScroll": true,"imagesLoaded": true, "cellAlign": "left", "fullscreen": true }'>
                    @foreach ($business->banners as $item)
                        <div class="carousel-cell">
                            <img class="carousel-cell-image"
                                src="{{$item->realPath}}" alt="" />
                        </div>
                    @endforeach
                    
            </div>
        </div>


 
        <div class="row mt-5 mb-5 d-flex">
            <div class="col">
                <h3 class="priceMyBusiness text-left text-dark-4">Property Name</h3>
                <h4 class="s-title ">
                <input class="inputMyBusiness" type="text" name="property_name"  value="{{isset($business) ? $business->property_name : ''}}">
                </h4>                           
            </div>
            <div class="col">
                <h3 class="priceMyBusiness text-left text-dark-4">Price Starts from</h3>
                <h4 class="s-title ">
                <input class="inputMyBusiness col-4" type="number" required name="price_start" value="{{isset($business) ? $business->price : ''}}">
                <span class="night">/night</span></h4>                           
            </div>
        </div>
        <div class="row mb-2">
            <div class="col-12">
                <h5 class="websiteMyBusiness">Website address</h5>
                <h5 class="">
                <input class="inputWebMyBusiness col-6" type="url" placeholder="https://example.com"
                value="{{isset($business) ? $business->website_address : ''}}" size="30"
                name="website_address"></h5>                         
            </div>
            <div class="col-10 mt-5 hr-75 ml-15-" ></div> 
        </div>  
        <div class="row">
            <div class="col-10 mt-4 pb-4 d-flex align-items-center">
                <h4 class="higMyBusiness pr-3">Highlights</h4>
                <h6 class="pl-2 selectFor">/ Select all</h6>
            </div>
            <div class="col pb-3 ">  
                @foreach($optionsHighlights as $option)
                <input
                {{in_array($option->id, $highlightsIds) ? 'checked' : ''}}
                type="checkbox" id="h{{$option->id}}" name="highlights[]" value="{{$option->id}}">
                <label id="choiseMyBusiness" class="ml-2" for="h{{$option->id}}"><h5>{{$option->name}}</h5></label><br>
                @endforeach
            </div>
            <div class="col-10 hr-75 ml-15" ><br></div>  
        </div>
        <div class="row mt-3">
            <div class="col-10 mb-5 pb-5">
                <h3 class="mt-4 higMyBusiness">About</h3><br>
                <div class="col-10" id="editor" style="max-width: 100%;">
                    {!! isset($business) ? $business->about : '' !!}</div>
                    <input type="hidden" name="about" id="quill_html">
                <div class="clearfix">&nbsp;</div>
            </div>
            <div class="col-10 hr-75 mt-5 pt-5 ml-15-" ></div> 
        </div>
        <div class="row mt-5">
            <h1 class="col-12 higMyBusiness">Room Details</h1>
            <div class="col-9 d-flex flex-wrap">
               
                @foreach($roomOptions as $option)
                <div class="form-check pl-0 pr-3">
                    <label for="defaultCheck{{$option->id}}">
                        <div class="bord mt-3 w-30 mr-2 form-check room-option">   
                        <input class="form-check-input" type="checkbox" {{in_array($option->id, $roomsIds) ? 'checked' : ''}}
                        name="rooms[]" value="{{$option->id}}" id="defaultCheck{{$option->id}}">                                 
                            <!--h4 class="titleRoomMyBusiness text-left mt-5"  >{{$option->title}}</h4>                  
                            <p class="stitleRoomMyBusiness text-left">{{$option->subtitle}}</p-->
                            @php
                              $currentOption = $business->rooms->where('id', $option->id)->first();
                            @endphp
                            <br/>
                            <input class="form-control fs-126" name="roomOptions[{{$option->id}}][customTitle]"  placeholder="Title" 
                            value="{{ isset($currentOption) && $currentOption ? $currentOption->pivot->customTitle : '' }}">
                            <br/>
                            <input class="form-control fs-126" name="roomOptions[{{$option->id}}][customSubtitle]" placeholder="Subtitle"
                                value="{{ isset($currentOption) && $currentOption ? $currentOption->pivot->customSubtitle : '' }}">
                        </div> 
                    </label>

                </div>
                @endforeach
            </div>
            
            <!--div class="col-10 hr-75N MB" ></div-->   
            <div class="col-10 hr-75 ml-15- mt-4" ></div>    
        </div>
        <div class="row">
            <div class="col-10 mt-4 pb-4 d-flex align-items-center">
                <h4 class="higMyBusiness">Amenities</h4>
            </div>
            <div class="col-10 pb-5">  
                @foreach($optionsAmenities as $option)
                <input type="checkbox" 
                {{in_array($option->id, $amenitiesIds) ? 'checked' : ''}}
                id="a{{$option->id}}" name="amenities[]" value="{{$option->id}}">
                <label class="ml-2" for="a{{$option->id}}"><h5>{{$option->name}}</h5></label><br>
                @endforeach
            </div>
            <div class="col-10 hr-75 ml-15-" ></div>  
        </div>
        <div class="col-12 col-lg-12 mt-5 pb-4 pl-0"> 
            <h1 class="higMyBusiness text-left text-dark-4 pb-3">Location</h1>  
            
            
            <div id="mapid">
            </div>
 

            <div class="row address mt-5"> 
                <div class="col-12 col-md-6 mt-4 pb-4 pl-3"> 
                    <h4 class="adressMyBusiness text-left">Address</h4> 
                    <textarea class="col-4" id="" rows="4" name="address">{{isset($business) ? $business->address : ''}}</textarea>                  
                </div>  
                <div class="col-12 col-md-6 mt-4 pb-4"> 
                    <h4 class="adressMyBusiness text-left">City</h4>
                    <select class="btn btn-outline-dark" name="city"  onchange="this.form.submit()">
                            <option value="leh" {{isset($business) && $business->city == 'leh' ? 'selected' : ''}}>Leh</option>
                            <option value="test" {{isset($business) && $business->city == 'test' ? 'selected' : ''}}>Test</option>
                    </select>
                </div>  
            </div>  
            <div class="col-12 col-lg-8 hr-75 mt-4 pb-4"></div> 
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
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img class="d-block w-100" src="/img/slide/mountainerring-in-ladakh.png" alt="First slide">
                            </div>
                            <div class="carousel-item">
                                <img class="d-block w-100" src="/img/slide/mountainerring-in-ladakh.png" alt="Second slide">
                            </div>
                            <div class="carousel-item">
                                <img class="d-block w-100" src="/img/slide/mountainerring-in-ladakh.png" alt="Third slide">
                            </div>
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
                <div class="modal-footer pt-0 pr-3">
                    <p class="text">LADAKH sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                </div>
                </div>
            </div>
        </div>

        <div class="row">
            <div class=" col-10 d-flex">
                <button class="btn btn-secondary submitRegisterForm" name="submit" type="submit">SUBMIT</button>
                @if($business->status === 'under_review')
                <p class="ml-3">Form Submitted. You’ll receive a text message if your listing is verified or 
                    rejected. You can also keep an eye on the status section on top of your account page.
                </p>
                @endif
            </div>
        </div>
         
    </form>

    </div>
  </section>


@endsection

@push('after-scripts')
<script src="https://cdn.quilljs.com/1.3.6/quill.js"></script>
<script>
  var quill = new Quill('#editor', {
    theme: 'snow'
  });
  quill.on('text-change', function(delta, oldDelta, source) {
        document.getElementById("quill_html").value = quill.root.innerHTML;
    });
</script>
<script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"
integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA=="
crossorigin=""></script>
<script>
    var marker, position;
    var mymap = L.map('mapid').setView([34.156633, 77.570128], 13);
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
		maxZoom: 18,
		attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
			'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
		id: 'mapbox/streets-v11',
		tileSize: 512,
		zoomOffset: -1
    }).addTo(mymap);
</script>
@if(isset($business) && $business->lat)
<script>
    var latlng = new L.LatLng({{$business->lat}}, {{$business->lng}});
        marker = new L.marker(latlng, {draggable:'true'})
            .bindPopup('Drag me to your position')
            .openPopup();
        marker.on('dragend', function(event){
            var marker = event.target;
            position = marker.getLatLng();
            marker.setLatLng(new L.LatLng(position.lat, position.lng),{draggable:'true'});
            mymap.panTo(new L.LatLng(position.lat, position.lng))
        });
    mymap.setView(latlng)
    mymap.addLayer(marker);
</script>
@endif
<script>
    
    var popup = L.popup();
    function onMapClick(e) {
        if (!marker) {
            marker = new L.marker(e.latlng, {draggable:'true'})
            .bindPopup('Drag me to your location')
            .openPopup();;
            position = e.latlng;
        } else {
            marker.setLatLng(e.latlng,{draggable:'true'});
            position = e.latlng;
        }
        
        marker.on('dragend', function(event){
            var marker = event.target;
            position = marker.getLatLng();
            marker.setLatLng(new L.LatLng(position.lat, position.lng),{draggable:'true'});
            mymap.panTo(new L.LatLng(position.lat, position.lng))
        });
        mymap.addLayer(marker);
    };

    mymap.on('click', onMapClick);

    $('#business-form').submit(function(event) {
        if (position) {
            var input = $("<input>").attr("type", "hidden").attr("name", "lat").val(position.lat);
            $('#business-form').append(input);
            var input = $("<input>").attr("type", "hidden").attr("name", "lng").val(position.lng);
            $('#business-form').append(input);
        }
    
        form.submit();
        event.preventDefault();
        return false;
    });

</script>
@endpush
@push('after-styles')
<link href="https://cdn.quilljs.com/1.3.6/quill.snow.css" rel="stylesheet">
<link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
crossorigin=""/>
<link rel="stylesheet" href="./css/flickity.css" media="screen">
<link rel="stylesheet" href="{{ asset('css/auth.css')}}">
<style>
#mapid {
    height: 500px;
}
</style>
@endpush
@push('after-scripts')
<script src="{{ asset('js/auth.js') }}"></script>
<script src="./js/flickity.pkgd.min.js"></script>
<script>
    $(function() {
        $(".input-file").fileinput({
            showPreview: false,
            maxFileCount: 1,
            showCaption: false,
            dropZoneEnabled: false,
            allowedFileTypes: ["image"]
        }).on('change', function(event) {
                console.log("change", event);
                var files = event.currentTarget.files;
                var filesize = ((files[0].size/1024)/1024).toFixed(4); // MB
                if (filesize > 1) {
                    Toast.create("Error - too large", 'File should be less than 1Mb', TOAST_STATUS.DANGER);
                    $(this).fileinput('clear');
                }
            }
        ).on('fileuploaded', function(event, previewId, index, fileId) {
                Toast.create("Success", 'File uploaded', TOAST_STATUS.SUCCESS);
                location.reload();
            }).on('fileuploaderror', function(event, data, msg) {
                Toast.create("Error", 'An error occurs during the upload', TOAST_STATUS.DANGER);
                console.log('--- File Upload Error', 'ID: ' + data.fileId + ', Thumb ID: ' + data.previewId);
            });
            
    });
</script>
@endpush