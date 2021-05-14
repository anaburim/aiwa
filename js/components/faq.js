const openFaqBtns = document.querySelectorAll(`.faq-item__btn`);

openFaqBtns.forEach(el => {
  el.addEventListener(`click`, () => {
    const parent = (el.closest(`.faq-item`));
    parent.querySelector(`.faq-item__body`).classList.toggle(`is-active`);
    el.querySelector(`.vertical`).classList.toggle(`is-active`);
  })
})
