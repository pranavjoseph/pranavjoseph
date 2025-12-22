import { Link } from "react-router-dom";
import Layout from "../../components/Layout";
import { useState, useRef, useLayoutEffect, lazy, Suspense } from "react";
import gsap from "gsap";
// Lazy load ThreeBackground
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

  const containerRef = useRef(null);
  const formRef = useRef(null);
  const successRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Entry Animations
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(".contact-title", { y: -30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }).fromTo(".contact-desc", { y: -20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, "-=0.6").fromTo(".left-col", { x: -50, opacity: 0 }, { x: 0, opacity: 1, duration: 0.8 }, "-=0.4").fromTo(".right-col", { x: 50, opacity: 0 }, { x: 0, opacity: 1, duration: 0.8 }, "-=0.6").fromTo(".contact-link", { y: 20, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.1, duration: 0.5 }, "-=0.4");
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Clear error when user starts typing
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: null });
    }
  };

  const validateForm = () => {
    let newErrors = {};
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
    if (!validateForm()) {
      // Shake animation on error
      gsap.to(formRef.current, { x: [-10, 10, -10, 10, 0], duration: 0.4, ease: "power2.inOut" });
      return;
    }

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
        // Success Animation
        gsap.to(formRef.current, {
          opacity: 0,
          scale: 0.9,
          duration: 0.4,
          onComplete: () => {
            setSubmitted(true);
            setFormData({ name: "", email: "", message: "" });
            // Animate success message in
            setTimeout(() => {
              gsap.fromTo(successRef.current, { scale: 0.5, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.6, ease: "back.out(1.7)" });
            }, 100);
          },
        });
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
      <title>Contact Freelance Web Developer | Pranav Joseph</title>
      <meta name="description" content="Get in touch with Pranav Joseph, freelance web developer." />

      {/* Three.js Background Layer */}
      <div className="fixed inset-0 z-0 opacity-40 pointer-events-none">
        <Suspense fallback={null}>
          <ThreeBackground />
        </Suspense>
      </div>

      {/* Page Container */}
      <div ref={containerRef} className="relative z-10 transition-colors duration-300 h-screen overflow-y-auto overflow-x-hidden flex flex-col">
        {/* Header Section - Compact */}
        <div className="px-6 pt-20 pb-4 text-center max-w-4xl mx-auto flex-shrink-0">
          <div className="text-center md:text-left">
            <h1 className="contact-title text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">Let's Connect</h1>
            <p className="contact-desc text-lg text-gray-600 dark:text-gray-300 max-w-2xl">Have a project in mind? I'm available for freelance work. 🚀</p>
          </div>
        </div>

        {/* Main Content - Centered & Scrollable only if needed on very small screens (but hidden by default request) */}
        <div className="w-full max-w-6xl mx-auto grid md:grid-cols-2 gap-8 px-6 pb-8 items-center flex-grow">
          {/* LEFT SIDE - Contact Info */}
          <div className="left-col min-w-0 flex justify-center flex-col h-full">
            {!submitted ? (
              <form ref={formRef} onSubmit={handleSubmit} className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-md border border-white/20 dark:border-gray-700 p-6 rounded-3xl shadow-2xl space-y-4">
                <input type="hidden" name="form-name" value="contact" />

                <div>
                  <label className="block text-gray-700 dark:text-gray-300 mb-1 font-bold text-xs uppercase tracking-wider">Name</label>
                  <input type="text" name="name" value={formData.name} className={`w-full px-4 py-2 rounded-xl border ${errors.name ? "border-red-500 ring-1 ring-red-500" : "border-gray-200 dark:border-gray-600"} bg-gray-50 dark:bg-gray-900/50 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-sm`} placeholder="John Doe" onChange={handleChange} />
                  {errors.name && <p className="text-red-500 text-xs mt-0.5 ml-1">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-gray-700 dark:text-gray-300 mb-1 font-bold text-xs uppercase tracking-wider">Email</label>
                  <input type="email" name="email" value={formData.email} className={`w-full px-4 py-2 rounded-xl border ${errors.email ? "border-red-500 ring-1 ring-red-500" : "border-gray-200 dark:border-gray-600"} bg-gray-50 dark:bg-gray-900/50 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-sm`} placeholder="john@example.com" onChange={handleChange} />
                  {errors.email && <p className="text-red-500 text-xs mt-0.5 ml-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-gray-700 dark:text-gray-300 mb-1 font-bold text-xs uppercase tracking-wider">Message</label>
                  <textarea name="message" rows="3" value={formData.message} className={`w-full px-4 py-2 rounded-xl border ${errors.message ? "border-red-500 ring-1 ring-red-500" : "border-gray-200 dark:border-gray-600"} bg-gray-50 dark:bg-gray-900/50 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none text-sm`} placeholder="Drop a hi.." onChange={handleChange}></textarea>
                  {errors.message && <p className="text-red-500 text-xs mt-0.5 ml-1">{errors.message}</p>}
                </div>

                <button type="submit" disabled={isSending} className={`w-full py-3 px-6 rounded-xl font-bold text-base shadow-lg transform transition-all duration-200 ${isSending ? "bg-gray-400 cursor-not-allowed" : "bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 hover:shadow-xl hover:-translate-y-1"}`}>
                  {isSending ? "Sending..." : "Send Message 🚀"}
                </button>
              </form>
            ) : (
              <div ref={successRef} className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 p-8 rounded-3xl shadow-xl text-center">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">✅</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Message Sent!</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Thanks for reaching out. I'll get back to you soon!</p>
                <button onClick={() => setSubmitted(false)} className="mt-4 text-blue-600 dark:text-blue-400 font-semibold hover:underline text-sm">
                  Send another message
                </button>
              </div>
            )}
          </div>

          {/* RIGHT SIDE - Contact Form */}

          <div className="right-col min-w-0">
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border border-white/20 dark:border-gray-700 p-6 rounded-3xl shadow-xl w-full">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Get In Touch</h3>
              <div className="space-y-4">
                <a href="mailto:hello@pranavjoseph.com" className="contact-link group flex items-center space-x-3 p-3 rounded-xl bg-gray-50 dark:bg-gray-700/50 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300">
                  <span className="text-2xl group-hover:scale-110 transition-transform duration-300">📧</span>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400 font-semibold">Email Me</p>
                    <p className="font-mono text-sm text-gray-800 dark:text-gray-200">hello@pranavjoseph.com</p>
                  </div>
                </a>

                <a href="tel:+447979652283" className="contact-link group flex items-center space-x-3 p-3 rounded-xl bg-gray-50 dark:bg-gray-700/50 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300">
                  <span className="text-2xl group-hover:scale-110 transition-transform duration-300">📱</span>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400 font-semibold">Call Me</p>
                    <p className="font-mono text-sm text-gray-800 dark:text-gray-200">+44 7979 652 283</p>
                  </div>
                </a>

                <a href="https://www.linkedin.com/in/pranav-joseph/" target="_blank" rel="noopener noreferrer" className="contact-link group flex items-center space-x-3 p-3 rounded-xl bg-gray-50 dark:bg-gray-700/50 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300">
                  <span className="text-2xl group-hover:scale-110 transition-transform duration-300">💼</span>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400 font-semibold">Connect</p>
                    <p className="text-sm text-gray-800 dark:text-gray-200 font-semibold">LinkedIn Profile</p>
                  </div>
                </a>

                <a href="https://maps.app.goo.gl/me91hsyHNsmcezZL6" target="_blank" rel="noopener noreferrer" className="contact-link group flex items-center space-x-3 p-3 rounded-xl bg-gray-50 dark:bg-gray-700/50 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300">
                  <span className="relative flex h-6 w-6 items-center justify-center">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-20"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
                  </span>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400 font-semibold">Location</p>
                    <p className="text-sm text-gray-800 dark:text-gray-200 font-semibold">Southampton, UK</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ContactPage;
