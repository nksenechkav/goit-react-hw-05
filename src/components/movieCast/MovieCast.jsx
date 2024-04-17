import css from './MovieCast.module.scss';
import { useEffect, useState } from 'react';
import { fetchMoviesCastById } from '../api/movies-api';
import LoaderComponent from '../loader/Loader';
import ErrorMessage from '../error/ErrorMessage';

const MovieCast = ({ movieId }) => {
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  console.log(movieId)

  useEffect(() => {
    if (!movieId) return;

		const fetchDetailsCast = async () => {
      try {
        const movieData = await fetchMoviesCastById(movieId);
        console.log(movieData)
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
    <section className={css['cast-details']}>
      <ul className={css['cast-list']}>
        {movie.cast.map((castMember) => (
          <li key={castMember.id}>
            <img
              src={castMember.profile_path ? `https://image.tmdb.org/t/p/w500/${castMember.profile_path}` : defaultImg}
              width={250}
              alt="poster"
            />
            <div className={css['cast-description']}>
              <h4>{castMember.name}</h4>
              <p>{castMember.character}</p>
            </div>
          </li>
        ))}
      </ul>
        
    </section>

    );
    
  }
  
  export default MovieCast;