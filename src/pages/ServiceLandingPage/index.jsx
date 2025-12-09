import { Link, useLocation } from "react-router-dom";
import Layout from "../../components/Layout";
import AnimatedCounter from "../../components/AnimatedCounter";
import TechStackCloud from "../../components/TechStackCloud";
import ScrollProgress from "../../components/ScrollProgress";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function JsonLd({ jsonLd }) {
  useLayoutEffect(() => {
    // Remove old one (prevents duplicates)
    const old = document.getElementById("jsonld-script");
    if (old) old.remove();

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "jsonld-script";
    script.innerHTML = JSON.stringify(jsonLd);
    document.head.appendChild(script);

    // Cleanup on unmount
    return () => {
      const existing = document.getElementById("jsonld-script");
      if (existing) existing.remove();
    };
  }, [jsonLd]);

  return null;
}

function ServiceLandingPage({ service, title, description, keywords, skills, projects, techStack = [] }) {
  const location = useLocation();
  const mainRef = useRef(null);

  const services = [
    { path: "/nodejs-developer", label: "Node.js", icon: "⚙️" },
    { path: "/react-developer", label: "React", icon: "⚛️" },
    { path: "/php-developer", label: "PHP", icon: "🐘" },
    { path: "/laravel-developer", label: "Laravel", icon: "🔧" },
    { path: "/wordpress-developer", label: "WordPress", icon: "📝" },
    { path: "/fullstack-developer", label: "Full-Stack", icon: "🛠️" },
  ];

  // Schema.org Structured Data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: `Pranav Joseph - ${service}`,
    image: "https://pranavjoseph.com/preview.png", // Replace with actual absolute URL
    description: description,
    url: `https://pranavjoseph.com${location.pathname}`,
    telephone: "+44 7979 652 283",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Southampton",
      addressRegion: "Hampshire",
      addressCountry: "UK",
    },
    priceRange: "$$$",
    founder: {
      "@type": "Person",
      name: "Pranav Joseph",
      jobTitle: "Freelance Web Developer",
    },
    sameAs: ["https://www.linkedin.com/in/pranav-joseph/", "https://github.com/pranavjoseph"],
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Section Animation
      const tl = gsap.timeline();
      tl.fromTo(".hero-content > *", { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: "power3.out" });

      // Stats Section Animation
      gsap.utils.toArray(".stats-card").forEach((card, i) => {
        gsap.fromTo(
          card,
          { y: 50, opacity: 0 },
          {
            scrollTrigger: {
              trigger: ".stats-section",
              start: "top 80%",
            },
            y: 0,
            opacity: 1,
            duration: 0.6,
            delay: i * 0.2,
            ease: "back.out(1.7)",
          }
        );
      });

      // Tech Stack Animation
      if (document.querySelector(".tech-stack-section")) {
        gsap.fromTo(
          ".tech-stack-container",
          { y: 30, opacity: 0 },
          {
            scrollTrigger: {
              trigger: ".tech-stack-section",
              start: "top 75%",
            },
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
          }
        );
      }

      // Skills / Why Hire Me Animation
      gsap.utils.toArray(".skill-item").forEach((item, i) => {
        gsap.fromTo(
          item,
          { x: -50, opacity: 0 },
          {
            scrollTrigger: {
              trigger: ".skills-section",
              start: "top 75%",
            },
            x: 0,
            opacity: 1,
            duration: 0.5,
            delay: i * 0.1,
            ease: "power2.out",
          }
        );
      });

      // Projects Animation
      gsap.utils.toArray(".project-card").forEach((card, i) => {
        gsap.fromTo(
          card,
          { y: 50, opacity: 0 },
          {
            scrollTrigger: {
              trigger: ".projects-section",
              start: "top 75%",
            },
            y: 0,
            opacity: 1,
            duration: 0.6,
            delay: i * 0.2,
            ease: "power2.out",
          }
        );
      });

      // CTA Animation
      gsap.fromTo(
        ".cta-content",
        { scale: 0.9, opacity: 0 },
        {
          scrollTrigger: {
            trigger: ".cta-section",
            start: "top 80%",
          },
          scale: 1,
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
        }
      );
    }, mainRef);

    return () => ctx.revert();
  }, [location.pathname]); // Re-run when location changes (service page switch)

  return (
    <Layout showHomeLink={false}>
      {/* SEO Tags with Helmet */}
      <title>{`${title} | Pranav Joseph`}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={`https://pranavjoseph.com${location.pathname}`} />
      <JsonLd jsonLd={jsonLd} />

      <ScrollProgress />
      <div ref={mainRef} className="min-h-screen text-gray-900 dark:text-white transition-colors duration-300">


        {/* Hero Section - Added padding top for fixed nav */}
        <section className="hero-content text-center pt-32 pb-12 md:pt-40 md:pb-20 px-6 max-w-5xl mx-auto">
          <div className="inline-block mb-6 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-800 dark:text-blue-200 text-sm font-semibold">Available for Hire</div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600 bg-clip-text text-transparent">Hire a {service}</h1>
          <p className="text-lg md:text-2xl text-gray-700 dark:text-gray-300 mb-10 leading-relaxed max-w-3xl mx-auto">{description}</p>
          <Link to="/contact" className="inline-block px-10 py-4 bg-blue-600 text-white rounded-xl font-semibold shadow-lg hover:bg-blue-700 dark:hover:bg-blue-500 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-lg">
            Let's Work Together 🚀
          </Link>
        </section>

        {/* Animated Statistics Section */}
        <section className="stats-section max-w-6xl mx-auto px-6 py-12 md:py-20 bg-gradient-to-br from-blue-50/50 via-transparent to-blue-50/50 dark:from-blue-900/10 dark:via-transparent dark:to-blue-900/10 rounded-3xl my-12">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900 dark:text-white">By The Numbers 📊</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="stats-card text-center p-6 md:p-8 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-blue-100 dark:border-gray-700">
              <div className="text-6xl mb-4">💼</div>
              <div className="text-5xl md:text-6xl font-extrabold text-blue-600 dark:text-blue-400 mb-2">
                <AnimatedCounter end={7} suffix="+" />
              </div>
              <p className="text-xl font-semibold text-gray-700 dark:text-gray-300">Years Experience</p>
            </div>
            <div className="stats-card text-center p-6 md:p-8 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-blue-100 dark:border-gray-700">
              <div className="text-6xl mb-4">🚀</div>
              <div className="text-5xl md:text-6xl font-extrabold text-blue-600 dark:text-blue-400 mb-2">
                <AnimatedCounter end={50} suffix="+" />
              </div>
              <p className="text-xl font-semibold text-gray-700 dark:text-gray-300">Projects Delivered</p>
            </div>
            <div className="stats-card text-center p-6 md:p-8 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-blue-100 dark:border-gray-700">
              <div className="text-6xl mb-4">⭐</div>
              <div className="text-5xl md:text-6xl font-extrabold text-blue-600 dark:text-blue-400 mb-2">
                <AnimatedCounter end={100} suffix="%" />
              </div>
              <p className="text-xl font-semibold text-gray-700 dark:text-gray-300">Client Satisfaction</p>
            </div>
          </div>
        </section>

        {/* Interactive Tech Stack Cloud */}
        {techStack && techStack.length > 0 && (
          <section className="tech-stack-section max-w-6xl mx-auto px-6 py-12 md:py-20">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900 dark:text-white">Tech Stack Mastery 🛠️</h2>
            <div className="tech-stack-container bg-gradient-to-br from-white to-blue-50 dark:from-gray-800 dark:to-gray-900 rounded-3xl p-8 shadow-2xl border border-blue-100 dark:border-gray-700">
              <TechStackCloud technologies={techStack} />
              <p className="text-center mt-8 text-gray-600 dark:text-gray-400 italic text-sm">
                💡 <strong>Tip:</strong> Hover to see skill levels • Click for detailed info • Use category filters to explore
              </p>
            </div>
          </section>
        )}

        {/* Why Hire Me - Clean & Simple */}
        <section className="skills-section max-w-4xl mx-auto px-6 py-12 md:py-20">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900 dark:text-white">Why Work With Me?</h2>
          <div className="space-y-3">
            {skills.map((skill, i) => {
              // Extract emoji and text from skill string
              const skillParts = skill.split(" ");
              const emoji = skillParts[0];
              const skillText = skillParts.slice(1).join(" ");

              return (
                <div key={i} className="skill-item flex items-center gap-3 md:gap-5 p-4 md:p-6 rounded-lg bg-gradient-to-r from-blue-50/50 to-transparent dark:from-blue-900/20 dark:to-transparent border-l-4 border-blue-600 dark:border-blue-500 hover:shadow-sm transition-all duration-200">
                  <span className="text-3xl flex-shrink-0">{emoji}</span>
                  <p className="text-gray-800 dark:text-gray-200 leading-relaxed text-base font-medium">{skillText}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Projects / Case Studies */}
        {projects && projects.length > 0 && (
          <section className="projects-section max-w-6xl mx-auto px-6 py-12 md:py-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-gray-900 dark:text-white">Recent Projects 💼</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((proj, i) => (
                <div key={i} className="project-card group p-8 bg-gradient-to-br from-white to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-blue-100 dark:border-gray-600">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">{proj.name}</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">{proj.description}</p>
                  {proj.link && (
                    <a href={proj.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-semibold transition-colors">
                      View Project <span className="ml-2">→</span>
                    </a>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Final CTA */}
        <section className="cta-section text-center py-12 md:py-20 px-6 max-w-4xl mx-auto">
          <div className="cta-content">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">Ready to start your project?</h2>
            <p className="mb-10 text-xl text-gray-600 dark:text-gray-400">I'm available for freelance contracts and collaborations.</p>
            <Link to="/contact" className="inline-block px-10 py-4 bg-blue-600 text-white rounded-lg font-semibold shadow-md hover:bg-blue-700 dark:hover:bg-blue-500 hover:shadow-lg transition-all duration-200 text-lg">
              Contact Me Today
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  );
}

export default ServiceLandingPage;
