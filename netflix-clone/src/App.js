import React from 'react';
import './App.css';
import Row from './Row';
import requests from './requests';

function App() {
  return (
    <div className="App">
      <h1>Hey Clever Programmer! Let's build a Netflix Clone</h1>
      <Row title = "NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals}/>
      <Row title = "Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title = "Top Rated" fetchUrl={requests.fetchTrending} />
      <Row title = "Action Movies" fetchUrl={requests.fetchTrending} />
      <Row title = "Comedy Movies" fetchUrl={requests.fetchTrending} />
      <Row title = "Horror Movies" fetchUrl={requests.fetchTrending} />
      <Row title = "Romance Movies" fetchUrl={requests.fetchTrending} />
      <Row title = "Documentaries" fetchUrl={requests.fetchTrending} />
    </div>
  );
}

export default App;
