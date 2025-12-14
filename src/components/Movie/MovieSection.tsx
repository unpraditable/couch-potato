import React from "react";
import type { Movie } from "../../types/Movie";
import Loader from "../General/Loader";

interface MovieSectionProps<T extends Movie> {
  title: string;
  movies: T[];
  isLoading: boolean;
  error: string | null;
  onRetry: () => void;
  renderMovie: (movie: T) => React.ReactNode;
  emptyMessage?: string;
}

const MovieSection = <T extends Movie>({
  title,
  movies,
  isLoading,
  error,
  onRetry,
  renderMovie,
  emptyMessage = "No movies found.",
}: MovieSectionProps<T>) => {
  const renderContent = () => {
    if (isLoading) {
      return (
        <div className="flex justify-center items-center h-64">
          <Loader size="lg" />
        </div>
      );
    }

    if (error) {
      return (
        <div className="text-center py-8">
          <p className="text-red-500 dark:text-red-400">{error}</p>
          <button
            onClick={onRetry}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          >
            Retry
          </button>
        </div>
      );
    }

    if (movies.length === 0) {
      return (
        <div className="text-center py-8">
          <p className="text-gray-500 dark:text-gray-400">{emptyMessage}</p>
        </div>
      );
    }

    return (
      <div className="flex flex-nowrap w-full overflow-x-auto gap-4">
        {movies.map((movie) => (
          <ul key={movie.id}>{renderMovie(movie)}</ul>
        ))}
      </div>
    );
  };

  return (
    <section className="mb-8">
      <h2 className="text-xl mb-4 font-bold">{title}</h2>
      {renderContent()}
    </section>
  );
};

export default MovieSection;
