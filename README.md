# Couch Potato

A Movie Discovery Web Application

---

## App Description

Couch Potato is a web application for discovering movies using the TMDB API.  
Users can:

- Browse popular movies
- Search movie titles
- View detailed movie information
- Manage favorite movies
- Authenticate using email or Google (simulated in localStorage, password also not encrypted)

The application is built with a focus on performance, clean architecture, and modern React best practices.

---

## Tech Stack & Decisions

### React + Vite

- Faster development server and hot module replacement
- Better performance compared to create-react-app
- Modern and lightweight tooling
- Vite is the recommended standard for modern React applications

### Tailwind CSS

- Utility-first approach enables faster UI development
- Highly customizable design system
- Ideal for custom UI-heavy apps like a movie platform

### Zustand (State Management)

- Used for global state such as authentication and favorites
- Lightweight with minimal boilerplate
- Hook-based API fits naturally with React Hooks
- Avoids deeply nested Context Providers
- Simpler alternative to Redux for this project’s complexity, more dev friendly

### Heroicons

- Designed by the developers of Tailwind
- Consistent visual style with Tailwind
- SVG-based and easy to customize

### React Router DOM

- Client-side routing
- Protected routes (authentication-based)
- Web-only targeting

---

## Architecture Overview

The app follows a layered architecture:

```
Pages & Components
↓
Custom Hooks
↓
Zustand Stores
↓
Services (API & localStorage)
```

**Benefits:**

- Clear separation of concerns
- Reusable and testable logic
- Clean and readable components

---

## Folder Structure

```
src/
├── components/ # Reusable UI components
├── pages/ # Route-level pages
├── hooks/ # Custom React hooks
├── stores/ # Zustand stores (auth, favorites)
├── services/ # API & persistence logic
├── types/ # TypeScript definitions
└── App.tsx
```

---

## Key Implementation Notes

- Authentication and favorites are handled via Zustand with persistence
- Favorites are tied to the authenticated user
- Global state ensures UI updates immediately on login/logout
- Custom hooks abstract logic away from UI components
- Protected routes prevent unauthorized access

---

## Performance Considerations

- Optimized state updates using Zustand
- Pagination for search results
- Avoid unnecessary re-renders via hooks abstraction
- Centralized API access through services
- Ready for lazy loading and memoization where needed

---

## How to Run The App

Prerequisite:

1. Create an API key in TMDB API[https://developer.themoviedb.org/docs/getting-started]
2. Create an .env file that contains VITE_TMDB_API_KEY (put the TMDB API key here) and VITE_TMDB_BASE_URL (for base url, put "https://api.themoviedb.org/3")
3. Make sure you use node version 16 or higher (until 22)

```
npm run dev
```

Starts the Vite development server

Open http://localhost:5173
in your browser

Supports Hot Module Replacement (HMR) for fast development

or you can try the app here:
https://2025-couch-potato.netlify.app/

## How to Test The App

```
npm test
```

Note: due to time constraint, the testing is only in favorite hooks and favorite service. Test setup in UI or jsx component not configured yet

---

Planned enhancements for Couch Potato:

1. **Caching API responses**  
   Use **React Query** (or similar) to cache movie data so pages don’t reload every time.

2. **Internationalization (i18n)**  
   Add multi-language support for global accessibility.

3. **Electron.js integration**  
   Package the app as a desktop application for offline usage.

4. **Analytics tracking**  
   Integrate **Firebase Analytics** to monitor user interactions and app usage.

5. **Night mode persistence**  
   Persist dark/light mode selection beyond Tailwind’s default behavior.

6. **Co-located unit tests**  
   Write Jest tests alongside implementation files for easier tracking and usage of `spyOn` or mocks.

7. **Caching API responses**  
   Use **React Window** (or similar) to render list items so it only shows the component visible in screen to save performance.

8. **Setup UI or JSX Unit Tests**  
   JSX unit test is not configured properly yet, we can configure it at the future, or use other tools like Cypress or Playwright.

9. **Refactoring Units That Are Needed To Be Refactoreds**  
   My assessment for this, Login and Register need to be refactored, as Login with LoginForm component and Register with RegisterForm component.

10. **Add Trailer To Movie Details Page**  
    Because of time constraint, I cannot show the trailer in movie details yet.

11. **Add Error Handler and Error Boundary**  
    We will need to handle errors by it's category, like error 4xx, this also out of the scope with time restrictions.
