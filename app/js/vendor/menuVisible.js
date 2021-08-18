const burgerBtn = document.querySelector('.burger-menu');
const menuMob = document.querySelector('.menu');

document.addEventListener('click', (event) => {
  let target = event.target;
  let itsMenuMob = target == menuMob || menuMob.contains(target);
  let itBtnBurger = target == burgerBtn || burgerBtn.contains(target);
  let itsMenuOpened = menuMob.classList.contains('menu--visible');
  itBtnBurger ? menuOpened() : '';
  !itsMenuMob && !itBtnBurger && itsMenuOpened ? menuOpened() : '';
});

function menuOpened() {
  burgerBtn.classList.toggle('burger-menu--visible');
  menuMob.classList.toggle('menu--visible');
  document.body.classList.toggle('hidden');
}
menuMob.addEventListener('scroll', function(e){
  console.log(menuMob.scrollTop);
  if(menuMob.scrollTop > 20) {
    burgerBtn.style.zIndex = 1;
  }else{
    burgerBtn.style.zIndex = 10;
  }
})