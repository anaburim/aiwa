const filtersTitle = document.querySelectorAll(`.filters__title`);
const allCheckboxes = document.querySelectorAll(`input[type="checkbox"]`);
const btnClearFilters = document.querySelector(`.filters__btn-clear-filters`);
const btnViewList = document.querySelectorAll(`.btn-view--list`);
const btnViewRect = document.querySelectorAll(`.btn-view--rect`);
const btnBlockViewCount = document.querySelector(`.catalog__view-list`);
const btnOpenFilters = document.querySelector(`.catalog__btn-filters`);
const categoriesTablet = document.querySelector(`.categories`);
const filtersBlock = document.querySelector(`.content__props`);
const btnCategories = document.querySelector(`.catalog__btn-category`);

console.log(btnViewList)

if (btnClearFilters) {
  filtersTitle.forEach(el => {
    dropdownOpen(el);
  });

  btnClearFilters.addEventListener(`click`, (event) => {
    event.preventDefault();
    allCheckboxes.forEach(el => {
      el.checked = false;
    });
  });
};

if (btnViewList || btnViewRect) {
  btnViewList.forEach(el => {
    el.addEventListener(`click`, () => {
      // btnViewList.classList.add('is-active');
      // btnViewRect.classList.remove('is-active');
      document.querySelector('.catalog__list').classList.add('catalog__list--full');
    });
  });
  btnViewRect.forEach(el => {
    el.addEventListener(`click`, () => {
      // btnViewRect.classList.add('is-active');
      // btnViewList.classList.remove('is-active');
      document.querySelector('.catalog__list').classList.remove('catalog__list--full');
    });
  });
}

if(btnBlockViewCount) {
  btnBlockViewCount.addEventListener(`click`, (e) => {
    btnBlockViewCount.querySelectorAll(`.catalog__view-count-btn`).forEach(el => {
      el.classList.remove(`is-active`);
    });
    if (e.target.closest(`.catalog__view-item`)) {
      e.target.classList.add(`is-active`);
    }
  });
}

if (btnOpenFilters) {
	btnOpenFilters.addEventListener(`click`, () => {
		filtersBlock.classList.add(`is-active`);
		burger.classList.add(`is-active`);
		body.classList.add(`scroll-off`);
	});
}


if (btnCategories) {
	btnCategories.addEventListener(`click`, () => {
		categoriesTablet.classList.add(`is-active`);
		burger.classList.add(`is-active`);
		body.classList.add(`scroll-off`);
	})
}
