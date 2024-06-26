import css from './MovieList.module.scss';
import { NavLink, useLocation } from 'react-router-dom';

const MoviesList = ({movies}) => {

  const location = useLocation();

  return (
    
      <ul className={css['movies-list']}>
        {movies.map(movie => (
          <li key={movie.id}>
            <NavLink to = {`/movies/${movie.id}`} state={{ from: location }}> {movie.title}</NavLink>
          </li>
        ))}
      </ul>
  );
};

export default MoviesList;