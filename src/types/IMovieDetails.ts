import type { IMovie } from "./IMovie";

export interface IMovieDetails extends IMovie {
  runtime: number;
  genres: { id: number; name: string }[];
}
