import axios from "axios";

const url = 'https://api.themoviedb.org/3';

const options = {
  headers: {
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NmQ4Mjc0NzAzOTIwNzNhMjM0ZDY1ZWE4YjdkOWU3MyIsInN1YiI6IjY2MWNkZjhjNGNhNjc2MDE0YjFiY2VmZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1iC98ci0RVFvlNzZjlQKfvqUqtWIjBl1FGsom592R8k'
  }
};

export const fetchMoviesWithQuery = async () => {
  const response = await axios.get(`${url}/trending/movie/day`, options);
  return response.data;
};

export const fetchMoviesById = async (id) => {
    const response = await axios.get(`${url}/movie/${id}`, options);
    return response.data;
};