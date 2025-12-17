import {
  type User,
  type LoginCredentials,
  type RegisterCredentials,
} from "../types/Auth";

const USERS_KEY = "users_list";

// all methods here return value to be passed to authStore, will be kept to simulate real login flow
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
      email: credentials.email,
      // Password should be encrypted on real app, this is not encrypted
      password: credentials.password,
      provider: "email",
      createdAt: new Date().toISOString(),
    };

    users.push(newUser);
    localStorage.setItem(USERS_KEY, JSON.stringify(users));

    // login automatically after "Register"
    return { user: newUser, isAuthenticated: true };
  },

  googleAuth: () => {
    const users = JSON.parse(localStorage.getItem(USERS_KEY) || "[]");

    // Check if Google user already exists
    const user = users.find((u: User) => u.provider === "google");

    if (user) {
      // Google user exists, just log them in
      return { user, isAuthenticated: true };
    }

    // No Google user exists, create one
    const newUser: User = {
      id: `google_${Date.now()}`,
      email: `google.user${Math.floor(Math.random() * 1000)}@gmail.com`,
      provider: "google",
      createdAt: new Date().toISOString(),
    };

    users.push(newUser);
    localStorage.setItem(USERS_KEY, JSON.stringify(users));

    // Login automatically after "register"
    return { user: newUser, isAuthenticated: true };
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

    return { user, isAuthenticated: true };
  },
};
