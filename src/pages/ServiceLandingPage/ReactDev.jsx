import ServiceLandingPage from ".";

function ReactDevPage() {
  return (
    <ServiceLandingPage
      service="React Developer"
      title="Freelance React Developer Southampton | Expert Frontend developer"
      description="Looking for an expert Frontend Developer in Southampton or London? I build high-performance, SEO-friendly web apps using React, Next.js, and Tailwind CSS. Hire me for your next project."
      keywords="freelance React developer Southampton, React developer London, hire React js developer, frontend developer Hampshire, Next.js expert, web application development, UI/UX developer"
      skills={["⚛️ 7+ years building React applications with hooks, context, and modern patterns", "🎨 Expert in React ecosystem: Next.js, Redux, React Router, TailwindCSS", "📱 Responsive design with mobile-first approach and cross-browser compatibility", "⚡ Performance optimization: code splitting, lazy loading, and memoization", "🔧 TypeScript expertise for type-safe React applications", "🚀 Experience with React testing libraries and CI/CD integration"]}
      projects={[
        {
          name: "A Canadian Cyber Insurance Platform",
          description: "Modern insurance admin portal built with React, Vite, and TailwindCSS. Features real-time data updates and responsive design for underwriters and brokers.",
          link: false,
        },
        {
          name: "Real Estate Dashboard",
          description: "Interactive property management dashboard with React, featuring map integration and advanced filtering capabilities.",
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

export default ReactDevPage;
