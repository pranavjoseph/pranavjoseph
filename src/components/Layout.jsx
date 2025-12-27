import { Link, useLocation } from "react-router-dom";
import { useTheme } from "./ThemeProvider";
import Navbar from "./Navbar";

function Layout({ children }) {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300 font-sans">
      <Navbar />

      {/* Spacing for fixed header */}
      <div className={location.pathname === "/" ? "" : "pt-24"}>
        {children}
      </div>
    </div>
  );
}

export default Layout;
