import type { Movie } from "./Movie";

export interface MovieSearchResults {
  page: number;
  total_pages: number;
  total_results: number;
  results: Movie[];
}
