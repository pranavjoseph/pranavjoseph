import { Link } from "react-router-dom";
import { useTheme } from "../../components/ThemeProvider";
import { lazy, Suspense, useState, useEffect, useRef } from "react";
import HomeLoader from "../../components/HomeLoader";
import gsap from "gsap";

// Lazy load ThreeBackground
const ThreeBackground = lazy(() => import("../../components/ThreeBackground"));

function HomePage() {
  const { theme, toggleTheme } = useTheme();
  const [isLoading, setIsLoading] = useState(true);

  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 300);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  useEffect(() => {
    if (!isLoading) {
      const ctx = gsap.context(() => {
        // Title animation
        gsap.from(titleRef.current, {
          y: 50,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          delay: 0.2
        });

        // Links animation
        gsap.from(linksRef.current.children, {
          y: 20,
          opacity: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "back.out(1.7)",
          delay: 0.6
        });
      }, containerRef);

      return () => ctx.revert();
    }
  }, [isLoading]);

  const handleMouseMove = (e) => {
    const { clientX, clientY, currentTarget } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const x = (clientX - left - width / 2) * 0.3; // Magnetic strength
    const y = (clientY - top - height / 2) * 0.3;

    gsap.to(currentTarget, {
      x: x,
      y: y,
      scale: 1.1,
      duration: 0.3,
      ease: "power2.out"
    });
  };

  const handleMouseLeave = (e) => {
    gsap.to(e.currentTarget, {
      x: 0,
      y: 0,
      scale: 1,
      duration: 0.5,
      ease: "elastic.out(1, 0.3)"
    });
  };

  return (
    <div ref={containerRef}>
      {isLoading && <HomeLoader />}

      {/* SEO Tags */}
      <title>Freelance Web Developer in London, Southampton & Woolston | PHP, WordPress, React & Node.js</title>
      <meta name="description" content="Pranav Joseph is a freelance full-stack developer near London, Southampton, and Woolston. Expert in PHP, WordPress, React, Node.js & SEO consulting." />
      <meta name="keywords" content="freelance web developer London, Southampton, Woolston, SEO freelance, WordPress freelancer, PHP developer, React developer, Node.js freelancer" />

      {/* Dark Mode Toggle Button */}
      <button onClick={toggleTheme} className="fixed top-6 right-6 z-50 p-3 bg-gray-200 rounded-full dark:bg-gray-900 shadow-lg hover:scale-110 transition-transform duration-200 text-2xl" aria-label="Toggle dark mode">
        {theme === "light" ? "🌙" : "☀️"}
      </button>

      {/* Main Content */}
      <header className="relative flex flex-col justify-center items-center min-h-screen py-20 text-center transition-colors duration-300">
        <Suspense fallback={null}>
          <ThreeBackground />
        </Suspense>

        <Link to="/about">
          <h1 ref={titleRef} className="text-3xl md:text-5xl font-extrabold text-blue-800 dark:text-blue-200 mb-6 cursor-pointer px-4">
            Hello, I'm Pranav Joseph{" "}
            <span role="img" aria-label="waving hand" className="inline-block animate-wave origin-[70%_70%]">
              👋
            </span>
          </h1>
        </Link>

        <div ref={linksRef} className="flex flex-wrap items-center justify-center gap-3 md:gap-4 text-lg md:text-xl px-4">
          <Link
            to="/nodejs-developer"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="px-4 py-2 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 font-semibold shadow-sm"
          >
            💻 Software Developer
          </Link>
          <span className="text-gray-400 dark:text-gray-500">|</span>
          <Link
            to="/about"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="px-4 py-2 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 font-semibold shadow-sm"
          >
            ⚡ Tech Enthusiast
          </Link>
          <span className="text-gray-400 dark:text-gray-500">|</span>
          <Link
            to="/fullstack-developer"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="px-4 py-2 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 font-semibold shadow-sm"
          >
            🛠️ Full-Stack Developer
          </Link>
          <span className="text-gray-400 dark:text-gray-500">|</span>
          <Link
            to="/about"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="px-4 py-2 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 font-semibold shadow-sm"
          >
            <span className="animate-pulse">❤️</span> Dad
          </Link>
        </div>

        {/* Hidden SEO Content */}
        <div className="sr-only">
          <h2>Freelance Developer near London</h2>
          <p>
            I am <strong>Pranav Joseph</strong>, a <strong>freelance developer near London</strong> providing <strong>SEO freelance</strong> and <strong>web development services</strong>. I help businesses and startups improve their search visibility and grow online.
          </p>
          <p>
            My expertise includes <strong>PHP development, WordPress customization, Node.js applications, and React front-end solutions</strong>. Whether you need a <strong>developer freelancer</strong> to create scalable web apps, optimize your website for SEO, or build an e-commerce store, I can help.
          </p>
          <p>
            Services I offer: full-stack web development, <strong>SEO consulting</strong>, <strong>WordPress website development</strong>, <strong>custom PHP solutions</strong>, <strong>React & Node.js applications</strong>, API integrations, and cloud deployment. I specialize in supporting small businesses and individuals looking for a reliable <strong>freelancer near London</strong>.
          </p>
        </div>
      </header>
    </div>
  );
}

export default HomePage;
