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
    const old = document.getElementById("jsonld-script");
    if (old) old.remove();

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "jsonld-script";
    script.innerHTML = JSON.stringify(jsonLd);
    document.head.appendChild(script);

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

  // Schema.org Structured Data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: `Pranav Joseph - ${service}`,
    image: "https://pranavjoseph.com/preview.png",
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

      // Hero Animation - Subtle and Clean
      const tl = gsap.timeline();
      tl.fromTo(".hero-badge", { y: -20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" })
        .fromTo(".hero-title", { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }, "-=0.3")
        .fromTo(".hero-desc", { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" }, "-=0.4")
        .fromTo(".hero-cta", { scale: 0.9, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(1.7)" }, "-=0.2");

      // Stats - Staggered Fade Up
      gsap.fromTo(".stats-item",
        { y: 30, opacity: 0 },
        {
          scrollTrigger: { trigger: ".stats-section", start: "top 85%" },
          y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "power2.out"
        }
      );

      // Tech Stack Scale In
      if (document.querySelector(".tech-stack-section")) {
        gsap.fromTo(".tech-stack-container",
          { scale: 0.95, opacity: 0 },
          {
            scrollTrigger: { trigger: ".tech-stack-section", start: "top 80%" },
            scale: 1, opacity: 1, duration: 0.8, ease: "power2.out"
          }
        );
      }

      // Skills Pills - Staggered Pop
      gsap.fromTo(".skill-pill",
        { scale: 0, opacity: 0 },
        {
          scrollTrigger: { trigger: ".skills-section", start: "top 80%" },
          scale: 1, opacity: 1, duration: 0.4, stagger: 0.05, ease: "back.out(1.5)"
        }
      );

      // Projects - Slide Up
      gsap.fromTo(".project-card",
        { y: 50, opacity: 0 },
        {
          scrollTrigger: { trigger: ".projects-section", start: "top 80%" },
          y: 0, opacity: 1, duration: 0.6, stagger: 0.15, ease: "power2.out"
        }
      );

      // CTA
      gsap.fromTo(".cta-box",
        { y: 40, opacity: 0 },
        {
          scrollTrigger: { trigger: ".cta-section", start: "top 85%" },
          y: 0, opacity: 1, duration: 0.8, ease: "power2.out"
        }
      );

    }, mainRef);

    return () => ctx.revert();
  }, [location.pathname]);

  return (
    <Layout showHomeLink={false}>
      <title>{`${title} | Pranav Joseph`}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={`https://pranavjoseph.com${location.pathname}`} />
      <JsonLd jsonLd={jsonLd} />

      <ScrollProgress />

      <div ref={mainRef} className="bg-gray-50 dark:bg-gray-900 min-h-screen text-gray-900 dark:text-gray-100 transition-colors duration-300 font-sans">

        {/* Compact Hero Section */}
        <section className="relative pt-32 pb-16 px-6 md:px-12 max-w-7xl mx-auto flex flex-col items-center text-center">
          <div className="hero-badge inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-blue-100/80 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-xs font-bold uppercase tracking-wider border border-blue-200 dark:border-blue-800">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
            Available for Hire
          </div>
          <h1 className="hero-title text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight text-gray-900 dark:text-white">
            Hire a <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300">{service}</span>
          </h1>
          <p className="hero-desc text-base md:text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl leading-relaxed">
            {description}
          </p>
          <div className="hero-cta">
            <Link to="/contact" className="inline-flex items-center justify-center px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg shadow-lg hover:shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-0.5">
              Start Your Project
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </Link>
          </div>
        </section>

        {/* Professional Stats Strip - Smaller Boxes */}
        <section className="stats-section px-4 md:px-8 max-w-5xl mx-auto mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Years Exp.", value: 7, suffix: "+" },
              { label: "Projects", value: 50, suffix: "+" },
              { label: "Clients", value: 30, suffix: "+" },
              { label: "Satisfaction", value: 100, suffix: "%" },
            ].map((stat, i) => (
              <div key={i} className="stats-item bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow text-center">
                <div className="text-2xl md:text-3xl font-bold text-blue-600 dark:text-blue-400">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-xs md:text-sm font-medium text-gray-500 dark:text-gray-400 mt-1 uppercase tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Tech Stack - Clean Container */}
        {techStack && techStack.length > 0 && (
          <section className="tech-stack-section px-4 md:px-8 max-w-6xl mx-auto mb-20">
            <div className="tech-stack-container bg-white dark:bg-gray-800/50 rounded-2xl p-6 md:p-8 border border-gray-100 dark:border-gray-700 shadow-sm">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Technical Expertise</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Core technologies and tools</p>
              </div>
              <TechStackCloud technologies={techStack} />
            </div>
          </section>
        )}

        {/* Why Hire Me - Compact Pills/Tags */}
        <section className="skills-section px-4 md:px-8 max-w-4xl mx-auto mb-20">
          <h2 className="text-2xl font-bold text-center mb-8 text-gray-900 dark:text-white">Why Work With Me?</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, i) => {
              // Clean up skill text (remove emojis if they exist in string, assuming format "Emoji Text")
              const emojiMatch = skill.match(/^(\p{Emoji_Presentation}|\p{Extended_Pictographic})\s+(.*)$/u);
              const displayText = emojiMatch ? emojiMatch[2] : skill;
              const displayEmoji = emojiMatch ? emojiMatch[1] : "🔹";

              return (
                <div key={i} className="skill-pill flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-lg shadow-sm hover:border-blue-300 dark:hover:border-blue-700 transition-colors cursor-default">
                  <span className="text-base">{displayEmoji}</span>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{displayText}</span>
                </div>
              );
            })}
          </div>
        </section>

        {/* Projects - Compact & Professional */}
        {projects && projects.length > 0 && (
          <section className="projects-section px-4 md:px-8 max-w-5xl mx-auto mb-20">
            <h2 className="text-2xl font-bold text-center mb-10 text-gray-900 dark:text-white">Featured Work</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {projects.map((proj, i) => (
                <div key={i} className="project-card group relative bg-white dark:bg-gray-800 rounded-lg border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 overflow-hidden">
                  <div className="p-5 flex flex-col h-full">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{proj.name}</h3>
                      {proj.link && (
                        <span className="text-gray-400 group-hover:text-blue-500 transition-colors">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-2 mb-4 flex-grow">{proj.description}</p>

                    {proj.link ? (
                      <a href={proj.link} target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wide hover:underline self-start">
                        View Project
                      </a>
                    ) : (
                      <span className="text-xs font-bold text-gray-400 uppercase tracking-wide cursor-default self-start">Internal Project</span>
                    )}
                  </div>
                  {/* Subtle side accent instead of bottom bar */}
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Final CTA - Professional Box */}
        <section className="cta-section px-4 md:px-8 max-w-3xl mx-auto">
          <div className="cta-box rounded-2xl p-8 md:p-12 text-center text-white shadow-xl relative overflow-hidden ring-1 ring-white/10">
            {/* Decorative blob - subtle and dark */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-3xl rounded-full -translate-y-1/2 translate-x-1/3"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/10 blur-3xl rounded-full translate-y-1/2 -translate-x-1/3"></div>

            <h2 className="relative z-10 text-3xl md:text-4xl font-bold mb-4 tracking-tight text-white">Ready to accelerate your growth?</h2>
            <p className="relative z-10 text-gray-300 mb-8 max-w-xl mx-auto text-lg">Let's discuss how I can help you build scalable, high-performance web solutions.</p>
            <Link to="/contact" className="relative z-10 inline-block px-8 py-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-500 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 ring-1 ring-white/20">
              Lets connect 🤖
            </Link>
          </div>
        </section>

      </div>
    </Layout>
  );
}

export default ServiceLandingPage;
