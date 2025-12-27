import { useState, useEffect, useRef } from "react";

// Technology categories and their colors
const techCategories = {
  backend: { color: "from-purple-500 to-purple-600", darkColor: "from-purple-600 to-purple-700", label: "Backend" },
  frontend: { color: "from-blue-500 to-blue-600", darkColor: "from-blue-600 to-blue-700", label: "Frontend" },
  database: { color: "from-green-500 to-green-600", darkColor: "from-green-600 to-green-700", label: "Database" },
  cloud: { color: "from-orange-500 to-orange-600", darkColor: "from-orange-600 to-orange-700", label: "Cloud" },
  tools: { color: "from-pink-500 to-pink-600", darkColor: "from-pink-600 to-pink-700", label: "Tools" },
  other: { color: "from-indigo-500 to-indigo-600", darkColor: "from-indigo-600 to-indigo-700", label: "Other" },
};

// Auto-categorize technologies
const categorizeTech = (tech) => {
  const lower = tech.toLowerCase();
  if (lower.includes("node") || lower.includes("express") || lower.includes("api") || lower.includes("serverless")) {
    return "backend";
  }
  if (lower.includes("react") || lower.includes("javascript") || lower.includes("typescript") || lower.includes("frontend")) {
    return "frontend";
  }
  if (lower.includes("mysql") || lower.includes("mongo") || lower.includes("database") || lower.includes("db")) {
    return "database";
  }
  if (lower.includes("aws") || lower.includes("cloud") || lower.includes("docker") || lower.includes("ci/cd")) {
    return "cloud";
  }
  if (lower.includes("git") || lower.includes("npm") || lower.includes("yarn")) {
    return "tools";
  }
  return "other";
};

// Skill level based on tech name (you can customize this)
const getSkillLevel = (tech) => {
  const lower = tech.toLowerCase();
  const expert = ["node.js", "express", "javascript", "typescript", "aws", "mysql", "mongodb"];
  const advanced = ["docker", "rest", "serverless", "ci/cd"];
  
  if (expert.some(e => lower.includes(e))) return { level: "Expert", percentage: 95, emoji: "🔥" };
  if (advanced.some(e => lower.includes(e))) return { level: "Advanced", percentage: 85, emoji: "⚡" };
  return { level: "Proficient", percentage: 75, emoji: "✨" };
};

