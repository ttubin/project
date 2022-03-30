const partnerSwiper = new Swiper('.swiper.partner-slider', {
    loop: true, 
    speed: 1000, 
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});

const numberSwiper = new Swiper('.swiper.numbers-slider', {
    loop: true, 
    speed: 1000, 
    slidesPerView: 3,
    centeredSlides: true
});