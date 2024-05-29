// const navLinks = document.querySelector('.nav-links')
// function onToggleMenu(e){
//     e.name = e.name === 'menu' ? 'close' : 'menu'
//     navLinks.classList.toggle('top-[9.5%]')
//     console.log("hello")
// }

const navLinks = document.querySelector('.nav-links');

function onToggleMenu(e) {
    e.name = e.name === 'menu' ? 'close' : 'menu'

    const currentClass = navLinks.classList.contains('hidden') ? 'hidden' : 'block';

    if (currentClass === 'hidden') {
        // If currently hidden, switch to block
        navLinks.classList.remove('hidden');
        navLinks.classList.add('block');
    } else {
        // If currently block, switch to hidden
        navLinks.classList.remove('block');
        navLinks.classList.add('hidden');
    }
    
    console.log("hello");
}

//   ...........CAROUSEL......................
  document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".carousel-container");
  const slides = document.querySelectorAll(".carousel-slide");
  const prevBtn = document.querySelector(".carousel-prev");
  const nextBtn = document.querySelector(".carousel-next");

  let slideIndex = 0;

  
  slides[slideIndex].classList.add("active");

  // current slide
  function showSlide() {
    slides.forEach((slide) => slide.classList.remove("active"));
    slides[slideIndex].classList.add("active");
  }

  // next slide
  function nextSlide() {
    if (slideIndex < slides.length - 1) {
      slideIndex++;
    } else {
      slideIndex = 0;
    }
    showSlide();
  }

  // previous slide
  function prevSlide() {
    if (slideIndex > 0) {
      slideIndex--;
    } else {
      slideIndex = slides.length - 1;
    }
    showSlide();
  }

  nextBtn.addEventListener("click", () => {
    nextSlide();
    container.style.transform = `translateX(-${slideIndex * 100}%)`;
  });

  prevBtn.addEventListener("click", () => {
    prevSlide();
    container.style.transform = `translateX(-${slideIndex * 100}%)`;
  });
});




