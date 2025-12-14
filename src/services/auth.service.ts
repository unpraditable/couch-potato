import {
  type User,
  type LoginCredentials,
  type RegisterCredentials,
} from "../types/IAuth";

const STORAGE_KEY = "auth_app";
const USERS_KEY = "auth_users";

export const authService = {
  initStorage: () => {
    if (!localStorage.getItem(USERS_KEY)) {
      localStorage.setItem(USERS_KEY, JSON.stringify([]));
    }
  },

  // Register with email
  register: (credentials: RegisterCredentials) => {
    const users = JSON.parse(localStorage.getItem(USERS_KEY) || "[]");

    // Check if exists
    if (users.find((user: User) => user.email === credentials.email)) {
      throw new Error("User already exists");
    }

    const newUser: User = {
      id: Date.now().toString(),
      username: credentials.username,
      email: credentials.email,
      // Password should be encrypted on real app, this is not encrypted
      password: credentials.password,
      provider: "email",
      createdAt: new Date().toISOString(),
    };

    users.push(newUser);
    localStorage.setItem(USERS_KEY, JSON.stringify(users));

    // Auto login
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        user: newUser,
        isAuthenticated: true,
      })
    );
  },

  googleAuth: () => {
    const users = JSON.parse(localStorage.getItem(USERS_KEY) || "[]");

    // Check if Google user already exists
    const user = users.find((u: User) => u.provider === "google");

    if (user) {
      // Google user exists, just log them in
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          user,
          isAuthenticated: true,
        })
      );
      return;
    }

    // No Google user exists, create one
    const newUser: User = {
      id: `google_${Date.now()}`,
      username: `GoogleUser${Math.floor(Math.random() * 1000)}`,
      email: `google.user${Math.floor(Math.random() * 1000)}@gmail.com`,
      provider: "google",
      createdAt: new Date().toISOString(),
    };

    users.push(newUser);
    localStorage.setItem(USERS_KEY, JSON.stringify(users));

    // Login automatically
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        user: newUser,
        isAuthenticated: true,
      })
    );
  },

  login: (credentials: LoginCredentials) => {
    const users = JSON.parse(localStorage.getItem(USERS_KEY) || "[]");

    const user = users.find(
      (u: User) =>
        u.email === credentials.email && u.password === credentials.password
    );

    if (!user) {
      throw new Error("Invalid credentials");
    }

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        user,
        isAuthenticated: true,
      })
    );
  },

  logout: () => {
    localStorage.removeItem(STORAGE_KEY);
  },

  getCurrentSession: () => {
    const session = localStorage.getItem(STORAGE_KEY);
    return session
      ? JSON.parse(session)
      : { user: null, isAuthenticated: false };
  },
};
