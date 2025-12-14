import { useState, useEffect, useCallback } from "react";
import type { IMovie } from "../types/IMovie";
import { movieService } from "../services/movie.service";

interface useFetchMoviesResult {
  movies: IMovie[];
  isLoading: boolean;
  error: string | null;
  fetchMovies: () => Promise<void>;
}

export const useFetchMovies = (
  fetchFunction: () => Promise<IMovie[]>,
  initialData: IMovie[] = []
): useFetchMoviesResult => {
  const [movies, setMovies] = useState<IMovie[]>(initialData);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchMovies = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);
      const data = await fetchFunction();
      setMovies(data);
    } catch (err) {
      setError("Failed to load movies. Please try again later.");
      console.error("Error fetching movies:", err);
    } finally {
      setIsLoading(false);
    }
  }, [fetchFunction]);

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  return { movies, isLoading, error, fetchMovies };
};

export const usePopularMovies = () => {
  return useFetchMovies(movieService.getPopularMovies, []);
};

export const useNowPlayingMovies = () => {
  return useFetchMovies(movieService.getNowPlayingMovies, []);
};
