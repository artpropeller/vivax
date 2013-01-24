$(function(){
    if ($('body').width()<1600) $('#top_bg').width(723-(1600-$('body').width()));
    $(window).resize(function(){
        if ($('body').width()<1600) $('#top_bg').width(723-(1600-$('body').width()));
    });
});