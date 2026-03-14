import { motion } from "framer-motion";
import { 
  SiReact, SiTypescript, SiNodedotjs, SiSpringboot, 
  SiMongodb, SiTailwindcss, SiFigma, SiFirebase, SiDocker 
} from "react-icons/si";

// Grouping skills for better visual organization
const skillCategories = [
  {
    title: "Frontend & Mobile",
    skills: [
      { name: "React Native", icon: <SiReact />, color: "text-[#61DAFB]" },
      { name: "TypeScript", icon: <SiTypescript />, color: "text-[#3178C6]" },
      { name: "Next.js", icon: <SiReact />, color: "text-slate-900 dark:text-white" },
      { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "text-[#38B2AC]" },
    ],
  },
  {
    title: "Backend & Database",
    skills: [
      { name: "Node.js", icon: <SiNodedotjs />, color: "text-[#339933]" },
      { name: "Spring Boot", icon: <SiSpringboot />, color: "text-[#6DB33F]" },
      { name: "MongoDB", icon: <SiMongodb />, color: "text-[#47A248]" },
      { name: "Firebase", icon: <SiFirebase />, color: "text-[#FFCA28]" },
    ],
  },
  {
    title: "Tools & DevOps",
    skills: [
      { name: "Docker", icon: <SiDocker />, color: "text-[#2496ED]" },
      { name: "Figma", icon: <SiFigma />, color: "text-[#F24E1E]" },
      { name: "Git", icon: <SiReact />, color: "text-[#F05032]" }, // Replace with SiGit if available
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-32 relative bg-slate-50 dark:bg-[#020617] overflow-hidden">
      {/* Background Decorative Gradient */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white"
          >
            Technical <span className="text-blue-600">Arsenal</span>
          </motion.h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A specialized stack focused on building scalable, high-performance mobile and web applications.
          </p>
        </div>

        <div className="space-y-12">
          {skillCategories.map((category, catIndex) => (
            <div key={catIndex}>
              <h3 className="text-sm uppercase tracking-[0.2em] font-bold text-slate-400 dark:text-slate-500 mb-6 ml-2">
                {category.title}
              </h3>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {category.skills.map((skill, index) => (
                  <SkillCard 
                    key={index} 
                    name={skill.name} 
                    icon={skill.icon} 
                    color={skill.color} 
                    delay={index * 0.1 + catIndex * 0.2} 
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ---------- SKILL CARD COMPONENT ---------- */

const SkillCard = ({ name, icon, color, delay }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="group relative p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl hover:shadow-blue-500/5 transition-all"
    >
      <div className="flex items-center gap-4">
        <div className={`text-3xl ${color} group-hover:scale-110 transition-transform duration-300`}>
          {icon}
        </div>
        <div>
          <h4 className="font-bold text-slate-900 dark:text-slate-100 text-sm md:text-base">
            {name}
          </h4>
          <div className="h-1 w-0 group-hover:w-full bg-blue-500 transition-all duration-500 rounded-full mt-1" />
        </div>
      </div>
      
      {/* Background Glow on Hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity" />
    </motion.div>
  );
};

export default Skills;