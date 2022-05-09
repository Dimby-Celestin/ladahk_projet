@extends('layouts.app')

@section('title')
Home page
@endsection

@section('content')

 <!-- Masthead -->
 <header class="masthead text-white text-center">
   
   <div class="container bottom-head">
     <div class="row">
       <div class="col-xl-9 mx-auto mb-2">

         <!--p class="mb-5 pl-5 pr-5 text-grey mt-2">
           Across New Zeland, you can find everything from untamed wilderness to rich culture.
           Find  inspiration in towering mountains and mist-cloacked fjords
         </p-->
       </div>

     </div>
   </div>
   <div>
    <div class="bannercontainer ">
      <div class="banner fullscreenbanner">
        <ul>
          @foreach($sliders as $slider)
          <li data-transition="boxslide" data-slotamount="7" >
            <img src="{{$slider->image->path}}">
            <div class="caption sft big_white"  data-x="center" data-y="bottom" data-voffset="-180"  data-speed="700" data-start="1700" data-easing="easeOutBack">
              {!! $slider->content !!}
            </div>
            <div class="caption lfr medium_grey"  data-x="center" data-y="bottom" data-voffset="-100"  data-speed="300" data-start="2000">
              <a href="/about-ladakh" class="btn btn-lg btn-light text-theme text-bold">LEARN MORE</a>
            </div>
          </li>
          @endforeach
          </ul>
      </div>
      </div>
   </div>

 </header>


  <!-- Icons Grid -->
  <section class="bg-light text-center pt-5 pb-5 p-relative z-index-max">
    <div class="container news">
      <div class="row">
        <div class="col-lg-4">
          <div class="mx-auto mb-5 mb-lg-0 mb-lg-3">
            <div class="g-title">NEWS & UPDATES</div>
            <ul class="text-left mt-3 pl-4 newslist">
              @foreach($news as $new)
              <li class="">
                <a class="text-dark-1" href="{{url('/news/'.$new->slug)}}">{{$new->title}}</a>
              </li>
              @endforeach
            </ul>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="mx-auto mb-5 mb-lg-0 mb-lg-3 newslist">
            <div class="g-title">ROAD <span>TO LADAKH</span></div>
            <ul class="text-left mt-3 pl-4">
              @foreach($roadtoladakh as $road)
              <li class="">
                <a class="text-dark-1" href="{{url('/road/'.$road->slug)}}">{{$road->title}}</a>
              </li>
              @endforeach
            </ul>
          </div>
        </div>
        <div class="col-lg-4 pr-0">
          <div class="mx-auto mb-0 mb-lg-3">
            <div class="g-title calendar- d-flex">
              <span id="month"></span> 
              <div class="ml-2" id="years"></div>              
            </div>
            <div class="date-btn">
              <span class="carousel-control-prev-icon t-3" id="prevDate"></span>
              <span class="carousel-control-next-icon t-3" id="nextDate"></span>
            </div>
            <div class="calendar pt-2">
              <div id="my-calendar" data-navigator="true" data-navigator-position="right"></div>            
            </div>
            <div class="d-flex calendar-info">
              <div><span class="b-violet"></span> Gazetted Holiday</div>
              <div><span class="b-red"></span> Restricted Holiday</div>
              <div><span class="b-green"></span> Weekly Off</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>


  <!-- Image Showcases -->
  <section class="scrooler">
    <div class="container pt-5 pb-5">
      <div class="row no-gutters">
        <div class="col-md-6 col-lg-8 text-white">
          <h3 class="text-grey mustToDo">Must to-dos in Ladakh</h3>
        </div>
        <div class="col-md-6 col-lg-4 text-right">
          <a class="btn text-white prev-slick"  role="button">
            <span class="carousel-control-prev-icon t-3" aria-hidden="true"></span>
          </a>
          <a class="btn text-white next-slick" role="button">
            <span class="carousel-control-next-icon t-3" aria-hidden="true"></span>
          </a>
          <a href="{{url('/must-to-do')}}" class="btn btn-md btn-outline-light ml-3 exploreAll">EXPLORE ALL</a>
        </div>        
          

        <!--div class="col-lg-12 mt-5 height-horizontal" id="container1">          
          <div id="carouselExampleIndicators" class="carousel slide w-100" data-ride="carousel">
            <div class="carousel-inner w-100" id="carouselHome">
              @foreach($musttodo as $article)
              <div class="carousel-item {{$loop->index === 0 ? 'active' : ''}}" >
                <div class="content-slide content-item">
                  <img class="img-fluid img-slide" src="{{isset($article->thumbnail) &&  isset($article->thumbnail->path)? $article->thumbnail->realPath: 'img/slide/ladakh-adventure-sports-39.png'}}" alt="">              
                  <div class="div-slide">  
                      <a class="text-slide" href="{{url('/article/'.$article->slug)}}">
                        {{$article->title}}
                      </a>
                  </div>
                </div>
              </div>
              @endforeach               
            </div>                        
          </div>                                
        </div-->

        <div class="col-lg-12 mt-5 height-horizontal">
          <div class="slick w-100">            
            @foreach($musttodo as $article)
              <div class="content-">
                <img class="img-fluid img-slide" src="{{isset($article->thumbnail) &&  isset($article->thumbnail->path)? $article->thumbnail->realPath: 'img/slide/ladakh-adventure-sports-39.png'}}" alt="">              
                <div class="div-slide">  
                    <a class="text-slide" href="{{url('/article/'.$article->slug)}}">
                      {{$article->title}}
                    </a>
                </div>
              </div>
            @endforeach 
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- text greek -->
  <section  id="mapholder">
      <img style="" src="img/map/image-2.jpeg"
      class="Image-1">
      <ul class="marker-pro">
        <li class="p1">
            <button type="button" class="btn btn-lg btn-danger popover big-pointer" 
            data-toggle="popover" data-content='<img class="card-img-left" src="img/image3.jpg" alt="Card image">
            <div class="card-body">
              <p class="popover-body mt-0 pt-0 pb-0 pl-0 pr-0">Maryul of Ngari or the Kingdom of Ladakh, was a west Tibetan kingdom based in modern-day Ladakh and Tibet Autonomous Region. The Maryul kingdom was based in Shey and evolved into the modern Ladakh. The kingdom was founded by Lhachen Palgyigon in CE 930</p>
            </div>'></button>
        </li>
        <li class="p2">
            <button type="button" class="btn btn-lg btn-danger popover" data-toggle="popover" 
           data-content='
           <div class="card-body">
             <p class="popover-body mt-0 pt-0 pb-0 pl-0 pr-0">This was the period in which Ladakh underwent Tibetanization, eventually making Ladakh inhabited by a mixed population, the predominant racial strain of which was Tibetan.</p>
           </div>'></button>
        </li>
        <li class="p3">
            <button type="button" class="btn btn-lg btn-danger popover" data-toggle="popover"
            data-content='<img class="card-img-left" src="img/image1.png" alt="Card image">
            <div class="card-body">
              <p class="popover-body mt-0 pt-0 pb-0 pl-0 pr-0">The Namgyal dynasty was a line of rulers of a kingdom in modern-day Ladakh that lasted from 1460 to 1842.</p>
            </div>'></button>
        </li>
        <li class="p4">
            <button type="button" class="btn btn-lg btn-danger popover" 
            data-toggle="popover" data-content='
            <div class="card-body">
              <p class="popover-body mt-0 pt-0 pb-0 pl-0 pr-0">Bhagan established the Namgyal dynasty in 1460 after he formed an alliance with the people of Leh and dethroned the Maryul king Blo-gros-mc-og-ldan and his brothers drun-pa A-li and Slab-bstan-dar-rgyas.</p>
            </div>'></button>
        </li>
        <li class="p5">
            <button type="button" class="btn btn-lg btn-danger popover" data-toggle="popover" 
           data-content='
           <div class="card-body">
             <p class="popover-body mt-0 pt-0 pb-0 pl-0 pr-0">He took the surname Namgyal (meaning victorious) and founded a new dynasty which still survives today. </p>
           </div>'></button>
        </li>
        <li class="p6">
            <button type="button" class="btn btn-lg btn-danger popover" data-toggle="popover"
            data-content='
            <div class="card-body">
              <p class="popover-body mt-0 pt-0 pb-0 pl-0 pr-0">During the reign of Jamyang Namgyal, Baltistan was invaded by Balti ruler Ali Sher Khan Anchan in response to Jamyang&#39;s killing of some Muslim rulers of Baltistan.</p>
            </div>'></button>
        </li>
        <li class="p7">
            <button type="button" class="btn btn-lg btn-danger popover" data-toggle="popover" 
           data-content='
           <div class="card-body">
             <p class="popover-body mt-0 pt-0 pb-0 pl-0 pr-0">According to some accounts, Jamyang secured a peace treaty and gave his daughter&#39;s hand in marriage to Ali Sher Khan. Jamyang was given the hand of a Muslim princess, Gyal Khatun&#39;s hand in marriage.</p>
           </div>'></button>
        </li>
        <li class="p8">
            <button type="button" class="btn btn-lg btn-danger popover" data-toggle="popover"
            data-content='
            <div class="card-body">
              <p class="popover-body mt-0 pt-0 pb-0 pl-0 pr-0">Sengge Namgyal (1616–1642), known as the "lion" king was the son of Jamyang and Gyal. He made efforts to restore Ladakh to its old glory by an ambitious and energetic building programme by rebuilding several gompas and shrines, the most famous of which is Hemis. </p>
            </div>'></button>
        </li>
        <li class="p9">
            <button type="button" class="btn btn-lg btn-danger popover" data-toggle="popover"
            data-content='
            <div class="card-body">
              <p class="popover-body mt-0 pt-0 pb-0 pl-0 pr-0">He also moved the royal headquarters from Shey Palace to Leh Palace.</p>
            </div>'></button>
        </li>
        <li class="p10">
            <button type="button" class="btn btn-lg btn-danger popover" data-toggle="popover"
            data-content='
            <div class="card-body">
              <p class="popover-body mt-0 pt-0 pb-0 pl-0 pr-0">He expanded the kingdom into Zanskar and Spiti, but was defeated by the Mughals, who had already occupied Kashmir and Baltistan. </p>
            </div>'></button>
        </li>
        <li class="p11">
            <button type="button" class="btn btn-lg btn-danger popover" data-toggle="popover"
            data-content='
            <div class="card-body">
              <p class="popover-body mt-0 pt-0 pb-0 pl-0 pr-0">His son Deldan Namgyal (1642-1694) had to placate the Mughal emperor Aurangzeb by building a mosque in Leh.</p>
            </div>'></button>
        </li>
        <li class="p12">
            <button type="button" class="btn btn-lg btn-danger popover" data-toggle="popover"
            data-content='
            <div class="card-body">
              <p class="popover-body mt-0 pt-0 pb-0 pl-0 pr-0">The Namgyal dynasty ended in 1842 after a surprise invasion of Ladakh from the Maharaja Ranjit Singh of Punjab.</p>
            </div>'></button>
        </li>
        <li class="p13">
            <button type="button" class="btn btn-lg btn-danger popover" data-toggle="popover"
            data-content='
            <div class="card-body">
              <p class="popover-body mt-0 pt-0 pb-0 pl-0 pr-0">By the beginning of the 19th century, the Mughal empire had collapsed and Sikh rule had been established in Punjab and Kashmir.</p>
            </div>'></button>
        </li>
        <li class="p14">
            <button type="button" class="btn btn-lg btn-danger popover" data-toggle="popover"
            data-content='
            <div class="card-body">
              <p class="popover-body mt-0 pt-0 pb-0 pl-0 pr-0">Raja Gulab Singh, acting under the suzerainty of the Sikh monarch Ranjit Singh, sent his general Zorawar Singh to invade Ladakh in 1834. King Tshespal Namgyal was dethroned and exiled to Stok. Ladakh came under Dogra rule and was later incorporated into the princely state of Jammu and Kashmir under British suzerainty.</p>
            </div>'></button>
        </li>
        <li class="p15">
            <button type="button" class="btn btn-lg btn-danger popover" data-toggle="popover"
            data-content='
            <div class="card-body">
              <p class="popover-body mt-0 pt-0 pb-0 pl-0 pr-0">A Ladakhi rebellion in 1842 was crushed and Ladakh was incorporated into the Dogra state of Jammu and Kashmir.</p>
            </div>'></button>
        </li>
        <li class="p16">
            <button type="button" class="btn btn-lg btn-danger popover" data-toggle="popover"
            data-content='
            <div class="card-body">
              <p class="popover-body mt-0 pt-0 pb-0 pl-0 pr-0">European influence began in Ladakh in the 1850s and increased. Geologists, sportsmen, and tourists began exploring Ladakh. In 1885, Leh became the headquarters of a mission of the Moravian Church.</p>
            </div>'></button>
        </li>
        <li class="p17">
            <button type="button" class="btn btn-lg btn-danger popover" data-toggle="popover"
            data-content='
            <div class="card-body">
              <p class="popover-body mt-0 pt-0 pb-0 pl-0 pr-0">In 1947, the partition left Ladakh a part of the Indian state of Jammu and Kashmir, to be administered from Srinagar.</p>
            </div>'></button>
        </li>
        <li class="p18">
            <button type="button" class="btn btn-lg btn-danger popover" data-toggle="popover"
            data-content='
            <div class="card-body">
              <p class="popover-body mt-0 pt-0 pb-0 pl-0 pr-0">In 1949, China closed the border between Nubra and Sinkiang, blocking the 1000-year-old trade route from India to Central Asia.</p>
            </div>'></button>
        </li>
        <li class="p19">
            <button type="button" class="btn btn-lg btn-danger popover" data-toggle="popover"
            data-content='
            <div class="card-body">
              <p class="popover-body mt-0 pt-0 pb-0 pl-0 pr-0">In 1950, China invaded Tibet, and thousands of Tibetans, including the Dalai Lama sought refuge in India.</p>
            </div>'></button>
        </li>
        <li class="p20">
            <button type="button" class="btn btn-lg btn-danger popover" data-toggle="popover"
            data-content='
            <div class="card-body">
              <p class="popover-body mt-0 pt-0 pb-0 pl-0 pr-0">In 1995, the Ladakh Autonomous Hill Development Council was created.</p>
            </div>'></button>
        </li>
        <li class="p21">
            <button type="button" class="btn btn-lg btn-danger popover" data-toggle="popover"
            data-content='<img class="card-img-left" src="img/image2.jpg" alt="Card image">
            <div class="card-body">
              <p class="popover-body mt-0 pt-0 pb-0 pl-0 pr-0">In August 2019, a reorganisation act was passed by the Parliament of India which contained provisions to reconstitute Ladakh as a union territory, separate from the rest of Jammu and Kashmir on 31 October 2019.</p>
            </div>'></button>
        </li>
      </ul>
  </section>



  <!-- explore-ladakh -->
  <section class="explore-ladakh">
    <div class="container pt-5 pb-5">
      <div class="row no-gutters">
        <div class="col-md-6 col-lg-8">
          <h1 class="display-2 text-white lh-86"><strong>EXPLORE<br/>LADAKH</strong></h1>
          <p class="mb-0 h3 text-white text-white-2 f-sp-l">
            Information for Tourists &  the  curious ones.  
          </p>
        </div>
        <div class="col-md-6 col-lg-4 text-right align-self-center">
          <a class="btn btn-lg btn-warning ml-3" href="{{url('/info')}}">EXPLORE</a>
        </div>           
      </div>
    </div>
  </section>

   <!-- Image Showcases -->
   <section class="scrooler">
      <div class="container pt-5 pb-5">

        <div class="col-md-12 col-lg-12 text-right">
          <a class="btn text-white prev-slick-2" role="button">
            <span class="carousel-control-prev-icon t-3" aria-hidden="true"></span>
          </a>
          <a class="btn text-white next-slick-2" role="button">
            <span class="carousel-control-next-icon t-3" aria-hidden="true"></span>
          </a>
        </div> 

        <!--div class="col-lg-12 mt-5 height-horizontal" id="container1">          
          <div id="carouselIndicators" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner" id="carouselHome2">
              @foreach ($categories as $category)
              <div class="carousel-item {{$loop->index === 0 ? 'active' : ''}}" >
                <div class="content-slide2 ">
                  <img class="img-fluid img-slide2" 
                  src="{{isset($category->image) &&  isset($category->image->path)? $category->image->realPath: 'img/slide/ladakh-adventure-sports-39.png'}}" alt="">              
                  <div class="div-slide2">  
                    <a class="text-slide" href="{{url('cat/'.$category->slug)}}">
                      {{$category->name}}
                    </a>
                  </div>
                </div>
              </div>
              @endforeach               
            </div>                        
          </div>  
        </div-->   
        
        <div class="col-lg-12 mt-5 height-horizontal">
          <div class="slick-2 w-100">            
            @foreach ($categories as $category)
              <div class="content-2">
              <img class="img-fluid img-slide2" 
                  src="{{isset($category->image) &&  isset($category->image->path)? $category->image->realPath: 'img/slide/ladakh-adventure-sports-39.png'}}" alt="">              
                <div class="div-slide2">  
                    <a class="text-slide" href="{{url('cat/'.$category->slug)}}">
                      {{$category->name}}
                    </a>
                </div>
              </div>
            @endforeach 
          </div>
        </div>

        <!--div class="row no-gutters">
          @foreach ($categories as $category)
          <div class="{{isset($category->bootstrap_class) ? $category->bootstrap_class : 'col-lg-6'}} mt-5 pl-3 pr-3">
            <div class="content-img">
              <a href="{{url('cat/'.$category->slug)}}">
              <img class="img-fluid img-slide" src="{{$category->image->path}}" alt="">              
              <div class="div-slide">                  
                  <p class="text-slide">{{$category->name}}</p>
              </div>
              </a>
            </div>
          </div>
          @endforeach         
        </div-->

      </div>
  </section>



  <!-- Image Showcases -->
  @if (isset($videos) && $videos)
  <section class="bg-light" id="video">
    <div class="container pt-5 pb-5">
      <div class="row ">
        <div class="col-lg-12 mt-4">          
          <h2 class="text-dark-4"><strong>Ladakh in videos.</strong></h2>       
        </div>

        <div class="col-lg-9 mt-4">
          <video class="video" id="video-player" controls>
            <source id="video-source" src="{{$videos->first()->url}}" type="video/mp4">
            Your browser does not support HTML video.
          </video>
        </div>
        <div class="col-lg-3 mt-4">
          <div class="list">
            <ul class="text-right mt-3 pl-4">
              @for($i = 0; $i < count($videos); $i++)
              <li class="list-video {{$i == 0 ? 'active' : ''}}" id="video-{{$i}}" data-attr="{{$videos[$i]->url}}">{{$videos[$i]->type}} <span></span></li>
              @endfor
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  @endif
@endsection
@push('after-scripts')
<!-- jsCalendar v1.4.4 Javascript and CSS from jsdelivr npm cdn -->
<script src="https://cdn.jsdelivr.net/npm/simple-jscalendar@1.4.4/source/jsCalendar.min.js" integrity="sha384-0LaRLH/U5g8eCAwewLGQRyC/O+g0kXh8P+5pWpzijxwYczD3nKETIqUyhuA8B/UB" crossorigin="anonymous"></script>
<script type="text/javascript" src="rs-plugin/js/jquery.themepunch.plugins.min.js"></script>
<script type="text/javascript" src="rs-plugin/js/jquery.themepunch.revolution.min.js"></script>

