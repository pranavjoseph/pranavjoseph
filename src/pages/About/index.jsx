import { Link } from "react-router-dom";
import Layout from "../../components/Layout";

function AboutPage() {
  return (
    <Layout>
      {/* SEO Tags */}
      <title>About Pranav Joseph | Full Stack Developer in UK</title>
      <meta name="description" content="Learn more about Pranav Joseph, a full stack developer with 7+ years of experience in PHP, React, Node.js, Laravel, WordPress, and AWS." />
      <meta name="keywords" content="Pranav Joseph, full stack developer, freelance web developer London, React developer, Node.js, PHP, WordPress, AWS" />

      {/* Page Wrapper */}
      <main className="px-6 py-12 md:px-20 text-gray-800 dark:text-gray-200 transition-colors duration-300">
        {/* About Me */}
        <section className="mb-16 text-center">
          <h1 className="text-4xl font-extrabold mb-4">About Me</h1>
          <p className="text-lg leading-relaxed max-w-3xl mx-auto">
            I’m <strong>Pranav Joseph</strong>, a <strong>Full Stack Developer</strong> with <strong>7+ years of experience</strong> building and scaling web applications for global users. I specialize in <span className="text-blue-500">PHP (Laravel, Symfony), React, Vue, Node.js, and WordPress</span>. My mission is to craft secure, high-quality, and scalable digital solutions that help businesses grow.
          </p>
        </section>

        {/* Skills */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center">Technical Skills</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="p-4 border rounded-lg shadow-sm dark:border-gray-700">
              <h3 className="font-semibold text-lg mb-2">Frontend</h3>
              <p>React.js, Vue.js, HTML5, CSS3, TailwindCSS</p>
            </div>
            <div className="p-4 border rounded-lg shadow-sm dark:border-gray-700">
              <h3 className="font-semibold text-lg mb-2">Backend</h3>
              <p>PHP (Laravel, Symfony), Node.js, Express.js</p>
            </div>
            <div className="p-4 border rounded-lg shadow-sm dark:border-gray-700">
              <h3 className="font-semibold text-lg mb-2">Cloud & Tools</h3>
              <p>AWS (EC2, S3, Cognito), Docker, Git, Linux, Jira</p>
            </div>
          </div>
        </section>

        {/* Work Experience */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center">Experience</h2>
          <div className="space-y-6 max-w-4xl mx-auto">
            <div>
              <h3 className="text-xl font-semibold">Senior Software Developer – Bridge Global</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">Jan 2022 – Present | Remote & Onsite, Kochi</p>
              <iframe className="mt-2 w-full h-[500px] rounded-sm" style={{"overflow":"hidden"}} src="https://www.linkedin.com/embed/feed/update/urn:li:share:7217405986481848320?collapsed=1" allowFullScreen="" title="Star Performer"></iframe>
              <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700 dark:text-gray-300">
                <li>Led frontend projects with React.js and Vue.</li>
                <li>Designed & developed REST APIs using Laravel & Node.js.</li>
                <li>Implemented CI/CD pipelines & managed legacy codebases.</li>
                <li>Mentored junior developers & collaborated with clients.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold">Software Developer – Globosoft Solutions</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">Jan 2018 – Jan 2022 | Ernakulam, Kerala</p>
              <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700 dark:text-gray-300">
                <li>Developed back-end systems with Laravel, OpenCart & MySQL.</li>
                <li>Built Angular front-end apps & integrated IoT systems.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center">Key Projects</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="p-4 border rounded-lg shadow-sm dark:border-gray-700">
              <h3 className="text-lg font-semibold">Kolekt</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">A waste recycling platform built for recyclers, households, and collection centers.</p>
              <p className="text-sm mt-2">Stack: Laravel 10, Vue, MySQL</p>
            </div>
            <div className="p-4 border rounded-lg shadow-sm dark:border-gray-700">
              <h3 className="text-lg font-semibold">Cyber Boxx</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Insurance admin software with portals for underwriters, brokers, and security modules.</p>
              <p className="text-sm mt-2">Stack: Node, React+Vite+Tailwind, MySQL, AWS, Docker</p>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-4">Let’s Work Together</h2>
          <p className="mb-6 text-lg">Looking for a reliable full-stack developer? Let’s talk about your project and how I can help.</p>
          <Link to={"/contact"} className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
            📩 Get in Touch
          </Link>
        </section>
      </main>
    </Layout>
  );
}

export default AboutPage;
