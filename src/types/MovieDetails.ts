import type { Cast } from "./Cast";
import type { Movie } from "./Movie";

export interface MovieGenre {
  id: number;
  name: string;
}
export interface MovieDetails extends Movie {
  runtime: number;
  tagline: string;
  genres: MovieGenre[];
  credits?: { cast: Cast[] };
}
