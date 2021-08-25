const express = require('express');
const cors = require('cors');
const weather = require('./data/weather.json');
require('dotenv').config();

//check out npm install nodemon for auto server update

const PORT = process.env.PORT || 3001;
const app = express();
app.use(cors());

app.get('/', (request, response) => {
    response.send('howdy from home route');
});

function Forecast(date, description, maxtemp, mintemp) {
    this.date = date;
    this.description = description;
    this.maxtemp = maxtemp;
    this.mintemp = mintemp;
}

app.get('/weather', (request, response) => {
    const city = request.query.searchQuery;
    let currentWeather = null; 
    currentWeather = weather.filter( item => {
        return item.city_name == city
    });
    if (currentWeather[0]) {
        let forecastArr = [];
        currentWeather[0].data.forEach( item => {
            forecastArr.push(new Forecast(item.datetime, item.weather.description, item.max_temp, item.min_temp))
        });
        response.send(forecastArr);
    } else if (!currentWeather[0]) {
        response.status('404').send('Not a valid location');
        response.send('Not a valid location')
    } else {
        response.status('500').send('Internal Server Error');
    }
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))