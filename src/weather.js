const axios = require('axios');

function Forecast(item) {
    this.date = item.datetime;
    this.description = item.weather.description;
    this.maxtemp = item.max_temp;
    this.mintemp = item.min_temp;
}

async function getWeather(request, response) {
    const lat = request.query.lat;
    const lon = request.query.lon;
    // console.log(request.query);
    const API = `https://api.weatherbit.io/v2.0/forecast/daily?key=${process.env.WEATHER_API_KEY}&land=en&lat=${lat}&lon=${lon}&days=5`
    // console.log(currentWeatherResponse.data);
    try {
        let currentWeatherResponse = await axios.get(API);
        const weatherArr = currentWeatherResponse.data.data.map(day => {
            return new Forecast(day);
        });
        console.log(weatherArr);
        response.send(weatherArr);
    } catch (error) {
        console.error(error);
        response.status(400).send(`${new Date().toLocaleString() + ''}: WeatherBit is not working and is giving the following error: ${error}`);
    };
}

module.exports = {getWeather: getWeather};