// Button click
document.querySelector('.get-jokes').addEventListener('click', getJokes);

function getJokes(e) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', '//api.chucknorris.io/jokes/random', true);
  xhr.onload = function () {
    if (this.status === 200) {
      const response = JSON.parse(this.responseText);
      let output = '';
      if (response.value) {
        output += `
          <span>${response.value}</span>
        `;
      } else {
        output += '<span>Something went wrong</span>';
      }
      const joke = document.querySelector('.joke');
      joke.innerHTML = output;
      joke.style.display = 'block';
    }
  }
  xhr.send();
  e.preventDefault();
}

// Other Variables
const currentYear = new Date().getFullYear();
document.getElementById('js-year').innerHTML = currentYear;
