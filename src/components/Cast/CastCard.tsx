import type { Cast } from "../../types/Cast";

interface CastCardProps {
  cast: Cast;
}

const CastCard = ({ cast }: CastCardProps) => {
  const imageUrl = cast.profile_path
    ? `https://image.tmdb.org/t/p/w500${cast.profile_path}`
    : "https://blocks.astratic.com/img/general-img-landscape.png";
  return (
    <li
      key={cast.id}
      className="grow-0 shrink-0 basis-auto flex-initial w-40 mb-8"
    >
      <img
        className="rounded object-cover w-full h-60"
        src={imageUrl}
        alt={`${cast.name} as ${cast.character}`}
      />
      <p>
        <span className="text-bold">{cast.name}</span> as{" "}
        <span className="text-bold">{cast.character}</span>
      </p>
    </li>
  );
};

export default CastCard;
