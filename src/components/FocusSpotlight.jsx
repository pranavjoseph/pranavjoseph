import { useEffect, useRef } from "react";

function FocusSpotlight() {
  const spotlightRef = useRef(null);

  useEffect(() => {
    const spotlight = spotlightRef.current;
    if (!spotlight) return;

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      spotlight.style.background = `radial-gradient(circle 600px at ${clientX}px ${clientY}px, rgba(59, 130, 246, 0.1), transparent 70%)`;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={spotlightRef}
      className="fixed inset-0 pointer-events-none -z-10 transition-opacity duration-300"
      aria-hidden="true"
    />
  );
}

export default FocusSpotlight;



