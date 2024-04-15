import axios from "axios";

const url = 'https://api.themoviedb.org/3/trending/movie/day?language=en-US';

const options = {
  headers: {
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NmQ4Mjc0NzAzOTIwNzNhMjM0ZDY1ZWE4YjdkOWU3MyIsInN1YiI6IjY2MWNkZjhjNGNhNjc2MDE0YjFiY2VmZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1iC98ci0RVFvlNzZjlQKfvqUqtWIjBl1FGsom592R8k'
  }
};

export const fetchMoviesWithQuery = async () => {
  const response = await axios.get(url, options);
  return response.data;
};