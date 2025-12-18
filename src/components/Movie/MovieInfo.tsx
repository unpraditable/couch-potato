import type { MovieDetails } from "../../types/MovieDetails";
import CastCard from "../Cast/CastCard";

interface MovieInfoProps {
  movie: MovieDetails;
}

const MovieInfo = ({ movie: movieDetails }: MovieInfoProps) => {
  return (
    <>
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
        {movieDetails.title}
      </h1>

      {movieDetails.tagline && (
        <p className="text-lg italic text-gray-600 dark:text-gray-400">
          "{movieDetails.tagline}"
        </p>
      )}

      <section className="my-8">
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          {movieDetails.overview || "No overview available."}
        </p>
      </section>

      {movieDetails?.credits?.cast && (
        <section className="text-gray-700 dark:text-gray-300">
          <h2 className="text-xl mb-4 font-bold">Casts:</h2>
          <ul className="flex flex-nowrap w-full overflow-x-auto gap-4">
            {movieDetails?.credits?.cast.slice(0, 10).map((cast) => (
              <CastCard key={cast.id} cast={cast} />
            ))}
          </ul>
        </section>
      )}
    </>
  );
};

export default MovieInfo;
