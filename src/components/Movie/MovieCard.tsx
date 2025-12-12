import type { IMovie } from "../../types/IMovie";

const MovieCard = ({ movie }: { movie: IMovie }) => {
  const imageUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "https://via.placeholder.com/500x750?text=No+Image";
  return (
    <li>
      <img
        className="h-40 rounded"
        src={imageUrl}
        alt={`${movie.title} poster`}
      />
      <p>{movie.title}</p>
    </li>
  );
};

export default MovieCard;
