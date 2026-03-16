import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiArrowUpRight, FiCopy } from "react-icons/fi";
import { useState } from "react";

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const email = "singh.787898.harshit@gmail.com";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contact"
      className="py-20 md:py-32 relative overflow-hidden bg-slate-50/50 dark:bg-[#020617]"
    >
      {/* Subtle Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-800 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6">
              Let’s build something <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500 dark:from-blue-400 dark:to-purple-400">
                extraordinary together.
              </span>
            </h2>
            <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 mb-10 md:mb-12 max-w-xl mx-auto">
              Currently open to new opportunities and interesting mobile
              projects. My inbox is always open.
            </p>
          </motion.div>

          {/* MAIN CONTACT CARD */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative p-[1px] rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden group shadow-sm hover:shadow-xl transition-shadow duration-500"
          >
            {/* Border Layer: Animated for Dark, Solid Indigo for Light */}
            <div className="absolute inset-0 dark:hidden bg-slate-200 group-hover:bg-indigo-500 transition-colors duration-500" />
            <div className="absolute inset-0 hidden dark:block">
              <div className="absolute inset-[-1000%] animate-[spin_6s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#0f172a_0%,#3b82f6_50%,#0f172a_100%)] opacity-40" />
            </div>

            <div className="relative bg-white dark:bg-[#0a0a0a] rounded-[1.45rem] md:rounded-[2.4rem] p-8 md:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 z-10">
              <div className="text-center lg:text-left w-full lg:w-auto">
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-3">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <p className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-indigo-600 dark:text-blue-400">
                    Available for projects
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-800 dark:text-white">
                    {email}
                  </h3>
                  <button
                    onClick={copyToClipboard}
                    className="p-2 rounded-xl bg-slate-50 dark:bg-slate-800 hover:bg-indigo-50 dark:hover:bg-blue-900/30 transition-colors text-slate-400 hover:text-indigo-600 dark:hover:text-blue-400"
                  >
                    {copied ? (
                      <span className="text-xs font-bold px-1">Copied!</span>
                    ) : (
                      <FiCopy size={18} />
                    )}
                  </button>
                </div>
              </div>

              {/* Professional Adaptive Button */}
              <motion.a
                href={`mailto:${email}`}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group/btn relative inline-flex items-center justify-center px-10 py-4 rounded-xl overflow-hidden transition-all duration-300 shadow-sm hover:shadow-indigo-200/50 dark:hover:shadow-none"
              >
                {/* 1. LIGHT MODE BORDER BEAM: Soft Indigo to Blue */}
                <div className="absolute inset-0 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500 dark:hidden">
                  <div className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#e0e7ff_0%,#4f46e5_50%,#e0e7ff_100%)]" />
                </div>

                {/* 2. DARK MODE BORDER BEAM: The existing Blue effect */}
                <div className="absolute inset-0 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500 hidden dark:block">
                  <div className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#1e293b_0%,#3b82f6_50%,#1e293b_100%)]" />
                </div>

                {/* 3. INNER SHIELD: Maintains solid color inside the moving border */}
                {/* Light mode uses white/indigo-50, Dark mode uses deep black */}
                <div className="absolute inset-[1.5px] bg-white dark:bg-[#0a0a0a] rounded-[10px] z-0 transition-colors duration-300" />

                <div className="relative z-20 flex items-center gap-3">
                  {/* 4. TEXT COLORS: Indigo for Light, White for Dark */}
                  <span className="font-bold tracking-tight text-indigo-600 dark:text-white transition-colors group-hover/btn:text-indigo-700 dark:group-hover/btn:text-white">
                    Send Message
                  </span>

                  <FiArrowUpRight
                    size={18}
                    className="text-indigo-400 dark:text-indigo-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-0.5 transition-transform duration-300"
                  />
                </div>
              </motion.a>
            </div>
          </motion.div>

          {/* SOCIAL LINKS GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8">
            <SocialLink
              href="https://github.com/Harshit787898"
              icon={<FiGithub />}
              label="GitHub"
              sub="Source Code"
              index={0}
            />
            <SocialLink
              href="https://linkedin.com"
              icon={<FiLinkedin />}
              label="LinkedIn"
              sub="Professional"
              index={1}
            />
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative flex flex-row sm:flex-col items-center justify-center gap-4 sm:gap-2 p-6 rounded-3xl overflow-hidden group border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/30 shadow-sm sm:col-span-2 md:col-span-1"
            >
              {/* 1. Subtle Animated Background Glow (only on hover) */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 to-blue-50/50 dark:from-indigo-500/5 dark:to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* 2. Radar Pulse Icon */}
              <div className="relative flex items-center justify-center w-10 h-10">
                {/* Concentric pulse circles */}
                <span className="absolute inline-flex h-full w-full rounded-full bg-indigo-400 dark:bg-blue-500 opacity-20 animate-ping" />
                <span className="absolute inline-flex h-6 w-6 rounded-full bg-indigo-400/40 dark:bg-blue-500/40 animate-[ping_2s_linear_infinite]" />

                {/* The Center Point */}
                <div className="relative w-3 h-3 rounded-full bg-indigo-600 dark:bg-blue-500 shadow-[0_0_10px_rgba(79,70,229,0.6)]" />
              </div>

              <div className="text-left sm:text-center z-10">
                <p className="text-[10px] font-black text-indigo-600 dark:text-blue-400 uppercase tracking-[0.2em] mb-0.5">
                  Location
                </p>
                <p className="text-sm font-bold text-slate-800 dark:text-white group-hover:text-indigo-700 dark:group-hover:text-blue-300 transition-colors">
                  Noida, India
                </p>
              </div>

              {/* 3. Bottom Border Accent */}
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-indigo-200 dark:via-blue-500/40 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            </motion.div>
          </div>

          <p className="mt-20 text-xs md:text-sm text-slate-400 dark:text-slate-600">
            © {new Date().getFullYear()} Harshit Singh. Built with React &
            Tailwind.
          </p>
        </div>
      </div>
    </section>
  );
};

const SocialLink = ({ href, icon, label, sub, index }: any) => (
  <motion.a
    href={href}
    target="_blank"
    initial={{ opacity: 0, x: 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: false }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    whileHover={{ y: -5 }}
    className="flex items-center gap-4 p-5 md:p-6 rounded-3xl bg-white dark:bg-slate-900/30 border border-slate-200 dark:border-slate-800 hover:border-indigo-300 dark:hover:border-blue-500/30 transition-all text-left group shadow-sm hover:shadow-md"
  >
    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-lg text-slate-600 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-blue-400 transition-colors flex-shrink-0">
      {icon}
    </div>
    <div className="min-w-0">
      <p className="text-sm font-bold text-slate-800 dark:text-white truncate">
        {label}
      </p>
      <p className="text-[11px] text-slate-500 truncate">{sub}</p>
    </div>
  </motion.a>
);

export default Contact;
