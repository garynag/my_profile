var swiper = new Swiper(".diningslide", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    breakpoints: {
      1700: {
        spaceBetween: 20,
      },
      1350: {
        spaceBetween: 15,
      },
      100: {
        spaceBetween: 10,
      }
    }

  });


// special 영역

$('.special-right a').mouseenter(function(){
  $('.special-right a').removeClass('on');
  $(this).addClass('on');
})
$('.special-right a').mouseleave(function(){
  $(this).removeClass('on');
  $('.special-main img').attr('src', './img/hotel/special1.png');
})

$('.special-left a').hide();
// $('.special-left a').first().show();

// $('.special-right a').first().mouseenter(function(){
//   $('.special-left a').hide();
//   $('.special-left a').first().fadeIn()
// })
// $('.special-right a').eq(1).mouseenter(function(){
//   $('.special-left a').hide();
//   $('.special-left a').eq(1).fadeIn()
// })
// $('.special-right a').eq(2).mouseenter(function(){
//   $('.special-left a').hide();
//   $('.special-left a').eq(2).fadeIn()
// })
// $('.special-right a').last().mouseenter(function(){
//   $('.special-left a').hide();
//   $('.special-left a').last().fadeIn()
// })

$('.special-right a').mouseenter(function() {
  var spc = $(this).parent().index();
  $('.special-left a').hide();
  $('.special-left a').eq(spc).fadeIn() ;
})


// $('.special-right').mouseleave(function(){
//   $('.special-left a').hide();
//   $('.special-left a').first().fadeIn()
// })

// $('.special-right').mouseleave(function(){
//   $('.special-right a').first().addClass('on');
// })
$('.special-right').mouseleave(function(){
  $('.special-left a').hide();
  $('.special-left a').first().fadeIn();
  $('.special-right a').first().addClass('on');
})

// room 영역
$('.rooms').hide();
$('.rooms').first().show();

$('.tabmenu a').first().click(function(){
  $('.rooms').hide();
  $('.rooms').first().fadeIn(1000);
})
$('.tabmenu a').eq(1).click(function(){
  $('.rooms').hide();
  $('.rooms').eq(1).fadeIn(1000);
})
$('.tabmenu a').last().click(function(){
  $('.rooms').hide();
  $('.rooms').last().fadeIn(1000);
})
