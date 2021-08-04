let mySlider1 = new Swiper('.main-slider1-container', {
  navigation: {
    prevEl: '.swiper-button-prev',
    nextEl: '.swiper-button-next',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
  },
  simulateTouch: true,
  touchRaion: 1,
  touchAngle: 45,
  grabCursor: true,
  slideToClickedSlide: true,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },

  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 5000,
    // stopOnLastSlide: false,
    disableOnInteraction: false,
  },
    speed: 1400,
  prealoadImages: false,
  lazy: {
    loadOnTransitionStart: false,
    loadPrevNext: true,
  },
});

let sliderBlock = document.querySelector('.main-slider1-container');
console.log(sliderBlock);
sliderBlock.addEventListener('mouseenter', function (e) {
    mySlider1.autoplay.stop();
});
sliderBlock.addEventListener('mouseleave', function (e) {
  mySlider1.params.autoplay.disableOnInteraction = false;
  mySlider1.params.autoplay.delay = 5000;
  mySlider1.autoplay.start();
});

// слайдер2
let mySlider2 = new Swiper('.main-slider2-conteiner', {
  navigation: {
    prevEl: '.swiper-button-prev',
    nextEl: '.swiper-button-next',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },
  simulateTouch: true,
  touchRaion: 1,
  touchAngle: 45,
  grabCursor: true,
  slideToClickedSlide: false,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  slidesPerView: 4,
  loop: true,
  
  breakpoints: {
    1880: {
      slidesPerView: 4,
    },
    1580: {
      slidesPerView: 3,
    },
    900: {
      slidesPerView: 2,
    },
    350: {
      slidesPerView: 1,
    },
  },
  // подзагрузка
  prealoadImages: false,
  lazy: {
    loadOnTransitionStart: false,
    loadPrevNext: true,
  },
});