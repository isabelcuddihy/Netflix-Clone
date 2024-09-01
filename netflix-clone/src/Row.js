import React, {useState, useEffects} from 'react'
import axios from './axios';

function Row({title}) {
    const [movies, setMovies] = useState([]);
    //A snippet of code that runs based on a specific condition or variable
    useEffect(()=>{
        //if []run once when the row loads and then don't run again
        async function fetchData{
            const request = await
        }
    }, []);
  return (
    <div>
      <h2>{title}</h2>
      {/* container -> posters */}
    </div>
  )
}

export default Row
