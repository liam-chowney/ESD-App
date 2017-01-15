
//MAP STYLES

$(window).load(function() { 
	//$("#status").fadeOut(); // will first fade out the loading animation
	//$("#preloader").delay(100).fadeOut("slow"); // will fade out the white DIV that covers the website.
	$("#status").addClass('hide-status'); // will first fade out the loading animation
	$("#preloader").addClass('hide-preloader'); // will fade out the white DIV that covers the website.
    
    
});


$( document ).ready(function() {
    
    
     //click function
    
    $( ".click-hide" ).click(function() {
        
        //$( ".click-hide" ).hide();
        $( ".army-video" ).show();
        $('#ww2-app').attr("autoplay","");
    });
   
         
    
    //Fast Click - Removing 300ms delay when clicking for instant response time
    
    $(function() {
        FastClick.attach(document.body);
    });

    /*Image Sliders*/

    //Note. Every image slider must be placed within the timeout function.//
    //Image sliders put a lot of load on mobile devices and slow the performance of other animations//
    //But adding a timeout event, even for a microsecond gives a great boost in performance (41% boost to be exact)
    
    setTimeout(function() {
        //Simple Slider
        
        var owl = $('.simple-slider');
        owl.owlCarousel({
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            items:1,
            loop:true,
            margin:5,
            autoplay:true,
            autoplayTimeout:3000,
            autoplayHoverPause:true
        });
        


        $('.next-demo').click(function() {$('.demo-slider').trigger('next.owl.carousel');	return false;}); 
        $('.prev-demo').click(function() {$('.demo-slider').trigger('prev.owl.carousel');	return false;});
        
        //Homepage Slider No Transitions
        $('.circle-slider').owlCarousel({
            autoplay:true,
            autoplayTimeout:5000,
            autoplayHoverPause:true,
            loop:true,
            margin:10,
            nav:false,
            dots:false,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:2
                }
            }
        });        
        
        $('.next-home-slider').click(function() {$('.homepage-slider-transition, .homepage-slider-transition-2, .homepage-slider-transition-3, .homepage-slider-no-transition').trigger('next.owl.carousel');	return false;}); 
        $('.prev-home-slider').click(function() {$('.homepage-slider-transition, .homepage-slider-transition-2, .homepage-slider-transition-3, .homepage-slider-no-transition').trigger('prev.owl.carousel');	return false;});
        
        
        
        //Placing the Dots if Needed
        function slider_dots(){
            var dots_width = (-($('.owl-dots').width()/2));
            $('.owl-dots').css('position', 'absolute');
            $('.owl-dots').css('left', '50%');
            $('.owl-dots').css('margin-left', dots_width);   
        }      
        slider_dots();

    }, 1);
    
    //Lazy Load | Preloading Image

    $(function() {
        $(".preload-image").lazyload({
            threshold : 200,
            effect : "fadeIn"
        });
        $("img.lazy").show().lazyload();
    });

	
    //Detecting Mobiles//
    
    var isMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function() {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };
    
    if(isMobile.any()) {
        //Settings for all mobiles
        $('head').append('<link />');
    } 
    
    if( !isMobile.any() ){
        $('.show-blackberry, .show-ios, .show-windows, .show-android').hide(0);
        $('show-no-detection').show(0);
        
        $('#content').bind('mousewheel', function(event) {
          event.preventDefault();
          var scrollTop = this.scrollTop;
          this.scrollTop = (scrollTop + ((event.deltaY * event.deltaFactor) * -2));
          //console.log(event.deltaY, event.deltaFactor, event.originalEvent.deltaMode, event.originalEvent.wheelDelta);
        });
        $("#content").css("overflow-y","hidden");
    }
    
    if(isMobile.Android()) {
        $('.show-android').show(0);
        $('.show-blackberry, .show-ios, .show-windows').hide(0);
    }
        
    if(isMobile.BlackBerry()) {
        $('.show-blackberry').show(0);
        $('.show-android, .show-ios, .show-windows').hide(0);
    }
        
    if(isMobile.iOS()) {
        $('.show-ios').show(0);
        $('.show-blackberry, .show-android, .show-windows').hide(0);
    }
        
    if(isMobile.Windows()) {
        $('.show-windows').show(0);
        $('.show-blackberry, .show-ios, .show-android').hide(0);
    }
    
    $('.back-to-top-badge, .back-to-top').click(function() {
		$('#content').animate({
			scrollTop:0
		}, 500, 'easeInOutQuad');
		return false;
	});
    
    //Show Back To Home When Scrolling
        
    $('#content').on('scroll', function () {
        var total_scroll_height = $('#content')[0].scrollHeight
        var inside_header = ($(this).scrollTop() <= 150);
        var passed_header = ($(this).scrollTop() >= 0); //250
        var footer_reached = ($(this).scrollTop() >= (total_scroll_height - ($(window).height() +100 )));
        
        if (inside_header == true) {
            $('.back-to-top-badge').removeClass('back-to-top-badge-visible');
        } else if (passed_header == true)  {
            $('.back-to-top-badge').addClass('back-to-top-badge-visible');
        } 
        if (footer_reached == true){            
            $('.back-to-top-badge').removeClass('back-to-top-badge-visible');
        }
    });
    
    
    //-------------------Generate Cover Screen Elements--------------------//
    //Global Settings for Fullscreen Pages, PageApps and Coverscreen Slider//
    
    function align_cover_elements(){
        var cover_width = $(window).width();
        var cover_height = $(window).height();
        var cover_vertical = -($('.cover-center').height())/2;
        var cover_horizontal = -($('.cover-center').width())/2;
        
        $('.cover-screen').css('width', cover_width);
        $('.cover-screen').css('height', cover_height);
        $('.cover-screen .overlay').css('width', cover_width);
        $('.cover-screen .overlay').css('height', cover_height);
        
        $('.cover-center').css('margin-left', cover_horizontal);      
        $('.cover-center').css('margin-top', cover_vertical + 30);     
        $('.cover-left').css('margin-top', cover_vertical);   
        $('.cover-right').css('margin-top', cover_vertical);       
        
        $('.homepage-cover, .homepage-cover-slider').css('height', cover_height);
        $('.homepage-cover, .homepage-cover-slider').css('width', cover_width +1);
        
    };
    align_cover_elements();        
    
    //Resize Functions//
    
    $(window).resize(function(){
        apply_gallery_justification();  
        align_cover_elements();
        generate_map();
    });
    
    
        
});


































