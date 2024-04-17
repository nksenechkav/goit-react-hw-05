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
  const defaultImg = '<https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg>'

    return (
      movieCast &&
      movieCast.cast && (
      <ul className={css['cast-list']}>
        {movieCast.cast.map((castMember) => (
          <li key={castMember.id}>
            <img
              src={castMember.profile_path ? `https://image.tmdb.org/t/p/w500/${castMember.profile_path}` : defaultImg}
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