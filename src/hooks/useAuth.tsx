import { useState } from "react";
import { authService } from "../services/auth.service";

export const useAuth = () => {
  const [user, setUser] = useState(authService.getCurrentSession().user);
  const [isAuthenticated, setIsAuthenticated] = useState(
    authService.getCurrentSession().isAuthenticated
  );

  const register = (username: string, email: string, password: string) => {
    authService.register({ username, email, password });
    const session = authService.getCurrentSession();
    setUser(session.user);
    setIsAuthenticated(session.isAuthenticated);
  };

  const login = (email: string, password: string) => {
    authService.login({ email, password });
    const session = authService.getCurrentSession();
    setUser(session.user);
    setIsAuthenticated(session.isAuthenticated);
  };

  const loginWithGoogle = () => {
    authService.googleAuth();
    const session = authService.getCurrentSession();
    setUser(session.user);
    setIsAuthenticated(session.isAuthenticated);
  };

  const logout = () => {
    authService.logout();
    setUser(null);
    setIsAuthenticated(false);
  };

  return {
    user,
    isAuthenticated,
    register,
    login,
    loginWithGoogle,
    logout,
  };
};
