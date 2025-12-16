import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

const ToggleDarkModeButton = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return document.documentElement.classList.contains("dark");
  });

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };
  return (
    <button
      onClick={toggleDarkMode}
      className="p-2 rounded-lg hover:bg-gray-100 cursor-pointer dark:hover:bg-gray-800"
    >
      {isDarkMode ? (
        <SunIcon className="w-5 h-5 text-yellow-500" />
      ) : (
        <MoonIcon className="w-5 h-5 text-gray-600" />
      )}
    </button>
  );
};

export default ToggleDarkModeButton;
