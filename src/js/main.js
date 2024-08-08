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
const words = ["Backend Developer", "Frontend Developer","UI/UX Designer"];
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

//---------------------------------PROJECTS--------------------------------

const selector = document.querySelector(".selectors")

selector.addEventListener("click", (event)=> {
  idSelector = event.target.getAttribute("id");
  clear()
  printProjects(idSelector)
  

  if(idSelector != null){
    clearbtn();
    event.target.classList.add("selected")
  }
})

function clearbtn() {
  const selectedbtn = document.querySelectorAll('.selected')
  for (const btn of selectedbtn) {
      btn.classList.remove("selected");
    }
}


//---------------------------------CARDS--------------------------------

const projectContainer = document.querySelector(".projects-contatiner")
function printProjects(id){
    projects.forEach(project => {      
        if(project.from == id && project.url !== null){
          console.log(project.from);
          
          projectContainer.innerHTML += `
           <div class="image-container">
          <img src=${project.image} alt="">
          <div class="overlay">
              <h2>${project.title}</h2>
              <p>${project.description}</p>
              <div class="buttons">
                  <a href="${project.gh}">See code</a>
                  <a href="${project.url}">See website</a>
              </div>
          </div>
      </div>
          `
        }else if(project.from == id && project.utl == null){
          projectContainer.innerHTML += `
           <div class="image-container">
          <img src=${project.image} alt="">
          <div class="overlay">
              <h2>${project.title}</h2>
              <p>${project.description}</p>
              <div class="buttons">
                  <a href="${project.gh}">See code</a>
              </div>
          </div>
      </div>
          `
        }
    });
}

function clear(){
  projectContainer.innerHTML = "";
}

function defaultProjects(){

}






//---------------------------------DATA OF PROJECTS--------------------------------

const projects = [
  {
      id: 1,
      title: 'ARQUON',
      description: 'Landing page created for an architecture firm in the city of Medellín ',
      image: '../../public/img/prueba1.jpg',
      gh: "https://github.com/jarenas1/ARQUON.git",
      url : null,
      from : "page1" 
  },
  {
      id: 2,
      title: 'Project 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: 'project1.jpg',
      gh: "/",
      url : "/",
      from : "page1" 
  },
  {
      id: 3,
      title: 'Project 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: 'project1.jpg',
      gh: "/",
      url : "/",
      from : "page1" 
  },
  {
      id: 4,
      title: 'Project 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: 'project1.jpg',
      gh: "/",
      url : "/",
      from : "page1" 
  },
  {
      id: 5,
      title: 'Project 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: 'project1.jpg',
      gh: "/",
      url : "/",
      from : "page2" 
  },
  {
      id: 6,
      title: 'Project 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: 'project1.jpg',
      gh: "/",
      url : "/",
      from : "page2" 
  },
  {
      id: 7,
      title: 'Project 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: 'project1.jpg',
      gh: "/",
      url : "/",
      from : "page2" 
  },
  {
      id: 8,
      title: 'Project 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: 'project1.jpg',
      gh: "/",
      url : "/",
      from : "page2" 
  }
]

