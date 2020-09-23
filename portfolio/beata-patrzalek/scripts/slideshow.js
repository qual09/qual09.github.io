let slideIndex = 0;
let carouselTimeout;
//showDivs(slideIndex);
carousel();

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  let i;
  let x = document.getElementsByClassName('mySlides');
  let dots = document.getElementsByClassName('bgDot');
  if (n > x.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = x.length }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = 'none';
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' bgDot-white', '');
  }
  x[slideIndex - 1].style.display = 'block';
  dots[slideIndex - 1].className += ' bgDot-white';
  clearTimeout(carouselTimeout);
  carouselTimeout = setTimeout(carousel, 9000);
}

function carousel() {
  let i;
  let x = document.getElementsByClassName('mySlides');
  let dots = document.getElementsByClassName('bgDot');
  for (i = 0; i < x.length; i++) {
    x[i].style.display = 'none';
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' bgDot-white', '');
  }
  slideIndex++;
  if (slideIndex > x.length) { slideIndex = 1 }
  x[slideIndex - 1].style.display = 'block';
  dots[slideIndex - 1].className += ' bgDot-white';
  carouselTimeout = setTimeout(carousel, 5000); // Change image every 2 seconds (2000)
}