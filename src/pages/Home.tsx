// src/pages/HomePage.tsx
import React, { useState, useEffect } from "react";
import type { IMovie } from "../types/IMovie";

import { movieService } from "../services/movie.service";
import MovieCard from "../components/Movie/MovieCard";
import MovieBackdropCard from "../components/Movie/MovieBackdropCard";

const HomePage: React.FC = () => {
  const [popularMovies, setPopularMovies] = useState<IMovie[]>([]);
  const [nowPlayingMovies, setNowPlayingMovies] = useState<IMovie[]>([]);

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchMovies = async () => {
    try {
      setIsLoading(true);
      const popularMovies = await movieService.getPopularMovies();
      const nowPlayingMovies = await movieService.getNowPlayingMovies();

      setPopularMovies(popularMovies);
      setNowPlayingMovies(nowPlayingMovies);
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

  console.log(isLoading);
  console.log(error);

  return (
    <>
      <ul className="w-full overflow-x-auto">
        {nowPlayingMovies.map((movie) => (
          <MovieBackdropCard movie={movie} />
        ))}
      </ul>{" "}
      <ul className="grid grid-cols-4 gap-4">
        {popularMovies.map((movie) => (
          <MovieCard movie={movie} />
        ))}
      </ul>
    </>
  );
};

export default HomePage;
