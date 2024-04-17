import css from './MovieCast.module.scss';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCastById } from '../api/movies-api';
import LoaderComponent from '../loader/Loader';
import ErrorMessage from '../error/ErrorMessage';

const MovieCast = () => {
  const [movieCast, setMovieCast] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;

		const fetchDetailsCast = async () => {
      try {
        const castData = await fetchMovieCastById(movieId);
        if (castData) {
          setMovieCast(castData);
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
		fetchDetailsCast();
	}, [movieId]);


  if (loading) {
    return <>{loading && <LoaderComponent />}
    </>;
  }

  if (error) {
    return <>{error && <ErrorMessage />}
    </>;
  }

    return (
      movieCast &&
      movieCast.cast && (
      <ul className={css['cast-list']}>
        {movieCast.cast.map((castMember) => (
          <li key={castMember.id}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${castMember.profile_path}`}
              alt="photo of actor"
            />
            <div className={css['cast-description']}>
              <h3>{castMember.name}</h3>
              <p>Character: <span>{castMember.character}</span></p>
            </div>
          </li>
        ))}
      </ul>  
    )
  )

}
  
  export default MovieCast;