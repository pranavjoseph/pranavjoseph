import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";

function Layout({ children }) {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-gray-900 text-white transition-colors duration-300 font-sans">
      <Navbar />

      {/* Spacing for fixed header */}
      <div className={location.pathname === "/" ? "" : "pt-24"}>
        {children}
      </div>
    </div>
  );
}

export default Layout;
