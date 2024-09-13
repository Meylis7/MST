
window.onscroll = function () {
    scrollPosition = Math.round(window.scrollY);

    if (scrollPosition > 100) {
        document.querySelector('.header').classList.add('stick');
    } else {
        document.querySelector('.header').classList.remove('stick');
    }
};


// Slider =========================================================
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const slides = document.querySelectorAll('.slide');

let index = 0;

const displaySlide = (index) => {
    slides.forEach((slide) => {
        slide.style.display = 'none';
    });
    slides[index].style.display = 'flex';
};

const nextSlide = () => {
    index++;
    if (index > slides.length - 1) {
        index = 0;
    }
    displaySlide(index);
};

const prevSlide = () => {
    index--;
    if (index < 0) {
        index = slides.length - 1;
    }
    displaySlide(index);
};

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

displaySlide(index);
