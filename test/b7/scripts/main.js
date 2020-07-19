//STICKY HEADER
window.onscroll = function () { stickyHeader() };
function stickyHeader() {
	var header = document.getElementById("stickyHeader");
	var sticky = header.offsetTop;

	if (window.pageYOffset > sticky) {
		header.classList.add("stickyHeader");
	} else {
		header.classList.remove("stickyHeader");
	}
}

//SLIDESHOW
function plusDivs(n) {
	showDivs(slideIndex += n);
}
function currentDiv(n) {
	showDivs(slideIndex = n);
}
function showDivs(n) {
	var i;
	var x = document.getElementsByClassName("mySlides");
	var dots = document.getElementsByClassName("bgDot");
	if (n > x.length) { slideIndex = 1 }
	if (n < 1) { slideIndex = x.length }
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" bgDot-white", "");
	}
	x[slideIndex - 1].style.display = "block";
	dots[slideIndex - 1].className += " bgDot-white";
	clearTimeout(carouselTimeout);
	carouselTimeout = setTimeout(carousel, 9000);
}
function carousel() {
	var i;
	var x = document.getElementsByClassName("mySlides");
	var dots = document.getElementsByClassName("bgDot");
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" bgDot-white", "");
	}
	slideIndex++;
	if (slideIndex > x.length) { slideIndex = 1 }
	x[slideIndex - 1].style.display = "block";
	dots[slideIndex - 1].className += " bgDot-white";
	carouselTimeout = setTimeout(carousel, 5000); // Change image every 2 seconds (2000)
}

//slider
// Code By Webdevtrick ( https://webdevtrick.com )
function beforeAfter() {
	document.getElementById('compare').style.width = document.getElementById('slider').value + "%";
}
