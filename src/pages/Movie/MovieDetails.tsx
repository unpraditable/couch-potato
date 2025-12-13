// src/components/movies/MovieDetails.tsx
import React from "react";
import { useParams } from "react-router-dom";
import { useMovieDetails } from "../../hooks/useMovieDetails";
import MovieHeader from "../../components/Movie/MovieHeader";
import MovieInfo from "../../components/Movie/MovieInfo";
import Header from "../../components/General/Header";

const MovieDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { movie } = useMovieDetails(id);

  console.log(movie, "movie");
  if (movie) {
    return (
      <>
        <Header />
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
          {movie.backdrop_path && (
            <div
              className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-20"
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
              }}
            />
          )}

          <div className="container mx-auto px-4 py-8">
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
  }

  return <h1>Hello!</h1>;
};

export default MovieDetailsPage;
