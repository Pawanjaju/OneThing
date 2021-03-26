(function ($){
"use strict";

$('.owl-carousel').owlCarousel({
    loop: true,
    center:true,
    margin: 130,
    autoplay: true,
    nav:false,
    autoplayHoverPause: true,
    responsiveClass: true,
    responsive: {
        0: {
            items: 3,
        },
        600: {
            items: 1,
            nav: false
        },
        1000: {
            items: 3,
            loop: true
        }
    }
});



})(jQuery);
