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

// Slider
// Code By Webdevtrick ( https://webdevtrick.com )
function beforeAfter() {
	document.getElementById('compare').style.width = document.getElementById('slider').value + "%";
}
