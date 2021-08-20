  let btnSubmenu = document.querySelector('.submenu__btn');
  let submenu = document.querySelector('.submenu');
  const menuMob = document.querySelector('.menu');
  let btnAncor = document.querySelector('.submenu__btn-flag');
  const openedSubmenu =(event) => {
    btnSubmenu.classList.toggle('active-link');
    btnAncor.classList.toggle('submenu__btn-flag--active')
    btnSubmenu.classList.contains('active-link') ? submenu.classList.add('submenu--opened') : submenu.classList.remove('submenu--opened');
    findHeight();
  }
  document.addEventListener('click', (event)=> {
    // Деллигирование события
    let target = event.target; //определяет по какому элементу был клик
    let itMenu = target == submenu || submenu.contains(target); // если target равен самому меню или|| элементу находящийся в нутри меню то вернется TRUE
    let itsBtnSubmenu = target == btnSubmenu || btnSubmenu.contains(target); //если target равен кнопки открывающая меню то вернется TRUE
    let menuIsOpened = submenu.classList.contains('submenu--opened');// Если меню содержит класс "submenu--opened" то вернется TRUE
    itsBtnSubmenu ? openedSubmenu() : '';
    !itMenu && !itsBtnSubmenu && menuIsOpened ? closeSubmenu() : '';
  });
  function closeSubmenu() {
    if (submenu.classList.contains('submenu--opened')) {
      btnSubmenu.classList.remove('active-link');
      submenu.classList.remove('submenu--opened');
      findHeight();
    }
  }
  function findHeight() {
    if (submenu.classList.contains('submenu--opened')) {
      if(menuMob.classList.contains('menu--visible')){
        submenu.style.height = (submenu.scrollHeight + 60) + 'px';
      }else{
        submenu.style.height = submenu.scrollHeight + submenu.offsetTop + 'px';
      }
      btnSubmenu.setAttribute('aria-expanded', true);
      submenu.setAttribute('aria-hidden', false);
      
    } else {
      btnSubmenu.setAttribute('aria-expanded', false);
      submenu.setAttribute('aria-hidden', true);
      submenu.style.height = null;
    }
  }