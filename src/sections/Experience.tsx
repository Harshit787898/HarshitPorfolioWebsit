import { motion } from "framer-motion";
import { FiBriefcase, FiMapPin } from "react-icons/fi";
import NewgenLogo from "@/assets/NewGenLogo.png";
import { useState, useEffect } from "react";
import NewgenDarkLogo from "@/assets/NewgenDarkLogo.jpg";

const Experience = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  // Experience data remains the same...
  const experiences = [
    {
      number: "01",
      role: "Software Engineer",
      company: "Newgen Software",
      location: "Noida, India",
      period: "Jul 2025 – Present",
      isCurrent: true,
      logo: isDarkMode ? NewgenDarkLogo : NewgenLogo,
      description: [
        "Developing high-performance cross-platform mobile applications using React Native and Redux.",
        "Architecting scalable RESTful microservices using Spring Boot and PostgreSQL.",
        "Optimizing enterprise banking workflows, improving processing speed by 40%.",
      ],
      skills: ["React Native", "Spring Boot", "PostgreSQL", "Banking Domain"],
    },
    {
      number: "02",
      role: "Software Engineering Intern",
      company: "Newgen Software",
      location: "Noida, India",
      period: "Feb 2025 – Jul 2025",
      isCurrent: false,
      logo: isDarkMode ? NewgenDarkLogo : NewgenLogo,
      description: [
        "Built and documented RESTful APIs for internal low-code platform modules.",
        "Enhanced backend response times through query optimization and caching strategies.",
        "Collaborated with senior engineers on full SDLC cycles and rigorous code reviews.",
      ],
      skills: ["Java", "Spring Boot", "API Documentation", "Optimization"],
    },
  ];

  useEffect(() => {
    const checkDarkMode = () => setIsDarkMode(document.documentElement.classList.contains("dark"));
    checkDarkMode();
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className="py-24 bg-white dark:bg-[#020617] relative overflow-hidden">
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-slate-100"
          >
            Professional <span className="text-blue-600 dark:text-blue-400">Journey</span>
          </motion.h2>
        </div>

        <div className="max-w-3xl mx-auto relative">
          <div className="absolute left-[20px] top-0 h-full w-px bg-gradient-to-b from-blue-500 via-blue-400/40 to-transparent" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex items-start pl-14">
                
                {/* Dot also animates slightly for the "transition form" */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: false }}
                  transition={{ delay: 0.2 }}
                  className="absolute left-[12px] top-8 w-4 h-4 rounded-full bg-blue-600 dark:bg-blue-500 border-[3px] border-white dark:border-[#020617] z-10"
                  style={{ boxShadow: "0 0 0 1px #3b82f6, 0 0 14px rgba(59,130,246,0.4)" }}
                />

                <motion.div
                  initial={{ 
                    opacity: 0, 
                    x: index % 2 === 0 ? -80 : 80 
                  }}
                  whileInView={{ 
                    opacity: 1, 
                    x: 0 
                  }}
                  // Core change for repeating the animation
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ 
                    duration: 0.8, 
                    ease: [0.16, 1, 0.3, 1],
                    delay: 0.1 
                  }}
                  className="flex-1 group relative rounded-[20px] border border-slate-200 dark:border-blue-500/10 bg-slate-50 dark:bg-slate-900/70 backdrop-blur-sm p-8 transition-all hover:border-blue-400/60 dark:hover:border-blue-500/40 hover:shadow-xl"
                >
                  <span className="absolute top-4 right-5 text-[56px] font-extrabold leading-none select-none text-blue-500/[0.06]">
                    {exp.number}
                  </span>

                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                    <div className="relative w-32 h-14 flex items-center justify-center rounded-xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-white/10 overflow-hidden">
                      <img src={exp.logo} alt={exp.company} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex flex-col items-end">
                      <span className="text-blue-600 dark:text-blue-400 text-[11px] tracking-widest uppercase font-bold">
                        {exp.period}
                      </span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">{exp.role}</h3>
                    <div className="flex items-center gap-3 mt-1 text-slate-500 text-sm">
                      <span className="flex items-center gap-1"><FiBriefcase /> {exp.company}</span>
                      <span className="flex items-center gap-1"><FiMapPin /> {exp.location}</span>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-500/50 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, i) => (
                      <span key={i} className="px-3 py-1 text-[10px] font-bold uppercase bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-md border border-blue-100 dark:border-blue-800">
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;