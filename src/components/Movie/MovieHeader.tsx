import { HeartIcon } from "@heroicons/react/24/solid";
import { useFavorites } from "../../hooks/useFavorites";
import type { MovieDetails, MovieGenre } from "../../types/MovieDetails";

interface MovieHeaderProps {
  movie: MovieDetails;
}

const MovieHeader = ({ movie }: MovieHeaderProps) => {
  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "https://via.placeholder.com/500x750?text=No+Poster";

  const { isFavorite, addFavorite, removeFavorite } = useFavorites();
  const favorite = isFavorite(movie.id);

  const formattedReleaseDate = movie.release_date
    ? new Date(movie.release_date).toLocaleDateString(undefined, {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "Unknown";

  return (
    <>
      <div className="relative mb-6">
        <img
          src={posterUrl}
          alt={movie.title}
          className="w-full max-h-100 rounded-lg shadow-lg object-cover"
        />
      </div>

      <div className="mb-4">
        <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
          {movie.title}
        </h1>
        <p className="text-gray-500 dark:text-gray-200">
          {formattedReleaseDate}
        </p>
      </div>

      <button
        onClick={() =>
          favorite ? removeFavorite(movie.id) : addFavorite(movie)
        }
        className="mt-2 mb-2 text-gray-800 border-2 p-2 rounded border-gray-400 cursor-pointer dark:text-gray-200 "
      >
        {favorite ? (
          <span className="flex gap-2">
            <HeartIcon className="w-6 h-6 text-red-500" />
            Remove from Favorites
          </span>
        ) : (
          <span className="flex gap-2">
            <HeartIcon className="w-6 h-6 text-red-500" />
            Add to Favorites
          </span>
        )}
      </button>

      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <div className="flex items-center">
            <span className="ml-2 text-2xl font-bold text-gray-900 dark:text-white">
              {movie.vote_average.toFixed(1)}
            </span>
          </div>
          <span className="text-gray-500 dark:text-gray-400">
            ({movie.vote_count.toLocaleString()} votes)
          </span>
        </div>

        <div className="flex flex-wrap gap-2">
          {movie.genres.map((genre: MovieGenre) => (
            <span
              key={genre.id}
              className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-gray-800 dark:text-white rounded-full text-sm font-medium"
            >
              {genre.name}
            </span>
          ))}
        </div>
      </div>
    </>
  );
};

export default MovieHeader;
