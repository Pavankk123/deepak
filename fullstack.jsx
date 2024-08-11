let slideIndex = 0;
const slides = document.querySelector('.slides');

function moveSlide(step) {
    const totalSlides = slides.children.length;
    slideIndex = (slideIndex + step + totalSlides) % totalSlides;
    const offset = -slideIndex * 600;
    slides.style.transform = `translateX(${offset}px)`;
}

document.addEventListener('scroll', function() {
    const footer = document.querySelector('footer');
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        footer.classList.add('show');
    } else {
        footer.classList.add('show');
    }
});
