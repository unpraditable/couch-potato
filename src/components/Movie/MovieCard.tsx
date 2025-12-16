import { Link } from "react-router-dom";
import type { Movie } from "../../types/Movie";

interface MovieCardProps {
  movie: Movie;
}

const MovieCard = ({ movie }: MovieCardProps) => {
  const imageUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "https://blocks.astratic.com/img/general-img-landscape.png";
  return (
    <li
      key={movie.id}
      className="grow-0 shrink-0 basis-auto flex-initial w-50 mb-8"
    >
      <Link to={{ pathname: `/movie/${movie.id}` }}>
        <img
          className="rounded object-cover w-full h-75"
          src={imageUrl}
          alt={`${movie.title} poster`}
        />
        <p>{movie.title}</p>
      </Link>
    </li>
  );
};

export default MovieCard;
