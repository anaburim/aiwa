const customersBtn = document.querySelector(`.header__menu-btn-customers`);
const burger = document.querySelector(`.burger`);
const menu = document.querySelector(`.header__menu`);
const body = document.querySelector(`body`);
const searchBtn = document.querySelector(`.header__search-btn`);
const searchInput = document.querySelector(`.header__search`);

dropdownOpen(customersBtn);

burger.addEventListener(`click`, () => {
	if (menu.classList.contains(`is-active`)) {
		menu.classList.remove(`is-active`);
		body.classList.remove(`scroll-off`);
	}
	if (filtersBlock && filtersBlock.classList.contains(`is-active`)) {
		filtersBlock.classList.remove(`is-active`);
		body.classList.remove(`scroll-off`);
	}
	if (!menu.classList.contains(`is-active`) && !burger.classList.contains(`is-active`)) {
		menu.classList.add(`is-active`);
		body.classList.add(`scroll-off`);
	}
	if (categoriesTablet && categoriesTablet.classList.contains(`is-active`)) {
		categoriesTablet.classList.remove(`is-active`);
		body.classList.remove(`scroll-off`);
	}
	burger.classList.toggle(`is-active`);

});

searchBtn.addEventListener(`click`, (event) => {
	event.preventDefault();
	searchInput.classList.toggle(`header__search--active`);
});



