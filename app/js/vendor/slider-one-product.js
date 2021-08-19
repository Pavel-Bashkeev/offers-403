window.addEventListener('DOMContentLoaded', () => {
  const sliderOneProducts = document.querySelector('.slider-one-product__container>.swiper-container');
  if (sliderOneProducts) {
    const itsSliderOneProducts = new Swiper(sliderOneProducts, {
      slidesPerView: 1,
      loop: false,

      freeMode: true,
      navigation: {
        nextEl: '.slider-one-product-btn-next',
        prevEl: '.slider-one-product-btn-prev',
      },
    })
  }
})