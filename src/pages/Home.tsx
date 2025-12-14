import React from "react";
import SearchBar from "../components/General/SearchBar";
import Header from "../components/General/Header";
import { usePopularMovies, useNowPlayingMovies } from "../hooks/useFetchMovies";
import {
  NowPlayingSection,
  PopularMoviesSection,
} from "../components/Movie/MovieSectionCollections";

const HomePage: React.FC = () => {
  const {
    movies: popularMovies,
    isLoading: isLoadingPopular,
    error: errorPopular,
    fetchMovies: fetchPopularMovies,
  } = usePopularMovies();

  const {
    movies: nowPlayingMovies,
    isLoading: isLoadingNowPlaying,
    error: errorNowPlaying,
    fetchMovies: fetchNowPlayingMovies,
  } = useNowPlayingMovies();

  return (
    <>
      <Header />
      <div className="bg-white dark:bg-gray-700 dark:text-white min-h-screen">
        <header className="bg-gray-700 mb-4 py-12">
          <div className="container mx-auto">
            <h1 className="text-white text-2xl font-bold mb-2">
              Welcome to Couch Potato!
            </h1>
            <h3 className="text-white text-xl mb-6">
              Home of The Greatest Movies of All Time!
            </h3>
            <SearchBar />
          </div>
        </header>
        <main className="container mx-auto pb-8">
          <NowPlayingSection
            movies={nowPlayingMovies}
            isLoading={isLoadingNowPlaying}
            error={errorNowPlaying}
            onRetry={fetchNowPlayingMovies}
          />

          <PopularMoviesSection
            movies={popularMovies}
            isLoading={isLoadingPopular}
            error={errorPopular}
            onRetry={fetchPopularMovies}
          />
        </main>
      </div>
    </>
  );
};

export default HomePage;
