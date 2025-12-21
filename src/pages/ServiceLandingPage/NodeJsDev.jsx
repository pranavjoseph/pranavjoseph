import ServiceLandingPage from ".";

function NodeJsDevPage() {
  return (
    <ServiceLandingPage
      service="Node.js Developer"
      title="Freelance Node.js Developer Southampton | Backend & API Expert"
      description="Senior Freelance Node.js Developer serving Southampton, London, and the UK. Scalable backend solutions, REST APIs, and microservices with Node.js, Express, and AWS. Get a quote today."
      keywords="freelance Node.js developer Southampton, backend developer London, hire Node.js expert, API development UK, AWS serverless developer, Express.js specialist, database architecture"
      skills={["💻 7+ years experience with Node.js, Express.js & JavaScript/TypeScript", "🌍 Built RESTful APIs serving global users with MySQL & MongoDB", "☁️ AWS expertise: EC2, S3, Cognito, CloudWatch, Serverless Framework", "🐳 Docker containerization and CI/CD pipeline implementation", "🏢 Experience with insurance domain and real estate platforms", "🧩 Strong problem-solving mindset with attention to detail"]}
      techStack={["Node.js", "Express.js", "TypeScript", "JavaScript", "AWS", "Docker", "MySQL", "MongoDB", "REST APIs", "Serverless", "CI/CD", "CloudWatch"]}
      projects={[
        {
          name: "A Canadian Cyber Insurance Provider Platform",
          description: "Administrative software for insurance domain with Underwriter portal, Broker portal, and security modules using Node.js, MySQL, Docker, and AWS services.",
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
