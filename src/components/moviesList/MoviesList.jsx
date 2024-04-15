import { useState, useEffect } from 'react';
import { fetchMoviesWithQuery } from '../api/movies-api';

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        // Отримання списку фільмів
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

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Порожній масив для запуску ефекту лише один раз при монтуванні компонента

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Trending today</h2>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <h3>{movie.title}</h3>
            <p>{movie.overview}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;