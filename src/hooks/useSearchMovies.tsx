// src/hooks/useMovies.ts
import { useState, useCallback } from "react";
import type { IMovie } from "../types/IMovie";
import { movieService } from "../services/movie.service";

export const useSearchMovies = () => {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const search = useCallback(async (query: string) => {
    if (!query.trim()) {
      setMovies([]);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const data = await movieService.searchMovies(query);
      setMovies(data);
    } catch (err) {
      console.error("Error in search movies:", err);
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    movies,
    loading,
    error,
    search,
    clearResults: () => setMovies([]),
  };
};
