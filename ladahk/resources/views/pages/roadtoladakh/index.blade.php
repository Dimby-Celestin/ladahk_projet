@extends('layouts.app')

@section('title')
Posts page
@endsection

@section('content')

<section class="bg-light pt-content pb-5" id="article">
<div>
        @if(isset($banners) && count($banners) > 0))

        <div class="bannercontainer ">
            <div class="banner fullscreenbanner">
                <ul>
                @foreach($banners as $slider)
                <li data-transition="boxslide" data-slotamount="7" >
                    <img src="{{$slider->realPath}}">
                </li>
                @endforeach
                </ul>
            </div>
        </div>

        @else
        <div class="header-image" style="background-image: url('{{asset('images/ashwini-chaudhary.jpg')}}');"> </div>
        @endif  
    </div>
    <div class="container mt-3">
        <div class="row">
            <div class="col-lg-12 d-flex">
                <div class="mr-auto d-flex">
                    <a href="#" class="avatar inline-block mt-4">
                    
                        <img alt="Image placeholder" src="https://demos.creative-tim.com/argon-dashboard-pro/assets/img/theme/team-4.jpg">                     
                    </a>
                    <div class="inline-block ml-3 align-self-center pt-4-custom">
                        <h3 class="text-left author mb-0">Administrator</h3>
                        <p class="text-left post">
                            Admin
                        </p>
                    </div> 
                    <div class="inline-block ml-5 align-self-center pt-2 date">
                        <h3 class="text-left author">{{$roadtoladakh->created_at->format('d F Y')}}</h3>
                    </div> 
                </div>
                @if(isset($roadtoladakh->thumbnail)) 
                <div class="d-flex align-items-center justify-content-center mr-5 ml-5 pb-3">
                    <a href="{{$roadtoladakh->thumbnail->realPath}}" target="_blank"><i class="fa fa-file-o"></i> Download document here</a>
                </div>
                @endif
                <div class="d-flex align-items-center justify-content-center">
                    <div id="share-area"></div>
                </div>
            </div>

            <div class="col-lg-12 mt-5">
                <div class="mx-auto mb-5 mb-lg-0 mb-lg-3">
                    <h1 class="title2 text-left text-dark-4">{{$roadtoladakh->title}}</h1>
                    <p class="text-left mt-5 description2">
                       {!! $roadtoladakh->content !!}
                    </p>
                    
                </div>
            </div>   
            
            
            @if(isset($gallery) && count($gallery) > 0)
             <div class="col-md-12">
                <div class="d-flex  flex-nowrap">
                    @foreach($gallery as $image)
                    <div class="col-lg-3 col-md-4 col-sm-6 col-12 mt-4">
                        <div class="card-pro bg-grey" data-toggle="modal" data-target="#modal1">
                            <img class="d-block w-100" src="{{ $image->realPath }}" alt="gallery images">
                        </div>        
                    </div> 
                    @endforeach                                     
                </div>
             </div>
            @endif 
        </div>
    </div>
  </section>

@endsection


@push('after-scripts')
<script type="text/javascript" src="/rs-plugin/js/jquery.themepunch.plugins.min.js"></script>
<script type="text/javascript" src="/rs-plugin/js/jquery.themepunch.revolution.min.js"></script>
<script type="text/javascript" src="/js/social-sharing.min.js"></script>
<script>
$(document).ready(function() {
    $('.fullscreenbanner').revolution({
       delay:9000,
       startwidth:960,
       startheight:400,
       autoHeight:"off",
       fullScreenAlignForce:"off",

       onHoverStop:"on",

       thumbWidth:100,
       thumbHeight:50,
       thumbAmount:3,

       hideThumbsOnMobile:"off",
       hideBulletsOnMobile:"off",
       hideArrowsOnMobile:"off",
       hideThumbsUnderResoluition:0,

       hideThumbs:0,
       hideTimerBar:"off",

       keyboardNavigation:"on",

       navigationType:"bullet",
       navigationArrows:"solo",
       navigationStyle:"round",

       navigationHAlign:"center",
       navigationVAlign:"bottom",
       navigationHOffset:  0,
       navigationVOffset: $(window).width() < 780 ? 5 : 50,

       soloArrowLeftHalign:"left",
       soloArrowLeftValign:"center",
       soloArrowLeftHOffset:20,
       soloArrowLeftVOffset:0,

       soloArrowRightHalign:"right",
       soloArrowRightValign:"center",
       soloArrowRightHOffset:20,
       soloArrowRightVOffset:0,


       touchenabled:"on",
       swipe_velocity:"0.7",
       swipe_max_touches:"1",
       swipe_min_touches:"1",
       drag_block_vertical:"false",

       stopAtSlide:-1,
       stopAfterLoops:-1,
       hideCaptionAtLimit:0,
       hideAllCaptionAtLilmit:0,
       hideSliderAtLimit:0,

       dottedOverlay:"none",

       fullWidth:"off",
       forceFullWidth:"off",
       fullScreen:"off",
       fullScreenOffsetContainer:"#topheader-to-offset",

       shadow:0
        }); 
    });
    var el = document.getElementById('share-area');
    var links = [{
        url: 'https://twitter.com/intent/tweet?url=' + window.location.href,
        target: '_blank',
        plugin: 'twitter',
        size: 'sm'
    }, {
        plugin: 'facebook',
        url: 'https://www.facebook.com/sharer/sharer.php?u' + window.location.href,
        size: 'sm'
    }, {
    size: 'sm',
    plugin: 'qrcode'
    }];
    window.socialShare(el, links);
    </script>
@endpush
@push('after-styles')
<link rel="stylesheet" type="text/css" href="/rs-plugin/css/settings.css" media="screen" />
<link rel="stylesheet" type="text/css" href="/css/social-sharing.min.css" media="screen" />
<style>
.bannercontainer {
	width:100%;
	position:relative;
	padding:0;
}



.caption {
  background-color: transparent !important;
}
</style>
@endpush