import type { Movie } from "../../types/Movie";
import MovieSection from "./MovieSection";
import MovieCard from "./MovieCard";
import MovieHorizontalCard from "./MovieHorizontalCard";

interface MovieSectionProps {
  isLoading: boolean;
  error: string | null;
  onRetry: () => void;
  movies: Movie[];
}

export const PopularMoviesSection = ({
  movies,
  isLoading,
  error,
  onRetry,
}: MovieSectionProps) => {
  return (
    <MovieSection
      title="Popular Movies"
      movies={movies}
      isLoading={isLoading}
      error={error}
      onRetry={onRetry}
      renderMovie={(movie) => <MovieCard key={movie.id} movie={movie} />}
    />
  );
};

export const NowPlayingMoviesSection = ({
  movies,
  isLoading,
  error,
  onRetry,
}: MovieSectionProps) => {
  return (
    <MovieSection
      title="Now Playing..."
      movies={movies}
      isLoading={isLoading}
      error={error}
      onRetry={onRetry}
      renderMovie={(movie) => (
        <MovieHorizontalCard key={movie.id} movie={movie} />
      )}
    />
  );
};

export const TopRatedMoviesSection = ({
  movies,
  isLoading,
  error,
  onRetry,
}: MovieSectionProps) => {
  return (
    <MovieSection
      title="Top Rated Movies"
      movies={movies}
      isLoading={isLoading}
      error={error}
      onRetry={onRetry}
      renderMovie={(movie) => <MovieCard key={movie.id} movie={movie} />}
    />
  );
};

export const UpcomingMoviesSection = ({
  movies,
  isLoading,
  error,
  onRetry,
}: MovieSectionProps) => {
  return (
    <MovieSection
      title="Upcoming Movies"
      movies={movies}
      isLoading={isLoading}
      error={error}
      onRetry={onRetry}
      renderMovie={(movie) => (
        <MovieHorizontalCard key={movie.id} movie={movie} />
      )}
    />
  );
};
