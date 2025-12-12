// src/pages/HomePage.tsx
import React, { useState, useEffect } from "react";
import type { IMovie } from "../types/IMovie";

import { movieService } from "../services/movie.service";
import MovieCard from "../components/Movie/MovieCard";

const HomePage: React.FC = () => {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchMovies = async () => {
    try {
      setIsLoading(true);
      const popularMovies = await movieService.getPopularMovies();
      setMovies(popularMovies);
      setError(null);
    } catch (err) {
      setError("Failed to load movies. Please try again later.");
      console.error("Error fetching movies:", err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  console.log(movies, "moviess");
  console.log(isLoading);
  console.log(error);

  return (
    <ul>
      {movies.map((movie) => (
        <MovieCard movie={movie} />
      ))}
    </ul>
  );
};

export default HomePage;
