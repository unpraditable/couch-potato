import { Link } from "react-router-dom";
import type { IMovie } from "../../types/IMovie";

const MovieCard = ({ movie }: { movie: IMovie }) => {
  const imageUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "https://via.placeholder.com/500x750?text=No+Image";
  return (
    <li className="grow-0 shrink-0 basis-auto flex-initial w-[150px]">
      <Link to={{ pathname: `/movie/${movie.id}` }}>
        <img
          className="rounded object-cover"
          src={imageUrl}
          alt={`${movie.title} poster`}
        />
        <p>{movie.title}</p>
      </Link>
    </li>
  );
};

export default MovieCard;
