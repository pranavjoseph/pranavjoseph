import ServiceLandingPage from ".";

function NodeJsDevPage() {
  return (
    <ServiceLandingPage
      service="Node.js Developer"
      title="Hire a Node.js Developer in Southampton, London & Remote"
      description="Senior Full Stack Developer with 7+ years experience building scalable backend systems using Node.js, Express, and AWS. I deliver production-ready APIs, serverless solutions, and cloud-native applications for global users."
      keywords="nodejs developer UK, hire node.js developer Southampton, freelance Node.js developer London, backend engineer Southampton, fullstack javascript developer UK, AWS node.js developer"
      skills={["💻 7+ years experience with Node.js, Express.js & JavaScript/TypeScript", "🌍 Built RESTful APIs serving global users with MySQL & MongoDB", "☁️ AWS expertise: EC2, S3, Cognito, CloudWatch, Serverless Framework", "🐳 Docker containerization and CI/CD pipeline implementation", "🏢 Experience with insurance domain and real estate platforms", "🧩 Strong problem-solving mindset with attention to detail"]}
      techStack={["Node.js", "Express.js", "TypeScript", "JavaScript", "AWS", "Docker", "MySQL", "MongoDB", "REST APIs", "Serverless", "CI/CD", "CloudWatch"]}
      projects={[
        {
          name: "Cyber Boxx Insurance Platform",
          description: "Administrative software for insurance domain with Underwriter portal, Broker portal, and security modules using Node.js, MySQL, Docker, and AWS services.",
          link: false,
        },
        {
          name: "Insurance Customer Portals",
          description: "Multiple user portals (Boxx AXA, Zurich Kodak, Tunes Protect) for insurance customers with domain security features, built with Node.js and AWS Cognito.",
          link: false,
        },
        {
          name: "Farmers Agent Portal",
          description: "Agent portal facilitating user creation and registration with Node.js backend, AWS Cognito authentication, and MySQL database.",
          link: false,
        },
      ]}
    />
  );
}

export default NodeJsDevPage;
