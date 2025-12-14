import React from "react";
import type { Movie } from "../../types/Movie";
import MovieSection from "./MovieSection";
import MovieCard from "./MovieCard";
import MovieBackdropCard from "./MovieBackdropCard";

interface MovieSectionBaseProps {
  isLoading: boolean;
  error: string | null;
  onRetry: () => void;
}

interface PopularMoviesSectionProps extends MovieSectionBaseProps {
  movies: Movie[];
}

export const PopularMoviesSection: React.FC<PopularMoviesSectionProps> = ({
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

interface NowPlayingSectionProps extends MovieSectionBaseProps {
  movies: Movie[];
}

export const NowPlayingSection: React.FC<NowPlayingSectionProps> = ({
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
