import { useEffect, useState, lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import Layout from "../../components/Layout";
import SEO from "../../components/SEO";

const ThreeBackground = lazy(() => import("../../components/ThreeBackground"));

function ContactPage() {
  const [formData, setFormData] = useState({
    "form-name": "contact",
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [showBackground, setShowBackground] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) return;
    const timer = setTimeout(() => setShowBackground(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: null });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
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
        setFormData({ "form-name": "contact", name: "", email: "", message: "" });
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
    <Layout showHomeLink={true}>
      <SEO
        title="Contact Freelance Web Developer | Pranav Joseph"
        description="Looking to collaborate on a new project? Reach out to Pranav Joseph for  freelance web application development services. Let's build something great together!"
        canonicalPath="/contact"
        keywords="contact freelance web developer, contact Pranav Joseph, hire web developer, php developer contact, react developer contact, wordpress developer contact"
      />

      {showBackground && (
        <div className="fixed inset-0 z-0 opacity-40 pointer-events-none">
          <Suspense fallback={null}>
            <ThreeBackground />
          </Suspense>
        </div>
      )}

      <main className="relative z-10 px-6 pt-24 pb-16 md:px-10 lg:px-16 max-w-5xl mx-auto text-white">
        {/* Hero */}
        <section className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm uppercase tracking-[0.2em] text-gray-300">
            Let’s Collaborate
          </div>
          <h1 className="mt-4 text-4xl md:text-5xl font-black leading-tight">
            Tell me about your <span className="text-brand-red">next build</span>
          </h1>
          <p className="mt-3 text-lg text-gray-300 max-w-2xl mx-auto">
            Share your goals, timelines, and constraints. I’ll respond quickly with next steps and a clear plan.
          </p>
        </section>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Contact Form */}
          <div className="glass-panel rounded-2xl p-6 border border-white/10 shadow-lg">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input type="hidden" name="form-name" value="contact" />

                <div>
                  <label className="block text-sm font-semibold text-gray-200 mb-1">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl bg-white/5 border ${errors.name ? "border-red-500" : "border-white/10"} text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-red`}
                    placeholder="John Doe"
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-200 mb-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl bg-white/5 border ${errors.email ? "border-red-500" : "border-white/10"} text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-red`}
                    placeholder="you@example.com"
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-200 mb-1">Project Details</label>
                  <textarea
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl bg-white/5 border ${errors.message ? "border-red-500" : "border-white/10"} text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-red resize-none`}
                    placeholder="What are we building? Timelines, stack, and goals."
                  />
                  {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSending}
                  className={`w-full py-3 rounded-xl font-semibold transition-transform ${isSending ? "bg-gray-600 cursor-not-allowed" : "bg-brand-red hover:bg-red-600 hover:-translate-y-0.5"}`}
                >
                  {isSending ? "Sending..." : "Send Message"}
                </button>
              </form>
            ) : (
              <div className="text-center space-y-3">
                <div className="text-3xl">✅</div>
                <h3 className="text-xl font-semibold">Message Sent!</h3>
                <p className="text-gray-300 text-sm">Thanks for reaching out. I’ll get back to you soon.</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-5 py-2 rounded-lg border border-white/20 text-white hover:border-brand-red hover:text-brand-red transition-colors text-sm"
                >
                  Send another message
                </button>
              </div>
            )}
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <div className="glass-panel rounded-2xl p-6 border border-white/10">
              <h3 className="text-xl font-bold mb-2">Direct Contact</h3>
              <p className="text-gray-300 text-sm mb-4">Prefer a quick chat? Reach out directly.</p>
              <div className="space-y-3 text-sm">
                <a href="mailto:hello@pranavjoseph.com" className="block text-white hover:text-brand-red transition-colors">
                  📧 hello@pranavjoseph.com
                </a>
                <a href="tel:+447979652283" className="block text-white hover:text-brand-red transition-colors">
                  📱 +44 7979 652 283
                </a>
                <a
                  href="https://www.linkedin.com/in/pranav-joseph/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-white hover:text-brand-red transition-colors"
                >
                  💼 LinkedIn Profile
                </a>
              </div>
            </div>

            <div className="glass-panel rounded-2xl p-6 border border-white/10">
              <h3 className="text-xl font-bold mb-2">Quick Links</h3>
              <div className="flex flex-wrap gap-3">
                <Link to="/fullstack-developer" className="px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-sm hover:border-brand-red transition-colors">
                  Full Stack
                </Link>
                <Link to="/nodejs-developer" className="px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-sm hover:border-brand-red transition-colors">
                  Node.js
                </Link>
                <Link to="/react-developer" className="px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-sm hover:border-brand-red transition-colors">
                  React
                </Link>
                <Link to="/laravel-developer" className="px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-sm hover:border-brand-red transition-colors">
                  Laravel
                </Link>
                <Link to="/about" className="px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-sm hover:border-brand-red transition-colors">
                  About Me
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default ContactPage;
