import { Link } from "react-router-dom";
import { useTheme } from "../../components/ThemeProvider";

function ServiceLandingPage({ service, title, description, keywords, skills, projects }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      {/* SEO Tags */}
      <title>{`${title} | Pranav Joseph`}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      <div className="min-h-screen bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors duration-300">
        {/* Dark Mode Toggle */}
        <button onClick={toggleTheme} className="fixed top-6 right-6 z-50 p-3 bg-gray-200 rounded-full dark:bg-gray-900 shadow-lg hover:scale-110 transition-transform duration-200 text-2xl" aria-label="Toggle dark mode">
          {theme === "light" ? "🌙" : "☀️"}
        </button>

        {/* Hero Section */}
        <section className="text-center py-20 px-6 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Hire a {service}</h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8">{description}</p>
          <Link to="/contact" className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold shadow hover:bg-blue-700 dark:hover:bg-blue-500 transition">
            Let's Work Together 🚀
          </Link>
        </section>

        {/* Why Hire Me - Beautiful Card Layout */}
        <section className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Work With Me? ✨</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, i) => {
              // Extract emoji and text from skill string
              const skillParts = skill.split(" ");
              const emoji = skillParts[0];
              const skillText = skillParts.slice(1).join(" ");

              return (
                <div key={i} className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-700 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-blue-100 dark:border-gray-600">
                  <div className="text-4xl mb-4 text-center">{emoji}</div>
                  <p className="text-gray-700 dark:text-gray-200 text-center leading-relaxed">{skillText}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Projects / Case Studies */}
        {projects && projects.length > 0 && (
          <section className="max-w-5xl mx-auto px-6 py-12">
            <h2 className="text-3xl font-semibold mb-6 text-center">Recent Projects 💼</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((proj, i) => (
                <div key={i} className="bg-gray-100 dark:bg-gray-800 p-6 rounded-2xl shadow hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-xl font-bold mb-2">{proj.name}</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">{proj.description}</p>
                  <a href={proj.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
                    View Project →
                  </a>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Final CTA */}
        <section className="text-center py-16 px-6 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700">
          <h2 className="text-3xl font-bold mb-4">Ready to start your project? 🎯</h2>
          <p className="mb-6 text-gray-600 dark:text-gray-300">I'm available for freelance contracts and collaborations.</p>
          <Link to="/contact" className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold shadow hover:bg-blue-700 dark:hover:bg-blue-500 transition">
            Contact Me Today 📞
          </Link>
        </section>
      </div>
    </>
  );
}

export default ServiceLandingPage;
