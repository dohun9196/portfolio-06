

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


    $('.down_con a').click(function () {
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 400);
        return false;
    });

    $('.kawasaki_group ul>li a').click(function () {
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

    // $(window).scroll(function () {
    //     var height = $(document).scrollTop();

    //     if (height > 2100) {
    //         $('.slideTitle').addClass('fix');
    //     } else if (height < 2100) {
    //         $('.slideTitle').removeClass('fix');
    //     }
    // });

    // $(window).on('resize', function () {
    //     if ($(window).width() > 769) {
    //         $(window).scroll(function () {
    //             var mheight = $(document).scrollTop();

    //             if (mheight > 1461) {
    //                 $('.slideTitle').addClass('fix');
    //             } else if (mheight < 1461) {
    //                 $('.slideTitle').removeClass('fix');
    //             }
    //         })
    //     }
    // });




    $(window).resize(function () {
        if (window.innerWidth > 769) {
            // 다바이스 크기가 769이상일때 
            $(window).scroll(function () {
                var height = $(document).scrollTop();

                if (height > 2100) {
                    $('.slideTitle').addClass('fix');
                } else if (height < 2100) {
                    $('.slideTitle').removeClass('fix');
                }
            })

        } else {
            // 다바이스 크기가 769이하일때 
            $(window).scroll(function () {
                var mheight = $(document).scrollTop();

                if (mheight > 1461) {
                    $('.slideTitle').addClass('fix');
                } else if (mheight < 1461) {
                    $('.slideTitle').removeClass('fix');
                }
            })

        }
    }).resize();




    lightbox.option({
        'resizeDuration': 200,
        'wrapAround': true,
        'alwaysShowNavOnTouchDevices': true,
        // 'disableScrolling': true,  
        // { 이게 있으면 over, close 되었을 때 x축으로 스크롤바 생김 }
        'alwaysShowClose': true,
        // 'maxWidth': 1200,
        // 'maxHeight': 800,
        'fitImagesInViewport': true,

    });

    $('.top_btn a').click(function () {
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
        return false;
    });
    $("#top_btn").scrollTop(0);


    $('.mbtn').on('click', function () {
        $(this).toggleClass('on')
        $('.gnb').toggleClass('on')
    });

    $('.gnb>ul>li>a').on('click', function (e) {
        if ($(window).width() < 769) {
            e.preventDefault();
            $(this).parent().siblings().find('.dropdown').hide();
            $(this).next().toggle();
        }
    });

    $(window).on('resize', function () {
        if ($(window).width() > 768) {
            $('.dropdown').removeAttr('style');
        }
    });



});




