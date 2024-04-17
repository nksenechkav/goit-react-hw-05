import css from './HomePage.module.scss';
import { useState, useEffect } from 'react';
import { fetchMoviesTrend } from '../../components/api/movies-api';
import LoaderComponent from '../../components/loader/Loader';
import ErrorMessage from '../../components/error/ErrorMessage';
import MoviesList from "../../components/moviesList/MoviesList";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await fetchMoviesTrend();
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
              {movies.length > 0 && <MoviesList movies={movies}/>}
      </div>
    );
    
  }
  
  export default HomePage;