$(function(){
    if ($('body').width()<1600) $('#top_bg').width(723-(1600-$('body').width()));
    if ($('body').width()<1025) {$('#social').css('left','1000px');} else {$('#social').css('left','auto');}
    $(window).resize(function(){
        if ($('body').width()<1600) $('#top_bg').width(723-(1600-$('body').width()));
        if ($('body').width()<1025) {$('#social').css('left','1000px');} else {$('#social').css('left','auto');}
    });
});