import { useState } from "react";
import { movieService } from "../services/movie.service";
import type { MovieSearchResults } from "../types/MovieSearchResults";

export const useSearchMovies = () => {
  const defaultSearchResult = {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0,
  };
  const [searchResults, setSearchResults] =
    useState<MovieSearchResults>(defaultSearchResult);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const search = async (query: string, page: string) => {
    if (!query.trim()) {
      setSearchResults({
        page: 0,
        results: [],
        total_pages: 0,
        total_results: 0,
      });
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const data = await movieService.searchMovies(query, parseInt(page));
      setSearchResults(data);
    } catch (err) {
      console.error("Error in search movies:", err);
    } finally {
      setLoading(false);
    }
  };

  return {
    searchResults,
    loading,
    error,
    search,
    clearResults: () =>
      setSearchResults({
        page: 0,
        results: [],
        total_pages: 0,
        total_results: 0,
      }),
  };
};
