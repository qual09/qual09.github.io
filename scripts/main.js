function yo() {
	alert("Yo Dawg!");
}

function openContent(content) {
	$('#mainContent').load(content + '.html');
	selectCurrentNav(content);
}

function selectCurrentNav(content) {
	document.getElementById("home").classList.remove('currentMenu');
	document.getElementById("blog").classList.remove('currentMenu');
	document.getElementById("about").classList.remove('currentMenu');
	document.getElementById(content).classList.add('currentMenu');
}