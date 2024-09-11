const API_KEY = '7bce4adeae280f1825d0724de3f49f94'

export default {
    fetchNetflixTrending : `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchNetflixActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchNetflixComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchNetflixHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchNetflixRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchNetflixDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,   
};