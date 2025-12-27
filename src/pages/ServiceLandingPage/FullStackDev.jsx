import ServiceLandingPage from ".";

function FullStackDev() {
  return (
    <ServiceLandingPage
      service="Full Stack Developer"
      title="Freelance Full Stack Developer Southampton | React, Node.js & PHP"
      description="Versatile Freelance Full Stack Developer in Southampton. Expert in frontend (React, modern JS) and backend (Node.js, PHP, AWS). Complete web solutions from concept to deployment."
      keywords="freelance full stack developer Southampton, full stack engineer London, hire web developer UK, MERN stack developer, LAMP stack expert, custom software development Hampshire"
      skills={["💻 7+ years building fullstack applications for global users", "🎨 Frontend: React.js, Vue.js, Angular, TailwindCSS, HTML5/CSS3", "⚙️ Backend: PHP (Laravel, Symfony), Node.js, Express.js, RESTful APIs", "🗄️ Databases: MySQL, MongoDB with optimization experience", "☁️ Cloud: AWS (EC2, S3, Cognito, CloudWatch), Docker, Serverless", "👥 Leadership: Mentoring junior developers, code reviews, client meetings", "🔄 Agile/Scrum experience with project estimation and CI/CD implementation"]}
      projects={[
        {
          name: "Waste Management Platform",
          description: "Platform for finding, selling, and buying waste materials in nearby locations for recyclers and households. Built with Laravel 10, Vue.js, and MySQL.",
          link: false,
        },
        {
          name: "Real Estate Portal",
          description: "Real estate platform where users search properties and draw directly on maps to filter areas. Built with Laravel, Vue.js, MySQL, and Docker.",
          link: false,
        },
        {
          name: "Choose My Fresh - Grocery Delivery App",
          description: "Online grocery delivery mobile app that's quick, safe and secure. Developed using OpenCart, MySQL, and Nginx.",
          link: false,
        },
        {
          name: "VFX Web & Mobile App",
          description: "Platform for collecting and registering on-set VFX data including scene, weather, location, camera, and reference data. Built with Vue.js.",
          link: false,
        },
        {
          name: "WordPress Projects Portfolio",
          description: "Multiple WordPress sites including Canada One Foundation, MedQAir medical consulting, and Danisense sensor technology platforms.",
          link: false,
        },
      ]}
    />
  );
}

export default FullStackDev;
