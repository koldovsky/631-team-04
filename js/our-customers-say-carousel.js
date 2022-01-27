(function (){
const slides = [
    `<div class="card-container">
    <div class="img">
        <img class="customer-say-img" src="img/img-our-customers-say/desmond-tills.jpeg"
        alt="Man in sunglasses is looking at his camera">
    </div>
    <div class="text">
        <p>I recommend a tour to Rwanda. It is perhaps better not to go to this country without a reliable
            guide. With Mango Tours, we felt completely safe, and we want to go there again, with the kids. Well
            thought-out stops along the way, excellent hotels. The guides are worth mentioning as a separate
            point. Thanks for the wonderful experience!</p>
        <p class="customer-name">Desmond Tills</p>
    </div>
    </div>`,
    `<div class="card-container">
<div class="img">
    <img class="customer-say-img" src="img/img-our-customers-say/cole-holmes.jpeg"
    alt="Man stands next to an elephant">
</div>
<div class="text">
    <p>This is the second time I'm going on a safari with Mango Tours. To anyone who doubts, I REALLY
        recommend this active vacation! It is a completely different experience than regular all-inclusive
        or sightseeing tours. Here you see the real Africa, in all its diversity.</p>
    <p class="customer-name">Cole Holmes</p>
</div>
    </div>`,
    `<div class="card-container">
    <div class="img">
        <img class="customer-say-img" src="img/img-our-customers-say/ann-and-peter-reiss.jpeg"
        alt="Man and a woman on a safari, driving in a car">
    </div>
    <div class="text">
        <p>This is a reliable travel company, the manager stays in touch throughout the trip. Everything was
            perfectly planned, the trip was comfortable and left a lot of pleasant impressions. We're thinking
            about the next safari trip with Mango Travel. Seeing lions and antelopes live - it's worth it!</p>
        <p class="customer-name"> Ann and Peter Reiss</p>
    </div>
    </div>`
]

let currentSlide = 0;

function showCurrentSlide() {
    const slideContainer = document.querySelector('.our-customers-say-slides-container');
    slideContainer.innerHTML = slides[currentSlide];

}
function nextSlide(){
    currentSlide ++; 
    if(currentSlide >= slides.length) currentSlide = 0;
    showCurrentSlide(); 
}

function prevSlide() {
    currentSlide --; 
    if(currentSlide < 0) currentSlide = slides.length - 1;
    showCurrentSlide();
}
//setInterval(nextSlide, 2000)
showCurrentSlide();

const btnNext = document.querySelector('.our-customers-say-carousel-container .slide-next');
btnNext.addEventListener('click', nextSlide);

const btnPrev = document.querySelector('.our-customers-say-carousel-container .slide-prev');
btnPrev.addEventListener('click', prevSlide);

})();