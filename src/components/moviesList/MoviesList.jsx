import css from './MoviesList.module.scss';
import { useState, useEffect } from 'react';
import { fetchMoviesWithQuery } from '../api/movies-api';
import { NavLink } from 'react-router-dom';

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await fetchMoviesWithQuery();
        if (data) {
          setMovies(data.results);
          setLoading(false);
        } else {
          setError('Failed to fetch movies');
          setLoading(false);
        }
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchMovies();

  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className={css['movies-container']}>
      <h2>Trending today</h2>
      <ul className={css['movies-list']}>
        {movies.map(movie => (
          <li key={movie.id}>
            <NavLink to = {`${movie.id}`}>{movie.title}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;