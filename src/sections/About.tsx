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

const About = () => {
  return (
    <section
      id="about"
      className="py-32 relative overflow-hidden bg-white dark:bg-[#020617]"
    >
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* LEFT SIDE: THE STORY */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/3 space-y-6"
          >
            <div className="space-y-2">
              <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-blue-600">
                The Architect
              </h2>
              <h3 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight">
                Solving complex <br /> problems with <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">
                  Elegant Code.
                </span>
              </h3>
            </div>

            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              I'm a software engineer focused on building scalable mobile and
              backend systems. At Newgen Software, I develop cross-platform
              applications using
              <span className="font-semibold text-slate-900 dark:text-white">
                {" "}
                React Native{" "}
              </span>
              and design enterprise-grade APIs with
              <span className="font-semibold text-slate-900 dark:text-white">
                {" "}
                Spring Boot{" "}
              </span>
              . My work revolves around performance optimization, clean
              architecture, and delivering reliable production-ready systems.
            </p>

            <div className="pt-4 flex flex-wrap gap-3">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-bold text-slate-600 dark:text-slate-400">
                <FiActivity className="text-emerald-500" /> High Five Awarded
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-bold text-slate-600 dark:text-slate-400">
                <FiStar className="text-amber-500" /> 6★ HackerRank
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE: THE BENTO DASHBOARD */}
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[160px]">
            {/* Experience Tile - LOGO FILLS CONTAINER */}
            <BentoTile className="md:col-span-2 md:row-span-2 bg-slate-50 dark:bg-slate-900/50 border-slate-200 dark:border-white/5 overflow-hidden group">
              <a
                href="https://newgensoft.com/in/"
                target="_blank"
                rel="noopener noreferrer"
                className="h-full flex flex-col cursor-pointer"
              >
                <div className="h-full flex flex-col">
                  <div className="flex justify-between items-start mb-6">
                    {/* OPTIMIZED LOGO CONTAINER: TEXT UNCHANGED, VISUALS FIXED */}
                    <div className="relative w-40 h-20 flex items-center justify-center rounded-2xl bg-white shadow-md dark:bg-slate-800 border border-slate-100 dark:border-white/10 transition-transform group-hover:scale-105 overflow-hidden">
                      <img
                        src={NewgenLogo}
                        alt="Newgen Software"
                        // w-full h-full + object-cover ensures it covers the box while the parent clips the rounded edges
                        className="w-full h-full object-cover dark:invert dark:brightness-150 contrast-110"
                      />
                    </div>

                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100 dark:bg-orange-500/20 text-orange-600 dark:text-orange-400 text-[10px] font-bold uppercase tracking-wider">
                      <FiAward /> Performance Award
                    </div>
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
                      <span className="font-semibold text-slate-900 dark:text-white">
                        {" "}
                        React Native{" "}
                      </span>
                      while designing scalable backend services with
                      <span className="font-semibold text-slate-900 dark:text-white">
                        {" "}
                        Spring Boot{" "}
                      </span>
                      . Contributing across the full development lifecycle
                      including architecture, API design, performance
                      optimization, and deployment.
                    </p>

                    <div className="flex gap-4 pt-2">
                      <div className="flex flex-col">
                        <span className="text-xl font-bold text-slate-900 dark:text-white">
                          API
                        </span>
                        <span className="text-[10px] text-slate-500 uppercase font-bold">
                          Optimization
                        </span>
                      </div>
                      <div className="w-px h-8 bg-slate-200 dark:bg-white/10" />
                      <div className="flex flex-col">
                        <span className="text-xl font-bold text-slate-900 dark:text-white">
                          REST
                        </span>
                        <span className="text-[10px] text-slate-500 uppercase font-bold">
                          Architecture
                        </span>
                      </div>
                    </div>
                  </div>

                  <FiExternalLink
                    className="absolute bottom-6 right-6 text-slate-200 dark:text-white/5 group-hover:text-blue-500 transition-colors"
                    size={40}
                  />
                </div>
              </a>
            </BentoTile>

            {/* Competitive Programming Tile */}
            <BentoTile className="bg-slate-50 dark:bg-slate-900 border-slate-100 dark:border-slate-800">
              <FiTerminal size={24} className="text-blue-500 mb-4" />
              <h4 className="text-xl font-bold dark:text-white">6 ★</h4>
              <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">
                HackerRank Problem Solving
              </p>
            </BentoTile>

            {/* Education Tile */}
            <BentoTile className="bg-slate-50 dark:bg-slate-900 border-slate-100 dark:border-slate-800">
              <FiBookOpen size={24} className="text-purple-500 mb-4" />
              <h4 className="text-xl font-bold dark:text-white">B.Tech CSE</h4>
              <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">
                CGPA: 7.59
              </p>
              <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">
                Pranveer Singh Institute of Technology
              </p>
            </BentoTile>

            {/* Skills Mini-Grid */}
            <BentoTile className="md:col-span-2 bg-white dark:bg-slate-950 border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-4 h-full">
                <div className="flex-1 space-y-2">
                  <h4 className="text-sm font-bold dark:text-white uppercase tracking-wider">
                    Core Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "React Native",
                      "Spring Boot",
                      "Java",
                      "Node.js",
                      "MongoDB",
                    ].map((s) => (
                      <span
                        key={s}
                        className="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-[10px] font-bold rounded-md dark:text-slate-400"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="w-px h-full bg-slate-100 dark:bg-slate-800" />
                <div className="flex-1 text-center">
                  <p className="text-2xl font-black text-blue-600">GATE</p>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                    2025 Qualified
                  </p>
                </div>
              </div>
            </BentoTile>

            {/* Tech Quote Tile */}
            <BentoTile className="bg-emerald-500/5 dark:bg-emerald-500/10 border-emerald-500/20">
              <FiCode size={24} className="text-emerald-500 mb-4" />
              <p className="text-xs italic text-slate-600 dark:text-slate-400">
              "Great software isn't just built — it's engineered for scale,
              performance, and maintainability."
              </p>
            </BentoTile>
          </div>
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
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={{ y: -5, transition: { duration: 0.2 } }}
    className={`p-6 rounded-[2rem] border shadow-sm flex flex-col justify-center relative ${className}`}
  >
    {children}
  </motion.div>
);

export default About;
