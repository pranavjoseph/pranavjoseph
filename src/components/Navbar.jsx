import { Link, useLocation } from "react-router-dom";
import { useTheme } from "./ThemeProvider";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";

function Navbar() {
    const { theme, toggleTheme } = useTheme();
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
            document.body.style.overflow = 'hidden';
            // GSAP Animation for Menu Open
            gsap.to(menuRef.current, {
                duration: 0.5,
                opacity: 1,
                visibility: 'visible',
                ease: "power3.inOut"
            });
            gsap.fromTo(".mobile-link",
                { y: 20, opacity: 0 },
                { y: 0, opacity: 1, stagger: 0.1, duration: 0.4, delay: 0.2, ease: "back.out(1.7)" }
            );
        } else {
            document.body.style.overflow = 'unset';
            // GSAP Animation for Menu Close
            gsap.to(menuRef.current, {
                duration: 0.4,
                opacity: 0,
                visibility: 'hidden',
                ease: "power3.inOut"
            });
        }
        return () => {
            document.body.style.overflow = 'unset';
        }
    }, [isMenuOpen]);

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
    ];

    const serviceLinks = [
        { name: "Full Stack Dev", path: "/fullstack-developer", icon: "🛠️" },
        { name: "Node.js Dev", path: "/nodejs-developer", icon: "⚙️" },
        { name: "React Dev", path: "/react-developer", icon: "⚛️" },
        { name: "Laravel Dev", path: "/laravel-developer", icon: "🔧" },
        { name: "PHP Dev", path: "/php-developer", icon: "🐘" },
        { name: "WordPress Dev", path: "/wordpress-developer", icon: "📝" },
    ];

    return (
        <>
            <nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled || isMenuOpen
                        ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm py-3 border-b border-gray-100 dark:border-gray-800"
                        : "bg-transparent py-5"
                    }`}
            >
                <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

                    {/* Logo */}
                    <Link to="/" className="group relative z-50">
                        <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent group-hover:opacity-80 transition-opacity">
                            Pranav Joseph
                        </span>
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-400 transition-all duration-300 group-hover:w-full"></span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-6">
                        <div className="flex items-center gap-1 bg-white/50 dark:bg-gray-800/50 p-1.5 rounded-full border border-gray-200 dark:border-gray-700/50 backdrop-blur-sm shadow-sm transition-all duration-300 hover:shadow-md hover:border-gray-300 dark:hover:border-gray-600">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 relative overflow-hidden group ${location.pathname === link.path
                                            ? "text-blue-600 dark:text-blue-400 bg-white dark:bg-gray-800 shadow-sm"
                                            : "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                                        }`}
                                >
                                    <span className="relative z-10">{link.name}</span>
                                    {location.pathname !== link.path && (
                                        <span className="absolute inset-0 bg-gray-100 dark:bg-gray-700/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></span>
                                    )}
                                </Link>
                            ))}

                            {/* Services Dropdown */}
                            <div className="relative group">
                                <button className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-1.5 group ${location.pathname.includes("-developer")
                                        ? "text-blue-600 dark:text-blue-400 bg-white dark:bg-gray-800 shadow-sm"
                                        : "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                                    }`}>
                                    Services
                                    <svg className="w-3 h-3 transition-transform duration-300 group-hover:rotate-180 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                </button>

                                {/* Dropdown Content */}
                                <div className="absolute top-full right-0 pt-4 w-60 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-right group-hover:translate-y-0 translate-y-2 pointer-events-none group-hover:pointer-events-auto">
                                    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 overflow-hidden backdrop-blur-xl">
                                        {serviceLinks.map((service) => (
                                            <Link
                                                key={service.path}
                                                to={service.path}
                                                className="flex items-center gap-3 px-4 py-3 text-sm text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors border-b border-gray-50 dark:border-gray-700/50 last:border-0"
                                            >
                                                <span className="text-lg">{service.icon}</span>
                                                <span className="font-medium">{service.name}</span>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <Link
                                to="/contact"
                                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 relative overflow-hidden group ${location.pathname === "/contact"
                                        ? "text-blue-600 dark:text-blue-400 bg-white dark:bg-gray-800 shadow-sm"
                                        : "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                                    }`}
                            >
                                <span className="relative z-10">Contact</span>
                                {location.pathname !== "/contact" && (
                                    <span className="absolute inset-0 bg-gray-100 dark:bg-gray-700/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></span>
                                )}
                            </Link>
                        </div>

                        {/* Dark Mode Toggle */}
                        <button
                            onClick={toggleTheme}
                            className="p-2.5 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300 focus:outline-none"
                            aria-label="Toggle dark mode"
                        >
                            {theme === "light" ? (
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>
                            ) : (
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
                            )}
                        </button>
                    </div>

                    {/* Mobile Toggle */}
                    <div className="flex items-center gap-4 md:hidden">
                        <button
                            onClick={toggleTheme}
                            className="p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
                        >
                            {theme === "light" ? "🌙" : "☀️"}
                        </button>
                        <button
                            className="relative z-50 p-2 text-gray-800 dark:text-white focus:outline-none"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-label="Toggle menu"
                        >
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
            <div
                ref={menuRef}
                className="fixed inset-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-2xl z-40 flex flex-col items-center justify-center opacity-0 invisible"
            >
                <div className="absolute top-0 left-0 right-0 p-6 flex justify-between items-center md:hidden">
                    <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Pranav Joseph</span>
                    {/* Close button is handled by the hamburger z-index above */}
                </div>

                <div className="w-full max-w-sm px-6 space-y-6 text-center">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className="mobile-link block text-2xl font-bold text-gray-800 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}

                    <div className="mobile-link space-y-4 pt-4 border-t border-gray-100 dark:border-gray-800">
                        <p className="text-xs font-bold tracking-widest text-gray-400 uppercase">Services</p>
                        <div className="grid grid-cols-2 gap-3">
                            {serviceLinks.map((service) => (
                                <Link
                                    key={service.path}
                                    to={service.path}
                                    className="flex flex-col items-center justify-center p-3 rounded-xl bg-gray-50 dark:bg-gray-800/50 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
                                >
                                    <span className="text-xl mb-1">{service.icon}</span>
                                    <span className="text-xs font-medium text-gray-600 dark:text-gray-300">{service.name}</span>
                                </Link>
                            ))}
                        </div>
                    </div>

                    <Link
                        to="/contact"
                        className="mobile-link block w-full py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl text-lg font-bold shadow-lg shadow-blue-500/30 transform transition-transform active:scale-95"
                    >
                        Contact Me
                    </Link>
                </div>
            </div>
        </>
    );
}

export default Navbar;
