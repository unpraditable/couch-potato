import { act, renderHook } from "@testing-library/react";
import { useFavorites } from "./useFavorites";
import { favoritesStore } from "../stores/favoriteStore";
import type { Movie } from "../types/Movie";

const mockMovie: Movie = {
  id: 10,
  title: "Favorite Movie",
  poster_path: "/fav.jpg",
  backdrop_path: null,
  overview: "",
  release_date: "",
  vote_average: 0,
  vote_count: 0,
};

describe("useFavorites hook", () => {
  beforeEach(() => {
    favoritesStore.setState({
      userId: "user-123",
      favoritesByUser: {},
    });
  });

  it("adds a favorite movie", () => {
    const { result } = renderHook(() => useFavorites());

    act(() => {
      result.current.addFavorite(mockMovie);
    });

    expect(result.current.favorites).toHaveLength(1);
    expect(result.current.isFavorite(mockMovie.id)).toBe(true);
  });

  it("removes a favorite movie", () => {
    favoritesStore.setState({
      userId: "user-123",
      favoritesByUser: {
        "user-123": [mockMovie],
      },
    });

    const { result } = renderHook(() => useFavorites());

    act(() => {
      result.current.removeFavorite(mockMovie.id);
    });

    expect(result.current.favorites).toHaveLength(0);
  });
});
