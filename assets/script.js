/****** tableau des images et titres du carrousel ******/
const slides = [
  {
    imageSrc: "assets/images/slideshow/slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    imageSrc: "assets/images/slideshow/slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    imageSrc: "assets/images/slideshow/slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    imageSrc: "assets/images/slideshow/slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

/****** variables du projet ******/
const dots = document.querySelector(".dots");
let index = 0;
const arrowRight = document.querySelector(".arrow_right");
const arrowLeft = document.querySelector(".arrow_left");
const slideImg = document.querySelector("#banner img");
const slideText = document.querySelector("#banner p");

/****** fonction des bullet-point ******/
function bulletPoints() {
  for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    dots.appendChild(dot);
    if (i === index) {
      dot.classList.add("dot_selected");
    }
  }
}

/****** fonction remove dot_selected ******/
function removeDot() {
  const slidesDots = document.querySelectorAll(".dot");
  slidesDots[index].classList.remove("dot_selected");
}

/****** fonction update image, tagline et dot_selected ******/
function updateSlide() {
  slideImg.src = slides[index].imageSrc;
  slideText.innerHTML = slides[index].tagLine;
  const slidesDots = document.querySelectorAll(".dot");
  slidesDots[index].classList.add("dot_selected");
}

/****** fonction click droit ******/
function clickRight() {
  arrowRight.addEventListener("click", () => {
    removeDot();
    index++;
    if (index > slides.length - 1) {
      index = 0;
    }
    updateSlide();
  });
}

/****** fonction click gauche ******/
function clickLeft() {
  arrowLeft.addEventListener("click", () => {
    removeDot();
    index--;
    if (index < 0) {
      index = slides.length - 1;
    }
    updateSlide();
  });
}

/****** fonction main ******/
function main() {
  bulletPoints();
  clickRight();
  clickLeft();
}
main();
