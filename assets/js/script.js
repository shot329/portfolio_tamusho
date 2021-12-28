// スライダー
// $(function() {

//   $('.slider').slick({
//     autoplay: true,
//     autoplaySpeed: 2000,
//     speed: 1000,
//     fade: true,
//     cssEase: 'linear',
//   });

// });

// wow.jsの着火
// $(function() {
//   new WOW().init();
// });

// ハンバーガーメニュー //
$(function() {
  $('.nav-toggle').on('click', function() {
    $('.nav-toggle, .header-nav').toggleClass('active');
    $("html").toggleClass("fixed");
  });
  $('.header-nav-item').on('click', function() {
    $('.nav-toggle, .header-nav').removeClass('active');
    $("html").toggleClass("fixed");
  });
});