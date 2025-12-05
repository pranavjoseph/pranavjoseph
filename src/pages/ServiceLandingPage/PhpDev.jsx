import ServiceLandingPage from ".";

function PhpDevPage() {
  return (
    <ServiceLandingPage
      service="PHP Developer"
      title="Freelance PHP Developer Southampton | Custom Web Solutions"
      description="Experienced Freelance PHP Developer in Southampton. Custom PHP development, legacy code upgrades, and API integrations. Reliable, secure, and fast PHP solutions for your business."
      keywords="freelance PHP developer Southampton, PHP programmer London, hire PHP developer UK, custom PHP development, legacy code maintenance, backend web developer Hampshire"
      skills={["🐘 7+ years developing PHP applications with modern PHP 7+ and PHP 8", "🔧 Framework expertise: Laravel, Symfony, CodeIgniter, and custom PHP solutions", "🛡️ Security-first development: input validation, SQL injection prevention, XSS protection", "📡 RESTful API development and third-party integrations", "🗄️ Database expertise: MySQL, PostgreSQL with optimization and query tuning", "⚡ Performance optimization: caching strategies, code optimization, and scalability"]}
      projects={[
        {
          name: "Kolekt - Waste Management Platform",
          description: "Complete waste recycling platform built with Laravel 10 (PHP), featuring multi-user roles, payment integration, and real-time notifications.",
          link: false,
        },
        {
          name: "Carteron - Real Estate Portal",
          description: "Comprehensive real estate platform with Laravel backend, featuring property search, map integration, and user management.",
          link: false,
        },
        {
          name: "Choose My Fresh - Grocery Delivery",
          description: "E-commerce platform built with OpenCart (PHP), featuring product management, cart system, and order processing.",
          link: false,
        },
        {
          name: "Custom PHP Solutions",
          description: "Multiple custom PHP applications including content management systems, booking platforms, and business automation tools.",
          link: false,
        },
      ]}
    />
  );
}

export default PhpDevPage;

