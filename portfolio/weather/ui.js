class UI {
  constructor() {
    this.location = document.getElementById('w-location');
    this.desc = document.getElementById('w-desc');
    this.string = document.getElementById('w-string');
    this.details = document.getElementById('w-details');
    this.icon = document.getElementById('w-icon');
    this.humidity = document.getElementById('w-humidity');
    this.pressure = document.getElementById('w-pressure');
    this.clouds = document.getElementById('w-clouds');
    this.wind = document.getElementById('w-wind');
  }

  paint(weather) {
    this.location.textContent = weather.name + ', ' + weather.sys.country;
    this.desc.textContent = weather.weather[0].description;
    this.string.textContent = `${Math.round(weather.main.temp * 10) / 10} C / ${Math.round(((weather.main.temp * 9 / 5) + 32) * 10) / 10} F`;
    this.icon.setAttribute('src', `//openweathermap.org/img/wn/${weather.weather[0].icon}.png`);
    this.humidity.textContent = `Humidity: ${weather.main.humidity}%`;
    this.pressure.textContent = `Pressure: ${weather.main.pressure} hPa`;
    this.clouds.textContent = `Clouds: ${weather.clouds.all}%`;
    this.wind.textContent = `Wind Speed: ${weather.wind.speed} m/s`;
  }
}