import { useEffect, useRef, useState } from "react";

function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const targetRef = useRef(0);
  const currentRef = useRef(0);
  const rafRef = useRef(null);

  useEffect(() => {
    const updateScrollProgress = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollableHeight = documentHeight - windowHeight;
      const progress = (scrollTop / scrollableHeight) * 100;
      targetRef.current = Math.min(progress, 100);
      if (!rafRef.current) {
        rafRef.current = requestAnimationFrame(animateProgress);
      }
    };

    const animateProgress = () => {
      const delta = targetRef.current - currentRef.current;
      // Ease toward the target to avoid jagged jumps
      currentRef.current += delta * 0.15;
      if (Math.abs(delta) < 0.1) {
        currentRef.current = targetRef.current;
      }
      setScrollProgress(currentRef.current);

      if (Math.abs(delta) >= 0.1) {
        rafRef.current = requestAnimationFrame(animateProgress);
      } else {
        rafRef.current = null;
      }
    };

    window.addEventListener("scroll", updateScrollProgress, { passive: true });
    updateScrollProgress(); // Initial calculation

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      window.removeEventListener("scroll", updateScrollProgress);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-1 bg-gray-200 dark:bg-gray-700 z-50">
      <div
        className="h-full scroll-progress-animated transition-all duration-150 ease-out shadow-lg"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
}

export default ScrollProgress;
