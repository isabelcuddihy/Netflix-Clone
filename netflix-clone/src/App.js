import React from 'react';
import './App.css';
import Row from './Row';
import requests from './requests';
import Banner from "./Banner";
import Nav from "./Nav";

function App() {
  return (
    <div className="App">
      {/* Nav */}

      {/* Banner */}
      <Banner/>

      <h1>Hey Clever Programmer! Let's build a Netflix Clone</h1>
      /
      {/* currently API does not support Netflix Originals Information Pull
          <Row 
        title = "NETFLIX ORIGINALS" 
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
        /> */}
      <Row title = "Trending Now Movies" fetchUrl={'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_release_type=2|3&release_date.gte={min_date}&release_date.lte={max_date}'} />
      <Row title = "Top Rated Movies" fetchUrl={'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=vote_average.desc&without_genres=99,10755&vote_count.gte=200'} />
      <Row title = "Popular Movies" fetchUrl={'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc'} />
      <Row title = "Upcoming Movies" fetchUrl={'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_release_type=2|3&release_date.gte={min_date}&release_date.lte={max_date}'} />
      <Row title = "Now Airing TV" fetchUrl={'https://api.themoviedb.org/3/discover/tv?include_adult=false&language=en-US&page=1&sort_by=popularity.desc&air_date.lte={max_date}&air_date.gte={min_date}'} />
      <Row title = "Top Rated TV" fetchUrl={'https://api.themoviedb.org/3/discover/tv?include_adult=false&language=en-US&page=1&sort_by=vote_average.desc&vote_count.gte=200'} />
      <Row title = "Popular TV" fetchUrl={'https://api.themoviedb.org/3/discover/tv?include_adult=false&language=en-US&page=1&sort_by=popularity.desc'} />
    </div>
  );
}

export default App;
