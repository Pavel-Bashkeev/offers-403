const btnSearch = document.querySelector('.header-search__btn');
const inputSearch = document.querySelector('.header-search__input');
const formSearch = document.querySelector('.header-search');
let flagVisible = false;
btnSearch.addEventListener('click', (e)=>{
  if(!flagVisible){
    inputSearch.classList.add('header-search__input--visible');
  }else{
    inputSearch.classList.remove('header-search__input--visible');
    console.log(flagVisible);  
  }
  flagVisible = !flagVisible;
});