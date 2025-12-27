import ServiceLandingPage from ".";

function WordPressDevPage() {
  return (
    <ServiceLandingPage
      service="WordPress Developer"
      title="Freelance WordPress Developer Southampton | Custom Themes & Plugins"
      description="Top-rated Freelance WordPress Developer in Southampton. Custom themes, plugin development, and speed optimization. I build secure, high-ranking WordPress sites that convert."
      keywords="freelance WordPress developer Southampton, WordPress expert London, custom WordPress themes, WooCommerce developer, WordPress speed optimization, hire WordPress freelancer UK"
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
          name: "Sensor Technology Website",
          description: "Technology company website with product showcase and technical documentation.",
          link: false,
        },
      ]}
    />
  );
}

export default WordPressDevPage;

