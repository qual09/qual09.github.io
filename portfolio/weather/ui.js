class UI {
  constructor() {
    this.location = document.getElementById('w-location');
    this.time = document.getElementById('w-time');
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
    let date = new Date();
    date.setSeconds(date.getSeconds() + weather.timezone);
    date.setHours(date.getHours() - 2); // BUG?

    // let dateUTC = Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds());
    // date = new Date(dateUTC);

    date = `${date.getHours()}:${date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()}`;

    this.location.textContent = weather.name + ', ' + weather.sys.country;
    this.time.textContent = date;
    this.desc.textContent = weather.weather[0].description;
    this.string.textContent = `${Math.round(weather.main.temp * 10) / 10}\u00B0 C / ${Math.round(((weather.main.temp * 9 / 5) + 32) * 10) / 10}\u00B0 F`;
    this.icon.setAttribute('src', `//openweathermap.org/img/wn/${weather.weather[0].icon}.png`);
    this.humidity.textContent = `Humidity: ${weather.main.humidity}%`;
    this.pressure.textContent = `Pressure: ${weather.main.pressure} hPa`;
    this.clouds.textContent = `Clouds: ${weather.clouds.all}%`;
    this.wind.textContent = `Wind Speed: ${weather.wind.speed} m/s`;
  }
}