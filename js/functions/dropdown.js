// открытие выпадающего списка

const dropdownOpen = (btn) => {
  const thisDropdown = btn.parentElement; // выпадающий список, который относится к нажатой кнопке
  // делегирование закрытие списка по клику вне списка
  document.querySelector(`body`).addEventListener(`click`, (event) => {
    if(!event.target.closest(`.dropdown__body`) && event.target !== btn) {
      thisDropdown.classList.remove(`is-active`);
    }
  });
  btn.addEventListener(`click`, () => {
    thisDropdown.classList.toggle('is-active');
  });
}
const btns = document.querySelectorAll('.catalog-menu__btn-item');

 btns.forEach(el => {
   dropdownOpen(el);
 });

