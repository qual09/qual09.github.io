const mobileWidth = 600;

// On start load default content, yo
openContent('home');

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
  const ulBurger = document.getElementById('hamburger-nav');
  Array.from(ulBurger.children).forEach(li => {
    const menuElement = li.children[0].id;
    if (content.startsWith(menuElement)) {
      li.children[0].classList.add('currentMenu');
    } else {
      li.children[0].classList.remove('currentMenu');
    }
  });
}

// Toggle Hamburger menu
function hamburger() {
  const hamburgerMenu = document.querySelector('.hamburger-menu');
  if (hamburgerMenu.classList.contains('visible')) {
    hamburgerMenu.classList.add('hidden');
    hamburgerMenu.classList.remove('visible');
  } else {
    hamburgerMenu.classList.add('visible');
    hamburgerMenu.classList.remove('hidden');
  }
}

//STICKY HEADER
window.onscroll = () => {
  if ($(window).width() > mobileWidth) {
    const header = document.getElementById('stickyHeader');
    const headerPosition = document.getElementById('dynamicContent');
    const sticky = headerPosition.offsetTop;
    if (window.pageYOffset > sticky) {
      header.classList.add('stickyHeader');
    } else {
      header.classList.remove('stickyHeader');
    }
  }
}

// On window resize
addEventListener("resize", (event) => { });
onresize = (event) => {
  if ($(window).width() > mobileWidth) {
    document.querySelector('.hamburger-menu').classList.add('hidden');
    document.querySelector('.hamburger-menu').classList.remove('visible');
  } else {
    const header = document.getElementById('stickyHeader');
    header.classList.remove('stickyHeader');
  }
};

// On click outside hamburger
$(window).click(() => {
  if ($(window).width() <= mobileWidth) {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    if (hamburgerMenu.classList.contains('visible')) {
      // Hide hamburger menu
      hamburger();
    }
  }
});

$('.hamburger-menu').click(event => {
  event.stopPropagation();
});

$('.hamburger-icon').click(event => {
  event.stopPropagation();
});

// Other Variables
const currentYear = new Date().getFullYear();
document.getElementById('js-year').innerHTML = currentYear;