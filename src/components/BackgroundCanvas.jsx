import { useEffect, useRef } from "react";
import { useTheme } from "./ThemeProvider"; // adjust path if needed

function BackgroundCanvas() {
  const canvasRef = useRef(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // pick particle colors based on theme
    const palette =
      theme === "dark"
        ? ["#00FFFF", "#8A2BE2", "#87CEFA"] // cool glowing (cyan, violet, skyblue)
        : ["#FFD700", "#FF69B4", "#FFA500"]; // warm glowing (gold, pink, orange)

    // Reduce particles for better performance
    const particleCount = window.innerWidth < 768 ? 30 : 50;
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 2 + 1,
      dx: (Math.random() - 0.5) * 1.5,
      dy: (Math.random() - 0.5) * 1.5,
      color: palette[Math.floor(Math.random() * palette.length)],
    }));

    let currentColor = theme === "dark" ? "#1f2937" : "#ffffff";
    const targetColor = theme === "dark" ? "#1f2937" : "#ffffff";

    // helper: blend hex colors
    const lerpColor = (a, b, amount) => {
      const ah = parseInt(a.replace("#", ""), 16),
        ar = ah >> 16,
        ag = (ah >> 8) & 0xff,
        ab = ah & 0xff,
        bh = parseInt(b.replace("#", ""), 16),
        br = bh >> 16,
        bg = (bh >> 8) & 0xff,
        bb = bh & 0xff,
        rr = ar + amount * (br - ar),
        rg = ag + amount * (bg - ag),
        rb = ab + amount * (bb - ab);

      return "#" + ((1 << 24) + (Math.round(rr) << 16) + (Math.round(rg) << 8) + Math.round(rb)).toString(16).slice(1);
    };

    let lastTime = 0;
    const targetFPS = 30; // Reduce to 30 FPS for better performance
    const frameInterval = 1000 / targetFPS;

    const draw = (currentTime) => {
      // Throttle animation to target FPS
      if (currentTime - lastTime >= frameInterval) {
        // smoothly transition background
        currentColor = lerpColor(currentColor, targetColor, 0.02);
        ctx.fillStyle = currentColor;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Use willReadFrequently optimization
        ctx.save();
        particles.forEach((p) => {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          // Reduce shadow blur for better performance
          ctx.shadowBlur = 8;
          ctx.shadowColor = p.color;
          ctx.fill();

          p.x += p.dx;
          p.y += p.dy;

          if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
          if (p.y < 0 || p.y > canvas.height) p.dy *= -1;

          if (Math.random() < 0.01) {
            p.dx += (Math.random() - 0.5) * 0.5;
            p.dy += (Math.random() - 0.5) * 0.5;
          }
        });
        ctx.restore();
        ctx.shadowBlur = 0;

        lastTime = currentTime;
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    animationFrameId = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-10" style={{ willChange: 'transform' }} />;
}

export default BackgroundCanvas;
