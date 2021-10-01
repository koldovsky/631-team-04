
(function () {



    const slides = [
        `<div class="team-members-carousel-item-generic">
            <img src="img/meet-our-teem-carusel-block-pics/helena-farse-pic.webp" alt="Helena Farse foto">
            <h2 class="team-members-carousel-h2-style">Helena Farse</h2>
            <div class="team-members-about">
                <p class="team-members-about">Professional guide | 10 years of experience</p>
            </div>
            <div class="team-members-social-icons-container">
                <ul class="team-members-social-icons-list">
                    <li class="team-members-social-icons-element">
                        <p><a target="_blank" href="https://facebook.com/"><img id="team-members-social-icons-element" src="img/img-social-icons/facebook-icon.svg" alt="Facebook"></a></p>
                    </li>
                    <li class="team-members-social-icons-element">
                        <p><a target="_blank" href="https://instagram.com/"><img id="team-members-social-icons-element" src="img/img-social-icons/instagram-icon.svg" alt="Instagram"></a></p>
                    </li>
                    <li class="team-members-social-icons-element">
                        <p><a target="_blank" href="https://youtube.com/"><img id="team-members-social-icons-element" src="img/img-social-icons/youtube-icon.svg" alt="YouTube"></a></p>
                    </li>
                </ul>
            </div>
        </div>`,
        `<div class="team-members-carousel-item-generic">
            <img src="img/meet-our-teem-carusel-block-pics/dan-pitts-pic.webp" alt="Dan Pitts foto">
            <h2 class="team-members-carousel-h2-style">Dan Pitts</h2>
            <div class="team-members-about">
                <p class="team-members-about">Professional guide | 5 years of experience</p>
            </div>
            <div class="team-members-social-icons-container">
                <ul class="team-members-social-icons-list">
                    <li class="team-members-social-icons-element">
                        <p><a target="_blank" href="https://facebook.com/"><img id="team-members-social-icons-element" src="img/img-social-icons/facebook-icon.svg" alt="Facebook"></a></p>
                    </li>
                    <li class="team-members-social-icons-element">
                        <p><a target="_blank" href="https://instagram.com/"><img id="team-members-social-icons-element" src="img/img-social-icons/instagram-icon.svg" alt="Instagram"></a></p>
                    </li>
                    <li class="team-members-social-icons-element">
                        <p><a target="_blank" href="https://youtube.com/"><img id="team-members-social-icons-element" src="img/img-social-icons/youtube-icon.svg" alt="YouTube"></a></p>
                    </li>
                </ul>
            </div>
        </div>`,
        `<div class="team-members-carousel-item-generic">
            <img src="img/meet-our-teem-carusel-block-pics/tomas-willens-pic.webp" alt="Tomas Willens foto">
            <h2 class="team-members-carousel-h2-style">Tomas Willens</h2>
            <div class="team-members-about">
                <p class="team-members-about">Photographer | 5 years of experience</p>
            </div>
            <div class="team-members-social-icons-container">
                <ul class="team-members-social-icons-list">
                    <li class="team-members-social-icons-element">
                        <p><a target="_blank" href="https://facebook.com/"><img id="team-members-social-icons-element" src="img/img-social-icons/facebook-icon.svg" alt="Facebook"></a></p>
                    </li>
                    <li class="team-members-social-icons-element">
                        <p><a target="_blank" href="https://instagram.com/"><img id="team-members-social-icons-element" src="img/img-social-icons/instagram-icon.svg" alt="Instagram"></a></p>
                    </li>
                    <li class="team-members-social-icons-element">
                        <p><a target="_blank" href="https://youtube.com/"><img id="team-members-social-icons-element" src="img/img-social-icons/youtube-icon.svg" alt="YouTube"></a></p>
                    </li>
                </ul>
            </div>
        </div>`,
        `<div class="team-members-carousel-item-generic">
            <img src="img/meet-our-teem-carusel-block-pics/lucy-madins-pic.webp" alt="Lucy Madins foto">
            <h2 class="team-members-carousel-h2-style">Lucy Madins</h2>
            <div class="team-members-about">
                <p class="team-members-about">Photographer | 5 years of experience</p>                                
            </div>
            <div class="team-members-social-icons-container">
                <ul class="team-members-social-icons-list">
                    <li class="team-members-social-icons-element">
                        <p><a target="_blank" href="https://facebook.com/"><img id="team-members-social-icons-element" src="img/img-social-icons/facebook-icon.svg" alt="Facebook"></a></p>
                    </li>
                    <li class="team-members-social-icons-element">
                        <p><a target="_blank" href="https://instagram.com/"><img id="team-members-social-icons-element" src="img/img-social-icons/instagram-icon.svg" alt="Instagram"></a></p>
                    </li>
                    <li class="team-members-social-icons-element">
                        <p><a target="_blank" href="https://youtube.com/"><img id="team-members-social-icons-element" src="img/img-social-icons/youtube-icon.svg" alt="YouTube"></a></p>
                    </li>
                </ul>
            </div>
        </div>`
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