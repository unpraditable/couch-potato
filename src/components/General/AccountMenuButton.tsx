import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { useState } from "react";
import { HeartIcon, UserIcon } from "@heroicons/react/24/solid";

const AccountMenuButton = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };
  return (
    <div className="relative">
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="p-2 rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 flex items-center gap-2"
      >
        <UserIcon className="w-5 h-5 text-gray-600 dark:text-gray-400" />
      </button>

      {isMenuOpen && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsMenuOpen(false)}
          />
          <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-900 rounded-lg shadow-lg border border-gray-200 dark:border-gray-800 z-50">
            <div className="p-3 border-b border-gray-200 dark:border-gray-800">
              <p className="font-medium text-gray-900 dark:text-white">
                {user?.email}
              </p>
            </div>

            <div className="p-2">
              <a
                href="/favorites"
                className="w-full flex items-center gap-2 p-2 text-sm text-gray-700 cursor-pointer dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded"
              >
                <HeartIcon className="w-4 h-4 text-red-500" />
                My Favorites
              </a>

              <button
                onClick={handleLogout}
                className="w-full flex items-center gap-2 p-2 text-sm text-red-600 cursor-pointer dark:text-red-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded mt-1"
              >
                Logout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default AccountMenuButton;
