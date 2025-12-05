import ServiceLandingPage from ".";

function LaravelDevPage() {
  return (
    <ServiceLandingPage
      service="Laravel Developer"
      title="Freelance Laravel Developer Southampton | Expert Custom Integrations"
      description="Expert Freelance Laravel Developer in Southampton. Building scalable, secure web applications, APIs, and SaaS platforms. Hire a top-rated Laravel specialist for your business."
      keywords="freelance Laravel developer Southampton, Laravel expert London, hire Laravel developer UK, SaaS development, PHP framework expert, web application developer Hampshire"
      skills={["🔧 7+ years developing Laravel applications from scratch to production", "🛡️ Security-first approach: authentication, authorization, and data protection", "📡 RESTful API development with Laravel for mobile and web applications", "🗄️ Database optimization with Eloquent ORM and MySQL/PostgreSQL", "⚙️ Laravel ecosystem: Livewire, Nova, Horizon, and Queue management", "🚀 Deployment expertise: AWS, Docker, and CI/CD pipeline setup"]}
      projects={[
        {
          name: "Kolekt - Waste Management Platform",
          description: "Complete waste recycling platform built with Laravel 10, featuring multi-user roles, payment integration, and real-time notifications.",
          link: false,
        },
        {
          name: "Carteron - Real Estate Portal",
          description: "Comprehensive real estate platform with Laravel backend, featuring property search, map integration, and user management.",
          link: false,
        },
        {
          name: "E-commerce Solutions",
          description: "Multiple e-commerce platforms built with Laravel, featuring cart management, payment gateways, and order processing.",
          link: false,
        },
      ]}
    />
  );
}

export default LaravelDevPage;

