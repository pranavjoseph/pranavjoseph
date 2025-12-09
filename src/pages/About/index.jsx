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
      <main className="px-4 py-16 md:px-12 lg:px-20 text-gray-800 dark:text-gray-200 transition-colors duration-300">
        {/* Hero Section */}
        <section className="mb-20 text-center max-w-4xl mx-auto">
          <div className="inline-block mb-6 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-800 dark:text-blue-200 text-sm font-semibold">
            7+ Years of Experience
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600 bg-clip-text text-transparent">
            About Me
          </h1>
          <p className="text-xl md:text-2xl leading-relaxed text-gray-700 dark:text-gray-300">
            I'm <strong className="text-blue-600 dark:text-blue-400">Pranav Joseph</strong>, a <Link to="/fullstack-developer" className="text-blue-600 dark:text-blue-400 font-bold hover:underline">Full Stack Developer</Link> with <strong className="text-blue-600 dark:text-blue-400">7+ years of experience</strong> building and scaling web applications for global users. I specialize in <span className="text-blue-600 dark:text-blue-400 font-semibold"><Link to="/php-developer" className="hover:underline">PHP</Link> (<Link to="/laravel-developer" className="hover:underline">Laravel</Link>, Symfony), <Link to="/react-developer" className="hover:underline">React</Link>, Vue, <Link to="/nodejs-developer" className="hover:underline">Node.js</Link>, and <Link to="/wordpress-developer" className="hover:underline">WordPress</Link></span>. My mission is to craft secure, high-quality, and scalable digital solutions that help businesses grow.
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
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed"><Link to="/react-developer" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">React.js</Link>, Vue.js, HTML5, CSS3, TailwindCSS</p>
            </div>
            <div className="group relative p-8 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-blue-100 dark:border-gray-600">
              <div className="absolute top-0 right-0 w-20 h-20 bg-blue-200 dark:bg-blue-900/50 rounded-bl-full opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <h3 className="font-bold text-xl mb-4 text-blue-800 dark:text-blue-300">Backend</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed"><Link to="/php-developer" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">PHP</Link> (<Link to="/laravel-developer" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Laravel</Link>, Symfony), <Link to="/nodejs-developer" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Node.js</Link>, Express.js</p>
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
            <div className="relative p-8 bg-gradient-to-br from-white to-blue-50/80 dark:from-gray-800 dark:to-gray-900/80 rounded-2xl shadow-xl ring-1 ring-gray-200/70 dark:ring-gray-700/80">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 md:mb-0">Bridge Global</h3>
                <span className="inline-block px-4 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 rounded-full text-sm font-semibold">
                  Jan 2022 – Present
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4 font-medium">Software Programmer • Kochi & Remote</p>
              <div className="space-y-4 border border-blue-200 dark:border-blue-700 rounded-2xl p-4 bg-white/60 dark:bg-gray-900/30">
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className="font-semibold text-gray-900 dark:text-white">Software Programmer</p>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-100">Jun 2025 – Present</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Owning feature delivery across Node.js, Vue.js, and PHP stacks while coordinating with UK clients and QA teams.</p>
                </div>
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className="font-semibold text-gray-900 dark:text-white">Senior Software Programmer</p>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-100">May 2024 – May 2025</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Delivered secure APIs, led sprint planning, and mentored engineers on modern JavaScript tooling.</p>
                </div>
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className="font-semibold text-gray-900 dark:text-white">Software Programmer</p>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-100">Jan 2022 – Apr 2024</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Built customer portals, automated deployments with Docker, and improved incident response playbooks.</p>
                </div>
              </div>
            </div>

            <div className="relative p-8 bg-gradient-to-br from-white to-blue-50/80 dark:from-gray-800 dark:to-gray-900/80 rounded-2xl shadow-xl ring-1 ring-gray-200/70 dark:ring-gray-700/80">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 md:mb-0">ANGARD Staffing Solutions (Royal Mail)</h3>
                <span className="inline-block px-4 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 rounded-full text-sm font-semibold">
                  Apr 2025 – Present
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4 font-medium">Postal Operations Services • Southampton, UK</p>
              <ul className="mt-6 space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-3 mt-1">▸</span>
                  <span>Coordinate logistics streams and ensure SLA adherence for Royal Mail sorting hubs.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-3 mt-1">▸</span>
                  <span>Apply incident-response mindset from engineering to streamline on-floor escalations.</span>
                </li>
              </ul>
            </div>

            <div className="relative p-8 bg-gradient-to-br from-white to-blue-50/80 dark:from-gray-800 dark:to-gray-900/80 rounded-2xl shadow-xl ring-1 ring-gray-200/70 dark:ring-gray-700/80">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 md:mb-0">Cleffex Digital Ltd</h3>
                <span className="inline-block px-4 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 rounded-full text-sm font-semibold">
                  Sep 2023 – May 2025
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4 font-medium">Software Programmer • Remote</p>
              <ul className="mt-6 space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-3 mt-1">▸</span>
                  <span>Developed Laravel + Vue SaaS modules and optimized data flows powering B2B analytics.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-3 mt-1">▸</span>
                  <span>Partnered with cybersecurity teams to harden APIs using OWASP-aligned controls.</span>
                </li>
              </ul>
            </div>

            <div className="relative p-8 bg-gradient-to-br from-white to-blue-50/80 dark:from-gray-800 dark:to-gray-900/80 rounded-2xl shadow-xl ring-1 ring-gray-200/70 dark:ring-gray-700/80">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 md:mb-0">Globosoft</h3>
                <span className="inline-block px-4 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 rounded-full text-sm font-semibold">
                  Jan 2018 – Jan 2022
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4 font-medium">Software Developer • Ernakulam, Kerala</p>
              <ul className="mt-6 space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-3 mt-1">▸</span>
                  <span>Delivered bespoke ecommerce builds with Laravel, OpenCart, and REST APIs.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-3 mt-1">▸</span>
                  <span>Integrated IoT telemetry pipelines and introduced automated QA scripts.</span>
                </li>
              </ul>
            </div>

            <div className="relative p-8 bg-gradient-to-br from-white to-blue-50/80 dark:from-gray-800 dark:to-gray-900/80 rounded-2xl shadow-xl ring-1 ring-gray-200/70 dark:ring-gray-700/80">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 md:mb-0">Microweb Solutions</h3>
                <span className="inline-block px-4 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 rounded-full text-sm font-semibold">
                  Jun 2017 – Dec 2017
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4 font-medium">Junior Software Developer • Cochin, India</p>
              <ul className="mt-6 space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-3 mt-1">▸</span>
                  <span>Launched CMS-driven sites for regional SMBs using PHP and Bootstrap.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-3 mt-1">▸</span>
                  <span>Documented deployment runbooks and strengthened cross-team collaboration.</span>
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
