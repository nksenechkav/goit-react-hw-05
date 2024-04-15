import axios from "axios";

const url = 'https://api.themoviedb.org/3/trending/movie/day?language=en-US';

const options = {
  headers: {
    Authorization: 'Bearer 96d827470392073a234d65ea8b7d9e73'
  }
};

export const fetchMoviesWithQuery = async () => {
  const response = await axios.get(url, options);
  return response.data;
};