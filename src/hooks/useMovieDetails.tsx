import { useState, useEffect, useCallback } from "react";
import { movieService } from "../services/movie.service";
import type { MovieDetails } from "../types/MovieDetails";

export const useMovieDetails = (movieId: string | undefined) => {
  const [movie, setMovie] = useState<MovieDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchMovieDetails = useCallback(async (id: string) => {
    if (!id) return;

    setLoading(true);
    setError(null);
    setMovie(null);

    try {
      const movieData = await movieService.getMovieDetails(parseInt(id));
      setMovie(movieData);
    } catch (err) {
      setError("Failed to load movies. Please try again later.");
      console.error("Error fetching movies:", err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (movieId) {
      fetchMovieDetails(movieId);
    }
  }, [movieId, fetchMovieDetails]);

  return {
    movie,
    loading,
    error,
  };
};
