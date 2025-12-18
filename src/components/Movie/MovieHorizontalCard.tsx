import { Link } from "react-router-dom";
import type { Movie } from "../../types/Movie";

const MovieHorizontalCard = ({ movie }: { movie: Movie }) => {
  const imageUrl = movie.backdrop_path
    ? `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`
    : "https://via.placeholder.com/500x750?text=No+Image";
  return (
    <li className="grow-0 shrink-0 basis-auto flex-initial w-[250px]">
      <Link to={{ pathname: `/movie/${movie.id}` }}>
        <img
          className="h-40 rounded object-cover"
          src={imageUrl}
          alt={`${movie.title} poster`}
        />
        <p>{movie.title}</p>
      </Link>
    </li>
  );
};

export default MovieHorizontalCard;
