$(document).bind('pageinit', function () {
    if ($('body').width() < 1700) $('#top_bg').width(700 - (1700 - $('body').width()));
    if ($('body').width() < 1025) {
        $('#social').css('left', '1000px');
        $('#top_bg').css('right', '-44px');
    } else {
        $('#social').css('left', 'auto');
        $('#top_bg').css('right', '0');
    }
    $(window).resize(function () {
        if ($('body').width() < 1700) $('#top_bg').width(700 - (1700 - $('body').width()));
        if ($('body').width() < 1025) {
            $('#social').css('left', '1000px');
            $('#top_bg').css('right', '-44px');
        } else {
            $('#social').css('left', 'auto');
            $('#top_bg').css('right', '0');
        }
    });

    $('.tabs .item').bind('touchstart mousedown',function () {
        if (!$(this).hasClass('active')) {
            $('.tabs .item').removeClass('active');
            $(this).addClass('active');
            $('.vkladishi').hide(0);
            $($(this).attr('rel')).show(0);
        }
        return false;
    });


    $('.desk-list li h2').bind('touchstart mousedown',function () {
        $(this).parent().find('.quote').slideToggle(200);
        return false;

    });

    $('.checkbox input').change(function () {
        $(this).parent().toggleClass('active');
    });


    $('.radio').bind('touchstart mousedown',function () {
        if (!$(this).is('active')) {
            $('.radio[rel=' + $(this).attr('rel') + ']').removeClass('active');
            $(this).addClass('active');
        }

    });


});




