// *** START TEST *** //

console.log('Yo Dawg!');
console.log('Welcome to', location.hostname);

// TEST function
function yo() {
  const searchCriteria = {
    name: 'John',
    surname: 'Doe',
    age: 33,
  };

  // Method 1
  Object.keys(searchCriteria).forEach(prop => {
    // if (searchCriteria.hasOwnProperty(prop))
    console.log(prop, searchCriteria[prop]);
  });

  // Method 2
  for (let prop in searchCriteria) {
    // if (searchCriteria.hasOwnProperty(prop))
    console.log(prop, searchCriteria[prop]);
  };
}

// *** END TEST *** //

// Load subpage
function openContent(content) {
  $('#mainContent').load(content + '.html');
  selectCurrentNav(content);
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

//STICKY HEADER
window.onscroll = () => {
  const header = document.getElementById('stickyHeader');
  const headerPosition = document.getElementById('mainContent');
  const sticky = headerPosition.offsetTop;
  if (window.pageYOffset > sticky) {
    header.classList.add('stickyHeader');
  } else {
    header.classList.remove('stickyHeader');
  }
}
