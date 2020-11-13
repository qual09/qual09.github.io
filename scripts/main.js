// On start load default content
openContent('home');

// *** START TEST *** //
console.log('Yo Dawg!');
console.log('Welcome to', location.hostname);
// TEST function 1
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
// TEST function 2
function yo2() {
  const searchCriteria = [{ key: "AAA", value: ['a', 'b', 'c'] }, { key: "BBB", value: ['x', 'y', 'z'] }];
  console.log(searchCriteria);
  let newSearchCriteria = [];
  searchCriteria.forEach(element => {
    let tempKey;
    let tempValue;
    for (let prop in element) {
      // console.log(prop, element[prop]);
      if (prop === 'key') {
        tempKey = element[prop];
      }
      if (prop === 'value') {
        tempValue = element[prop];
        newSearchCriteria.push({ [tempKey]: tempValue });
      }
    };
  });
  console.log(newSearchCriteria);
}
// *** END TEST *** //

// Load Dynamic Content
function openContent(content) {
  $('#dynamiContent').load(content + '.html');
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
  const headerPosition = document.getElementById('dynamiContent');
  const sticky = headerPosition.offsetTop;
  if (window.pageYOffset > sticky) {
    header.classList.add('stickyHeader');
  } else {
    header.classList.remove('stickyHeader');
  }
}
