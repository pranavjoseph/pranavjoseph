import ServiceLandingPage from ".";

function FrontendDevPage() {
  return (
    <ServiceLandingPage
      service="Experienced Frontend Developer"
      title="Experienced Frontend Developer Southampton | UI Engineering Expert"
      description="Senior frontend developer crafting fast, accessible interfaces with React, Next.js, and modern tooling. I serve clients in Southampton, London, and across the UK with production-ready UI engineering."
      keywords="experienced frontend developer Southampton, senior frontend engineer London, hire frontend developer UK, React Next.js expert, UI performance specialist, accessible web apps"
      skills={["⚡ 7+ years building performant SPAs with React, Next.js, and Vite", "🎨 Design-to-code workflows with Tailwind CSS and component libraries", "🔒 Accessibility-first delivery (a11y testing, semantics, keyboard flows)", "🚀 Performance tuning: code splitting, bundle analysis, caching, image optimization", "🧭 Strong product mindset: UX collaboration, rapid prototyping, and iteration", "🔧 Testing and quality: Storybook, Jest/RTL, Playwright end-to-end coverage"]}
      techStack={["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "Vite", "GSAP", "Accessibility (WCAG)", "Storybook", "Jest", "Playwright", "Figma"]}
      projects={[
        {
          name: "A Canadian Cyber Insurance Provider Platforms",
          description: "Responsive dashboards with complex data views, built with React, Tailwind CSS, and performance-optimized tables for consumers and SME's.",
          link: false,
        },
        {
          name: "Real Estate Experience",
          description: "Front-of-site and authenticated tools for property search and lead capture, including map interactions and advanced filters.",
          link: false,
        },
        {
          name: "Marketing Microsites",
          description: "Series of fast-loading landing pages with A/B testing hooks, lighthouse scores in the 90s, and SEO-ready content.",
          link: false,
        },
        {
          name: "Corporate Website",
          description: "A corporate website using Next.js and TailwindCSS, focusing on SEO and performance optimization.",
          link: false,
        },
      ]}
    />
  );
}

export default FrontendDevPage;
