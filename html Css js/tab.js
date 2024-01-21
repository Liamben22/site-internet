let currentSlide = 0;
let sliderInterval;

function showSlide(index) {
  const slider = document.querySelector('.slider');
  currentSlide = index;
  slider.style.transform = 'translateX(${-index * 100}%)';
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + 4) % 4;
  showSlide(currentSlide);
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % 4;
  showSlide(currentSlide);
}

function startSliderAutoplay() {
  sliderInterval = setInterval(() => {
    nextSlide();
  }, 5000);
}

function stopSliderAutoplay() {
  clearInterval(sliderInterval);
}

document.addEventListener('DOMContentLoaded', () => {
  showSlide(currentSlide);
  startSliderAutoplay(); 
});