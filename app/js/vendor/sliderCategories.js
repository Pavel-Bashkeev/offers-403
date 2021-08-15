const sliderCategories = document.querySelector('.slider-categories__container>.swiper-container');
const nextSlider = new Swiper(sliderCategories, {
  loop: true,
  autoHeight: true,
  navigation: {
    nextEl: '.slide-btn-next',
    prevEl: '.slide-btn-prev',
  }
});

const prodList = document.querySelectorAll('.prod-info__list');

prodList.forEach(item=>{
  let heightItem = item.clientHeight;
  heightItem == 137 ? item.style.marginBottom = 63 +'px' : item.style.marginBottom = 20 + 'px';
})