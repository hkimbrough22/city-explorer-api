const axios = require('axios');
const cache = require('./cache');

function Forecast(item) {
    this.date = item.datetime;
    this.description = item.weather.description;
    this.maxtemp = item.max_temp;
    this.mintemp = item.min_temp;
}

async function getWeather(request, response) {
    const lat = request.query.lat;
    const lon = request.query.lon;
    const key = 'weatherFor-' + lat + lon;
    const API = `https://api.weatherbit.io/v2.0/forecast/daily?key=${process.env.WEATHER_API_KEY}&land=en&lat=${lat}&lon=${lon}&days=5`

    if(cache[key] && (Date.now() - cache[key].timestamp < 300000)) {
        console.log('Cache Hit!');
        response.send(cache[key].data);
    } else {
        console.log('Cache Miss!')
        try {
            cache[key] = {};
            cache[key].timestamp = Date.now();
            let currentWeatherResponse = await axios.get(API);
            const weatherArr = currentWeatherResponse.data.data.map(day => {
                return new Forecast(day);
            });
            cache[key].data = weatherArr;
            response.send(cache[key].data);
        } catch (error) {
            console.error(error);
            response.status(400).send(`${new Date().toLocaleString() + ''}: WeatherBit is not working and is giving the following error: ${error}`);
        }
    };
}

module.exports = {getWeather: getWeather};