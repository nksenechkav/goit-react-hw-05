import axios from "axios";

const url = 'https://api.themoviedb.org/3';

const options = {
  headers: {
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NmQ4Mjc0NzAzOTIwNzNhMjM0ZDY1ZWE4YjdkOWU3MyIsInN1YiI6IjY2MWNkZjhjNGNhNjc2MDE0YjFiY2VmZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1iC98ci0RVFvlNzZjlQKfvqUqtWIjBl1FGsom592R8k'
  }
};

export const fetchMoviesTrend = async () => {
  const response = await axios.get(`${url}/trending/movie/day?language=en-US`, options);
  return response.data;
};

export const fetchMoviesById = async (id) => {
    const response = await axios.get(`${url}/movie/${id}?language=en-US`, options);
    return response.data;
};

export const fetchMoviesWithQuery = async (query) => {
  const response = await axios.get(`${url}/search/movie?query=${query}&language=en-US&page=1`, options);
  return response.data;
};

export const fetchMovieCastById = async (id) => {
  const response = await axios.get(`${url}/movie/${id}/credits?language=en-US`, options);
  return response.data;
};

export const fetchMovieReviewsById = async (id) => {
  const response = await axios.get(`${url}/movie/${id}/reviews?language=en-US`, options);
  return response.data;
};