import React from 'react';
import { useState, useEffect} from 'react';
import './App.css'
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';
//773b7c0e

const API_URL = "http://www.omdbapi.com?apikey=773b7c0e";

const movie1 = {
    "Title": "All I See Is You",
    "Year": "2016",
    "imdbID": "tt4486986",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNDI5NzU2OTM1MV5BMl5BanBnXkFtZTgwNzU3NzM3MzI@._V1_SX300.jpg"
}
const App = () => {
    const [movies, setMovies] = useState([]);
    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search);
    }
    useEffect(() => {
        searchMovies('For Life');
    }, []);
    return (
        <div className='app'>
            <h1>MovieLand</h1>

            <div className='search'>
                <input
                    placeholder='Search for Movies' 
                    value='Superman' onChange={() => {}}              
                />
                <img
                    src={SearchIcon} alt='SearchIcon' onClick={() => {}}
                />
            </div>

            {
                movies?.length > 0 ? (
                    <div className='container'>
                 {movies.map((movie) => (<MovieCard movie={movie}/>) )}
            </div>
                ) : (
                    <div claaName='empty'>
                        <h2>No Movies Found</h2>
                    </div>
                )
            }

            
        </div>
    )
}

export default App;