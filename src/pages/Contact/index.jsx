import { Link } from "react-router-dom";
import { useTheme } from "../../components/ThemeProvider";
import { useState } from "react";

function ContactPage() {
  const { theme, toggleTheme } = useTheme();
  const [formData, setFormData] = useState({
    "form-name": "contact",
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);

    try {
      const response = await fetch("https://formspree.io/f/mkgvjlqk", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Oops! There was a problem submitting your form.");
      }
    } catch (error) {
      alert("Oops! Something went wrong.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <>
      {/* ✅ SEO Tags */}
      <title>Contact Freelance Web Developer in London, Southampton & Woolston | Pranav Joseph</title>
      <meta name="description" content="Get in touch with Pranav Joseph, freelance web developer near London, Southampton, and Woolston. Available for PHP, WordPress, React, Node.js & SEO consulting." />
      <meta name="keywords" content="contact freelance developer London, Southampton, Woolston, hire freelancer near London, web developer contact, PHP WordPress React Node.js freelancer" />

      {/* ✅ Page Container */}
      <div className="bg-white dark:bg-gray-800 transition-colors duration-300 min-h-screen">
        {/* Dark Mode Toggle Button - Fixed top right */}
        <button onClick={toggleTheme} className="fixed top-6 right-6 z-50 p-3 bg-gray-200 rounded-full dark:bg-gray-900 shadow-lg hover:scale-110 transition-transform duration-200 text-2xl" aria-label="Toggle dark mode">
          {theme === "light" ? "🌙" : "☀️"}
        </button>

        <div className="px-6 pt-16 text-center max-w-4xl mx-auto">
          <div className="text-center md:text-left">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">Contact Me</h1>
            <p className="text-gray-600 dark:text-gray-300 text-base">Let's connect! Feel free to reach out for freelance opportunities, collaborations, or just to say hello. 🚀</p>
            <Link to="/" className="inline-block mt-3 text-xl hover:scale-110 transition-transform">
              🏡
            </Link>
          </div>
        </div>
        <div className="w-full max-w-6xl mx-auto grid md:grid-cols-2 gap-12 px-6 md:grid-flow-col">
          {/* LEFT SIDE - Contact Info */}
          <div className="min-w-0">
            {/* Contact Details */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 p-5 rounded-xl shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Get In Touch</h3>
              <div className="space-y-3 text-sm">
                <a href="mailto:pranavjoseph69@gmail.com" className="flex items-center space-x-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  <span className="text-lg">📧</span>
                  <span className="font-mono">pranavjoseph69@gmail.com</span>
                </a>
                <a href="tel:+447979652283" className="flex items-center space-x-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  <span className="text-lg">📱</span>
                  <span>+44 7979 652 283</span>
                </a>
                <a href="https://www.linkedin.com/in/pranav-joseph/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  <span className="text-lg">💼</span>
                  <span>LinkedIn Profile</span>
                </a>
                <a href="https://maps.app.goo.gl/me91hsyHNsmcezZL6" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  <span className="relative inline-block">
                    <span className="text-lg ">📍</span>
                    <span className="absolute inset-0 h-full w-full animate-ping rounded-full bg-red-400 opacity-20"></span>
                  </span>
                  <span>Southampton, UK</span>
                </a>
                <a href="https://api.whatsapp.com/send?phone=447979652283&text=Hi+Pranav%0D%0ALets+connect!" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  <span className="text-lg animate-bounce">💭</span>
                  <span>Response within 24 hours</span>
                </a>
                <a href="mailto:pranavjoseph69@gmail.com" className="flex items-center space-x-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  <span className="text-lg motion-safe:animate-spin">🌍</span>
                  <span>Available for work across UK & Europe</span>
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - Contact Form */}
          <div className="min-w-0">
            {!submitted ? (
              <form onSubmit={handleSubmit} name="contact" method="POST" data-netlify="true" className="bg-gray-100 dark:bg-gray-800 p-5 rounded-xl shadow-lg space-y-4">
                {/* Hidden Netlify input */}
                <input type="hidden" name="form-name" value="contact" />

                <div>
                  <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium text-sm">Name *</label>
                  <input type="text" name="name" required className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-sm" placeholder="Your name" onChange={handleChange} />
                </div>

                <div>
                  <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium text-sm">Email *</label>
                  <input type="email" name="email" required className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-sm" placeholder="your@email.com" onChange={handleChange} />
                </div>

                <div>
                  <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium text-sm">Message *</label>
                  <textarea name="message" rows="3" required className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none text-sm" placeholder="Tell me about your project..." onChange={handleChange}></textarea>
                </div>

                <button type="submit" disabled={isSending} className={`w-full py-2.5 px-4 rounded-lg font-semibold shadow-lg text-sm transform transition-all duration-200 ${isSending ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 text-white hover:bg-blue-700 dark:hover:bg-blue-500 hover:shadow-xl hover:-translate-y-0.5"}`}>
                  {isSending ? "Sending..." : "Send Message 🚀"}
                </button>
              </form>
            ) : (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg shadow-lg" role="alert">
                <strong className="font-bold">Thank you!</strong>
                <span className="block sm:inline"> Your message has been sent. I'll get back to you soon. 😊</span>
              </div>
            )}
            {/* End of RIGHT SIDE - Contact Form */}
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactPage;
