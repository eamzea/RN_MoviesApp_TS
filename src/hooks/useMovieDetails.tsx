import MovieDB from 'api/MovieDB';
import {
  Cast,
  CreditsResponse,
  FullMovieResponse,
} from 'interfaces/movieInterface';
import { useState, useEffect } from 'react';

interface MovieDetails {
  isLoading?: boolean;
  movieData?: FullMovieResponse;
  castData?: Cast[];
}

const useMovieDetails = (movieID: number) => {
  const [movieState, setMovieState] = useState<MovieDetails>({
    isLoading: true,
    movieData: undefined,
    castData: [],
  });

  const getMovieDetails = async () => {
    try {
      const fullData = MovieDB.get<FullMovieResponse>(`/${movieID}`);
      const creditsData = MovieDB.get<CreditsResponse>(`/${movieID}/credits`);

      const [
        { data: movieFullData },
        {
          data: { cast },
        },
      ] = await Promise.all([fullData, creditsData]);

      setMovieState({
        isLoading: false,
        castData: cast,
        movieData: movieFullData,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovieDetails();
  }, []);

  return movieState;
};

export default useMovieDetails;
