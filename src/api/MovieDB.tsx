import axios from 'axios';

const MovieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: 'e7de313540e301eff8b37557ffcb863f',
    language: 'en-US',
  },
});

export default MovieDB;
