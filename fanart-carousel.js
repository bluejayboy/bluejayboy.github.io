let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-item');
const carouselTitle = document.getElementById('carousel-title');
const carouselText = document.getElementById('carousel-text');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
  carouselTitle.textContent = slides[index].getAttribute('data-title');
  carouselText.textContent = slides[index].getAttribute('data-text');
}

function prevSlide() {
  currentSlide = (currentSlide > 0) ? currentSlide - 1 : slides.length - 1;
  showSlide(currentSlide);
}

function nextSlide() {
  currentSlide = (currentSlide < slides.length - 1) ? currentSlide + 1 : 0;
  showSlide(currentSlide);
}

// Initialize the carousel with the first slide
showSlide(currentSlide);