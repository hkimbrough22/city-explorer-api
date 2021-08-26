const axios = require('axios');

function Movies(movie) {
    this.title = movie.title
    this.description = movie.overview
    this.image = movie.poster_path
}

async function getMovies(request, response) {
    const city = request.query.searchQuery
    const API2 = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.MOVIE_API_KEY}&query=${city}&language=en-US&page=1&include_adult=false`
    try {
        let currentMovieResponse = await axios.get(API2);
        const movieArr = currentMovieResponse.data.results.map(movie => {
            return new Movies(movie);
        });
        response.send(movieArr);
    } catch (error) {
        console.error(error);
        response.status(400).send(`${new Date().toLocaleString() + ''}: MovieDB is not working and is giving the following error: ${error}`);
    }
}

module.exports = getMovies;