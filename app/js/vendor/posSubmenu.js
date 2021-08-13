window.addEventListener('DOMContentLoaded', () =>{
  const header = document.querySelector('.header');
  const subMenu = document.querySelector('.submenu');
  const setOffsetTopSubMenu = (boxInner, item) =>{
    let heightBoxInner = boxInner.clientHeight;
    item.style.top = heightBoxInner + 'px';
  }
  setOffsetTopSubMenu(header,subMenu);
})