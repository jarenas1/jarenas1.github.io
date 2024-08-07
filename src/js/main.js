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


//---------------------------------PALABRAS--------------------------------

let txt = document.getElementById('rol');
const words = ["BackEnd Developer", "FrontEnd Developer","UI/UX Designer"];
let currentIndex = 0;

function escribir() {
 txt.textContent = "";
  let textArr = words[currentIndex];
  textArr = textArr.split("");

  let i = 0;

  const printString = setInterval(() => {
     txt.textContent += textArr[i];
      i++;
      if (i == textArr.length) {
          clearInterval(printString);
          setTimeout(() => {
              deleteWord()
          }, 1000); 
      }
  }, 200); 
}

function deleteWord() {
  let text = txt.textContent;

  const deleteString = setInterval(() => {
      text = text.slice(0, -1);
      txt.textContent = text;
      if (text == "") {
          clearInterval(deleteString);
          currentIndex = (currentIndex + 1) % words.length; //Cambiar a la siguiente palabra
          setTimeout(() => {
              escribir()
          }, 200)
      }
  }, 100) //Tiempo en borrar cada una de las letras
}
escribir();
