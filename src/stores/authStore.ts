import { create } from "zustand";
import { persist } from "zustand/middleware";
import { authService } from "../services/auth.service";
import type {
  User,
  LoginCredentials,
  RegisterCredentials,
} from "../types/Auth";

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;

  login: (credentials: LoginCredentials) => void;
  register: (credentials: RegisterCredentials) => void;
  loginWithGoogle: () => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,

      login: (credentials) => {
        const loginSession = authService.login(credentials);

        set({
          user: loginSession.user,
          isAuthenticated: true,
        });
      },

      register: (credentials) => {
        const registerSession = authService.register(credentials);

        set({
          user: registerSession.user,
          isAuthenticated: true,
        });
      },

      loginWithGoogle: () => {
        const loginSession = authService.googleAuth();

        set({
          user: loginSession.user,
          isAuthenticated: true,
        });
      },

      logout: () => {
        set({ user: null, isAuthenticated: false });
      },
    }),
    {
      name: "auth_store",
      partialize: (state) => ({
        user: state.user
          ? {
              id: state.user.id,
              email: state.user.email,
              provider: state.user.provider,
            }
          : null,
        isAuthenticated: state.isAuthenticated,
      }),
    }
  )
);
