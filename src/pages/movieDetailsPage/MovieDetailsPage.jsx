import css from './MovieDetailsPage.module.scss';
import { useParams, useLocation } from 'react-router-dom';
import { useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchMoviesById } from '../../components/api/movies-api';
import LoaderComponent from '../../components/loader/Loader';
import ErrorMessage from '../../components/error/ErrorMessage';
import { Outlet } from 'react-router-dom';


const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const location = useLocation();
  const goBackLink = useRef(location.state?.from || "/");


  useEffect(() => {
    if (!movieId) return;

		const fetchDetails = async () => {
      try {
        const movieData = await fetchMoviesById(movieId);
        if (movieData) {
          setMovie(movieData);
          setLoading(false);
        } else {
          setError('Failed to fetch movies');
          setLoading(false);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

		fetchDetails();
	}, [movieId]);


  if (loading) {
    return <>{loading && <LoaderComponent />}
    </>;
  }

  if (error) {
    return <>{error && <ErrorMessage />}
    </>;
  }

  const defaultImg = '<https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg>'

  const dateString = movie.release_date; 
  const dateObj = new Date(dateString);
  const year = dateObj.getFullYear(); 

  const userScore = Math.round(movie.vote_average * 10);
  
  const genres = movie.genres ? movie.genres.map(genre => genre.name) : [];

  return (
   <main>
      <NavLink to={goBackLink.current}>
        <button className={css.btn}> Go back</button>
      </NavLink>
      <div className={css['movie-container']}>
        <img 
          src={movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : defaultImg}
          width={250} 
          alt="poster" 
        />
        <div className={css['movie-details']}>
          <h2>{movie.original_title} ({year})</h2>
          <p>User score: {userScore}%</p>
          <h3>Overview</h3>
          <p>{movie.overview}</p>
          <h4>Genres</h4>
          <p>{genres.join(', ')}</p>
        </div>
      </div>
      
       <div className={css['additionals']}>
          <h4>Additional information</h4>
            <ul>
                  <li>
                  <NavLink to={`/movies/${movieId}/cast`}>Cast</NavLink>
                </li>
                <li>
                  <NavLink to={`/movies/${movieId}/reviews`}>Reviews</NavLink>
                </li>
            </ul>
        </div>
        <Outlet/>
      </main>
  );
};
  
export default MovieDetailsPage;