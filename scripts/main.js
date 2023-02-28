// On start load default content, yo
openContent('projects');

// Load Dynamic Content
function openContent(content) {
  $('#dynamicContent').load(content + '.html');
  selectCurrentNav(content);
}

// Set current navigation in menu
function selectCurrentNav(content) {
  const ul = document.getElementById('navMenu');
  Array.from(ul.children).forEach(li => {
    const menuElement = li.children[0].id;
    if (content.startsWith(menuElement)) {
      li.children[0].classList.add('currentMenu');
    } else {
      li.children[0].classList.remove('currentMenu');
    }
  });
}

//STICKY HEADER
window.onscroll = () => {
  const header = document.getElementById('stickyHeader');
  const headerPosition = document.getElementById('dynamicContent');
  const sticky = headerPosition.offsetTop;
  if (window.pageYOffset > sticky) {
    header.classList.add('stickyHeader');
  } else {
    header.classList.remove('stickyHeader');
  }
}

// Other Variables
const currentYear = new Date().getFullYear();
document.getElementById('js-year').innerHTML = currentYear;