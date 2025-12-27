import { useEffect, useRef } from 'react';
import gsap from 'gsap';

function HomeLoader() {
  const barRef = useRef(null);
  const textRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Initial State
      gsap.set(containerRef.current, { opacity: 1 });

      // Progress Bar Animation
      tl.to(barRef.current, {
        width: "100%",
        duration: 2,
        ease: "expo.inOut",
        stagger: {
          amount: 0.5
        }
      })
        .to(textRef.current, {
          text: "ACCESS GRANTED",
          duration: 0.5,
          delay: -0.5,
          color: "#FF1F1F"
        })
        .to(containerRef.current, {
          opacity: 0,
          duration: 0.5,
          delay: 0.2
        });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black text-white font-mono">
      <div className="w-64 mb-2 flex justify-between text-xs text-red opacity-70">
        <span>SYS.BOOT</span>
        <span>V.1.0.4</span>
      </div>

      {/* Glitchy Text */}
      <div ref={textRef} className="mb-6 text-xl tracking-[0.2em] font-bold text-red animate-pulse">
        INITIALIZING...
      </div>

      {/* Progress Bar */}
      <div className="w-64 h-2 bg-gray-900 rounded-sm overflow-hidden border border-red/30 relative">
        <div ref={barRef} className="h-full bg-red w-0 shadow-[0_0_15px_rgba(255,31,31,0.6)] relative">
          <div className="absolute right-0 top-0 bottom-0 w-[2px] bg-white animate-ping"></div>
        </div>
      </div>

      <div className="mt-4 text-[10px] text-gray-500 font-code">
        Loading Assets // <span className="text-red">Encrypted</span>
      </div>
    </div>
  );
}

export default HomeLoader;

