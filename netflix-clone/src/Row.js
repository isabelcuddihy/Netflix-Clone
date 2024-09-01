import axios from './axios';
import React, {useState, useEffect} from 'react';

const base_url = "https://image.tmdb.org/t/p/original/"
function Row({title, fetchUrl}) {
    const [movies, setMovies] = useState([]);
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

    //console.log(movies);
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row_posters">
        {/* several row_posters */}
        {movies.map(movie => ( <img src={`${base_url}${movie.poster_path}`} alt={movie.title}/>))}
      </div>
    
    </div>
  )

  }
export default Row;
  