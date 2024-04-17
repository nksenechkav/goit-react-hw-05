import css from './MovieReviews.module.scss';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviewsById } from '../api/movies-api';
import LoaderComponent from '../loader/Loader';
import ErrorMessage from '../error/ErrorMessage';

const MovieReviews = () => {
  const [movieReviews, setMovieReviews] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  console.log(movieId)

  useEffect(() => {
    if (!movieId) return;

		const fetchDetailsReviews = async () => {
      try {
        const reviewsData = await fetchMovieReviewsById(movieId);
        console.log(reviewsData)
        if (reviewsData) {
          setMovieReviews(reviewsData);
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
		fetchDetailsReviews();
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
      movieReviews &&
      movieReviews.results && (
        <ul className={css['reviews-list']}>
          {movieReviews.results.map((review) => (
            <li key={review.id}>
              <h3>Author: {review.author}</h3>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      )
    );
  };
  
  export default MovieReviews;
