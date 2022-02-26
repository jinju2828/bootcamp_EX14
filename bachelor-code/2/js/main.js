// const andi = document.querySelector('#andi');
// const claire = document.querySelector('#claire');
// const sharleen = document.querySelector('#sharleen');
//
// document.querySelector('#andiNext').addEventListener('click', andiNext);
// document.querySelector('#claireNext').addEventListener('click', claireNext);
// document.querySelector('#sharleenNext').addEventListener('click', sharleenNext);
//
// function andiNext(){
// 	claire.classList.add('hidden');
// 	sharleen.classList.add('hidden');
// 	andi.classList.toggle('hidden');
// }
//
// function claireNext(){
// 	andi.classList.add('hidden');
// 	sharleen.classList.add('hidden');
// 	claire.classList.toggle('hidden');
// }
//
// function sharleenNext(){
// 	andi.classList.add('hidden');
// 	claire.classList.add('hidden');
// 	sharleen.classList.toggle('hidden');
// }

let contestants = document.querySelectorAll('.contestant');

Array.from(contestants).forEach(
	e => {
		e.addEventListener('click', () => {
			let selector = e.classList[0];
			let imageSection = document.querySelector('.image');
			let hideImages = imageSection.querySelectorAll(`:not(#${selector})`);

			document.querySelector(`#${selector}`).classList.toggle('hidden');
			Array.from(hideImages).forEach(
				image => {
					image.classList.add('hidden');
				}
			)
		})
	}
);

