import { Link } from "react-router-dom";
import { useTheme } from "../../components/ThemeProvider";

function ContactPage() {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      {/* SEO Tags */}
      <title>Contact Freelance Web Developer in London, Southampton & Woolston | Pranav Joseph</title>
      <meta name="description" content="Get in touch with Pranav Joseph, freelance web developer near London, Southampton, and Woolston. Available for PHP, WordPress, React, Node.js & SEO consulting." />
      <meta name="keywords" content="contact freelance developer London, Southampton, Woolston, hire freelancer near London, web developer contact, PHP WordPress React Node.js freelancer" />

      <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-900 transition-colors duration-300 px-4">
        {/* Dark Mode Toggle */}
        <button onClick={toggleTheme} className="fixed top-6 right-6 z-50 p-3 bg-gray-200 rounded-full dark:bg-gray-800 shadow-lg hover:scale-110 transition-transform duration-200 text-2xl" aria-label="Toggle dark mode">
          {theme === "light" ? "🌙" : "☀️"}
        </button>

        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Contact Me</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-8 text-center max-w-lg">
          Let’s connect! Feel free to reach out for freelance opportunities, collaborations, or just to say hello. 🚀 <br />
          <Link to="/">
            <span className="text-2xl">🏡</span>
          </Link>
        </p>

        <form netlify method="POST" className="w-full max-w-md bg-gray-100 dark:bg-gray-800 p-6 rounded-2xl shadow-lg space-y-4">
          <input type="hidden" name="form-name" value="contact" />
          <div>
            <label className="block text-gray-700 dark:text-gray-300 mb-2">Name</label>
            <input type="text" name="name" required className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 outline-none" />
          </div>

          <div>
            <label className="block text-gray-700 dark:text-gray-300 mb-2">Email</label>
            <input type="email" name="email" required className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 outline-none" />
          </div>

          <div>
            <label className="block text-gray-700 dark:text-gray-300 mb-2">Message</label>
            <textarea name="message" rows="4" required className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 outline-none"></textarea>
          </div>

          <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 dark:hover:bg-blue-500 transition">
            Send Message
          </button>
        </form>

        {/* Social Links */}
        <div className="mt-8 flex gap-6">
          <a href="https://www.linkedin.com/in/pranav-joseph/" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
            💼 LinkedIn
          </a>
          <a href="https://github.com/pranavjoseph" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
            🖥 GitHub
          </a>
        </div>
      </div>
    </>
  );
}

export default ContactPage;
