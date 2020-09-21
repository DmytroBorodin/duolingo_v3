'use strict'

let pagesArr = [...document.querySelectorAll('.wrap')];

let btnsArr = [...document.querySelectorAll('.button__block')];

let nexPageBtn = document.querySelector('.next__page__btn');

let closeBtn = document.querySelector('.close__btn');

let palnBlocksArr = [...document.querySelectorAll('.plan__block')];
console.log(palnBlocksArr);

let switchPage = (el) => {
	pagesArr.forEach(page => {
		page.classList.add('invisible');
	})
	el.classList.remove('invisible');
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

palnBlocksArr.forEach(p => {
	p.addEventListener('mouseover', () => {
		palnBlocksArr.forEach( block => {
			block.classList.remove('popular');
		});
		p.classList.add('popular');
	})
});
palnBlocksArr.forEach(p => {
	p.addEventListener('touchend', () => {
		palnBlocksArr.forEach( block => {
			block.classList.remove('popular');
		});
		p.classList.add('popular');
	})
});