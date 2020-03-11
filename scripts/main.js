function openHome(){
	$('#mainContent').load('home.html');
	document.getElementById("home").classList.add('currentMenu');
	document.getElementById("blog").classList.remove('currentMenu');
	document.getElementById("about").classList.remove('currentMenu');
}

function openBlog(){
	$('#mainContent').load('blog.html');
	document.getElementById("blog").classList.add('currentMenu');
	document.getElementById("home").classList.remove('currentMenu');
	document.getElementById("about").classList.remove('currentMenu');
}

function openAbout(){
	$('#mainContent').load('about.html');
	document.getElementById("about").classList.add('currentMenu');
	document.getElementById("home").classList.remove('currentMenu');
	document.getElementById("blog").classList.remove('currentMenu');
}
