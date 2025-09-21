import ServiceLandingPage from ".";

function NodeJsDevPage() {
  return (
    <ServiceLandingPage
      service="Node.js Developer"
      title="Hire a Node.js Developer in London, Southampton & Remote"
      description="I build scalable, high-performance backend systems using Node.js, Express, and AWS. Whether it’s REST APIs, GraphQL, or serverless, I can deliver production-ready solutions."
      keywords="nodejs developer UK , hire node.js developer , freelance Node.js developer, hire nodejs developer, freelance node developer London, backend engineer Southampton, fullstack javascript developer UK"
      skills={["7+ years experience with Node.js & JavaScript", "Built APIs serving 50,000+ users", "Cloud-native: AWS Lambda, Docker, CI/CD", "Performance optimization & security best practices"]}
      projects={
        [
          // {
          //   name: "E-commerce API",
          //   description: "Built a scalable Node.js API with payment integrations and caching.",
          //   link: "https://github.com/pranavjoseph",
          // },
          // {
          //   name: "Serverless Event System",
          //   description: "Designed a serverless event-driven architecture using AWS Lambda.",
          //   link: "https://github.com/pranavjoseph",
          // },
        ]
      }
    />
  );
}

export default NodeJsDevPage;
