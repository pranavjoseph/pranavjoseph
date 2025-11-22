import { Link } from "react-router-dom";
import { useTheme } from "./ThemeProvider";

function Layout({ children, showHomeLink = true }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors duration-300">
      {/* Dark Mode Toggle Button - Fixed top right */}
      <button
        onClick={toggleTheme}
        className="fixed top-6 right-6 z-50 p-3 bg-gray-200 rounded-full dark:bg-gray-900 shadow-lg hover:scale-110 transition-transform duration-200 text-2xl"
        aria-label="Toggle dark mode"
      >
        {theme === "light" ? "🌙" : "☀️"}
      </button>

      {/* Home Link - Fixed top left (optional) */}
      {showHomeLink && (
        <Link
          to="/"
          className="fixed top-6 left-6 z-50 p-3 bg-gray-200 rounded-full dark:bg-gray-900 shadow-lg hover:scale-110 transition-transform duration-200 text-2xl"
          aria-label="Go to home"
        >
          🏡
        </Link>
      )}

      {/* Page Content */}
      {children}
    </div>
  );
}

export default Layout;

