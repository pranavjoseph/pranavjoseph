import ServiceLandingPage from ".";

function LaravelDevPage() {
  return (
    <ServiceLandingPage
      service="Laravel Developer"
      title="Hire a Laravel Developer in Southampton, London & Remote"
      description="Senior Laravel Developer with 7+ years experience building robust PHP applications using Laravel framework. I deliver secure, scalable backend solutions with clean architecture and best practices."
      keywords="Laravel developer UK, hire Laravel developer Southampton, freelance Laravel developer London, PHP Laravel developer, Laravel API developer UK"
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

