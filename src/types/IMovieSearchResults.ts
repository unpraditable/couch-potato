import type { IMovie } from "./IMovie";

export interface IMovieSearchResults {
  page: number;
  total_pages: number;
  total_results: number;
  results: IMovie[];
}
