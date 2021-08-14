const sliderDescr = document.querySelector('.product-descr>.swiper-container');
if(sliderDescr){
  const sliderProductDescr = new Swiper(sliderDescr,{
    slidesPerView: 4,
    loop: false,
    freeMode: true,
    allowTouchMove: false,
  })
}
