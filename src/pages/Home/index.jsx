import { Link } from "react-router-dom";
import { useTheme } from "../../components/ThemeProvider";
import { lazy, Suspense } from "react";

// Lazy load BackgroundCanvas for better initial performance
const BackgroundCanvas = lazy(() => import("../../components/BackgroundCanvas"));

function HomePage() {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      {/* SEO Tags */}
      <title>Freelance Web Developer in London, Southampton & Woolston | PHP, WordPress, React & Node.js</title>
      <meta name="description" content="Pranav Joseph is a freelance full-stack developer near London, Southampton, and Woolston. Expert in PHP, WordPress, React, Node.js & SEO consulting." />
      <meta name="keywords" content="freelance web developer London, Southampton, Woolston, SEO freelance, WordPress freelancer, PHP developer, React developer, Node.js freelancer" />

      {/* Dark Mode Toggle Button - Fixed top right */}
      <button onClick={toggleTheme} className="fixed top-6 right-6 z-50 p-3 bg-gray-200 rounded-full dark:bg-gray-900 shadow-lg hover:scale-110 transition-transform duration-200 text-2xl" aria-label="Toggle dark mode">
        {theme === "light" ? "🌙" : "☀️"}
      </button>

      {/* Main Content */}
      <header className="relative flex flex-col justify-center items-center h-screen text-center transition-colors duration-300">
        <Suspense fallback={null}>
          <BackgroundCanvas />
        </Suspense>
        <Link to="/about">
          <h1 className="text-5xl font-extrabold text-blue-800 dark:text-blue-200 mb-4 cursor-pointer">
            Hello, I'm Pranav Joseph{" "}
            <span role="img" aria-label="waving hand" className="inline-block animate-wave origin-[70%_70%]">
              👋
            </span>
          </h1>
        </Link>
        {/* <Link to="/contact" > */}
        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 text-xl">
          <Link 
            to="/nodejs-developer" 
            className="px-4 py-2 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 font-semibold hover:bg-blue-200 dark:hover:bg-blue-700/50 hover:scale-105 transition-all duration-200 shadow-sm hover:shadow-md"
          >
            💻 Software Developer
          </Link>
          <span className="text-gray-400 dark:text-gray-500">|</span>
          <Link 
            to="/about" 
            className="px-4 py-2 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 font-semibold hover:bg-blue-200 dark:hover:bg-blue-700/50 hover:scale-105 transition-all duration-200 shadow-sm hover:shadow-md"
          >
            ⚡ Tech Enthusiast
          </Link>
          <span className="text-gray-400 dark:text-gray-500">|</span>
          <Link 
            to="/fullstack-developer" 
            className="px-4 py-2 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 font-semibold hover:bg-blue-200 dark:hover:bg-blue-700/50 hover:scale-105 transition-all duration-200 shadow-sm hover:shadow-md"
          >
            🛠️ Full-Stack Developer
          </Link>
          <span className="text-gray-400 dark:text-gray-500">|</span>
          <Link 
            to="/about" 
            className="px-4 py-2 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 font-semibold hover:bg-blue-200 dark:hover:bg-blue-700/50 hover:scale-105 transition-all duration-200 shadow-sm hover:shadow-md"
          >
            <span className="animate-pulse">❤️</span> Dad 
          </Link>
        </div>
        {/* </Link> */}

        {/* 🔥 Hidden SEO Content (Google sees it, users don't) */}
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
    </>
  );
}

export default HomePage;
