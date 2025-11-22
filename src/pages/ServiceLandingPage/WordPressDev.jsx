import ServiceLandingPage from ".";

function WordPressDevPage() {
  return (
    <ServiceLandingPage
      service="WordPress Developer"
      title="Hire a WordPress Developer in Southampton, London & Remote"
      description="Experienced WordPress Developer specializing in custom themes, plugins, and WooCommerce solutions. I build fast, SEO-friendly WordPress sites that convert visitors into customers."
      keywords="WordPress developer UK, hire WordPress developer Southampton, freelance WordPress developer London, WordPress customization, WooCommerce developer UK"
      skills={["📝 Custom WordPress theme development from scratch with modern PHP", "🔌 Plugin development and customization for unique business requirements", "🛒 WooCommerce expertise: custom stores, payment gateways, and product management", "⚡ Performance optimization: caching, image optimization, and database tuning", "🔍 SEO-friendly WordPress development with clean code and best practices", "🎨 Responsive design with mobile-first approach and accessibility standards"]}
      projects={[
        {
          name: "Canada One Foundation",
          description: "Custom WordPress website with donation integration and event management features.",
          link: false,
        },
        {
          name: "MedQAir Medical Consulting",
          description: "Professional medical consulting website with appointment booking and patient portal.",
          link: false,
        },
        {
          name: "Danisense Sensor Technology",
          description: "Technology company website with product showcase and technical documentation.",
          link: false,
        },
      ]}
    />
  );
}

export default WordPressDevPage;

