import { useEffect, useRef, useState } from "react";

function GlowEffect({ children, intensity = "medium" }) {
  const glowRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (glowRef.current) {
        const rect = glowRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    const element = glowRef.current;
    if (element) {
      element.addEventListener("mousemove", handleMouseMove);
      return () => element.removeEventListener("mousemove", handleMouseMove);
    }
  }, []);

  const intensityClasses = {
    low: "opacity-20",
    medium: "opacity-40",
    high: "opacity-60",
  };

  return (
    <div ref={glowRef} className="relative">
      {children}
      <div
        className={`absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 blur-xl ${intensityClasses[intensity]} pointer-events-none transition-opacity duration-300`}
        style={{
          background: `radial-gradient(circle 200px at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.4), transparent 70%)`,
        }}
      />
    </div>
  );
}

export default GlowEffect;

