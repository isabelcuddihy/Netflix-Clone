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
      <Nav/>
      {/* Banner */}
      <Banner/>


      
      {/* currently API does not support Netflix Originals Information Pull
          <Row 
        title = "NETFLIX ORIGINALS" 
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
        /> */}
      <Row title = "Latest Movies and TV" fetchUrl={'https://api.themoviedb.org/3/trending/all/day?language=en-US'} />
      <Row title = "Trending in Movies" fetchUrl={'https://api.themoviedb.org/3/trending/movie/day?language=en-US'} />
      <Row title = "Critically Acclaimed Movies" fetchUrl={'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=vote_average.desc&without_genres=99,10755&vote_count.gte=200'} />
      <Row title = "Popular Movies" fetchUrl={'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc'} />
      <Row title = "Trending in TV" fetchUrl={'https://api.themoviedb.org/3/trending/tv/day?language=en-US'}/>
      <Row title = "Now Airing on TV" fetchUrl={'https://api.themoviedb.org/3/discover/tv?include_adult=false&language=en-US&page=1&sort_by=popularity.desc&air_date.lte={max_date}&air_date.gte={min_date}'} />
      <Row title = "Award Winning TV" fetchUrl={'https://api.themoviedb.org/3/discover/tv?include_adult=false&language=en-US&page=1&sort_by=vote_average.desc&vote_count.gte=200'} />
      <Row title = "Popular TV" fetchUrl={'https://api.themoviedb.org/3/discover/tv?include_adult=false&language=en-US&page=1&sort_by=popularity.desc'} />
    </div>
  );
}

export default App;
