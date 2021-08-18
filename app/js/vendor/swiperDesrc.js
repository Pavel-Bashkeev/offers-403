const sliderDescr = document.querySelector('.product-descr>.swiper-container');
if(sliderDescr){
  const sliderProductDescr = new Swiper(sliderDescr,{
    slidesPerView: 5,
    loop: false,
    freeMode: true,
    allowTouchMove: false,
  })
}
