import { Link } from "react-router-dom";
import { lazy, Suspense, useState, useEffect, useRef } from "react";
import HomeLoader from "../../components/HomeLoader";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown, FaReact, FaNodeJs, FaDatabase, FaCloud } from "react-icons/fa";
import ProcessFlow from "../../components/ProcessFlow";

gsap.registerPlugin(ScrollTrigger);

const ThreeBackground = lazy(() => import("../../components/ThreeBackground"));

function HomePage() {
  const [isLoading, setIsLoading] = useState(true);
  const [showBackground, setShowBackground] = useState(false);
  const heroRef = useRef(null);
  const heroNameRef = useRef(null);
  const aboutRef = useRef(null);
  const workRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => setIsLoading(false), 500);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }
    return () => window.removeEventListener("load", handleLoad);
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) return;

    const timer = setTimeout(() => setShowBackground(true), 400);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      const ctx = gsap.context(() => {
        // Hero name letter animation
        const letters = heroNameRef.current?.querySelectorAll(".hero-letter");
        if (letters && letters.length) {
          gsap.from(letters, {
            opacity: 0,
            y: 30,
            duration: 0.9,
            stagger: 0.05,
            ease: "power3.out",
          });

          gsap.to(letters, {
            keyframes: {
              "0%": { textShadow: "0 0 0px rgba(255,255,255,0.2)" },
              "50%": { textShadow: "0 0 20px rgba(255,31,31,0.4), 0 0 35px rgba(255,255,255,0.3)" },
              "100%": { textShadow: "0 0 0px rgba(255,255,255,0.2)" },
            },
            duration: 3,
            repeat: -1,
            yoyo: true,
            stagger: { each: 0.08, from: "center" },
            ease: "sine.inOut",
          });
        }

        // Hero block fade/slide
        gsap.from(heroRef.current.querySelector(".hero-name"), {
          y: 100,
          opacity: 0,
          duration: 1.2,
          ease: "power4.out",
        });

        gsap.from(heroRef.current.querySelector(".hero-subtitle"), {
          y: 50,
          opacity: 0,
          duration: 1,
          delay: 0.3,
          ease: "power3.out",
        });

        gsap.from(heroRef.current.querySelector(".hero-description"), {
          y: 30,
          opacity: 0,
          duration: 1,
          delay: 0.6,
          ease: "power3.out",
        });

        gsap.from(heroRef.current.querySelector(".hero-cta"), {
          y: 20,
          opacity: 0,
          duration: 0.8,
          delay: 0.9,
          ease: "power2.out",
        });

        // Scroll animations for sections
        gsap.from(aboutRef.current.querySelectorAll(".about-card"), {
          scrollTrigger: {
            trigger: aboutRef.current,
            start: "top 70%",
            toggleActions: "play none none none",
          },
          y: 40,
          opacity: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          clearProps: "all",
        });

        gsap.from(workRef.current.querySelectorAll(".work-item"), {
          scrollTrigger: {
            trigger: workRef.current,
            start: "top 70%",
            toggleActions: "play none none none",
          },
          y: 40,
          opacity: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: "power2.out",
          clearProps: "all",
        });
      }, heroRef);

      return () => ctx.revert();
    }
  }, [isLoading]);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative w-full min-h-screen bg-brand-black text-white font-space overflow-x-hidden">
      {/* SEO Tags */}
      <title>Freelance Web Developer in London, Southampton & Woolston | PHP, WordPress, React & Node.js</title>
      <meta name="description" content="Pranav Joseph is a freelance full-stack developer near London, Southampton, and Woolston. Expert in PHP, WordPress, React, Node.js & SEO consulting." />
      <meta name="keywords" content="freelance web developer London, Southampton, Woolston, SEO freelance, WordPress freelancer, PHP developer, React developer, Node.js freelancer" />

      {isLoading && <HomeLoader />}

      {/* Background Layer */}
      {showBackground && (
        <div className="fixed inset-0 z-0">
          <Suspense fallback={null}>
            <ThreeBackground forceDark={true} />
          </Suspense>
        </div>
      )}

      {/* Content Wrapper */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section ref={heroRef} className="relative z-10 min-h-screen flex flex-col justify-center items-center px-6 py-20 pb-0">
          <div className="max-w-5xl w-full text-center">
            <h1 ref={heroNameRef} className="hero-name text-6xl md:text-8xl lg:text-9xl font-black mb-6 leading-tight">
              <span className="inline-block">
                {"PRANAV".split("").map((char, idx) => (
                  <span key={`first-${idx}`} className="hero-letter" style={{ "--i": idx }}>
                    {char}
                  </span>
                ))}
              </span>
              <span className="inline-block hero-gap">&nbsp;</span>
              <span className="inline-block">
                {"JOSEPH".split("").map((char, idx) => (
                  <span key={`last-${idx}`} className="hero-letter text-red" style={{ "--i": idx + 6 }}>
                    {char}
                  </span>
                ))}
              </span>
            </h1>

            <p className="hero-subtitle text-xl md:text-3xl text-gray-400 mb-8 tracking-wide">Full Stack Developer & Creative Technologist</p>

            <p className="hero-description text-base md:text-lg text-gray-500 max-w-2xl mx-auto mb-12 leading-relaxed">Building scalable web applications with modern technologies. Specializing in PHP, Node.js, React and cloud infrastructure.</p>

            <div className="hero-cta flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button onClick={scrollToContact} className="px-8 py-4 bg-brand-red text-white rounded-lg font-semibold hover:bg-red-600 transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(255,31,31,0.5)]">
                Get In Touch
              </button>
            </div>

            <div className="mt-16 animate-bounce">
              <FaArrowDown className="mx-auto text-gray-600 text-2xl" />
            </div>
          </div>
        </section>

        {/* About/Services Section */}
        <section ref={aboutRef} className="relative z-10 py-32 px-6 pb-0 bg-gradient-to-b from-transparent via-white/5 to-transparent">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold mb-16 text-center text-white">What I Do</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="about-card glass-panel p-8 rounded-2xl hover:border-brand-red transition-all group">
                <FaReact className="text-5xl text-brand-red mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold mb-3">Frontend</h3>
                <p className="text-gray-400">React, Next.js, and modern UI frameworks for beautiful, responsive interfaces.</p>
              </div>

              <div className="about-card glass-panel p-8 rounded-2xl hover:border-brand-red transition-all group">
                <FaNodeJs className="text-5xl text-brand-red mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold mb-3">Backend</h3>
                <p className="text-gray-400">Node.js, Express, and RESTful APIs for robust server-side solutions.</p>
              </div>

              <div className="about-card glass-panel p-8 rounded-2xl hover:border-brand-red transition-all group">
                <FaDatabase className="text-5xl text-brand-red mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold mb-3">Database</h3>
                <p className="text-gray-400">MongoDB, PostgreSQL, and database design for efficient data management.</p>
              </div>

              <div className="about-card glass-panel p-8 rounded-2xl hover:border-brand-red transition-all group">
                <FaCloud className="text-5xl text-brand-red mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold mb-3">Cloud</h3>
                <p className="text-gray-400">AWS, Docker, and cloud deployment for scalable infrastructure.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Work Section */}
        <section ref={workRef} className="relative z-10 py-32 px-6 pb-0 bg-gradient-to-b from-transparent via-brand-red/5 to-transparent">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold mb-16 text-center text-white">Featured Work</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="work-item glass-panel p-8 rounded-2xl hover:border-brand-red transition-all group cursor-pointer">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-brand-red transition-colors">Web Applications</h3>
                <div className="bg-gradient-to-br from-brand-red/10 via-brand-black to-transparent rounded-lg mt-6 mb-6 p-1">
                  <ProcessFlow
                    steps={[
                      { label: "Genuine Idea", color: "red" },
                      { label: "Market Research", color: "orange" },
                      { label: "Define Functionality", color: "blue" },
                      { label: "Design Sketches", color: "purple" },
                      { label: "Wireframes & Prototypes", color: "blue" },
                      { label: "Validate", color: "green" },
                      { label: "Choose Technology", color: "cyan" },
                      { label: "Host on Web", color: "orange" },
                      { label: "Deploy", color: "red" },
                    ]}
                  />
                </div>
                <p className="text-gray-400 mb-4">Full-stack applications built with React, Node.js, and modern frameworks.</p>
                <Link to="/fullstack-developer" className="text-brand-red hover:underline">
                  View Projects →
                </Link>
              </div>

              <div className="work-item glass-panel p-8 rounded-2xl hover:border-brand-red transition-all group cursor-pointer">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-brand-red transition-colors">API Development</h3>
                <div className="bg-gradient-to-br from-brand-red/10 via-brand-black to-transparent rounded-lg mt-6 mb-6 p-1">
                  <ProcessFlow
                    steps={[
                      { label: "Planning", color: "red" },
                      { label: "Design", color: "orange" },
                      { label: "Implementation", color: "blue" },
                      { label: "Testing", color: "purple" },
                      { label: "Deployment", color: "orange" },
                      { label: "Maintenance", color: "blue" },
                    ]}
                  />
                </div>
                <p className="text-gray-400 mb-4">RESTful APIs and backend services for high-performance applications.</p>
                <Link to="/nodejs-developer" className="text-brand-red hover:underline">
                  View Services →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section ref={contactRef} className="relative z-10 py-32 px-6 bg-gradient-to-b from-transparent to-black">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white">Let's Work Together</h2>

            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">Have a project in mind? Let's discuss how we can bring your ideas to life.</p>

            <div className="flex flex-wrap justify-center gap-6 mb-12">
              <a href="https://github.com/pranavjoseph" target="_blank" rel="noopener noreferrer" className="p-4 glass-panel rounded-full hover:border-brand-red hover:scale-110 transition-all">
                <FaGithub className="text-3xl" />
              </a>
              <a href="https://linkedin.com/in/pranavjoseph" target="_blank" rel="noopener noreferrer" className="p-4 glass-panel rounded-full hover:border-brand-red hover:scale-110 transition-all">
                <FaLinkedin className="text-3xl" />
              </a>
              <a href="mailto:hello@pranavjoseph.com" className="p-4 glass-panel rounded-full hover:border-brand-red hover:scale-110 transition-all">
                <FaEnvelope className="text-3xl" />
              </a>
            </div>

            <Link to="/contact" className="inline-block px-12 py-5 bg-brand-red text-white rounded-lg font-semibold text-lg hover:bg-red-600 transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(255,31,31,0.6)]">
              Send Message
            </Link>
          </div>
        </section>

        {/* Footer */}
        <footer className="relative z-10 py-8 px-6 border-t border-white/10">
          <div className="max-w-6xl mx-auto text-center text-gray-500 text-sm">
            <p>© 2025 Pranav Joseph. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default HomePage;
