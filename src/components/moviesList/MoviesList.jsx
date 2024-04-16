import css from './MoviesList.module.scss';
import { useState, useEffect } from 'react';
import { fetchMoviesWithQuery } from '../api/movies-api';
import { NavLink, useLocation } from 'react-router-dom';
import LoaderComponent from '../loader/Loader';
import ErrorMessage from '../error/ErrorMessage';

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const location = useLocation();

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
    return <>{loading && <LoaderComponent />}
    </>;
  }

  if (error) {
    return <>{error && <ErrorMessage />}
    </>;
  }

  return (
    <div className={css['movies-container']}>
      <h2>Trending today</h2>
      <ul className={css['movies-list']}>
        {movies.map(movie => (
          <li key={movie.id}>
            <NavLink to = {`/movies/${movie.id}`} state={location}> {movie.title} </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;