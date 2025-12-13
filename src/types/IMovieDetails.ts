import type { IMovie } from "./IMovie";

export interface IMovieGenre {
  id: number;
  name: string;
}
export interface IMovieDetails extends IMovie {
  runtime: number;
  tagline: string;
  genres: IMovieGenre[];
}
