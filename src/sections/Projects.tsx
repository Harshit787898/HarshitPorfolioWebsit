import { motion } from "framer-motion";
import { FiGithub, FiSmartphone, FiLayout } from "react-icons/fi";
import { projects } from "@/data/projects";

const Projects = () => {
  return (
    <section id="projects" className="py-32 bg-slate-50 dark:bg-[#020617] transition-colors duration-500">
      <div className="container mx-auto px-6">
        
        {/* SECTION HEADER */}
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white"
          >
            Built with <span className="text-blue-600">Precision</span>
          </motion.h2>
          <div className="h-1.5 w-20 bg-blue-600 rounded-full mt-4 mx-auto" />
          <p className="mt-6 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
            A selection of my professional work in mobile architecture and full-stack systems.
          </p>
        </div>

        {/* PROJECTS GRID */}
        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative flex flex-col rounded-[2.5rem] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500"
            >
              {/* TOP DECORATIVE BAR (Visual Hint of App/Web) */}
              <div className="h-2 w-full bg-gradient-to-r from-blue-600 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="p-8 md:p-10 flex flex-col h-full">
                {/* CATEGORY ICON */}
                <div className="mb-6 flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 text-xl">
                    {/* Heuristic: if it mentions 'App' or 'Mobile', show phone icon */}
                    {project.title.toLowerCase().includes('app') || project.title.toLowerCase().includes('mobile') 
                      ? <FiSmartphone /> 
                      : <FiLayout />}
                  </div>
                  
                  {/* PROJECT LINKS */}
                  <div className="flex gap-4">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noreferrer"
                      className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      title="Source Code"
                    >
                      <FiGithub size={20} />
                    </a>
                    {/* If you have live links in your data, uncomment below */}
                    {/* <a href={project.link} className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-blue-600"><FiExternalLink size={20} /></a> */}
                  </div>
                </div>

                {/* CONTENT */}
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8 flex-grow">
                  {project.description}
                </p>

                {/* TECH STACK */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((t, i) => (
                    <span 
                      key={i} 
                      className="px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-300 rounded-xl border border-slate-200 dark:border-slate-700 group-hover:border-blue-500/30 transition-colors"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* BACKGROUND MESH GRADIENT (Subtle) */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;