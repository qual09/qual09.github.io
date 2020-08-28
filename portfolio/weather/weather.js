class Weather {
  constructor(city, country) {
    this.apiKey = '1bef3f20925c870ad6b544b01b7c55cb';
    this.city = city;
    this.country = country;
    this.defaultCity = 'Warsaw';
    this.defaultCountry = 'PL';
  }

  // Featch weather from API
  async getWeather() {
    const response = await fetch(`//api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&units=metric&appid=${this.apiKey}`);

    const responseData = await response.json();

    return responseData;
  }

  // Change weather location
  changeLocation(city, country) {
    if (city !== '') {
      this.city = city;
      this.country = country;
    } else {
      this.city = this.defaultCity;
      this.country = this.defaultCountry;
    }
  }

}