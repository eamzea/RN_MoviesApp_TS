import { useState } from 'react';
import MovieDB from 'api/MovieDB';
import { Movie, MovieDBResponse } from 'interfaces/movieInterface';
import { useEffect } from 'react';

interface MoviesState {
  nowPlaying: Movie[];
  famous: Movie[];
  topRated: Movie[];
  upcoming: Movie[];
}

const useMovies = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [moviesState, setMoviesState] = useState<MoviesState>({
    nowPlaying: [],
    famous: [],
    topRated: [],
    upcoming: [],
  });

  const getMovies = async () => {
    const nowPlayingProm = MovieDB.get<MovieDBResponse>('/now_playing');
    const topRatedProm = MovieDB.get<MovieDBResponse>('/top_rated');
    const popularProm = MovieDB.get<MovieDBResponse>('/popular');
    const upcomingProm = MovieDB.get<MovieDBResponse>('/upcoming');

    const response = await Promise.all([
      nowPlayingProm,
      topRatedProm,
      popularProm,
      upcomingProm,
    ]);

    setMoviesState({
      nowPlaying: response[0].data.results,
      famous: response[1].data.results,
      topRated: response[2].data.results,
      upcoming: response[3].data.results,
    });

    setIsLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return {
    isLoading,
    ...moviesState,
  };
};

export default useMovies;
