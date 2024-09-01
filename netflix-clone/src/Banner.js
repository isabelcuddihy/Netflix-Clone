import axios from './axios';
import React, {useState, useEffect} from 'react';
import requests from './requests';


function Banner() {
    const [movie, setMovie] = useState([]);        
    useEffect(() => {
        async function fectchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            const random = Math.floor(Math.random() * request.data.results.length - 1);
            setMovie(request.data.results[random]);
        }
        fectchData();
    }, []);

    console.log(movie);
    return (
        <header> {/* <<< Background image*/}
            {/* Title */}
            {/* div > 2 buttons */}
            {/* Description*/}
        </header>
    )
}

export default Banner
