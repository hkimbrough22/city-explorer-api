const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { getWeather } = require('./src/weather');
const getMovies = require('./src/movies');
const getServerStatus = require('./src/serverStatus');
const notFound = require('./src/notFound');

const PORT = process.env.PORT || 3001;
const app = express();
app.use(cors());

app.get('/', getServerStatus);
app.get('/weather', getWeather);
app.get('/movies', getMovies);
app.get('*', notFound);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))