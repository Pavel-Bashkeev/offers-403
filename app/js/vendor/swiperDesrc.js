const sliderDescr = document.querySelector('.product-descr>.swiper-container');
if(sliderDescr){
  const sliderProductDescr = new Swiper(sliderDescr,{
    slidesPerView: 5,
    loop: false,
    freeMode: true,
    allowTouchMove: false,
    navigation: {
      nextEl: '.slideProdDescr-btn-next',
      prevEl: '.slideProdDescr-btn-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
        allowTouchMove: true,
      },
      520:{
        slidesPerView: 5,
        allowTouchMove: false,
      }
    }
  })
}
