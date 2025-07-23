// navigation
var height100 = window.innerHeight
var pheight = $('.publishing').height() -500;
// console.log(pheight)
$(window).on('scroll', function(){

    var nowsc =  $(window).scrollTop();
    
    // console.log(nowsc)

    if(nowsc>=(height100*2+pheight)){
        $('.navigation li').removeClass('on');
        $('.navigation li').eq(3).addClass('on'); 
    }else if(nowsc>=(height100*2)){
        $('.navigation li').removeClass('on');
        $('.navigation li').eq(2).addClass('on');
    }
    else if(nowsc>=height100){
        $('.navigation li').removeClass('on');
        $('.navigation li').eq(1).addClass('on');
    }else {
        $('.navigation li').removeClass('on');
        $('.navigation li').eq(0).addClass('on');
    }
  })

$(function() {
    $('a[href^="#"]').click(function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 500);
    });
});