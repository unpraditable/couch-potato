import type { MovieDetails, MovieGenre } from "../../types/MovieDetails";

interface MovieHeaderProps {
  movie: MovieDetails;
}

const MovieHeader = ({ movie }: MovieHeaderProps) => {
  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "https://via.placeholder.com/500x750?text=No+Poster";

  return (
    <div className="card p-6">
      <div className="relative mb-6">
        <img
          src={posterUrl}
          alt={movie.title}
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>

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
    </div>
  );
};

export default MovieHeader;
