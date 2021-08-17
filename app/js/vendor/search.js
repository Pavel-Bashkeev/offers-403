window.addEventListener('DOMContentLoaded', () => {
  const inputSearch = document.querySelector('.header-search__input');
  const searchBox = document.querySelector('.search-elements');
  const searchElements = document.querySelectorAll('.search-elements__item');
  const searchElemName = document.querySelectorAll('.search-elements__item-name');
  const btnSearch = document.querySelector('.header-search__btn');

  inputSearch.classList.contains('header-search__input--visible') ? searchBox.classList.remove('hide') : searchBox.classList.add('hide');

  btnSearch.addEventListener('click', visibleElemSearch);

  function visibleElemSearch() {
    inputSearch.classList.toggle('header-search__input--visible');
    searchBox.classList.toggle('hide');
  }
  inputSearch.addEventListener('input', function () {
    let val = this.value.trim();
    if (val != '') {
      searchElemName.forEach((item, index) => {
        if (item.innerText.search(val) == -1) {
          searchElements[index].classList.add('hide');
          item.innerHTML = item.innerText;
        } else {
          searchElements[index].classList.remove('hide');
          let str = item.innerText;
          item.innerHTML = insertMark(str, item.innerText.search(val), val.length);
        }
      });
    } else {
      searchElements.forEach(item => {
        item.classList.remove('hide');
        let itemName = item.querySelector('.search-elements__item-name');
        itemName.innerHTML = itemName.textContent;
      });
    };
  });

  function insertMark(string, pos, len) {
    return `${string.slice(0, pos)}<mark>${string.slice(pos, pos+len)}</mark>${string.slice(pos+len)}`
  }
})