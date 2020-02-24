var nextSlider = document.querySelector(".next");
var prevSlider = document.querySelector(".prev");
var firstSlider = document.querySelector("[data-slider='1']");
var secondSlider = document.querySelector("[data-slider='2']");
var thirdSlider = document.querySelector("[data-slider='3']");

var slideIndex = 1;
showSlide(slideIndex);

nextSlider.addEventListener("click", function() {
  plusSlides(1);
});

prevSlider.addEventListener("click", function() {
  plusSlides(-1);
});

firstSlider.addEventListener("click", function() {
  currentSlide(1);
});

secondSlider.addEventListener("click", function() {
  currentSlide(2);
});

thirdSlider.addEventListener("click", function() {
  currentSlide(3);
});

function plusSlides(n) {
  showSlide((slideIndex += n));
}

function currentSlide(n) {
  showSlide((slideIndex = n));
}

function showSlide(n) {
  var i;
  var slides = document.getElementsByClassName("blogSlides");
  var dots = document.getElementsByClassName("blogSlider__dots--dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].classList.add("display--none");
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }
  slides[slideIndex - 1].classList.remove("display--none");
  dots[slideIndex - 1].classList.add("active");
}

setInterval(function() {
  slideIndex++;
  showSlide(slideIndex);
}, 4000);
