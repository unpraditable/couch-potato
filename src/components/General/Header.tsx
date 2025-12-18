import { FilmIcon } from "@heroicons/react/24/solid";
import ToggleDarkModeButton from "./ToggleDarkModeButton";
import AccountMenuButton from "./AccountMenuButton";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div
            className="flex items-center gap-2 cursor-pointer group"
            onClick={() => navigate("/")}
          >
            <FilmIcon className="w-8 h-8 text-gray-600 transition-colors dark:text-white" />
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              Couch Potato
            </span>
          </div>

          <div className="flex items-center gap-3">
            <ToggleDarkModeButton />
            <AccountMenuButton />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
