import { useEffect } from "react";
import { useAuth } from "./useAuth";
import { favoritesStore } from "../stores/favoriteStore";

export const useSyncFavoritesUser = () => {
  const { user } = useAuth();
  const setUserFavorites = favoritesStore((store) => store.setUser);

  useEffect(() => {
    setUserFavorites(user?.id ?? null);
  }, [user, setUserFavorites]);
};
