import { Link } from "react-router-dom";
import { useTheme } from "../../components/ThemeProvider";

function PageNotFound() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50 dark:bg-gray-900 text-center px-4 transition-colors duration-300">
      {/* Dark Mode Toggle */}
      <button onClick={toggleTheme} className="fixed top-6 right-6 z-50 p-3 bg-gray-200 rounded-full dark:bg-gray-800 shadow-lg hover:scale-110 transition-transform duration-200 text-2xl" aria-label="Toggle dark mode">
        {theme === "light" ? "🌙" : "☀️"}
      </button>

      <h1 className="text-7xl font-extrabold text-blue-800 dark:text-blue-200 mb-4 animate-bounce">🤖 404</h1>
      <p className="text-2xl text-gray-700 dark:text-gray-300 mb-2">Oops! This page took the wrong turn in the codebase.</p>
      <p className="text-gray-500 dark:text-gray-400 mb-6 max-w-md">
        Maybe it was a <span className="font-mono">null</span> reference… or just a typo 😅
      </p>
      <Link to="/" className="px-6 py-3 bg-blue-800 dark:bg-blue-600 text-white rounded-xl shadow-lg hover:bg-blue-900 dark:hover:bg-blue-500 transition">
        ⬅️ Back to Home
      </Link>
    </div>
  );
}

export default PageNotFound;
