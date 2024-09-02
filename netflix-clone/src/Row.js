import axios from './axios';
import React, {useState, useEffect} from 'react';
import './Row.css'
import YouTube from "react-youtube";

const base_url = "https://image.tmdb.org/t/p/original/"
function Row({title, fetchUrl, isLargeRow}) {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");

    
    //A snippet of code that runs based on a specific condition or variable
    useEffect(()=>{
        //if []run once when the row loads and then don't run again
        async function fetchData(){
            
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]);

    const opts = {
      height: "390",
      width: "100%",
      playerVars: {
        autoplay: 1,
      },
    };


    //console.log(movies);
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className={`row_posters ${isLargeRow && "row_posterLarge"}`}>
        {/* several row_posters */}
        {movies.map(movie => ( 
          <img 
          key={movie.id}
          className="row_poster"
          src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
          alt={movie.name}
          />))}
      </div>
    <YouTube videoId = {trailerUrl} opts={opts} />
    </div>
  )

  }
export default Row;
  