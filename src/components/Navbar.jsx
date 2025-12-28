import { Link, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";

function Navbar() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Refs for animations
  const menuRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
      // GSAP Animation for Menu Open
      gsap.to(menuRef.current, {
        duration: 0.5,
        opacity: 1,
        visibility: "visible",
        ease: "power3.inOut",
      });
      gsap.fromTo(".mobile-link", { y: 20, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.1, duration: 0.4, delay: 0.2, ease: "back.out(1.7)" });
    } else {
      document.body.style.overflow = "unset";
      // GSAP Animation for Menu Close
      gsap.to(menuRef.current, {
        duration: 0.4,
        opacity: 0,
        visibility: "hidden",
        ease: "power3.inOut",
      });
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
  ];

  const serviceLinks = [
    { name: "Full Stack Dev", path: "/fullstack-developer", icon: "🛠️" },
    { name: "Node.js Dev", path: "/nodejs-developer", icon: "⚙️" },
    { name: "Laravel Dev", path: "/laravel-developer", icon: "🔧" },
    { name: "PHP Dev", path: "/php-developer", icon: "🐘" },
    { name: "WordPress Dev", path: "/wordpress-developer", icon: "📝" },
    { name: "Frontend Dev", path: "/frontend-developer", icon: "🎨" },
    { name: "React Dev", path: "/react-developer", icon: "⚛️" },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled || isMenuOpen ? "bg-brand-black/80 backdrop-blur-md shadow-sm py-3 border-b border-white/10" : "bg-transparent py-5"}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="group relative z-50">
            <span className="text-xl font-bold text-white">Pranav Joseph</span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-1 bg-white/5 p-1.5 rounded-full border border-white/15 backdrop-blur-sm shadow-sm transition-all duration-300 hover:shadow-md hover:border-white/25">
              {navLinks.map((link) => (
                <Link key={link.path} to={link.path} className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 relative overflow-hidden group ${location.pathname === link.path ? "text-brand-red bg-white/10 shadow-sm" : "text-gray-200 hover:text-brand-red"}`}>
                  <span className="relative z-10">{link.name}</span>
                  {location.pathname !== link.path && <span className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></span>}
                </Link>
              ))}

              {/* Services Dropdown */}
              <div className="relative group">
                <button className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-1.5 group ${location.pathname.includes("-developer") ? "text-brand-red bg-white/10 shadow-sm" : "text-gray-200 hover:text-brand-red"}`}>
                  Services
                  <svg className="w-3 h-3 transition-transform duration-300 group-hover:rotate-180 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>

                {/* Dropdown Content */}
                <div className="absolute top-full right-0 pt-4 w-60 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-right group-hover:translate-y-0 translate-y-2 pointer-events-none group-hover:pointer-events-auto">
                  <div className="bg-brand-black/95 rounded-2xl shadow-xl border border-white/10 overflow-hidden backdrop-blur-xl">
                    {serviceLinks.map((service) => (
                      <Link key={service.path} to={service.path} className="flex items-center gap-3 px-4 py-3 text-sm text-gray-200 hover:bg-white/5 transition-colors border-b border-white/5 last:border-0">
                        <span className="text-lg">{service.icon}</span>
                        <span className="font-medium">{service.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <Link to="/contact" className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 relative overflow-hidden group ${location.pathname === "/contact" ? "text-brand-red bg-white/10 shadow-sm" : "text-gray-200 hover:text-brand-red"}`}>
                <span className="relative z-10">Contact</span>
                {location.pathname !== "/contact" && <span className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></span>}
              </Link>
            </div>
          </div>

          {/* Mobile Toggle */}
          <div className="flex items-center gap-4 md:hidden">
            <button className="relative z-50 p-2 text-white focus:outline-none" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
              <div className="w-6 flex flex-col items-end gap-1.5">
                <span className={`h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? "w-6 rotate-45 translate-y-2" : "w-6"}`}></span>
                <span className={`h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? "opacity-0" : "w-4"}`}></span>
                <span className={`h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? "w-6 -rotate-45 -translate-y-2" : "w-5"}`}></span>
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div ref={menuRef} className="fixed inset-0 bg-brand-black/95 backdrop-blur-2xl z-40 flex flex-col items-center justify-center opacity-0 invisible">
        <div className="absolute top-0 left-0 right-0 p-6 flex justify-between items-center md:hidden">
          <span className="text-xl font-bold bg-gradient-to-r from-brand-red to-white/80 bg-clip-text text-transparent">Pranav Joseph</span>
          {/* Close button is handled by the hamburger z-index above */}
        </div>

        <div className="w-full max-w-sm px-6 space-y-6 text-center">
          {navLinks.map((link) => (
            <Link key={link.path} to={link.path} className="mobile-link block text-2xl font-bold text-white hover:text-brand-red transition-colors">
              {link.name}
            </Link>
          ))}

          <div className="mobile-link space-y-4 pt-4 border-t border-gray-100 dark:border-gray-800">
            <p className="text-xs font-bold tracking-widest text-gray-400 uppercase">Services</p>
            <div className="grid grid-cols-2 gap-3">
              {serviceLinks.map((service) => (
                <Link key={service.path} to={service.path} className="flex flex-col items-center justify-center p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors text-white">
                  <span className="text-xl mb-1">{service.icon}</span>
                  <span className="text-xs font-medium text-gray-200">{service.name}</span>
                </Link>
              ))}
            </div>
          </div>

          <Link to="/contact" className="mobile-link block w-full py-4 bg-gradient-to-r from-brand-red to-red-500 text-white rounded-xl text-lg font-bold shadow-lg shadow-red-500/30 transform transition-transform active:scale-95">
            Contact Me
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
