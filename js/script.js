"use strict";
$(document).ready(function (){

  $('.slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        // autoplay: true,
        // autoplaySpeed: 5000,
        arrows: false,
        infinite: true,
        dots: true,
        dotsClass: 'slider__dots'
    });

    $(".gallery__item").lightGallery();
});
