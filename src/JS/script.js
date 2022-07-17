$(document).ready(function(){
  $('.carousel__inner').slick({
    dots: false,
    infinite: true,
    speed: 1200,
    slidesToShow: 1,
    prevArrow: '<button type="button" class="slick-prev"><img src="img/arrow-left.png"></img></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="img/arrow-right.png"></img></button>',
    autoplay: true,
    autoplaySpeed: 2000
  });
});