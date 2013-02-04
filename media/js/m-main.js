var lastScrollTop = 0;
$(window).bind('scrollstart', function () {
//    console.log('start');
//    alert('start');
    var st = $(this).scrollTop();
    if (st > lastScrollTop){
        $('#buble1').animate({backgroundPositionY:'-=460px'},1530);
        $('#bg2').animate({backgroundPositionY:'-=200px'},1530);
        $('body').animate({backgroundPositionY:'-=60px'},1530);
    } else {
        $('#buble1').animate({backgroundPositionY:'+=460px'},1530);
        $('#bg2').animate({backgroundPositionY:'+=200px'},1530);
        $('body').animate({backgroundPositionY:'+=60px'},1530);
    }
    lastScrollTop = st;
});