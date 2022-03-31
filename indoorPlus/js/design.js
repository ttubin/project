const partnerSwiper = new Swiper('.swiper.partner-slider', {
    loop: true, // 무한루프 (마지막 슬라이더에서 처음 슬라이더랑 이어지게 연결)
    autoplay: { // 자동재생 delay 로 원하는 초 설정 (1s = 1000)
        delay: 3000
    },
    speed: 1000, // 슬라이더 넘어가는 속도
    navigation: { // 슬라이더 왼쪽, 오른쪽 버튼
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});

const numberSwiper = new Swiper('.swiper.numbers-slider', {
    loop: true, // 무한루프 (마지막 슬라이더에서 처음 슬라이더랑 이어지게 연결)
    autoplay: { // 자동재생 delay 로 원하는 초 설정 (1s = 1000)
        delay: 3000
    },
    speed: 1000, // 슬라이더 넘어가는 속도
    centeredSlides: true, // 슬라이더 가운데 설정
    breakpoints: { // 반응형일 때, 슬라이더 갯수 달라지게 설정
        375: { // 모바일
            slidesPerView: 1
        },
        1920: { // 웹
            slidesPerView: 3
        }
    }
});