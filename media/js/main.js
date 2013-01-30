$(function () {
    if ($('body').width() < 1600) $('#top_bg').width(723 - (1600 - $('body').width()));
    if ($('body').width() < 1025) {
        $('#social').css('left', '1000px');
    } else {
        $('#social').css('left', 'auto');
    }
    $(window).resize(function () {
        if ($('body').width() < 1600) $('#top_bg').width(723 - (1600 - $('body').width()));
        if ($('body').width() < 1025) {
            $('#social').css('left', '1000px');
        } else {
            $('#social').css('left', 'auto');
        }
    });

    $('.tabs .item').click(function () {
        if (!$(this).hasClass('active')) {
            $('.tabs .item').removeClass('active');
            $(this).addClass('active');
            $('.vkladishi').hide(0);
            $($(this).attr('rel')).show(0);
        }
        return false;
    });


    $('.desk-list li h2').click(function () {
        $(this).parent().find('.quote').slideToggle(200);
        return false;

    });

    $('.checkbox input').change(function () {
        $(this).parent().toggleClass('active');
    });


    $('.radio').click(function () {
        if (!$(this).is('active')) {
            $('.radio[rel=' + $(this).attr('rel') + ']').removeClass('active');
            $(this).addClass('active');
        }

    });


});




