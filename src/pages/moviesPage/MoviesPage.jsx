import css from './MoviesPage.module.scss';
import SearchBar from '../../components/searchBar/SearchBar';
import { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import LoaderComponent from '../../components/loader/Loader';
import ErrorMessage from '../../components/error/ErrorMessage';
import { fetchMoviesWithQuery } from '../../components/api/movies-api';
import MoviesList from '../../components/moviesList/MoviesList';


const MoviesPage = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams();
    const params = useMemo(
    () => Object.fromEntries([...searchParams]),
    [searchParams]
  );


  const onSubmit = (query) => {
    setMovies([]);
    setSearchParams({query});
 }


 useEffect(() => {
  const query = params.query;
  if (!query) return;

  async function fetchSearchMovies (){
    try {
      setError(false);
      setLoading(true);
      const data = await fetchMoviesWithQuery(query);
      if (data.results.length === 0) {
        return;
      }
      setMovies(data.results);
    } catch (error) {
      setError(true);
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  }
  fetchSearchMovies();
}, [params]);
    

    return (
    <div className={css['movies-container']}>
     <SearchBar onSearch={onSubmit}/>
     {loading && <LoaderComponent />}
     {error && <ErrorMessage />}
     {movies.length > 0 && <MoviesList movies={movies} movieParams={params}/>}
    </div>
    );
    
  }
  
  export default MoviesPage;