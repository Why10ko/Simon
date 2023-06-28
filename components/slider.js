const slider = document.querySelector('.title_slider');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');

const slides = Array.from(document.querySelectorAll('.title_slider_pictur'));
const slideCount = slides.length;
let slideIndex = 0;

prevButton.addEventListener('click', showPrevSlide);
nextButton.addEventListener('click', showNextslide);

function showPrevSlide() {
	slideIndex = (slideIndex - 1 + slideCount) % slideCount;
	setTimeout(() => updateSlider(),500)	
}

function showNextslide() {
	slideIndex = (slideIndex + 1) % slideCount;
	setTimeout(() => updateSlider(),500)	
}

function updateSlider() {
  slides.forEach((slide, index) => {
    if (index === slideIndex) {
		slide.classList.remove('title_slide_dlt')					
    } else {	
		slide.classList.add('title_slide_dlt')
    }
  });
}

updateSlider();