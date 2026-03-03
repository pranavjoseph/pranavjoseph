import { useEffect, useLayoutEffect, useRef, useState, lazy, Suspense } from "react";
import { Link, useLocation } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Layout from "../../components/Layout";
import SEO from "../../components/SEO";
import AnimatedCounter from "../../components/AnimatedCounter";
import TechStackCloud from "../../components/TechStackCloud";
import ScrollProgress from "../../components/ScrollProgress";
import { SITE_URL } from "../../utils/constants";

const ThreeBackground = lazy(() => import("../../components/ThreeBackground"));

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
  const [showBackground, setShowBackground] = useState(false);
  const seoTitle = `${title} | Pranav Joseph`;
  const canonicalUrl = `${SITE_URL}${location.pathname === "/" ? "/" : location.pathname.replace(/\/+$/, "")}`;

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) return;
    const timer = setTimeout(() => setShowBackground(true), 300);
    return () => clearTimeout(timer);
  }, []);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.fromTo(".hero-badge", { y: -20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" }).fromTo(".hero-title", { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }, "-=0.3").fromTo(".hero-desc", { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" }, "-=0.4").fromTo(".hero-cta", { scale: 0.95, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(1.5)" }, "-=0.2");

      gsap.utils.toArray(".reveal").forEach((el) => {
        gsap.fromTo(
          el,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: { trigger: el, start: "top 80%" },
          }
        );
      });
    }, mainRef);

    return () => ctx.revert();
  }, [location.pathname]);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: `Pranav Joseph - ${service}`,
    image: `${SITE_URL}/preview.png`,
    description: description,
    url: canonicalUrl,
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

  return (
    <Layout showHomeLink={false}>
      <SEO title={seoTitle} description={description} keywords={keywords} canonicalPath={location.pathname} />
      <JsonLd jsonLd={jsonLd} />

      {showBackground && (
        <div className="fixed inset-0 z-0 opacity-40 pointer-events-none">
          <Suspense fallback={null}>
            <ThreeBackground />
          </Suspense>
        </div>
      )}
      <ScrollProgress />

      <div ref={mainRef} className="relative z-10 bg-brand-black min-h-screen text-white font-space overflow-hidden">
        {/* Hero */}
        <section className="relative pt-28 pb-16 px-6 md:px-10 lg:px-16 max-w-6xl mx-auto text-center">
          <div className="hero-badge inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs uppercase tracking-[0.2em] text-gray-300">Available for Hire</div>
          <h1 className="hero-title text-4xl md:text-5xl lg:text-6xl font-black mt-4 leading-tight">
            Hire a <span className="text-brand-red">{service}</span>
          </h1>
          <p className="hero-desc text-base md:text-lg text-gray-300 max-w-3xl mx-auto mt-4">{description}</p>
          <div className="hero-cta mt-8 flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="px-7 py-3 rounded-lg bg-brand-red text-white font-semibold hover:bg-red-600 transition-transform hover:-translate-y-0.5">
              Start Your Project
            </Link>
            <a href="https://www.linkedin.com/in/pranav-joseph/" target="_blank" rel="noopener noreferrer" className="px-7 py-3 rounded-lg border border-white/20 text-white font-semibold hover:border-brand-red hover:text-brand-red transition-colors">
              LinkedIn
            </a>
          </div>
        </section>

        {/* Stats */}
        <section className="px-6 md:px-10 lg:px-16 max-w-6xl mx-auto mb-16 reveal">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Years Exp.", value: 7, suffix: "+" },
              { label: "Projects", value: 50, suffix: "+" },
              { label: "Clients", value: 30, suffix: "+" },
              { label: "Satisfaction", value: 100, suffix: "%" },
            ].map((stat, i) => (
              <div key={i} className="glass-panel p-5 rounded-2xl border border-white/10 text-center">
                <div className="text-3xl font-bold text-brand-red">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-xs font-medium text-gray-300 mt-1 uppercase tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Tech Stack */}
        {techStack && techStack.length > 0 && (
          <section className="px-6 md:px-10 lg:px-16 max-w-6xl mx-auto mb-16 reveal">
            <TechStackCloud technologies={techStack} />
          </section>
        )}

        {/* Why Work With Me */}
        <section className="px-6 md:px-10 lg:px-16 max-w-5xl mx-auto mb-16 reveal">
          <h2 className="text-2xl font-bold text-center mb-8 text-white">Why Work With Me?</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, i) => {
              const emojiMatch = skill.match(/^(\p{Emoji_Presentation}|\p{Extended_Pictographic})\s+(.*)$/u);
              const displayText = emojiMatch ? emojiMatch[2] : skill;
              const displayEmoji = emojiMatch ? emojiMatch[1] : "🔹";

              return (
                <div key={i} className="skill-pill flex items-center gap-2 px-4 py-2 glass-panel border border-white/10 rounded-lg shadow-sm hover:border-brand-red transition-colors cursor-default">
                  <span className="text-base">{displayEmoji}</span>
                  <span className="text-sm font-medium text-gray-200">{displayText}</span>
                </div>
              );
            })}
          </div>
        </section>

        {/* Projects */}
        <section className="px-6 md:px-10 lg:px-16 max-w-6xl mx-auto mb-16 reveal">
          <h2 className="text-2xl font-bold text-white mb-6">Recent Work</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, i) => (
              <div key={i} className="project-card glass-panel p-6 rounded-2xl border border-white/10 hover:border-brand-red transition-colors">
                <h3 className="text-xl font-bold text-white mb-2">{project.name}</h3>
                <p className="text-gray-300 text-sm mb-4">{project.description}</p>
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-brand-red hover:underline text-sm font-semibold">
                    View Project
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 md:px-10 lg:px-16 max-w-5xl mx-auto pb-16 reveal">
          <div className="glass-panel rounded-2xl p-8 border border-white/10 text-center">
            <h2 className="text-3xl font-bold mb-3">Ready to launch?</h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-6">Let’s scope, build, and ship your next release with confidence—frontend polish, backend resilience, and cloud readiness included.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact" className="px-7 py-3 rounded-lg bg-brand-red text-white font-semibold hover:bg-red-600 transition-transform hover:-translate-y-0.5">
                Contact Me
              </Link>
              <Link to="/about" className="px-7 py-3 rounded-lg border border-white/20 text-white font-semibold hover:border-brand-red hover:text-brand-red transition-colors">
                About Me
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}

export default ServiceLandingPage;
