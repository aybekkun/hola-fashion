$(function () {
  $(".product__slider").slick({
    prevArrow:
      '<button type="button" class="slick-prev"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M15 8L1 8" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> <path d="M8 15L1 8L8 1" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> </svg></button>',
    nextArrow:
      '<button type="button" class="slick-next"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M1 8H15" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> <path d="M8 1L15 8L8 15" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> </svg></button>',
    infinite: true,
    speed: 500,
    fade: true
  });

  $(".menu__btn").on("click", function () {
    $(".menu__list").toggleClass("menu__list--active");
  });

});
