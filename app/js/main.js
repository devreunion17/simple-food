$(function () {

  $('.rewiev__slider').slick({
    dots: true,
    fade: true,
    // prevArrow: "<img src='../images/prev arrow.svg' class='prev' alt='1'>",
    // nextArrow: "<img src='../images/next-arrow.svg' class='next' alt='2'>",
  });




 $('.search-btn ').on('click', function () {
   $('.usernav__button').toggleClass('.search-box, .search-btn ,.input');
   $('.search-box.active ').toggleClass('.search-box .search-btn.active ');
   //  $('.burger__line').toggleClass('active');
  //  $('body').toggleClass('lock');
 });






});

var mixer = mixitup('.product__content');