$(function () {

  $('.rewiev__slider').slick({
    dots: true,
    fade: true,
    prevArrow: "<img src='../images/prev-arrow.svg' class='prev' alt='1'>",
    nextArrow: "<img src='../images/next-arrow.svg' class='next' alt='2'>",
  });




 $('.search-btn ').on('click', function () {
   $('.usernav__button').toggleClass('.search-box, .search-btn ,.input');
   $('.search-box.active ').toggleClass('.search-box .search-btn.active ');
 });



  $window = $(window);
  $window.scroll(function () {
    $scrollPosition = $window.scrollTop();
    if ($scrollPosition > 50) {
      $('.header__inner').addClass('header__inner--bg');
    } else {
      $('.header__inner').removeClass('header__inner--bg');
    }
  })


});

var mixer = mixitup('.product__content');