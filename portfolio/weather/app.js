// Init weather object
const weather = new Weather('Warsaw', 'PL');

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

// weather.changeLocation('Miami', 'US');
// weather.changeLocation('London', 'GB');

function getWeather() {
  weather.getWeather()
    .then(results => {
      console.log(results);
    })
    .catch(err => console.log(err));
}

