import { useEffect, useState } from 'react';

import MovieCard from './MovieCard';
import SearchIcon from './search.svg';
import './App.css'

//Here is your key: b4586af0

const API_URL = 'http://www.omdbapi.com?apikey=b4586af0';

/*const movie1 = {
    "Title": "Amazing Spiderman Syndrome",
    "Year": "2012",
    "imdbID": "tt2586634",
    "Type": "movie",
    "Poster": "N/A"
}*/

function App() {

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json();

    setMovies(data.Search);
  }

  useEffect(() => {
    searchMovies('Batman');
  }, []);

  return (
    <div className= "app">
      <h1>MovieMania</h1>

      <div className='search'>
        <input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder='Search for movies'/>
        <img src={SearchIcon} alt='search' onClick={() => searchMovies(searchTerm)}/>
      </div>

      {
        movies?.length > 0 ? (
          <div className='container'>
            {movies.map((movie) => (
              <MovieCard movie={movie} />
            ))}
          </div>
        ) : (
          <div className='empty'>
            <h2>No movies found</h2>
          </div>
        )
      }
      
    </div>
  );
}

export default App
