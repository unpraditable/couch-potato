import type { Movie } from "../types/Movie";
import { favoritesService } from "./favorites.service";

describe("favoritesService", () => {
  const mockMovie: Movie = {
    id: 1,
    title: "Test Movie",
    poster_path: "/test.jpg",
    backdrop_path: null,
    overview: "",
    release_date: "",
    vote_average: 0,
    vote_count: 0,
  };

  beforeEach(() => {
    localStorage.clear();
    jest.clearAllMocks();
  });

  it("should return empty array if no favorites in localStorage", () => {
    const favorites = favoritesService.getFavorites();
    expect(favorites).toEqual([]);
  });

  it("should save favorites to localStorage", () => {
    favoritesService.saveFavorites([mockMovie]);

    const storedData = localStorage.getItem("favorite_movies");
    expect(storedData).toBe(JSON.stringify([mockMovie]));
  });

  it("should return favorites from localStorage", () => {
    localStorage.setItem("favorite_movies", JSON.stringify([mockMovie]));

    const favorites = favoritesService.getFavorites();
    expect(favorites).toEqual([mockMovie]);
  });

  it("should handle malformed JSON gracefully", () => {
    localStorage.setItem("favorite_movies", "invalid_json");

    const favorites = favoritesService.getFavorites();
    expect(favorites).toEqual([]);
  });
});
