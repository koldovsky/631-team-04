(function () {
  const ourToursSlides = [
    `<article class="our-tours-carousel-item">
        <img alt="Illustration" src="img/img-our-tours/tanzania.jfif">
        <div><h3>5 Days in Tanzania</h3></div>
        <div>
        <p class="our-tours-description">From Serengeti to Ngorongoro, with nights in comfortable hotels and breakfasts included.</p>
        </div>
        <div>
        <p class="our-tours-bold">Departing: 9 Nov 2019</p>
        <p class="our-tours-bold-yellow">Cost: $4000</p>
        <a href="#">Learn more</a>
        </div>
    </article>`,
    `<article class="our-tours-carousel-item">
        <img alt="Illustration" src="img/img-our-tours/kenya.jfif">
        <div><h3>Amazing Week in Kenya</h3></div>
        <div>
        <p class="our-tours-description">Starting from Nairobi, we'll visit Maasai Mara, Lake Nakuru, Lake Naivasha andHell’s Gate.</p>
        </div>
        <div>
        <p class="our-tours-bold">Departing: 12 Jan 2020</p>
        <p class="our-tours-bold-yellow">Cost: $5500</p>
        <a href="#">Learn more</a>
        </div>
    </article>`,
    `<article class="our-tours-carousel-item">
        <img alt="Illustration" src="img/img-our-tours/amboseli-park.jfif">
        <div><h3>Amboseli Park in Kenya</h3></div>
        <div>
        <p class="our-tours-description">Go on a 5-days amazing tour around the Amboseli Park in Kenya</p>
        </div>
        <div>
        <p class="our-tours-bold">Departing: 03 Mar 2020</p>
        <p class="our-tours-bold-yellow">Cost: $6200</p>
        <a href="#">Learn more</a>
        </div>
    </article>`,
    `<article class="our-tours-carousel-item">
        <img alt="Illustration" src="img/img-our-tours/jozani-chwaka-bay.jfif">
        <div><h3>Jozani Chwaka Bay National Park</h3></div>
        <div>
        <p class="our-tours-description">Visit Josani, or as it is also called Fairytale Forest, the only national park in Zanzibar.</p>
        </div>
        <div>
        <p class="our-tours-bold">Departing: 03 Mar 2020</p>
        <p class="our-tours-bold-yellow">Cost: $6200</p>
        <a href="#">Learn more</a>
        </div>
    </article>`,
  ];

  let currentSlide = 0;

  function showCurrentSlide() {
    const slideContainer = document.querySelector(".our-tours-slide-container");
    let html = '';
    html = ourToursSlides[currentSlide];
    const nextSlide = currentSlide + 1 < ourToursSlides.length ? currentSlide + 1 : 0;
    html += ourToursSlides[nextSlide];
    const next2Slide = nextSlide + 1 < ourToursSlides.length ? nextSlide + 1 : 0;
    html += ourToursSlides[next2Slide];
    slideContainer.innerHTML = html;
  }

  function nextSlide() {
    currentSlide++;
    if (currentSlide >= ourToursSlides.length) currentSlide = 0;
    showCurrentSlide();
  }

  function prevSlide() {
    currentSlide--;
    if (currentSlide < 0) currentSlide = ourToursSlides.length - 1;
    showCurrentSlide();
  }

  showCurrentSlide();

  const btnNext = document.querySelector(".our-tours-btn-next");
  btnNext.addEventListener("click", nextSlide);

  const btnPrev = document.querySelector(".our-tours-btn-prev");
  btnPrev.addEventListener("click", prevSlide);
})();
