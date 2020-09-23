// Sticky Header
window.onscroll = function () { stickyHeader() };
function stickyHeader() {
	let header = document.getElementById('stickyHeader');
	let sticky = header.offsetTop;
	if (window.pageYOffset > sticky) {
		header.classList.add('stickyHeader');
	} else {
		header.classList.remove('stickyHeader');
	}
}

// Slider
function beforeAfter() {
	document.getElementById('compare').style.width = document.getElementById('slider').value + '%';
}

// Load Dynamic Content
function openContent(content) {
	$('#dynamiContent').load(content + '.html');
	selectCurrentNav(content);

	document.querySelector('.slideshow').style.display = 'none';
	document.querySelector('.title').style.display = 'none';
	document.querySelector('#dynamiContent').style.display = 'block';
}

// Set current navigation in menu
function selectCurrentNav(content) {
	const ul = document.getElementById('navMenu');
	Array.from(ul.children).forEach(li => {
		if (li.children[0].id === content) {
			li.children[0].classList.add('currentMenu');
		} else {
			li.children[0].classList.remove('currentMenu');
		}
	});
}
