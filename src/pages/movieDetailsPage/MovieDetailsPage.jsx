import css from './MovieDetailsPage.module.scss';
import { useParams} from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchMoviesById } from '../../components/api/movies-api';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    if (!movieId) return;
		const load = async () => {
			const movieData = await fetchMoviesById(movieId);
      console.log(movieData);
			setMovie(movieData);
		};
		load();
	}, [movieId]);

  const defaultImg = '<https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg>'

  return (
    <main>
      <div className={css['details-container']}>
        <img 
          src={movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : defaultImg}
          width={250} 
          alt="poster" 
        />
        <>
          <h2>{movie.original_title} - {movie.id}</h2>
          <p>{movie.overview}</p>
        </>
      </div>
    </main>
  );
}

  export default MovieDetailsPage;