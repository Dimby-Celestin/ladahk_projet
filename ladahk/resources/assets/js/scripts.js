$(document).ready(function() {
    $('#recipeCarousel').carousel({
        interval: 2500
    });
    
    $('#carouselHome .carousel-item').each(function(){
        var minPerSlide = 4;
        var next = $(this).next();
        if (!next.length) {
            next = $(this).siblings(':first');
        }
        next.children(':first-child').clone().appendTo($(this));
        for (var i=0;i<minPerSlide;i++) {
            next=next.next();
            if (!next.length) {
                next = $(this).siblings(':first');
            }
            next.children(':first-child').clone().appendTo($(this));
        }
    });

    $('#carouselHome2 .carousel-item').each(function(){
        var minPerSlide = 4;
        var next = $(this).next();
        if (!next.length) {
            next = $(this).siblings(':first');
        }
        next.children(':first-child').clone().appendTo($(this));
        for (var i=0;i<minPerSlide;i++) {
            next=next.next();
            if (!next.length) {
                next = $(this).siblings(':first');
            }
            next.children(':first-child').clone().appendTo($(this));
        }
    });

    $('#carouselInfo .carousel-item').each(function(){
        var minPerSlide = 2;
        var next = $(this).next();
        if (!next.length) {
            next = $(this).siblings(':first');
        }
        next.children(':first-child').clone().appendTo($(this));
        for (var i=0;i<minPerSlide;i++) {
            next=next.next();
            if (!next.length) {
                next = $(this).siblings(':first');
            }
            next.children(':first-child').clone().appendTo($(this));
        }
    });

    $('#feedPhotoCarousel .carousel-item').each(function() {
        var next = $(this).next();
        if (!next.length) {
        next = $(this).siblings(':first');
        }
        next.children(':first-child').clone().appendTo($(this));
    
        for (var i = 0; i < 4; i++) {
        next = next.next();
        if (!next.length) {
            next = $(this).siblings(':first');
        }
    
        next.children(':first-child').clone().appendTo($(this));
        }
    });
          

    $(document).click(function (event) {
        if (!$(event.target).is('.navbar-collapse *')) {
          $('.navbar-collapse').collapse('hide');
        }
    });
    $('input[type=submit]').click(function(){
        $(this).attr('disabled', 'disabled');
    });   
    
    
    $(".slick").slick({

        // normal options...
        //infinite: false,
        //lazyLoad: 'ondemand',
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        infinite: true,
        autoplaySpeed: 2000,
        dots: false,
        prevArrow: false,
        nextArrow: false,
      
        // the magic
        responsive: [{      
            breakpoint: 1224,
            settings: {
                slidesToShow: 2,
                infinite: true,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 2000,
                dots: false,
                prevArrow: false,
                nextArrow: false,
            }      
        }, 
        {      
            breakpoint: 700,
            settings: {
                slidesToShow: 2,
                dots: true,
                infinite: true,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 2000,
                dots: false,
                prevArrow: false,
                nextArrow: false,
            }      
        }, {      
            breakpoint: 300,
            settings: "unslick" // destroys slick      
        }]
    });
    $(".next-slick").click(function() {
        $(".slick").slick("slickNext");
    });
    $(".prev-slick").click(function() {
        $(".slick").slick("slickPrev");
    });

    $(".slick-2").slick({

        // normal options...
        //infinite: false,
        //lazyLoad: 'ondemand',
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        infinite: true,
        autoplaySpeed: 2000,
        dots: false,
        prevArrow: false,
        nextArrow: false,
      
        // the magic
        responsive: [{      
            breakpoint: 1224,
            settings: {
                slidesToShow: 2,
                infinite: true,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 2000,
                dots: false,
                prevArrow: false,
                nextArrow: false,
            }      
        }, 
        {      
            breakpoint: 700,
            settings: {
                slidesToShow: 2,
                dots: true,
                infinite: true,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 2000,
                dots: false,
                prevArrow: false,
                nextArrow: false,
            }      
        }, {      
            breakpoint: 300,
            settings: "unslick" // destroys slick      
        }]
    });
    $(".next-slick-2").click(function() {
        $(".slick-2").slick("slickNext");
    });
    $(".prev-slick-2").click(function() {
        $(".slick-2").slick("slickPrev");
    });
});