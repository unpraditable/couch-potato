import { Link } from "react-router-dom";
import type { IMovie } from "../../types/IMovie";

const MovieBackdropCard = ({ movie }: { movie: IMovie }) => {
  const imageUrl = movie.backdrop_path
    ? `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`
    : "https://via.placeholder.com/500x750?text=No+Image";
  return (
    <li>
      <Link to={{ pathname: `/movie/${movie.id}` }}>
        <img
          className="h-40 rounded"
          src={imageUrl}
          alt={`${movie.title} poster`}
        />
        <p>{movie.title}</p>
      </Link>
    </li>
  );
};

export default MovieBackdropCard;
