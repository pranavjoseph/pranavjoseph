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
      <main className="px-6 py-16 md:px-12 lg:px-20 text-gray-800 dark:text-gray-200 transition-colors duration-300">
        {/* Hero Section */}
        <section className="mb-20 text-center max-w-4xl mx-auto">
          <div className="inline-block mb-6 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-800 dark:text-blue-200 text-sm font-semibold">
            7+ Years of Experience
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600 bg-clip-text text-transparent">
            About Me
          </h1>
          <p className="text-xl md:text-2xl leading-relaxed text-gray-700 dark:text-gray-300">
            I'm <strong className="text-blue-600 dark:text-blue-400">Pranav Joseph</strong>, a <strong className="text-blue-600 dark:text-blue-400">Full Stack Developer</strong> with <strong className="text-blue-600 dark:text-blue-400">7+ years of experience</strong> building and scaling web applications for global users. I specialize in <span className="text-blue-600 dark:text-blue-400 font-semibold">PHP (Laravel, Symfony), React, Vue, Node.js, and WordPress</span>. My mission is to craft secure, high-quality, and scalable digital solutions that help businesses grow.
          </p>
        </section>

        {/* Skills */}
        <section className="mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-gray-900 dark:text-white">
            Technical Skills
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="group relative p-8 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-blue-100 dark:border-gray-600">
              <div className="absolute top-0 right-0 w-20 h-20 bg-blue-200 dark:bg-blue-900/50 rounded-bl-full opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <h3 className="font-bold text-xl mb-4 text-blue-800 dark:text-blue-300">Frontend</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">React.js, Vue.js, HTML5, CSS3, TailwindCSS</p>
            </div>
            <div className="group relative p-8 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-blue-100 dark:border-gray-600">
              <div className="absolute top-0 right-0 w-20 h-20 bg-blue-200 dark:bg-blue-900/50 rounded-bl-full opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <h3 className="font-bold text-xl mb-4 text-blue-800 dark:text-blue-300">Backend</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">PHP (Laravel, Symfony), Node.js, Express.js</p>
            </div>
            <div className="group relative p-8 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-blue-100 dark:border-gray-600">
              <div className="absolute top-0 right-0 w-20 h-20 bg-blue-200 dark:bg-blue-900/50 rounded-bl-full opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <h3 className="font-bold text-xl mb-4 text-blue-800 dark:text-blue-300">Cloud & Tools</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">AWS (EC2, S3, Cognito), Docker, Git, Linux, Jira</p>
            </div>
          </div>
        </section>

        {/* Work Experience */}
        <section className="mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-gray-900 dark:text-white">
            Experience
          </h2>
          <div className="space-y-8 max-w-5xl mx-auto">
            <div className="relative p-8 bg-gradient-to-br from-white to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl shadow-xl border-l-4 border-blue-600 dark:border-blue-500">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 md:mb-0">Senior Software Developer</h3>
                <span className="inline-block px-4 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 rounded-full text-sm font-semibold">
                  Jan 2022 – Present
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4 font-medium">Bridge Global | Remote & Onsite, Kochi</p>
              <iframe className="mt-4 w-full h-[500px] rounded-lg shadow-md" style={{"overflow":"hidden"}} src="https://www.linkedin.com/embed/feed/update/urn:li:share:7217405986481848320?collapsed=1" allowFullScreen="" title="Star Performer"></iframe>
              <ul className="mt-6 space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-3 mt-1">▸</span>
                  <span>Led frontend projects with React.js and Vue.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-3 mt-1">▸</span>
                  <span>Designed & developed REST APIs using Laravel & Node.js.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-3 mt-1">▸</span>
                  <span>Implemented CI/CD pipelines & managed legacy codebases.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-3 mt-1">▸</span>
                  <span>Mentored junior developers & collaborated with clients.</span>
                </li>
              </ul>
            </div>

            <div className="relative p-8 bg-gradient-to-br from-white to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl shadow-xl border-l-4 border-blue-600 dark:border-blue-500">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 md:mb-0">Software Developer</h3>
                <span className="inline-block px-4 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 rounded-full text-sm font-semibold">
                  Jan 2018 – Jan 2022
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4 font-medium">Globosoft Solutions | Ernakulam, Kerala</p>
              <ul className="mt-6 space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-3 mt-1">▸</span>
                  <span>Developed back-end systems with Laravel, OpenCart & MySQL.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-3 mt-1">▸</span>
                  <span>Built Angular front-end apps & integrated IoT systems.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-gray-900 dark:text-white">
            Key Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="group p-8 bg-gradient-to-br from-white to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-blue-100 dark:border-gray-600">
              <div className="mb-4">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Kolekt</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">A waste recycling platform built for recyclers, households, and collection centers.</p>
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 rounded-full text-xs font-semibold">Laravel 10</span>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 rounded-full text-xs font-semibold">Vue</span>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 rounded-full text-xs font-semibold">MySQL</span>
              </div>
            </div>
            <div className="group p-8 bg-gradient-to-br from-white to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-blue-100 dark:border-gray-600">
              <div className="mb-4">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Cyber Boxx</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">Insurance admin software with portals for underwriters, brokers, and security modules.</p>
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 rounded-full text-xs font-semibold">Node.js</span>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 rounded-full text-xs font-semibold">React</span>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 rounded-full text-xs font-semibold">AWS</span>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 rounded-full text-xs font-semibold">Docker</span>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="text-center py-20 px-6 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">Let's Work Together</h2>
          <p className="mb-10 text-xl text-gray-600 dark:text-gray-400">Looking for a reliable full-stack developer? Let's talk about your project and how I can help.</p>
          <Link to={"/contact"} className="inline-block px-10 py-4 bg-blue-600 text-white rounded-lg font-semibold shadow-md hover:bg-blue-700 dark:hover:bg-blue-500 hover:shadow-lg transition-all duration-200 text-lg">
            Get in Touch
          </Link>
        </section>
      </main>
    </Layout>
  );
}

export default AboutPage;
