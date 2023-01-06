

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

    $('.hallContent .inner .hall_slide').slick({
        dots: true,
        arrows: true,
        cssEase: 'linear',
    });
    $('.brideContent .inner .bride_slide').slick({
        dots: true,
        arrows: true,
        cssEase: 'linear',
    });
    $('.lobbyContent .inner .lobby_slide').slick({
        dots: true,
        arrows: true,
        cssEase: 'linear',
    });
    $('.vipContent .inner .vip_slide').slick({
        dots: true,
        arrows: true,
        cssEase: 'linear',
    });
    $('.courtesyContent .inner .courtesy_slide').slick({
        dots: true,
        arrows: true,
        cssEase: 'linear',
    });
    $('.otherContent .inner .other_slide').slick({
        dots: true,
        arrows: true,
        cssEase: 'linear',
    });


    // 슬라이드 }

    $('.wedding_nav .inner.content .gall_nav .gall_num').on('click', function () {
        $('.wedding_nav .inner.content .gall_nav .gall_num').not($(this)).removeClass('on');
        $(this).toggleClass('on')
    });
    $('.right .right_Topbox .r_other .other_flex span').on('click', function () {
        $('.right .right_Topbox .r_other .other_flex span').not($(this)).removeClass('on');
        $(this).toggleClass('on')

    });



    $('.down_con a').click(function () {
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 400);
        return false;
    });

    //이벤트 상시 대기
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




});
