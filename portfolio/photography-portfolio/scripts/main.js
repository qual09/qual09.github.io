// On start load default content
$('#dynamicContent').load('home.html');

// Sticky Header
window.onscroll = () => {
	const header = document.querySelector('header');
	const sticky = header.offsetTop;
	if (window.pageYOffset > sticky) {
		header.style.position = 'fixed';
	} else {
		header.style.position = 'unset';
	}
}

// Load Dynamic Content
function openContent(content) {
	selectCurrentNav(content);
	removeIntroStyles();
	$('#dynamicContent').load(content + '.html');
}

// Remove Landing Page Styles
function removeIntroStyles() {
	document.querySelector('#slideshow').style.display = 'none';
	document.querySelector('.title').style.display = 'none';
	document.querySelector('#dynamicContent').style.display = 'block';
	document.querySelector('header').style.position = 'unset';
	document.querySelector('footer').style.position = 'unset';
	document.querySelector('body').style.backgroundColor = 'white';
}

// Set current navigation in menu
function selectCurrentNav(content) {
	const ul = document.querySelector('#navMenu');
	Array.from(ul.children).forEach(li => {
		if (li.children[0].id === content) {
			li.children[0].classList.add('currentMenu');
		} else {
			li.children[0].classList.remove('currentMenu');
		}
	});
}
