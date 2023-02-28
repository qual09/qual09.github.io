document.getElementById('text-navigation').addEventListener('mouseover', (event) => {
  const navMenu = document.getElementById('navMenu');
  const windowWidth = window.innerWidth;
  if (windowWidth > 600) {
    navMenu.style.fontSize = '1.3em';
  } else {
    navMenu.style.fontSize = '1.1em';
  }
});

document.getElementById('text-navigation').addEventListener('mouseout', (event) => {
  const navMenu = document.getElementById('navMenu');
  navMenu.style.fontSize = '1em';
});