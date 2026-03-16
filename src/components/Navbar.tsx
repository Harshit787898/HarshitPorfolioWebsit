import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
  { label: "About", link: "#about" },
  { label: "Badges", link: "#badges"},
  { label: "Skills", link: "#skills" },
  { label: "Projects", link: "#projects" },
  { label: "Experience", link: "#experience" },
  { label: "Contact", link: "#contact" },
];

const Navbar = () => {
  const [isDark, setIsDark] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle Dark Mode Initialization & Persistence
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  };

  // Handle Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "backdrop-blur-xl bg-white/70 dark:bg-[#020617]/70 border-b border-slate-200 dark:border-slate-800 shadow-sm"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between h-20">
        
        {/* LOGO */}
        <a href="#home" className="text-2xl font-extrabold tracking-tighter text-slate-900 dark:text-white relative z-50">
          Harshit<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">.</span>
        </a>

        {/* DESKTOP NAVIGATION */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((item) => (
            <NavItem key={item.label} label={item.label} link={item.link} />
          ))}

          {/* Theme Toggle (Desktop) */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleTheme}
            className="p-2.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            aria-label="Toggle Dark Mode"
          >
            {isDark ? <FaSun size={18} /> : <FaMoon size={18} />}
          </motion.button>
        </div>

        {/* MOBILE MENU BUTTON */}
        <div className="md:hidden flex items-center gap-4 relative z-50">
          <button
            onClick={toggleTheme}
            className="p-2 text-slate-600 dark:text-slate-300"
          >
            {isDark ? <FaSun size={20} /> : <FaMoon size={20} />}
          </button>
          
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-slate-900 dark:text-white"
          >
            {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute top-0 left-0 w-full bg-white dark:bg-[#020617] border-b border-slate-200 dark:border-slate-800 pt-24 px-6 flex flex-col gap-6"
          >
            {navLinks.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-2xl font-semibold text-slate-800 dark:text-slate-200 border-b border-slate-100 dark:border-slate-800 pb-4"
              >
                {item.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

/* ---------- NAV ITEM COMPONENT ---------- */
const NavItem = ({ label, link }: { label: string; link: string }) => {
  return (
    <a
      href={link}
      className="relative text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors group py-2"
    >
      {label}
      {/* Animated Underline */}
      <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full transition-all duration-300 group-hover:w-full"></span>
    </a>
  );
};

export default Navbar;