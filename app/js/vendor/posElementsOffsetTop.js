window.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.header');
  const subMenu = document.querySelector('.submenu');
  const searchElements = document.querySelector('.search-elements');
  const menuMob = document.querySelector('.menu');

  const setOffsetTopSubMenu = (boxInner, item, pogr = 0) => {
    let heightBoxInner = boxInner.clientHeight;

    menuMob.classList.contains('menu--visible') ?
      item.style.top = null :
      item.style.top = heightBoxInner - pogr + 'px';
  }
  setOffsetTopSubMenu(header, subMenu);
  setOffsetTopSubMenu(header, searchElements, 20);
});