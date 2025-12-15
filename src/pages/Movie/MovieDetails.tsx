import React from "react";
import { useParams } from "react-router-dom";
import { useMovieDetails } from "../../hooks/useMovieDetails";
import Header from "../../components/General/Header";
import MovieHeader from "../../components/Movie/MovieHeader";
import MovieInfo from "../../components/Movie/MovieInfo";
import Loader from "../../components/General/Loader";
import ErrorWithRetryButton from "../../components/General/ErrorWithRetryButton";

const MovieDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { movie, loading, error, refetch } = useMovieDetails(id);

  if (loading) {
    return (
      <>
        <Header />
        <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
          <p className="text-lg text-gray-600 dark:text-gray-300">
            <Loader />
          </p>
        </div>
      </>
    );
  }

  if (error) {
    return (
      <>
        <Header />
        <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
          <ErrorWithRetryButton error={error} onRetry={refetch} />
        </div>
      </>
    );
  }

  if (!movie) {
    return (
      <>
        <Header />
        <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
          <p className="text-gray-600 dark:text-gray-300">Movie not found.</p>
        </div>
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 relative">
        {movie.backdrop_path && (
          <div
            className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-20"
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
            }}
          />
        )}

        <div className="relative z-10 container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <MovieHeader movie={movie} />
            </div>

            <div className="lg:col-span-2 space-y-8">
              <MovieInfo movie={movie} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieDetailsPage;
