import { Link } from "react-router-dom";
import type { IMovie } from "../../types/IMovie";

interface MovieCardProps {
  movie: IMovie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const imageUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "https://via.placeholder.com/500x750?text=No+Image";
  return (
    <li className="grow-0 shrink-0 basis-auto flex-initial max-w-37.5">
      <Link to={{ pathname: `/movie/${movie.id}` }}>
        <img
          className="rounded object-cover max-h-50"
          src={imageUrl}
          alt={`${movie.title} poster`}
        />
        <p>{movie.title}</p>
      </Link>
    </li>
  );
};

export default MovieCard;
