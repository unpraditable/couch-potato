import { Link } from "react-router-dom";
import type { IMovie } from "../../types/IMovie";

const MovieCard = ({ movie }: { movie: IMovie }) => {
  const imageUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "https://via.placeholder.com/500x750?text=No+Image";
  return (
    <li>
      <Link to={{ pathname: `/movie/${movie.id}` }}>
        <img
          className="h-60 rounded"
          src={imageUrl}
          alt={`${movie.title} poster`}
        />
        <p>{movie.title}</p>
      </Link>
    </li>
  );
};

export default MovieCard;
