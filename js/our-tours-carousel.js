(function () {
  const ourToursSlides = [
    `<article class="our-tours-carousel-item">
        <img alt="Illustration" src="img/img-our-tours/tanzania.jfif">
        <h3>5 Days in Tanzania</h3>
        <p class="our-tours-description">From Serengeti to Ngorongoro, with nights in comfortable hotels and breakfasts included.</p>
        <p class="our-tours-bold">Departing: 9 Nov 2019</p>
        <p class="our-tours-bold-yellow">Cost: $4000</p>
        <a href="#">Learn more</a>
    </article>`,
    `<article class="our-tours-carousel-item">
        <img alt="Illustration" src="img/img-our-tours/kenya.jfif">
        <h3>Amazing Week in Kenya</h3>
        <p class="our-tours-description">Starting from Nairobi, we'll visit Maasai Mara, Lake Nakuru, Lake Naivasha andHell’s Gate.</p>
        <p class="our-tours-bold">Departing: 12 Jan 2020</p>
        <p class="our-tours-bold-yellow">Cost: $5500</p>
        <a href="#">Learn more</a>
    </article>`,
    `<article class="our-tours-carousel-item">
        <img alt="Illustration" src="img/img-our-tours/amboseli-park.jfif">
        <h3>Amboseli Park in Kenya</h3>
        <p class="our-tours-description">Go on a 5-days amazing tour around the Amboseli Park in Kenya</p>
        <p class="our-tours-bold">Departing: 03 Mar 2020</p>
        <p class="our-tours-bold-yellow">Cost: $6200</p>
        <a href="#">Learn more</a>
    </article>`,
    `<article class="our-tours-carousel-item">
        <img alt="Illustration" src="img/img-our-tours/jozani-chwaka-bay.jfif">
        <h3>Jozani Chwaka Bay National Park</h3>
        <p class="our-tours-description">Visit Josani, or as it is also called Fairytale Forest, the only national park in Zanzibar.</p>
        <p class="our-tours-bold">Departing: 03 Mar 2020</p>
        <p class="our-tours-bold-yellow">Cost: $6200</p>
        <a href="#">Learn more</a>
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

// one-slide carousel below

// let currentSlide = 0;

//   function showCurrentSlide() {
//     const slideContainer = document.querySelector(".our-tours-slide-container");
//     slideContainer.innerHTML = ourToursSlides[currentSlide];
//   }

//   function nextSlide() {
//     currentSlide++;
//     if (currentSlide >= ourToursSlides.length) currentSlide = 0;
//     showCurrentSlide();
//   }

//   function prevSlide() {
//     currentSlide--;
//     if (currentSlide < 0) currentSlide = ourToursSlides.length - 1;
//     showCurrentSlide();
//   }

//   // setInterval(nextSlide, 1000);
//   showCurrentSlide();

// one-slide carousel above


  // const ourToursList = [
  //     {
  //         id: 1,
  //         name: '5 Days in Tanzania',
  //         img: 'img/img-our-tours/tanzania.jfif',
  //         description: "From Serengeti to Ngorongoro, with nights in comfortable hotels and breakfasts included.",
  //         departing: 'Departing: 9 Nov 2019',
  //         price: 'Cost: $4000',
  //     },
  //     {
  //         id: 2,
  //         name: 'Amazing Week in Kenya',
  //         img: 'img/img-our-tours/kenya.jfif',
  //         description: "Starting from Nairobi, we'll visit Maasai Mara, Lake Nakuru, Lake Naivasha andHell’s Gate.",
  //         departing: 'Departing: 12 Jan 2020',
  //         price: 'Cost: $5500',
  //     },
  //     {
  //         id: 3,
  //         name: 'Amboseli Park in Kenya',
  //         img: 'img/img-our-tours/amboseli-park.jfif',
  //         description: "Go on a 5-days amazing tour around the Amboseli Park in Kenya.",
  //         departing: 'Departing: 03 Mar 2020',
  //         price: 'Cost: $6200',
  //     },
  //     {
  //         id: 4,
  //         name: 'Jozani Chwaka Bay National Park',
  //         img: 'img/img-our-tours/jozani-chwaka-bay.jfif',
  //         description: "Visit Josani, or as it is also called Fairytale Forest, the only national park in Zanzibar.",
  //         departing: 'Departing: 03 Mar 2020',
  //         price: 'Cost: $6200',
  //     }
  // ]

  //     function renderTours(tours) {
  //         const toursContainer = document.querySelector('.our-tours-carousel');
  //         for (const tour of tours) {
  //             toursContainer.innerHTML +=
  //             `<article class="our-tours-carousel-item">
  //             <img alt="${tour.name}" src="${tour.img}">
  //             <h3>${tour.name}</h3>
  //             <p class="our-tours-description">${tour.description}</p>
  //             <p class="our-tours-bold">${tour.departing}</p>
  //             <p class="our-tours-bold-yellow">${tour.price}</p>
  //             <a href="#">Learn more</a>
  //             </article>`;
  //         }
  //     }

  // renderTours(ourToursList);
})();
