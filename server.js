const express = require('express');
const cors = require('cors');
require('dotenv').config();
const axios = require('axios');

//check out npm install nodemon for auto server update

const PORT = process.env.PORT || 3001;
const app = express();
app.use(cors());

app.get('/', (request, response) => {
    response.send('Serving is working');
});

function Forecast(item) {
    this.date = item.datetime;
    this.description = item.weather.description;
    this.maxtemp = item.max_temp;
    this.mintemp = item.min_temp;
}

function Movies(movie) {
    this.title = movie.title
    this.description = movie.overview
    this.image = movie.poster_path
}

app.get('/weather', async (request, response) => {
    const lat = request.query.lat;
    const lon = request.query.lon;
    console.log(request.query);
    const API = `https://api.weatherbit.io/v2.0/forecast/daily?key=${process.env.WEATHER_API_KEY}&land=en&lat=${lat}&lon=${lon}&days=5`
    let currentWeatherResponse = await axios.get(API);
    // console.log(currentWeatherResponse.data);

    try {
        const weatherArr = currentWeatherResponse.data.data.map(day => {
            return new Forecast(day);
        });
        console.log(weatherArr);
        response.send(weatherArr);
    } catch (error) {
        console.log(error);
        response.status(400).send(error);
        };
    }
    );
app.get('/movies', async (request, response) => {
    const city = request.query.searchQuery
    const API2 = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.MOVIE_API_KEY}&query=${city}&language=en-US&page=1&include_adult=false`
    let currentMovieResponse = await axios.get(API2);
    try {

        // console.log(currentMovieResponse.data.results);
        const movieArr = currentMovieResponse.data.results.map(movie => {
            return new Movies(movie);
        });
        response.send(movieArr);
    } catch (error) {
        console.log(error);
        response.status(400).send(error);
    }
        
    //Create Movie Function/class
    //format data same as before
    //send array forward
    //create handlefunction like with this.getWeather

});
    
app.listen(PORT, () => console.log(`Listening on port ${PORT}`))