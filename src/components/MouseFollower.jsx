import { useEffect, useRef } from "react";

function MouseFollower() {
  const containerRef = useRef(null);
  const elementsRef = useRef([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Create floating elements
    const elements = [];
    for (let i = 0; i < 20; i++) {
      const element = document.createElement("div");
      element.className = "absolute w-2 h-2 rounded-full bg-blue-400/20 dark:bg-blue-500/20 blur-sm";
      element.style.left = `${Math.random() * 100}%`;
      element.style.top = `${Math.random() * 100}%`;
      container.appendChild(element);
      elements.push(element);
    }
    elementsRef.current = elements;

    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      currentX += (mouseX - currentX) * 0.05;
      currentY += (mouseY - currentY) * 0.05;

      elements.forEach((element, index) => {
        const speed = (index % 3) + 1;
        const x = (currentX - window.innerWidth / 2) * (speed * 0.0001);
        const y = (currentY - window.innerHeight / 2) * (speed * 0.0001);
        
        const rect = element.getBoundingClientRect();
        const elementX = rect.left + rect.width / 2;
        const elementY = rect.top + rect.height / 2;
        
        const deltaX = (mouseX - elementX) * 0.0003;
        const deltaY = (mouseY - elementY) * 0.0003;
        
        element.style.transform = `translate(${x + deltaX}px, ${y + deltaY}px)`;
      });

      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      elements.forEach((el) => el.remove());
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none overflow-hidden -z-10"
      aria-hidden="true"
    />
  );
}

export default MouseFollower;

