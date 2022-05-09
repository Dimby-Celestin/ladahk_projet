@extends('layouts.app')

@section('title')
Posts page
@endsection

@section('content')

<section class="bg-light pt-content pb-5" id="info">
    <div class="container">
      <div class="row">
        <div class="col-8 mt-5">
          <div class="mx-auto mb-3 mb-lg-0 mb-lg-3 mt-3">
            <div>
                <h1 class="title text-left mt-3 text-dark-4">Information Center.</h1>               
            </div>
            <p class="text-left mt-4 description">
                Welcome to the information centre.
            </p>
            <p class="text-left mt-4 description">
                Here you can get all the information, whether it’s to find the cultural places, or to look for your next adventure. Use the filters below or search for a specific thing.  
            </p>
          </div>
        </div>   
        <div class="col-4">                    
            <img class="d-block img-right" src="/img/ankur-arya-djbaKcyBZfY-unsplash.png " alt="image">
        </div>   

        <div class="col-lg-12 mt-5 pl-0 hr d-flex pb-4">     
            <div class="row">      
                <div class="col-6 col-sm-4 col-md-4">      
                    <label>Filter by location</label>
                    <div class="dropdown">
                        <select class="btn btn-outline-dark select-pro" id="location" name="location">
                            <option value="" selected>Ladakh</option>
                            @foreach($locationCategories as $item)
                            <option>{{$item}}</option>
                            @endforeach
                        </select>
                    </div>
                </div>

                <div class="col-6 col-sm-4 col-md-4">      
                    <label>Filter by activities</label>
                    <div class="dropdown">
                        <select class="btn btn-outline-dark select-pro" name="activity" id="activity" placholder="Activity">
                            <option value="" selected>Activity</option>
                            @foreach($activityCategories as $item)
                            <option>{{$item}}</option>
                            @endforeach
                        </select>
                    </div>
                </div>

                <div class="col-6 col-sm-4 hr-left">    
                      
                    <label>Search</label>
                    <div class="input-group mb-3">
                        <input type="search" id="search" name="search" class="form-control search" placeholder="Search" aria-label="Recipient's username" aria-describedby="basic-addon2">
                        <div class="input-group-append">
                            <i class="fa fa-search fa-lg"></i>
                        </div>
                      </div>
                </div>
                
                <div class="col-lg-12 pr-5 select-ladakh" id="sublocations" style="display:none;">
                    <h1 class="title-2  text-left">
                        Location on <span class="selected-title"> LADAKH </span> <span class="gray">(Click on a location to know more)</span>
                     </h1>
                    <div id="sublocations-tag">
                        <span class="badge badge-light">New</span>
                        <span class="badge badge-light">New</span>
                        <span class="badge badge-light">New</span>
                    </div>
                </div>
            </div>
        </div>    

   

        <!-- default Ladakh --> 
        <div class="col-lg-12 mt-5 pr-5 pb-4 hr pl-0 select-ladakh">  
            <h1 class="title-2  text-left">
               <span class="selected-title"> LADAKH</span> <span class="gray">(Click on an option to know more)</span>
            </h1>  

             <!-- Icons Grid -->
            <section class="bg-light text-center pt-2 pb-5">
                <div class="container news">
                    <div class="row">
                        @foreach($subCategories as $subCategory)
                        <div class="col-lg-4" id="{{str_slug($subCategory)}}">
                            <div class="mx-auto mb-5 mb-lg-0 mb-lg-3">
                                <div class="g-title pl-0"> <span>{{$subCategory}}</span> </div>
                                <ul class="text-left mt-3 pl-0 info-ul">
                                    @foreach($data->where('subCategory', $subCategory)->get() as $item)
                                    <li class="li-1" id="popup-{{$item->id}}"> 
                                            <a  id="link-{{$item->id}}">{{$item->displayName}}</a>
                                        </li>
                                    @endforeach
                                </ul>
                                <p class="more"><a id="{{str_slug($subCategory)}}-load-more">+ more</a></p>
                            </div>
                        </div>
                        @endforeach
  
                      
                    </div>
                </div>
            </section>
        </div>  
        <!-- end default Ladakh --> 

       




        <div class="col-lg-12 mt-5 pr-0 mr-0 pb-1">  
            <h1 class="title-2 text-left select-ladakh">
                <span class="selected-title"> LADAKH</span>
            </h1>  
        </div>              
        
        

        <!-- Modal fullscreen -->
        <div class="modal fade modalinfo" id="modal1" tabindex="-1" role="dialog" aria-labelledby="modal1" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                <div class="modal-header no-bord ">
                    <h1 class="modal-title title-2 text-left" id="titleId"></h1>
                    <button type="button" class="close opacity" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body pt-0 overflow-y-pro">
                    <!-- carousel -->
                
                    <div class="main-carousel">
                            <div class="carousel-cell">
                                <img class="carousel-cell-image" id="modal-image"
            src="" alt="" />
                            </div>
                        
                        </div>

                    <div class="pt-0 pr-3 no-bord mt-5">
                        <p class="texti" id="modal-text">
                            
                        </p>
 
                    </div>
                </div>
                
                </div>
            </div>
        </div>
       

      </div>
    </div>
  </section>

