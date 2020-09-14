$('.carousel-product,.carousel-brands').owlCarousel({
    loop:true,
    autoplay: true,
    margin:9,
    items:3,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:2,
        },
        1000:{
            items:5,
        }
    }
});
$('.icon-wishlist').click(function() {
    $(this).find('svg path').toggleClass('fill-icon');
});