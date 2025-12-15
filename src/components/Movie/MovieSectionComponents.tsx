import React from "react";
import type { Movie } from "../../types/Movie";
import MovieSection from "./MovieSection";
import MovieCard from "./MovieCard";
import MovieBackdropCard from "./MovieBackdropCard";

interface MovieSectionProps {
  isLoading: boolean;
  error: string | null;
  onRetry: () => void;
  movies: Movie[];
}

export const PopularMoviesSection: React.FC<MovieSectionProps> = ({
  movies,
  isLoading,
  error,
  onRetry,
}) => {
  return (
    <MovieSection
      title="Popular Movies"
      movies={movies}
      isLoading={isLoading}
      error={error}
      onRetry={onRetry}
      renderMovie={(movie) => <MovieCard movie={movie} />}
    />
  );
};

export const NowPlayingMoviesSection: React.FC<MovieSectionProps> = ({
  movies,
  isLoading,
  error,
  onRetry,
}) => {
  return (
    <MovieSection
      title="Now Playing..."
      movies={movies}
      isLoading={isLoading}
      error={error}
      onRetry={onRetry}
      renderMovie={(movie) => <MovieBackdropCard movie={movie} />}
    />
  );
};

export const TopRatedMoviesSection: React.FC<MovieSectionProps> = ({
  movies,
  isLoading,
  error,
  onRetry,
}) => {
  return (
    <MovieSection
      title="Top Rated Movies"
      movies={movies}
      isLoading={isLoading}
      error={error}
      onRetry={onRetry}
      renderMovie={(movie) => <MovieCard movie={movie} />}
    />
  );
};

export const UpcomingMoviesSection: React.FC<MovieSectionProps> = ({
  movies,
  isLoading,
  error,
  onRetry,
}) => {
  return (
    <MovieSection
      title="Upcoming Movies"
      movies={movies}
      isLoading={isLoading}
      error={error}
      onRetry={onRetry}
      renderMovie={(movie) => <MovieBackdropCard movie={movie} />}
    />
  );
};
