import axios from './axios';
import React, {useState, useEffect} from 'react';
import requests from './requests';
import './Banner.css'


function Banner() {
    const [movie, setMovie] = useState([]);        
    useEffect(() => {
        async function fectchData() {
            const request = await axios.get('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_release_type=2|3&release_date.gte={min_date}&release_date.lte={max_date}');
            const random = Math.floor(Math.random() * request.data.results.length - 1);
            setMovie(request.data.results[random]);
        }
        fectchData();
    }, []);

    console.log(movie);

    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n-1) + "..." : str;
    }
    return (
        <header className="banner"
            style={{
                backgroundSize: "cover",
                backgroundImage: `url(
                https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`, 
                backgroundPosition: "center center",
            }}
        > 
            <div className="banner_contents">
            <h1 className="banner__title">
                {movie?.title || movie?.name || movie?.original_name}
            </h1>
            <div className="banner__buttons ">
                <button className="banner__button">Play</button>
                <button className="banner__button">My List</button>
            <h1 className="banner__description">
                {truncate(movie?.overview, 150)}
            </h1>

            </div>
            {/* div > 2 buttons */}
            {/* Description*/}
            </div>     
        </header>
    )
}

export default Banner
