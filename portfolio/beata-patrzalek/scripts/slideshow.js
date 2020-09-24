const slides = document.getElementsByClassName('mySlides');
const dots = document.getElementsByClassName('bgDot');
let slideIndex = 0;
let loopSlides;
showSlides();

// Select slide
function selectSlide(n) {
  slideIndex = n;
  clearTimeout(loopSlides);
  showSlides('manual');
}

// Change slide
function changeSlide(n) {
  slideIndex += n;
  clearTimeout(loopSlides);
  showSlides('manual');
}

function showSlides(manual = null) {
  if (!manual) slideIndex++;
  let i;
  // Hide all slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  // Hide all dots
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' bgDot-white', '');
  }

  // Check edge values of slide list
  if (slideIndex > slides.length) slideIndex = 1;
  if (slideIndex < 1) slideIndex = slides.length;

  // Show slide on UI
  slides[slideIndex - 1].style.display = 'block';
  // Show current dot
  dots[slideIndex - 1].className += ' bgDot-white';

  // Show next slide after timeout / it takes double time for next slide from manual select
  loopSlides = setTimeout(showSlides, 5000);
}
