// Main js file
// see more: https://github.com/vedees/webpack-template/blob/master/README.md#import-js-files

$('.header__burger').click(function () {
    $('.header__mobile-menu').slideToggle()
})
$('.tabs__item').click(function () {
    if (!$(this).hasClass('active')) {
        $('.tabs__item').removeClass('active')
        $(this).addClass('active')
        $('.tabs__wrap').removeClass('active')
        const i = $(this).attr('data-index')
        $('.tabs__wrap').eq(i).addClass('active')
    }
})
$('.preim__head a').click(function (e) {
    e.preventDefault()
    if (!$(this).parent().hasClass('active')) {
        $('.preim__head li').removeClass('active')
        $(this).parent().addClass('active')
        const i = ($('.preim__head li.active').index())
        $('.preim__wrap').removeClass('active')
        $('.preim__wrap').eq(i).addClass('active')
    }
    return false
})
$(document).ready(function () {
    $('.portfolio-slider').slick({
        infinite: true,
        // arrows: false,
        dots: true,
        prevArrow: $('.slide-button_prev'),
        nextArrow: $('.slide-button_next'),
    })
    $('.first-slider').slick({
        infinite: true,
        // arrows: false,
        dots: false,
        asNavFor: '.second-slider',
        prevArrow: $('.slide-button_prev'),
        nextArrow: $('.slide-button_next'),
    })
    $('.slider-about').slick({
        infinite: true,
        // arrows: false,
        dots: false,
        centerMode: true,
        slidesToShow: 1.65
    })

    $('.second-slider').slick({
        infinite: true,
        arrows: false,
        dots: false,
        slidesToShow: 3,
        asNavFor: '.first-slider',
        focusOnSelect: true
    })
    $('.slider-vendors').slick({
        infinite: true,
        arrows: false,
        dots: false,
        variableWidth: true
    })

})

$(".top").click(function (){
    $('html, body').animate({
        scrollTop: $(".header").offset().top
    }, 500);
});

$('.technology__head a').click(function (e) {
    e.preventDefault()
    if (!$(this).parent().hasClass('active')) {
        $('.technology__head li').removeClass('active')
        $(this).parent().addClass('active')
        $('.technology__item').removeClass('active')
        $('.technology__item').eq($('.technology__head li.active').index()).addClass('active')
    }
    return false
})
$('.portfolio__tabs a').click(function (e) {
    e.preventDefault()
    if (!$(this).parent().hasClass('active')) {
        $('.portfolio__tabs li').removeClass('active')
        $(this).parent().addClass('active')
        $('.portfolio__wrapper').removeClass('active')
        $('.portfolio__wrapper').eq($('.portfolio__tabs li.active').index()).addClass('active')
        $('.portfolio__wrapper.active .portfolio-slider').slick('setPosition');
    }
    return false
})

$(window).scroll(function () {
    let of = $(document).scrollTop()
    if (of > 200) {
        $('.top').fadeIn()
    }
    else $('.top').fadeOut()
})