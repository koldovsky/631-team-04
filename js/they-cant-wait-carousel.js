
(function () {



    const animalSlides = [
        `<div class="they-cant-wait-images">
            <img src="img/img-they-cant-wait-to-meet-you/elephant.png" alt="Elephant">
         </div>`,
        `<div class="they-cant-wait-images">
            <img src="img/img-they-cant-wait-to-meet-you/giraffe.png" alt="giraffe">
        </div>`,
        `<div class="they-cant-wait-images">
            <img src="img/img-they-cant-wait-to-meet-you/lion.png" alt="Lion">
        </div>`,
        `<div class="they-cant-wait-images">
            <img src="img/img-they-cant-wait-to-meet-you/monkey.jpg" alt="Monkey">
        </div>`,
        `<div class="they-cant-wait-images">
            <img src="img/img-they-cant-wait-to-meet-you/pretty-anilmal.jpg" alt="pretty-animal">
         </div>`,
         `<div class="they-cant-wait-images">
            <img src="img/img-they-cant-wait-to-meet-you/zebra.png" alt="Zebra">
         </div>`
    ]

    let currentSlide = 0;

    function showCurrentSlide() {
        const slideContainer = document.querySelector('.they-cant-wait-carousel-wrapper .they-cant-wait-carousel-slide-container');
        let html = '';
        html = animalSlides[currentSlide];
        if (window.innerWidth > 700) {
            const nextSlide = currentSlide + 1 < animalSlides.length ? currentSlide + 1 : 0;
            html += animalSlides[nextSlide];
            if (window.innerWidth > 900) {
                const next2Slide = nextSlide + 1 < animalSlides.length ? nextSlide + 1 : 0;
                html += animalSlides[next2Slide];
            }
        }
        slideContainer.innerHTML = html;
    }

    function prevSlide() {
        currentSlide--;
        if (currentSlide < 0) currentSlide = animalSlides.length - 1;
        showCurrentSlide();
    }
    function nextSlide() {
        currentSlide++;
        if (currentSlide >= animalSlides.length) currentSlide = 0;
        showCurrentSlide();
    }
   
    showCurrentSlide();

    window.addEventListener('resize', showCurrentSlide);

    const buttonPrev = document.querySelector('.they-cant-wait-carousel-wrapper .button-slide-prev');
    buttonPrev.addEventListener('click', prevSlide);
    const buttonNext = document.querySelector('.they-cant-wait-carousel-wrapper .button-slide-next');
    buttonNext.addEventListener('click', nextSlide);
})();