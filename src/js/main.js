const track = document.getElementById('track');
const prevButton = document.getElementById('button-prev');
const nextButton = document.getElementById('button-next');

const totalSlides = track.children.length;
let itemsPerSlide = 5; // Por defecto para pantallas grandes
let currentSlide = 0;

function updateItemsPerSlide() {
  if (window.innerWidth <= 480) {
    itemsPerSlide = 1;
  } else if (window.innerWidth <= 768) {
    itemsPerSlide = 2;
  } else {
    itemsPerSlide = 5;
  }
}

function updateCarousel() {
  updateItemsPerSlide();
  const slideWidth = track.offsetWidth / itemsPerSlide;
  track.style.transform = `translateX(${-currentSlide * slideWidth}px)`;
}

function nextSlide() {
  if (currentSlide < totalSlides - itemsPerSlide) {
    currentSlide++;
  } else {
    currentSlide = 0;
  }
  updateCarousel();
}

function prevSlide() {
  if (currentSlide > 0) {
    currentSlide--;
  } else {
    currentSlide = totalSlides - itemsPerSlide;
  }
  updateCarousel();
}

prevButton.addEventListener('click', prevSlide);
nextButton.addEventListener('click', nextSlide);

// Inicializar el carrusel
updateCarousel();

// Ajustar el carrusel cuando cambia el tamaño de la ventana
window.addEventListener('resize', updateCarousel);