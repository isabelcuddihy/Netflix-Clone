// Double check the api key
import axios from "axios";

const API_KEY = "253293fd6119b5f47cd8bc1307581789";
axios.defaults.headers.common['Authorization'] = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNTMyOTNmZDYxMTliNWY0N2NkOGJjMTMwNzU4MTc4OSIsIm5iZiI6MTcyNTI5OTcyNC40MDg1OTksInN1YiI6IjY2ZDQ5NDViZDk0ZGZmZDhmNzAxZjAwMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wm2CLu4jgu5Y-CGNe7XjGWny847vKkExQ0s0J_9jQBY'; 


const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals:`/discover/movie?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genre=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genre=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genre=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genre=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genre=99`,
  }

export default requests;