import { useEffect, useRef, useState } from "react";

function TechStackVisualization({ techs }) {
  const canvasRef = useRef(null);
  const [hoveredTech, setHoveredTech] = useState(null);

  return (
    <div className="relative">
      <div className="flex flex-wrap gap-3 justify-center">
        {techs.map((tech, index) => (
          <div
            key={index}
            className="relative group"
            onMouseEnter={() => setHoveredTech(index)}
            onMouseLeave={() => setHoveredTech(null)}
          >
            <div
              className={`px-4 py-2 rounded-lg font-mono text-sm font-semibold transition-all duration-300 cursor-pointer ${
                hoveredTech === index
                  ? "bg-blue-600 text-white scale-110 shadow-lg rotate-3"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900/30"
              }`}
              style={{
                transform: hoveredTech === index ? "scale(1.1) rotate(3deg)" : "scale(1)",
                transition: "all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)",
              }}
            >
              {tech}
            </div>
            {hoveredTech === index && (
              <div className="absolute -top-2 -right-2 w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default TechStackVisualization;



