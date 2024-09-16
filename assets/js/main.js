
// var ==========================
let burger = document.querySelector('.burger');
let nav = document.querySelector('.nav');
let body = document.querySelector('body');

function sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}


window.onscroll = function () {
    scrollPosition = Math.round(window.scrollY);

    if (scrollPosition > 100) {
        document.querySelector('.header').classList.add('stick');
    } else {
        document.querySelector('.header').classList.remove('stick');
    }
};

window.onclick = function (e) {
    if (nav.classList.contains('active') && !e.target.closest('.nav ul')) {
        nav.classList.remove('active')
    }
}

// Clicks ======================================================

if (burger != undefined) {
    burger.addEventListener('click', function () {
        sleep(2).then(() => {
            nav.classList.toggle('active');
            body.classList.toggle('active');
        });
    });
}

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
