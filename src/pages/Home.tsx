// src/pages/HomePage.tsx
import React, { useState, useEffect } from "react";
import type { IMovie } from "../types/IMovie";

import { movieService } from "../services/movie.service";
import MovieCard from "../components/Movie/MovieCard";
import MovieBackdropCard from "../components/Movie/MovieBackdropCard";
import SearchBar from "../components/General/SearchBar";
import Header from "../components/General/Header";

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
      <Header />
      <div className="bg-white dark:bg-gray-700 dark:text-white">
        <header className="bg-gray-700 mb-4 py-12">
          <div className="container mx-auto">
            <h1 className="text-white text-2xl font-bold mb-1">
              Welcome to Couch Potato!
            </h1>
            <h3 className="text-white text-xl mb-2">
              Home of The Greatest Movies of All Time!
            </h3>
            <SearchBar />
          </div>
        </header>
        <main className="container mx-auto">
          <section className="mb-4">
            <h2 className=" text-xl mb-2 font-bold">Now Playing...</h2>
            <ul className="flex flex-nowrap w-full overflow-x-auto gap-4">
              {nowPlayingMovies.map((movie) => (
                <MovieBackdropCard movie={movie} />
              ))}
            </ul>
          </section>

          <section>
            <h2 className=" text-xl mb-2 font-bold">Popular Movies</h2>
            <ul className="flex flex-nowrap w-full overflow-x-auto gap-4">
              {popularMovies.map((movie) => (
                <MovieCard movie={movie} />
              ))}
            </ul>
          </section>
        </main>
      </div>
    </>
  );
};

export default HomePage;
