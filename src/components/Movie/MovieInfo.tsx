import React from "react";
import type { MovieDetails } from "../../types/MovieDetails";

interface MovieInfoProps {
  movie: MovieDetails;
}

const MovieInfo: React.FC<MovieInfoProps> = ({ movie }) => {
  return (
    <div className="card p-6">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
        {movie.title}
      </h1>

      {movie.tagline && (
        <p className="text-lg italic text-gray-600 dark:text-gray-400">
          "{movie.tagline}"
        </p>
      )}

      <div className="mt-8">
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          {movie.overview || "No overview available."}
        </p>
      </div>
    </div>
  );
};

export default MovieInfo;
