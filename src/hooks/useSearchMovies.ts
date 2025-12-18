import { useState, useEffect, useCallback } from "react";
import { movieService } from "../services/movie.service";
import type { MovieSearchResults } from "../types/MovieSearchResults";

const emptyResults: MovieSearchResults = {
  page: 0,
  results: [],
  total_pages: 0,
  total_results: 0,
};

export const useSearchMovies = (query: string, page: number) => {
  const [searchResults, setSearchResults] =
    useState<MovieSearchResults>(emptyResults);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchSearchResults = useCallback(async () => {
    if (!query.trim()) {
      setSearchResults(emptyResults);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const data = await movieService.searchMovies(query, page);
      setSearchResults(data);
    } catch (err) {
      setError("Failed to search movies. Please try again.");
      console.error("Error searching movies:", err);
    } finally {
      setLoading(false);
    }
  }, [query, page]);

  useEffect(() => {
    fetchSearchResults();
  }, [fetchSearchResults]);

  return {
    searchResults,
    loading,
    error,
    refetch: fetchSearchResults,
  };
};
