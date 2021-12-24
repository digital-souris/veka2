// Main js file
// see more: https://github.com/vedees/webpack-template/blob/master/README.md#import-js-files

$('.header__burger').click(function () {
    $('.header__mobile-menu').slideToggle()
})
$(document).ready(function () {
    $('.first-slider').slick({
        infintie: true,
        // arrows: false,
        dots: false,
        asNavFor: '.second-slider',
        prevArrow: $('.slide-button_prev'),
        nextArrow: $('.slide-button_next'),
    })
    $('.second-slider').slick({
        infintie: true,
        arrows: false,
        dots: false,
        slidesToShow: 3,
        asNavFor: '.first-slider',
        focusOnSelect: true
    })
})