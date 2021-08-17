window.addEventListener('DOMContentLoaded', () =>{
  const header = document.querySelector('.header');
  const subMenu = document.querySelector('.submenu');
  const searchElements = document.querySelector('.search-elements');

  const setOffsetTopSubMenu = (boxInner, item , pogr = 0) =>{
    let heightBoxInner = boxInner.clientHeight;
    item.style.top = heightBoxInner - pogr + 'px';
  }
  setOffsetTopSubMenu(header,subMenu);
  setOffsetTopSubMenu(header,searchElements, 20);
});