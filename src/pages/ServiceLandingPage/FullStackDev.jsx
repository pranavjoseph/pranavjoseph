import ServiceLandingPage from ".";

function FullStackDev() {
  return (
    <ServiceLandingPage
      service="Fullstack Developer"
      title="Hire a Fullstack Developer in London, Southampton & Remote"
      description="I deliver end-to-end web solutions as a Fullstack Developer using React, Node.js, Express, and modern cloud tools. From frontend UI to backend APIs, I build scalable, secure, and maintainable applications."
      keywords="fullstack developer UK, hire fullstack developer, freelance fullstack developer London, React Node.js fullstack developer, MERN stack freelancer UK, web developer remote UK"
      skills={["7+ years experience building fullstack web applications", "Expert in React, Node.js, Express, and MySql", "Built scalable REST & GraphQL APIs for high-traffic apps", "Cloud-native development with AWS, Docker, and CI/CD pipelines", "Performance optimization, security best practices, and responsive design"]}
      projects={[
        {
          name: "Fullstack E-commerce Platform",
          description: "Developed a full MERN stack e-commerce platform with payment gateway integration and real-time order tracking.",
          link: "https://github.com/pranavjoseph",
        },
        {
          name: "React + Node.js SaaS Dashboard",
          description: "Built a SaaS admin dashboard with React frontend and Node.js/Express backend, featuring user management and analytics.",
          link: "https://github.com/pranavjoseph",
        },
        {
          name: "Serverless Event Management App",
          description: "Designed a fullstack event management application using React frontend, Node.js backend, and AWS Lambda for serverless functions.",
          link: "https://github.com/pranavjoseph",
        },
      ]}
    />
  );
}

export default FullStackDev;