<script>
    var calendar = new jsCalendar('#my-calendar');
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var dates = @json($calendars);
    var gazettedDates = dates.filter(i => i.kind === 'gazetted_holiday').map(i => (new Date(i.date)).setHours(0,0,0));
    var gazettedTitle = dates.filter(i => i.kind === 'gazetted_holiday').map(i => i.title);
    var restrictedDates = dates.filter(i => i.kind === 'restricted_holiday').map(i => (new Date(i.date)).setHours(0,0,0));
    var restrictedTitle = dates.filter(i => i.kind === 'restricted_holiday').map(i => i.title);
    // Make changes on the month element
    calendar.onMonthRender(function(index, element, info) {
        // Show month index
        var month = index + 1;
        element.textContent += ' (' + (month > 9 ? '' : '0') + month + '/' + (info.start.getYear() + 1900) + ')';
        $('#month').text(monthNames[info.start.getMonth()]); 
        $('#years').text(info.start.getFullYear()); 
    });
    // Make changes on the date elements

    calendar.onDateRender(function(date, element, info) {
        // Make weekends bold and red
        if (!info.isCurrent && (date.getDay() == 0 || date.getDay() == 6)) {
            var newSpan = document.createElement("div");
            newSpan.innerHTML = '<span style="top: -10px;margin: auto;display: block;width: 4px;height: 4px;border-radius: 50%;background-color: #17dd3d;position: relative;"></span>';
            element.appendChild(newSpan);
            //element.style.color = (info.isCurrentMonth) ? '#c32525' : '#ffb4b4';
        }
        if (gazettedDates.indexOf(date.getTime()) > -1) {
            const index = gazettedDates.indexOf(date.getTime());
            
            var newSpan = document.createElement("div");
            newSpan.innerHTML = '<span style="top: -10px;margin: auto;display: block;width: 4px;height: 4px;border-radius: 50%;background-color: #bc29fd;position: relative;"></span>';
            element.appendChild(newSpan);
            element.style.cursor = 'pointer';
            $(element).popover({
              content: gazettedTitle[index],
              placement: 'top', container: 'body'});
              element.classList.add("pop");
        }
        if (restrictedDates.indexOf(date.getTime()) > -1) {
            const index = restrictedDates.indexOf(date.getTime());

            var newSpan = document.createElement("div");
            newSpan.innerHTML = '<span style="top: -10px;margin: auto;display: block;width: 4px;height: 4px;border-radius: 50%;background-color: #ff0031;position: relative;"></span>';
            element.appendChild(newSpan);
            element.style.cursor = 'pointer';
            $(element).popover({content: restrictedTitle[index], trigger: 'click',
            placement: 'top', container: 'body'});
            element.classList.add("pop");
        }
    });
    calendar.onDateClick(function(event, date){
        $('.popover').popover('hide');
        $(event.target).popover('show');
    });

    $('#prevDate').click(function() {
      calendar.previous();
      calendar.refresh();
    });
    $('#nextDate').click(function(index, element, info, date) {
      calendar.next();
      calendar.refresh();
    });

    $('body').click(function() {
        $('.pop').popover('hide');
    })
    // Refresh layout
    calendar.refresh();
