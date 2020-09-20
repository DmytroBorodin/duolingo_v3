'use strict'

let pagesArr = [...document.querySelectorAll('.wrapper')];

let btnsArr = [...document.querySelectorAll('.button__block')];

let nexPageBtn = document.querySelector('.next__page__btn');

let closeBtn = document.querySelector('.close__btn');

let switchPage = (el) => {
	pagesArr.forEach(page => {
		page.classList.add('disabled');
	})
	el.classList.remove('disabled');
}

btnsArr.forEach(btn => {
	btn.addEventListener('mousedown', () => {
		btn.classList.add('clicked');
	})

	btn.addEventListener('mouseup', () => {
		btn.classList.remove('clicked');
		if (btn.classList.contains('next__page__btn')){
			console.log(btn)
			switchPage(pagesArr[1]);
		}
	})
});

btnsArr.forEach(btn => {
	btn.addEventListener('touchstart', () => {
		btn.classList.add('clicked');
	})
	btn.addEventListener('touchend', () => {
		btn.classList.remove('clicked');
		if (btn.classList.contains('next__page__btn')){
			switchPage(pagesArr[1]);
		}
	})
});

closeBtn.addEventListener('mouseup', () => {
	switchPage(pagesArr[0]);
});

closeBtn.addEventListener('touchend', () => {
	switchPage(pagesArr[0]);
})