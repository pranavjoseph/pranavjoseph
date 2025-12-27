import { useEffect, useState, lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import { FaReact, FaNodeJs, FaPhp, FaCloud, FaRocket, FaUsers, FaBookOpen } from "react-icons/fa";
import Layout from "../../components/Layout";
import AnimatedCounter from "../../components/AnimatedCounter";
import TechStackCloud from "../../components/TechStackCloud";
const ThreeBackground = lazy(() => import("../../components/ThreeBackground"));

const timeline = [
  {
    role: "Senior Software Programmer",
    company: "Bridge Global",
    period: "2022 — Present",
    summary: "Leading delivery across Node.js, Vue, and PHP stacks for UK clients with secure-by-default practices.",
  },
  {
    role: "Full Stack Engineer",
    company: "Cleffex Digital (Remote)",
    period: "2023 — 2024",
    summary: "Shipped SaaS modules with Laravel + Vue, hardened APIs to OWASP standards, and streamlined data flows.",
  },
  {
    role: "Software Developer",
    company: "Globosoft",
    period: "2018 — 2022",
    summary: "Built portals and ecommerce experiences with Laravel and REST, improving deployment runbooks and QA scripts.",
  },
];

const focusAreas = [
  { icon: <FaReact />, title: "Frontend", desc: "React, Next.js, Tailwind, and smooth GSAP micro-interactions." },
  { icon: <FaNodeJs />, title: "Backend", desc: "Node.js, Express, REST/GraphQL APIs, auth, and performance tuning." },
  { icon: <FaPhp />, title: "PHP/Laravel", desc: "Robust APIs, clean architectures, and WordPress custom builds." },
  { icon: <FaCloud />, title: "Cloud & DevOps", desc: "AWS, Docker, CI/CD pipelines, observability, and security-first delivery." },
];

const values = [
  { icon: <FaRocket />, title: "Speed with Intent", desc: "Ship fast without breaking trust—guardrails, tests, and observability baked in." },
  { icon: <FaUsers />, title: "Human-Centered", desc: "Interfaces that feel obvious, inclusive, and respectful of user time and privacy." },
  { icon: <FaBookOpen />, title: "Always Learning", desc: "Continuously refining craft across JS, PHP, and cloud to stay sharp for clients." },
];

const techStack = [
  "React", "Next.js", "Node.js", "Express", "TypeScript", "PHP", "Laravel", "WordPress", "MySQL", "PostgreSQL", "MongoDB", "AWS", "Docker", "Tailwind CSS",
];

function AboutPage() {
  const [showBackground, setShowBackground] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) return;
    const timer = setTimeout(() => setShowBackground(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Layout>
      <title>About Pranav Joseph | Full Stack Developer</title>
      <meta name="description" content="Full stack developer crafting performant, secure web apps with React, Node.js, Laravel, and AWS. Based in the UK." />

      {showBackground && (
        <div className="fixed inset-0 z-0 opacity-50 pointer-events-none">
          <Suspense fallback={null}>
            <ThreeBackground />
          </Suspense>
        </div>
      )}

      <main className="relative z-10 px-6 pt-24 pb-16 md:px-10 lg:px-16 max-w-6xl mx-auto text-white">
        {/* Hero */}
        <section className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm uppercase tracking-[0.2em] text-gray-300">
            7+ Years Building Web Experiences
          </div>
          <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
            About <span className="text-brand-red">Pranav Joseph</span>
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Full stack developer crafting fast, secure, and human-centered products across React, Node.js, PHP/Laravel, and AWS.
            I collaborate closely with founders and teams to turn complex ideas into resilient, scalable software.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Link
              to="/contact"
              className="px-6 py-3 rounded-lg bg-brand-red text-white font-semibold hover:bg-red-600 transition-transform hover:-translate-y-0.5"
            >
              Book a Project Call
            </Link>
            <Link
              to="/fullstack-developer"
              className="px-6 py-3 rounded-lg border border-white/20 text-white font-semibold hover:border-brand-red hover:text-brand-red transition-colors"
            >
              View Services
            </Link>
          </div>
        </section>

        {/* Stats */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {[
            { label: "Years", value: 7, suffix: "+" },
            { label: "Projects", value: 50, suffix: "+" },
            { label: "Clients", value: 30, suffix: "+" },
            { label: "Satisfaction", value: 100, suffix: "%" },
          ].map((stat, idx) => (
            <div key={idx} className="glass-panel rounded-2xl p-4 text-center border border-white/10">
              <div className="text-3xl font-bold text-brand-red">
                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-xs uppercase tracking-wide text-gray-300 mt-1">{stat.label}</p>
            </div>
          ))}
        </section>

        {/* Story + Values */}
        <section className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="glass-panel rounded-2xl p-6 border border-white/10">
            <h2 className="text-2xl font-bold mb-4">From Kerala to the UK</h2>
            <p className="text-gray-300 leading-relaxed">
              I’ve spent the last seven years building products across insurance, real estate, and SaaS—owning delivery from UX to production.
              My edge is pairing polished interfaces with robust backends, keeping accessibility and security front-and-center.
              Whether it’s an MVP sprint or a migration of a legacy stack, I bring structure, velocity, and calm execution.
            </p>
            <div className="mt-4 text-sm text-gray-400">
              Currently based in Southampton, collaborating with teams across the UK and EU.
            </div>
          </div>
          <div className="grid gap-4">
            {values.map((item) => (
              <div key={item.title} className="glass-panel rounded-2xl p-5 flex gap-3 items-start border border-white/10">
                <div className="text-brand-red text-xl mt-1">{item.icon}</div>
                <div>
                  <h3 className="font-semibold text-white">{item.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Focus Areas */}
        <section className="mb-16">
          <div className="flex items-center justify-between gap-4 mb-6">
            <h2 className="text-2xl md:text-3xl font-bold">What I Deliver</h2>
            <span className="text-sm text-gray-400">Hands-on across front, back, and cloud</span>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {focusAreas.map((item) => (
              <div key={item.title} className="glass-panel rounded-2xl p-5 border border-white/10 hover:border-brand-red transition-colors">
                <div className="text-2xl text-brand-red mb-3">{item.icon}</div>
                <h3 className="font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Tech Stack */}
        <section className="mb-16 glass-panel rounded-2xl p-6 md:p-8 border border-white/10">
          <div className="flex items-center justify-between flex-wrap gap-3 mb-6">
            <div>
              <h2 className="text-2xl font-bold text-white">Tools I Reach For</h2>
              <p className="text-sm text-gray-400">Battle-tested stack for performant builds</p>
            </div>
            <Link to="/fullstack-developer" className="text-brand-red text-sm font-semibold hover:underline">
              See services
            </Link>
          </div>
          <TechStackCloud technologies={techStack} />
        </section>

        {/* Timeline */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Recent Journey</h2>
          <div className="space-y-4">
            {timeline.map((item) => (
              <div key={item.company} className="glass-panel rounded-2xl p-5 border border-white/10">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <p className="text-sm text-brand-red uppercase tracking-wide">{item.period}</p>
                    <h3 className="text-lg font-semibold text-white">{item.role}</h3>
                    <p className="text-gray-400 text-sm">{item.company}</p>
                  </div>
                </div>
                <p className="mt-3 text-gray-300 text-sm leading-relaxed">{item.summary}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="text-center glass-panel rounded-2xl p-8 border border-white/10">
          <h2 className="text-3xl font-bold mb-3">Ready to build?</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-6">
            Let’s design, ship, and scale your next release. I can start with a roadmap session or jump directly into delivery.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/contact"
              className="px-7 py-3 rounded-lg bg-brand-red text-white font-semibold hover:bg-red-600 transition-transform hover:-translate-y-0.5"
            >
              Contact Me
            </Link>
            <a
              href="https://www.linkedin.com/in/pranav-joseph/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3 rounded-lg border border-white/20 text-white font-semibold hover:border-brand-red hover:text-brand-red transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default AboutPage;
