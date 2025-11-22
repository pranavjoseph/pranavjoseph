import ServiceLandingPage from ".";

function ReactDevPage() {
  return (
    <ServiceLandingPage
      service="React Developer"
      title="Hire a React Developer in Southampton, London & Remote"
      description="Expert React Developer with 7+ years experience building modern, responsive web applications using React, Next.js, and TypeScript. I create fast, scalable frontend solutions with clean code and best practices."
      keywords="React developer UK, hire React developer Southampton, freelance React developer London, React.js developer, Next.js developer UK, frontend developer Southampton"
      skills={["⚛️ 7+ years building React applications with hooks, context, and modern patterns", "🎨 Expert in React ecosystem: Next.js, Redux, React Router, TailwindCSS", "📱 Responsive design with mobile-first approach and cross-browser compatibility", "⚡ Performance optimization: code splitting, lazy loading, and memoization", "🔧 TypeScript expertise for type-safe React applications", "🚀 Experience with React testing libraries and CI/CD integration"]}
      projects={[
        {
          name: "Cyber Boxx Insurance Platform",
          description: "Modern insurance admin portal built with React, Vite, and TailwindCSS. Features real-time data updates and responsive design for underwriters and brokers.",
          link: false,
        },
        {
          name: "Real Estate Dashboard",
          description: "Interactive property management dashboard with React, featuring map integration and advanced filtering capabilities.",
          link: false,
        },
      ]}
    />
  );
}

export default ReactDevPage;

