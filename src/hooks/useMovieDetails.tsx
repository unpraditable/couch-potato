import { useState, useEffect, useCallback } from "react";
import { movieService } from "../services/movie.service";
import type { MovieDetails } from "../types/MovieDetails";

export const useMovieDetails = (movieId: string | undefined) => {
  const [movie, setMovie] = useState<MovieDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchMovieDetails = useCallback(async () => {
    if (!movieId) return;

    setLoading(true);
    setError(null);

    try {
      const movieData = await movieService.getMovieDetails(parseInt(movieId));
      setMovie(movieData);
    } catch (err) {
      setError("Failed to load movie detail. Please try again later.");
      console.error("Error fetching movies:", err);
    } finally {
      setLoading(false);
    }
  }, [movieId]);

  useEffect(() => {
    fetchMovieDetails();
  }, [fetchMovieDetails]);

  return { movie, loading, error, refetch: fetchMovieDetails };
};
