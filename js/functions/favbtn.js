// нажатие на кнопку сердечко

const favBtn = document.querySelectorAll('.product__fav');

favBtn.forEach(el => {
    el.addEventListener('click', (e) => {
        e.currentTarget.classList.toggle('product__fav--active');
    });
});