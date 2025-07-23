// 메인슬라이드
var swiper = new Swiper(".mainslide", {
    loop: true,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
  });

// 방문 후기 슬라이드

var swiper = new Swiper(".reviewslide", {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 30,
  centeredSlides: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
