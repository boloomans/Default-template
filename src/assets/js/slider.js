import Swiper from 'swiper';

class Slider {
  constructor() {
    this.$el = document.querySelectorAll('.js-slider');
    this.slideshow = null;
    this.slides = null;
    this.options = {
      autoplay: {
        delay: 5000,
        disableOnInteraction: true
      },
      speed: 600,
      setWrapperSize: true,
      navigation: {
        nextEl: null,
        prevEl: null,
      },
      effect: 'slide',
      fadeEffect: {
        crossFade: true
      },
      autoHeight: true
    };

    if (this.$el.length > 0) {
      this.init();
    }
  }

  init() {
    // Loop through all sliders on page
    for (let i = 0; i < this.$el.length; i++) {
      this.$el[i].classList.add(`slider-${i}`); // Give unique ID to slider
      const $el = document.querySelector(`.slider-${i}`); // Slider element

      // Set slider navigation
      this.options.navigation.nextEl = `.slider-${i} .slider-block-navigation .nav-item.next`;
      this.options.navigation.prevEl = `.slider-${i} .slider-block-navigation .nav-item.prev`;

      // Init slider
      this.slideshow = new Swiper($el, this.options);
      this.slides = $el.querySelectorAll('.swiper-slide');

      // Set slider pagination numbers
      this.setPagination();
    }
  }

  setPagination() {
    if (this.slides.length > 0) {
      const slidesTotal = this.slides.length;

      for (let i = 0; i < this.slides.length; i++) {
        const $slide = this.slides[i];
        const $slideNumber = $slide.querySelector('.js-slide-number');
        const $slidesTotal = $slide.querySelector('.js-slides-total');
        const slideIndex = i+1;

        if ($slideNumber) $slideNumber.innerHTML = slideIndex.numLength(2);
        if ($slidesTotal) $slidesTotal.innerHTML = slidesTotal.numLength(2);
      }
    }
  }
}

export { Slider };