<div class="col-lg-12 map" id="map"></div>              
@push('after-styles')
<link rel="stylesheet" href="/css/flickity.css" media="screen">
<style>
#mapid {
    height: 500px;
}
</style>
@endpush
@endsection
@push('after-scripts')
<script src="https://maps.googleapis.com/maps/api/js?key={{env('MAP_KEY')}}&callback=initMap&libraries=&v=weekly" defer ></script>
<script src="https://unpkg.com/@googlemaps/markerclustererplus/dist/index.min.js"></script>
<script src="/js/flickity.pkgd.min.js"></script>
<script>
    // Initialize and add the map
  
    var timeout;
    var data = @json($data->get());
    let map, markers = [], bounds, infowindow, markerCluster;
    var sublocationFilter;
    function initMap() {
        infowindow = new google.maps.InfoWindow();       
        // The location of latlng
        const latlng = { lat: 34.152588, lng: 77.577049 };
        // The map, centered at latlng
        map = new google.maps.Map(document.getElementById("map"), {
          zoom: 6,
          center: latlng,
        });
        generateMarkersFrom(data);
        generateListFrom(data);
        google.maps.event.addListener(map, 'click', function() {
            infowindow.close();
        });
   
        
    }
    function generateListFrom(data) {
        var cList = $('#places-of-interest ul');
        let filtered;
        filtered = data.filter(i => i.subCategory == "Places Of Interest");
        cList.html('');
        $.each(data.filter(i => i.subCategory == "Places Of Interest"), function(i)
        {   
            var li = $('<li/>')
                .addClass('li-1 a')
                .appendTo(cList);
            var aaa = $('<a/>')
                .addClass('link-2 b')
                .attr('id', 'popup-' + filtered[i].id)
                .text(filtered[i].displayName)
                .appendTo(li);
        });
        var cList = $('#things-to-do ul');
        cList.html('');
        filtered = data.filter(i => i.subCategory == "Things To Do");
        $.each(filtered, function(i)
        {   
            var li = $('<li/>')
                .addClass('li-1 a')
                .appendTo(cList);
            var aaa = $('<a/>')
                .addClass('link-2 b')
                .attr('id', 'popup-' + filtered[i].id)
                .text(filtered[i].displayName)
                .appendTo(li);
        });
        $('.li-1').click(function(event) {
            const id = $(event.target).attr('id').split('-').pop();
            const item = data.find(function(i) {return i.id == id});
            $('#modal-text').html(item.description);
            $('#titleId').text(item.displayName);
            $('#modal-image').attr('src', item.imageUrl);
            $('#modal1').modal('show');
            event.preventDefault();
        });
        var size_li = $("#things-to-do li").length;
        var x = 3;
        // todo
        $('#things-to-do li').hide();
        $('#things-to-do li:lt('+x+')').show();
        $('#things-to-do-load-more').hide();
        if (x < size_li) {
            $('#things-to-do-load-more').show();
        }
        $('#things-to-do-load-more').click(function () {
            $('#things-to-do li').show();
            $('#things-to-do-load-more').hide();
        });
        // poi
        size_li = $("#places-of-interest li").length;
        $('#places-of-interest li').hide();
        $('#places-of-interest li:lt('+x+')').show();
        $('#places-of-interest-load-more').hide();
        if (x < size_li) {
            $('#places-of-interest-load-more').show();
        }
        $('#places-of-interest-load-more').click(function () {
            $('#places-of-interest li').show();
            $('#places-of-interest-load-more').hide();
        });


    }
    function generateMarkersFrom(data) {
        bounds = new google.maps.LatLngBounds();
        markers = [];
        for (var i = 0; i < data.length;++i) {
            
            // The marker, positioned at latlng
            if (data[i]) {
                const item = data[i]
                const marker = new google.maps.Marker({
                    position: {lat: item.lat, lng: item.lng},
                    title: item.displayName,
                    map: map,
                });
               
                marker.addListener("click", () => {
                    infowindow.close();//hide the infowindow
                    $('.li-2').off('click');
                    infowindow.setContent(
                        `<a href="#" class="li-2"  id="modal-popup-${item.id}">${item.displayName}</a>`
                    );//update the content for this marker
                    infowindow.open(map, marker);
                    setTimeout(function() {
                        $("#modal-popup-" + item.id).click(function(event) {
                            // infowindow.close();
                            event.preventDefault();
                            const id = $(event.target).attr('id').split('-').pop();
                            const item = data.find(function(i) {return i.id == id});
                            displayModal(item);
                              // jQuery

                        });
                    })
                });
                bounds.extend({lat: item.lat, lng: item.lng});
                markers.push(marker);
            }
        }
        // map.fitBounds(bounds)
    }
    $(document).ready(function() {
        $('.li-1').click(function(event) {
            const id = $(event.target).attr('id').split('-').pop();
            const item = data.find(function(i) {return i.id == id});
            $('#modal-text').html(item.description);
            $('#titleId').text(item.displayName);
            $('#modal-image').attr('src', item.imageUrl);
            $('#modal1').modal('show');
            event.preventDefault();
        })
    });
    $('#activity').change(function(e) {
        filterUpdate();
    });
    $('#location').change(function(e) {
        sublocationFilter = null;
        filterUpdate();
    });
    $('#search').keyup(function(e) {
        filterUpdate();
    });
    var loadSubLocations = function(items) {
        if (items.length) {
            const text = $( "#location option:selected" ).text();
            const textVal = $( "#location option:selected" ).val();
            var locations = items.map(i => i.locationSubCategory)
                .filter((value, index, self) => self.indexOf(value) === index);
            $('#sublocations-tag').empty();
            locations.forEach(i => {
                $('#sublocations-tag').append('<span class="badge badge-light' + 
                    (sublocationFilter && sublocationFilter == i ? ' selected' : '' )+'">'+i+'</span>')
            });
            $('#sublocations').show();
            $('#sublocations .badge').click(function(e) {
                sublocationFilter = $(e.target).text();
                $('#sublocations .badge').not(e.target).removeClass('selected');
                $(e.target).addClass('selected');
                filterUpdate();
            });
        } else {
            $('#sublocations-tag').empty();
            $('#sublocations').hide();
        }
    };
    var filterUpdate = function() {
        if (timeout) {
            clearTimeout(timeout);
        }
        timeout = setTimeout(() => {
            const text = $( "#location option:selected" ).text();
            const textVal = $( "#location option:selected" ).val();
            const activity = $( "#activity option:selected" ).val();
            const searched = $('#search').val();
            $('.selected-title').text(text.toUpperCase());
            
    
            for (let i = 0; i < markers.length; i++) {
                markers[i].setMap(null); // remove makers
            }
            if (markerCluster) {
                markerCluster.clearMarkers();
            }
            if (textVal.trim() === '' &&  activity.trim() === '' && searched.trim() === '') {
                generateMarkersFrom(data);
                generateListFrom(data);
                $('#sublocations-tag').empty();
                $('#sublocations').hide();
            } else {
                let items;
                if ( activity.trim() !== '' && textVal.trim() === '') {
                    items = data.filter(function(k) {
                        return k.activityCategory.trim() === activity.trim()
                    });
                } else if ( activity.trim() === '' && textVal.trim() !== '') {
                    items = data.filter(function(k) {
                        return k.locationCategory.trim() === textVal.trim()
                    });
                } else if ( activity.trim() !== '' && textVal.trim() !== ''){
                    items = data.filter(function(k) {
                        return k.locationCategory.trim() === textVal.trim() && k.activityCategory.trim() === activity.trim();
                    });
                } else {
                    items = data;
                }
                // now search
                if (searched && searched.trim() !==  '') {
                    items = items.filter((item) => {
                        return item.displayName.toLowerCase().includes(searched.toLowerCase());
                    });
                }

                if (textVal.trim() !== '') {
                    loadSubLocations(items);
                } else {
                    $('#sublocations-tag').empty();
                    $('#sublocations').hide();
                }
                if (sublocationFilter) {
                    items = items.filter(i => i.locationSubCategory == sublocationFilter)
                }
                generateMarkersFrom(items);
                generateListFrom(items);
            }
        }, 500)
    }
    var displayModal = function(item) {
        $('#modal-text').html(item.description);
        $('#titleId').text(item.displayName);
        $('#modal-image').attr('src', item.imageUrl);
        $('#modal1').modal('show');
        var $carousel = $('.main-carousel').flickity(
                                { "freeScroll": true, wrapAround: true,adaptiveHeight: true,
                                "imagesLoaded": true, "cellAlign": "left" }
                            );
    }
</script>
<script>
  
</script>
@endpush