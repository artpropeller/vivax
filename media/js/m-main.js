var lastScrollTop = 0;
$(window).bind('scroll', function () {
//    console.log('start');
//    alert('start');
    var st = $(this).scrollTop();

    if (st > lastScrollTop){
        $('#buble1').animate({backgroundPositionY:'-=60px'},130);
        $('#bg2').animate({backgroundPositionY:'-=10px'},130);
        $('body').animate({backgroundPositionY:'-=3px'},130);
    } else {
        $('#buble1').animate({backgroundPositionY:'+=60px'},130);
        $('#bg2').animate({backgroundPositionY:'+=10px'},130);
        $('body').animate({backgroundPositionY:'+=3px'},130);
    }
    lastScrollTop = st;
});