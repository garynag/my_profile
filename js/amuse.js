// 첫번째 슬라이드 
var swiper = new Swiper(".topslide", {
    centeredSlides: true,
    effect: "fade",
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
});

// 헤더 언어메뉴 
$('.languagebtn').click(function(){
  $(this).toggleClass('more');
})

// 헤더 검색메뉴
$('.searchbtn').click(function(){
  $(this).addClass('off');
  $('.search').removeClass('off');
  $('.closebtn').removeClass('off');
})
$('.closebtn').click(function(){
  $(this).addClass('off');
  $('.search').addClass('off');
  $('.searchbtn').removeClass('off');
 })

// 메인 슬라이드
var mainslide = new Swiper(".mainslide", {
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".mainpagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".mainslide .swiper-button-next",
      prevEl: ".mainslide .swiper-button-prev",
    },
  });

// 세번째 슬라이드
  var thirdslide = new Swiper(".thirdslide", {
    loop: true,
    slidesPerView: 2,
    spaceBetween: 50,
    navigation: {
      nextEl: ".section3 .swiper-button-next",
      prevEl: ".section3 .swiper-button-prev",
    },
    breakpoints: {
      500: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      1000: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1300: {
        slidesPerView: 5,
        spaceBetween: 50,
      },
    }
  });


// 네번째 슬라이드
  var swiper = new Swiper(".fourthslide", {
    loop: true,
    navigation: {
      nextEl: ".section4 .swiper-button-next",
      prevEl: ".section4 .swiper-button-prev",
    },
  });
// 모바일 슬라이드 
var swiper = new Swiper(".mobileslide", {
  loop: true,
  slidesPerView: 2,
  spaceBetween: 30,
  // breakpoints: {
  //   1000: {
  //     slidesPerView: 4,
  //     spaceBetween: 20,
  //   },
  //   500: {
  //     slidesPerView: 3,
  //     spaceBetween: 40,
  //   },
  //   100: {
  //     slidesPerView: 2,
  //     spaceBetween: 50,
  //   },
  // }
});


// 스크롤 내려가면 상단 메뉴 배경 불투명 흰색으로 
  $(window).scroll(function(){
    if(window.scrollY>0){
      $('.headerinner').css('background','rgba(255,255,255,0.8)')
    }else {
      $('.headerinner').css('background','transparent')
    }
  })

// 배너 영역

var swiper = new Swiper(".banner", {
  loop: true,
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
});

// 좌측 오픈 메뉴 

$('header .xi-bars').click(function(){
  $('.leftmenu').css('left','0');
})
$('.leftmenu .xi-close').click(function(){
  $('.leftmenu').css('left','-260px');
})

// 팝업

$('.popup-todayclose').click(function(){
  $('.popup, .popupbg').fadeOut();
})
$('.popup-close').click(function(){
  $('.popup, .popupbg').fadeOut();
})