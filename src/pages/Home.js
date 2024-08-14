import React, { useEffect, useState } from 'react';
import MovieCard from '../components/MovieCard';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('/movies') 
      .then(response => response.json())
      .then(data => setMovies(data));
  }, []);

  return (
    <div>
      <h1>Home Page</h1>
      <div>
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Home;
