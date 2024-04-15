import css from './MovieDetailsPage.module.scss';
import { useParams} from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchMoviesById } from '../../components/api/movies-api';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
		const load = async () => {
			const res = await fetchMoviesById(movieId);
      console.log(res);
			setMovie(res);
		};
		load();
	}, [movieId]);


  return (
    <main>
       <div className={css['details-container']}>
        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title}/>
        <>
        <h2>{movie.title} - {movie.id}</h2>
        <p>{movie.overview}</p>
        </>
      </div>
    </main>
    );
  }

  export default MovieDetailsPage;