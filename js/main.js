$(function () {

    // { 슬라이드
    $('.mainVisual .mainSlide').slick({
        dots: false,
        autoplay: true,
        arrows: true,

        prevArrow: $('#prev'),
        nextArrow: $('#next'),
        autoplaySpeed: 4000,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
    });

    $('.wedding_slide').slick({
        dots: true,
        arrows: true,
        cssEase: 'linear',
    });

    $('.wedding_nav .inner.content .gall_nav .gall_num').on('click', function () {
        $('.wedding_nav .inner.content .gall_nav .gall_num').not($(this)).removeClass('on');
        $(this).toggleClass('on')
    });

    $('.right .right_Topbox .r_other .other_flex span').on('click', function () {
        $('.right .right_Topbox .r_other .other_flex span').not($(this)).removeClass('on');
        $(this).toggleClass('on')
    });

    // 슬라이드 }

    $('.down_con a').click(function () {
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 400);
        return false;
    });

    $(window).load(function () {
        console.log("onload : start");
    });

    $(window).scroll(function () {
        var scrollValue = $(document).scrollTop();
        console.log(scrollValue);
    });



    $('.top_btn a').click(function () {
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
        return false;
    });
    $("#top_btn").scrollTop(0);

    $('.popup .pop_right .pop_arrow').on('click', function () {
        $(this).toggleClass('on');
        $('.popup').toggleClass('on');
    })

    //쿠키설정    

    // $('.popup .pop_left .close').on('click', function () {
    //     $('.popup .pop_left').hide();
    // });

    // var getCookie = $.cookie('.popup .pop_left');

    // if (!getCookie) {
    //     $('.popup .pop_left').show();
    // }
    // $('.popup .pop_left input').on('change', function () {
    //     $.cookie('popup .pop_left', 'value', { expires: 1 });
    //     $('.popup .pop_left').hide();
    // });
});
