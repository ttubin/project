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
    centeredSlides: true,
    breakpoints: {
        375: {
            slidesPerView: 1
        },
        
        1920: {
            slidesPerView: 3,
        },
    }
});