var lastScrollTop = 0;
$(window).bind('scrollstart', function () {
//    console.log('start');
//    alert('start');
    var st = $(this).scrollTop();
    if (st > lastScrollTop){
        $('#buble1').animate({backgroundPositionY:'-=60px'},530);
        $('#bg2').animate({backgroundPositionY:'-=10px'},530);
        $('body').animate({backgroundPositionY:'-=3px'},530);
    } else {
        $('#buble1').animate({backgroundPositionY:'+=60px'},530);
        $('#bg2').animate({backgroundPositionY:'+=10px'},530);
        $('body').animate({backgroundPositionY:'+=3px'},530);
    }
    lastScrollTop = st;
});