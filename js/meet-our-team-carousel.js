
(function () {
    const slides = [
        '<img src="img/meet-our-teem-carusel-block-pics/helena-farse-pic.webp" alt="Helena Farse foto">',
        '<img src="img/meet-our-teem-carusel-block-pics/dan-pitts-pic.webp" alt="Dan Pitts foto">',
        '<img src="img/meet-our-teem-carusel-block-pics/tomas-willens-pic.webp" alt="Tomas Willens foto">',
        '<img src="img/meet-our-teem-carusel-block-pics/lucy-madins-pic.webp" alt="Lucy Madins foto">'
    ]

    let currentSlide = 0;

    function showCurrentSlide() {
        const slideContainer = document.querySelector('.team-members-carousel-wrapper .team-members-carousel-slide-container');
        let html = '';
        html = slides[currentSlide];
        const nextSlide = currentSlide + 1 < slides.length ? currentSlide + 1 : 0;
        html += slides[nextSlide];
        const next2Slide = nextSlide + 1 < slides.length ? nextSlide + 1 : 0;
        html += slides[next2Slide];
        slideContainer.innerHTML = html;
    }

    function prevSlide() {
        currentSlide--;
        if (currentSlide < 0) currentSlide = slides.length - 1;
        showCurrentSlide();
    }
    function nextSlide() {
        currentSlide++;
        if (currentSlide >= slides.length) currentSlide = 0;
        showCurrentSlide();
    }
    // setInterval(nextSlide, 2000)
    showCurrentSlide();

    const buttonPrev = document.querySelector('.team-members-carousel-wrapper .team-btn-slide-prev');
    buttonPrev.addEventListener('click', prevSlide);
    const buttonNext = document.querySelector('.team-members-carousel-wrapper .team-btn-slide-next');
    buttonNext.addEventListener('click', nextSlide);
})();