function TechStackCloud({ technologies = [] }) {
  const [hoveredTech, setHoveredTech] = useState(null);
  const [selectedTech, setSelectedTech] = useState(null);
  const [mounted, setMounted] = useState(false);
  const [filter, setFilter] = useState("all");
  const containerRef = useRef(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Filter technologies
  const filteredTechs = technologies.filter(tech => {
    const matchesFilter = filter === "all" || categorizeTech(tech) === filter;
    return matchesFilter;
  });

  // Get unique categories from technologies
  const availableCategories = ["all", ...new Set(technologies.map(categorizeTech))];

  // Generate positions in a circular cloud pattern
  const getPosition = (index, total) => {
    const angle = (index / total) * 2 * Math.PI;
    const radius = 100 + (index % 4) * 25;
    return {
      x: Math.cos(angle) * radius,
      y: Math.sin(angle) * radius,
    };
  };

  if (technologies.length === 0) return null;

  return (
    <div className="relative w-full">
      {/* Filter Controls */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-2 justify-center">
          {availableCategories.map((cat) => {
            const category = techCategories[cat] || { label: "All", color: "from-gray-500 to-gray-600", darkColor: "from-gray-600 to-gray-700" };
            return (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${
                  filter === cat
                    ? `bg-gradient-to-r ${category.color} dark:bg-gradient-to-r ${category.darkColor} text-white shadow-lg scale-105`
                    : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
                }`}
              >
                {cat === "all" ? "All" : category.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Tech Stack Visualization */}
      <div className="relative w-full h-96 flex items-center justify-center overflow-hidden">
        <div
          ref={containerRef}
          className="relative w-full h-full flex items-center justify-center"
        >
          {filteredTechs.map((tech, index) => {
            const position = getPosition(index, filteredTechs.length);
            const isHovered = hoveredTech === index;
            const isSelected = selectedTech === index;
            const category = categorizeTech(tech);
            const categoryInfo = techCategories[category];
            const skillInfo = getSkillLevel(tech);

            return (
              <div
                key={index}
                className="absolute transition-all duration-700 ease-out"
                style={{
                  transform: mounted
                    ? `translate(${position.x}px, ${position.y}px)`
                    : "translate(0, 0)",
                  opacity: mounted ? 1 : 0,
                  transitionDelay: `${index * 50}ms`,
                  zIndex: isSelected ? 100 : isHovered ? 50 : 10,
                }}
                onMouseEnter={() => setHoveredTech(index)}
                onMouseLeave={() => setHoveredTech(null)}
                onClick={() => setSelectedTech(isSelected ? null : index)}
              >
                <div
                  className={`
                    px-4 py-2 rounded-full 
                    bg-gradient-to-r ${categoryInfo.color} 
                    dark:bg-gradient-to-r ${categoryInfo.darkColor}
                    text-white font-semibold text-sm md:text-base
                    shadow-lg cursor-pointer
                    transition-all duration-300
                    ${isSelected 
                      ? "scale-150 shadow-2xl ring-4 ring-blue-300 dark:ring-blue-500" 
                      : isHovered 
                        ? "scale-125 shadow-2xl ring-2 ring-blue-300 dark:ring-blue-500 rotate-3" 
                        : "scale-100 hover:scale-110"
                    }
                    backdrop-blur-sm
                    hover:brightness-110
                  `}
                >
                  {tech}
                </div>

                {/* Tooltip on hover */}
                {isHovered && !isSelected && (
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-3 py-2 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 rounded-lg text-xs font-medium whitespace-nowrap shadow-xl z-50 animate-fadeIn">
                    <div className="flex items-center gap-2">
                      <span>{skillInfo.emoji}</span>
                      <span>{skillInfo.level}</span>
                    </div>
                    <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900 dark:bg-gray-100 rotate-45"></div>
                  </div>
                )}

                {/* Detailed Info Card on Click */}
                {isSelected && (
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 w-64 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-2xl z-50 border border-gray-200 dark:border-gray-700 animate-fadeIn">
                    <div className="text-center mb-3">
                      <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-1">{tech}</h3>
                      <span className={`text-xs px-2 py-1 rounded-full bg-gradient-to-r ${categoryInfo.color} dark:bg-gradient-to-r ${categoryInfo.darkColor} text-white`}>
                        {categoryInfo.label}
                      </span>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600 dark:text-gray-400">Proficiency:</span>
                        <span className="font-semibold text-gray-900 dark:text-white">
                          {skillInfo.emoji} {skillInfo.level}
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r ${categoryInfo.color} dark:bg-gradient-to-r ${categoryInfo.darkColor} rounded-full transition-all duration-1000`}
                          style={{ width: `${skillInfo.percentage}%` }}
                        />
                      </div>
                    </div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedTech(null);
                      }}
                      className="mt-3 w-full px-3 py-1.5 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                    >
                      Close
                    </button>
                  </div>
                )}
              </div>
            );
          })}
          
          {/* Center glow effect with animation */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-32 h-32 rounded-full bg-blue-400/20 dark:bg-blue-500/20 blur-3xl animate-pulse" />
            {selectedTech !== null && (
              <div className="absolute w-48 h-48 rounded-full bg-blue-400/10 dark:bg-blue-500/10 blur-2xl animate-ping" />
            )}
          </div>
        </div>
      </div>

      {/* Stats Footer */}
      <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-gray-600 dark:text-gray-400">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-gray-900 dark:text-white">{filteredTechs.length}</span>
          <span>Technologies</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-semibold text-gray-900 dark:text-white">{availableCategories.length - 1}</span>
          <span>Categories</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-semibold text-gray-900 dark:text-white">
            {filteredTechs.filter(t => getSkillLevel(t).level === "Expert").length}
          </span>
          <span>Expert Level</span>
        </div>
      </div>
    </div>
  );
}

export default TechStackCloud;