</script>
<script>
    $(document).ready(function() {
        var source = document.getElementById('video-source');
        var video = document.getElementById('video-player');
        $('.list-video').click(function(e) {
              $('.list-video').removeClass('active')
              $(this).addClass('active');
              setTimeout(() => {
                  var videoSrc = $(this).attr('data-attr');
                  source.src = videoSrc;
                  video.load();
              }, 5);                
          });
        var d = new Date();
        var y = d.getFullYear();
        //document.getElementById("month").innerHTML = m;
        $('#month').text(monthNames[d.getMonth()]); 
        $('#years').text(y); 
    });
    $('[data-toggle="popover"]').popover({
      placement: 'top', trigger: 'focus', html: true,
      template: `<div class="popover role="tooltip"">
          <div class="arrow"></div>
          <div class="card card-pro-map popover-body">
            
          </div>        
        </div>`
    });  


    $(document).ready(function() {
      const width = $('.Image-1').width();
      const w100 = width / 100;
      console.log('width :', width)
      const heightImg = width / 1.554;
      const h100 = heightImg / 100;
      let decalTop = 0;
      let decalLeft = 0;
      let isRight = false;

      if (width < 600) {
        decalTop = 5;
        decalLeft = -1;
        isRight = true;
      } else if (width < 900) {
        decalTop = 20;
      } else if (width > 1400) {
        decalLeft = +0.6;
      }

      $('.marker-pro').css({width: width + 'px', height: heightImg + 'px', position: 'relative', 'margin-top': - heightImg + 'px' });
      $('.Image-1').css({ height: heightImg });
      $('.p1 button').css({ 
        left: ((width * 0.219) / w100 ) + decalLeft + 'vw', 
        top: ((heightImg ) * 0.1357 ) - decalTop + 'px' 
      });
      $('.p2 button').css({ 
        left: ((width * 0.385) / w100 ) + decalLeft + 'vw', 
        top: ((heightImg ) * 0.1357 ) - decalTop + 'px' 
      });
      $('.p3 button').css({ 
        left: ((width * 0.502) / w100 ) + decalLeft + 'vw', 
        top: ((heightImg ) * 0.223 ) - decalTop + 'px' 
      });
      $('.p4 button').css({ 
        left: ((width * 0.643) / w100 ) + decalLeft + 'vw', 
        top: ((heightImg ) * 0.19 ) - decalTop + 'px' 
      });
      $('.p5 button').css({ 
        left: ((width * 0.777) / w100 ) + decalLeft + 'vw', 
        top: ((heightImg ) * 0.138 ) - decalTop + 'px' 
      });
      $('.p6 button').css({ 
        left: isRight ? ((width * 0.905) / w100 ) + decalLeft + 'vw' : ((width * 0.920) / w100 ) + decalLeft + 'vw', 
        top: ((heightImg ) * 0.185 ) - decalTop + 'px' 
      });
      $('.p7 button').css({ 
        left: isRight ? ((width * 0.905) / w100 ) + decalLeft + 'vw' : ((width * 0.917) / w100 ) + decalLeft + 'vw', 
        top: ((heightImg ) * 0.39 ) - decalTop + 'px' 
      });
      $('.p8 button').css({ 
        left: ((width * 0.835) / w100 ) + decalLeft + 'vw', 
        top: ((heightImg ) * 0.42 ) - decalTop + 'px' 
      });
      $('.p9 button').css({ 
        left: ((width * 0.725) / w100 ) + decalLeft + 'vw', 
        top: ((heightImg ) * 0.487 ) - decalTop + 'px' 
      });
      $('.p10 button').css({ 
        left: ((width * 0.617) / w100 ) + decalLeft + 'vw', 
        top: ((heightImg ) * 0.392 ) - decalTop + 'px' 
      });
      $('.p11 button').css({ 
        left: ((width * 0.49) / w100 ) + decalLeft + 'vw', 
        top: ((heightImg ) * 0.465 ) - decalTop + 'px' 
      });
      $('.p12 button').css({ 
        left: ((width * 0.365) / w100 ) + decalLeft + 'vw', 
        top: ((heightImg ) * 0.402 ) - decalTop + 'px' 
      });
      $('.p12 button').css({ 
        left: ((width * 0.365) / w100 ) + decalLeft + 'vw', 
        top: ((heightImg ) * 0.402 ) - decalTop + 'px' 
      });
      $('.p13 button').css({ 
        left: ((width * 0.244) / w100 ) + decalLeft + 'vw', 
        top: ((heightImg ) * 0.335 ) - decalTop + 'px' 
      });
      $('.p14 button').css({ 
        left: ((width * 0.104) / w100 ) + decalLeft + 'vw', 
        top: ((heightImg ) * 0.385 ) - decalTop + 'px' 
      });
      $('.p15 button').css({ 
        left: ((width * 0.113) / w100 ) + decalLeft + 'vw', 
        top: ((heightImg ) * 0.555 ) - decalTop + 'px' 
      });
      $('.p16 button').css({ 
        left: ((width * 0.216) / w100 ) + decalLeft + 'vw', 
        top: ((heightImg ) * 0.73 ) - decalTop + 'px' 
      });
      $('.p17 button').css({ 
        left: ((width * 0.31) / w100 ) + decalLeft + 'vw', 
        top: ((heightImg ) * 0.875 ) - decalTop + 'px' 
      });
      $('.p18 button').css({ 
        left: ((width * 0.326) / w100 ) + decalLeft + 'vw', 
        top: ((heightImg ) * 0.642 ) - decalTop + 'px' 
      });
      $('.p19 button').css({ 
        left: ((width * 0.49) / w100 ) + decalLeft + 'vw', 
        top: ((heightImg ) * 0.693 ) - decalTop + 'px' 
      });
      $('.p20 button').css({ 
        left: ((width * 0.645) / w100 ) + decalLeft + 'vw', 
        top: ((heightImg ) * 0.667 ) - decalTop + 'px' 
      });
      $('.p21 button').css({ 
        left: ((width * 0.795) / w100 ) + decalLeft + 'vw', 
        top: ((heightImg ) * 0.746 ) - decalTop + 'px' 
      });

      if (width < 600) {  
        $('.p1 button').removeClass('big-pointer');
      }
    });
    $(document).ready(function() {
      $('.fullscreenbanner').revolution({
         delay:9000,
         startwidth:960,
         startheight:600,
         autoHeight:"on",
         fullScreenAlignForce:"on",
 
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
         navigationArrows:"nexttobullets",
         navigationStyle:"square",
 
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
</script>
@endpush
@push('after-styles')
<link rel="stylesheet" type="text/css" href="rs-plugin/css/settings.css" media="screen" />
<style>
.bannercontainer {
	width:100%;
	position:relative;
	padding:0;
}

.bullet  {
  display: none !important;
}

.tp-leftarrow.square {
  transform: scale(2);
  margin-right: 5px;
  bottom: 10px;
}
.tp-rightarrow.square {
  transform: scale(2);
  margin-left: 5px;
  bottom: 10px;
}
.caption {
  background-color: transparent !important;
}
</style>
@endpush