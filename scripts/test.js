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
// TEST function 3
function yo3() {
  const arr = [
    "Hi",
    "Hello",
    "Bonjour",
  ];
  const newArr = [
    "Salut",
    ...arr,
  ];
  console.log(newArr);
}