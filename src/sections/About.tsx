import { motion } from "framer-motion";
import {
  FiCode,
  FiAward,
  FiBookOpen,
  FiTerminal,
  FiActivity,
  FiStar,
  FiExternalLink,
} from "react-icons/fi";
import NewgenLogo from "@/assets/NewGenLogo.png";
import NewgenDarkLogo from "@/assets/NewgenDarkLogo.jpg";
import { useEffect, useState } from "react";

// ── Stagger container variants ──────────────────────────────────────────────
const bentoContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
};

const bentoItem = {
  hidden: { opacity: 0, y: 28, scale: 0.97 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 260, damping: 22 },
  },
};

// ── Word-by-word heading reveal ──────────────────────────────────────────────
const WordReveal = ({ words, className }: { words: string[]; className?: string }) => (
  <span className={className}>
    {words.map((word, i) => (
      <motion.span
        key={i}
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 + i * 0.07, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="inline-block mr-[0.25em]"
      >
        {word}
      </motion.span>
    ))}
  </span>
);

// ── Skill pill stagger ───────────────────────────────────────────────────────
const pillContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06, delayChildren: 0.3 } },
};
const pillItem = {
  hidden: { opacity: 0, scale: 0.8, y: 8 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 20 },
  },
};

const About = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const checkDarkMode = () =>
      setIsDarkMode(document.documentElement.classList.contains("dark"));
    checkDarkMode();
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);

  const skills = ["React Native", "Spring Boot", "Java", "Node.js", "MongoDB"];

  return (
    <section
      id="about"
      className="py-32 relative overflow-hidden bg-white dark:bg-[#020617]"
    >
      {/* Ambient glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">

          {/* ── LEFT SIDE ─────────────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: -40, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="lg:w-1/3 space-y-6"
          >
            <div className="space-y-2">
              <motion.h2
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="text-sm font-bold uppercase tracking-[0.3em] text-blue-600"
              >
                The Architect
              </motion.h2>

              <h3 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight">
                <WordReveal words={["Solving", "complex"]} />
                <br />
                <WordReveal words={["problems", "with"]} />
                <br />
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.45, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500"
                >
                  Elegant Code.
                </motion.span>
              </h3>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35, duration: 0.55 }}
              className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed"
            >
              I'm a software engineer focused on building scalable mobile and
              backend systems. At Newgen Software, I develop cross-platform
              applications using
              <span className="font-semibold text-slate-900 dark:text-white"> React Native </span>
              and design enterprise-grade APIs with
              <span className="font-semibold text-slate-900 dark:text-white"> Spring Boot </span>
              . My work revolves around performance optimization, clean
              architecture, and delivering reliable production-ready systems.
            </motion.p>

            <motion.div
              variants={pillContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="pt-4 flex flex-wrap gap-3"
            >
              {[
                { icon: <FiActivity className="text-emerald-500" />, label: "High Five Awarded" },
                { icon: <FiStar className="text-amber-500" />, label: "6★ HackerRank" },
              ].map(({ icon, label }) => (
                <motion.div
                  key={label}
                  variants={pillItem}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-bold text-slate-600 dark:text-slate-400"
                >
                  {icon} {label}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── RIGHT SIDE: BENTO GRID ────────────────────────────────────── */}
          <motion.div
            variants={bentoContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="lg:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[160px]"
          >
            {/* Experience Tile */}
            <BentoTile className="md:col-span-2 md:row-span-2 bg-slate-50 dark:bg-slate-900/50 border-slate-200 dark:border-white/5 overflow-hidden group p-0">
              <a
                href="https://newgensoft.com/in/"
                target="_blank"
                rel="noopener noreferrer"
                className="h-full w-full p-6 flex flex-col cursor-pointer"
              >
                <div className="h-full flex flex-col">
                  <div className="flex justify-between items-start mb-6">
                    <div className="relative w-40 h-20 flex items-center justify-center rounded-2xl bg-white shadow-md dark:bg-slate-800 border border-slate-100 dark:border-white/10 transition-transform group-hover:scale-105 overflow-hidden">
                      <img
                        src={isDarkMode ? NewgenDarkLogo : NewgenLogo}
                        alt="Newgen Software"
                        className="w-full h-full object-cover"
                      />
                      <motion.div
                        initial={{ x: "-100%", opacity: 0 }}
                        whileHover={{ x: "100%", opacity: 1 }}
                        transition={{ duration: 0.55, ease: "easeInOut" }}
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[-20deg] pointer-events-none"
                      />
                    </div>

                    <motion.div
                      initial={{ opacity: 0, x: 12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 }}
                      className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100 dark:bg-orange-500/20 text-orange-600 dark:text-orange-400 text-[10px] font-bold uppercase tracking-wider"
                    >
                      <FiAward /> Performance Award
                    </motion.div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-2xl font-black text-slate-900 dark:text-white flex items-center gap-2">
                        Software Engineer
                        <span className="text-sm font-medium text-slate-400">
                          @ Newgen Software
                        </span>
                      </h4>
                      <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mt-1">
                        Jul 2025 — Present
                      </p>
                    </div>

                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      Building enterprise mobile applications using
                      <span className="font-semibold text-slate-900 dark:text-white"> React Native </span>
                      while designing scalable backend services with
                      <span className="font-semibold text-slate-900 dark:text-white"> Spring Boot </span>
                      . Contributing across the full development lifecycle including architecture, performance optimization, and deployment.
                    </p>

                    <div className="flex gap-4 pt-2">
                      {[
                        { label: "API", sub: "Optimization" },
                        { label: "REST", sub: "Architecture" },
                      ].map(({ label, sub }, i) => (
                        <div key={label} className="flex items-center gap-4">
                          {i > 0 && <div className="w-px h-8 bg-slate-200 dark:bg-white/10" />}
                          <div className="flex flex-col">
                            <motion.span
                              initial={{ opacity: 0, y: 8 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.5 + i * 0.1, type: "spring", stiffness: 200 }}
                              className="text-xl font-bold text-slate-900 dark:text-white"
                            >
                              {label}
                            </motion.span>
                            <span className="text-[10px] text-slate-500 uppercase font-bold">
                              {sub}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.2, rotate: -12 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                    className="absolute bottom-6 right-6"
                  >
                    <FiExternalLink
                      className="text-slate-200 dark:text-white/5 group-hover:text-blue-500 transition-colors"
                      size={40}
                    />
                  </motion.div>
                </div>
              </a>
            </BentoTile>

            {/* HackerRank Tile */}
            <BentoTile className="bg-slate-50 dark:bg-slate-900 border-slate-100 dark:border-slate-800">
              <motion.div
                initial={{ scale: 0, rotate: -15 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 260, damping: 16, delay: 0.1 }}
              >
                <FiTerminal size={24} className="text-blue-500 mb-4" />
              </motion.div>
              <h4 className="text-xl font-bold dark:text-white">6 ★</h4>
              <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">
                HackerRank Problem Solving
              </p>
            </BentoTile>

            {/* Education Tile */}
            <BentoTile className="bg-slate-50 dark:bg-slate-900 border-slate-100 dark:border-slate-800">
              <motion.div
                initial={{ scale: 0, rotate: 15 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 260, damping: 16, delay: 0.15 }}
              >
                <FiBookOpen size={24} className="text-purple-500 mb-4" />
              </motion.div>
              <h4 className="text-xl font-bold dark:text-white">B.Tech CSE</h4>
              <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">
                CGPA: 7.59
              </p>
              <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">
                PSIT, Kanpur
              </p>
            </BentoTile>

            {/* Skills Tile */}
            <BentoTile className="md:col-span-2 bg-white dark:bg-slate-950 border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-4 h-full">
                <div className="flex-1 space-y-2">
                  <h4 className="text-sm font-bold dark:text-white uppercase tracking-wider">
                    Core Stack
                  </h4>
                  <motion.div
                    variants={pillContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="flex flex-wrap gap-2"
                  >
                    {skills.map((s) => (
                      <motion.span
                        key={s}
                        variants={pillItem}
                        whileHover={{ scale: 1.08, y: -2 }}
                        className="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-[10px] font-bold rounded-md dark:text-slate-400 cursor-default"
                      >
                        {s}
                      </motion.span>
                    ))}
                  </motion.div>
                </div>
                <div className="w-px h-full bg-slate-100 dark:bg-slate-800" />
                <div className="flex-1 text-center">
                  <motion.p
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 200, damping: 14, delay: 0.3 }}
                    className="text-2xl font-black text-blue-600"
                  >
                    GATE
                  </motion.p>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                    2025 Qualified
                  </p>
                </div>
              </div>
            </BentoTile>

            {/* Quote Tile */}
            <BentoTile className="bg-emerald-500/5 dark:bg-emerald-500/10 border-emerald-500/20">
              <motion.div
                initial={{ scale: 0, rotate: -20 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 240, damping: 14, delay: 0.1 }}
              >
                <FiCode size={24} className="text-emerald-500 mb-4" />
              </motion.div>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.35, duration: 0.6 }}
                className="text-xs italic text-slate-600 dark:text-slate-400"
              >
                "Great software isn't just built — it's engineered for scale."
              </motion.p>
            </BentoTile>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const BentoTile = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <motion.div
    variants={bentoItem}
    whileHover={{
      y: -6,
      scale: 1.015,
      transition: { type: "spring", stiffness: 320, damping: 20 },
    }}
    className={`p-6 rounded-[2rem] border shadow-sm flex flex-col justify-center relative ${className}`}
  >
    {children}
  </motion.div>
);

export default About;