class Weather {
  constructor(city, country) {
    this.apiKey = '1bef3f20925c870ad6b544b01b7c55cb';
    this.city = city;
    this.country = country;
  }

  // Featch weather from API
  async getWeather() {
    const response = await fetch(`//api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&appid=${this.apiKey}`);

    const responseData = await response.json();

    return responseData;
  }

  // Change weather location
  changeLocation(city, country) {
    this.city = city;
    this.country = country;
  }

}