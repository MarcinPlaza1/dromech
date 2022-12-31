const slideShow = document.querySelector('#slideshow');
const slides = slideshow.querySelectorAll('img');
const prev = document.querySelector('.fa-chevron-left');
const next = document.querySelector('.fa-chevron-right');

let index = 0;

function menuToggle() {
	const nav = document.querySelector('#navbar');
	nav.classList.toggle("active");
}

const nextSlide = () => {
	slides[index].classList.remove('active');
	index = (index + 1) % slides.length;
	slides[index].classList.add('active');
};

const prevSlide = () => {
	slides[index].classList.remove('active');
	index = (index - 1 + slides.length) % slides.length;
	slides[index].classList.add('active');
};

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);

