import PhoneMockup from "@/components/PhoneMockup";
import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { FiArrowRight} from "react-icons/fi"; // Added Icons
import ResumeButton from "@/components/ResumeButton";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-slate-50 dark:bg-[#020617] transition-colors duration-500">
      {/* Background Ambient Orbs - Enhanced with Animation */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.15, 0.1] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute top-0 -left-20 w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full" 
      />
      <motion.div 
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-500/10 blur-[120px] rounded-full" 
      />

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* LEFT SIDE */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
          }}
          className="space-y-8"
        >
          {/* Status Badge */}
          <motion.div 
            variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}
            className="flex items-center gap-2 w-fit px-4 py-2 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl shadow-blue-500/5"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-slate-500 dark:text-slate-400">
              Available for new projects
            </span>
          </motion.div>

          {/* Headline */}
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-slate-900 dark:text-white leading-[0.9]">
              Harshit <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600">
                Singh
              </span>
            </h1>
            
            <div className="mt-6 flex items-center gap-3 text-xl md:text-2xl font-medium text-slate-600 dark:text-slate-400">
              <span className="w-8 h-[1px] bg-slate-300 dark:bg-slate-700" />
              <TypeAnimation
                sequence={["React Native Developer", 2000, "Mobile App Engineer", 2000, "Full Stack Developer", 2000]}
                repeat={Infinity}
              />
            </div>
          </motion.div>

          {/* Elevated Bio Card */}
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="max-w-lg">
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
              Engineering <span className="text-slate-900 dark:text-white font-semibold">pixel-perfect</span> mobile applications with a focus on performance, scalability, and 
              exceptional user experience.
            </p>
            
            {/* Quick Stats bar inside bio */}
            <div className="mt-6 flex gap-8 items-center border-t border-slate-200 dark:border-slate-800 pt-6">
               <div className="flex flex-col">
                  <span className="text-2xl font-bold text-slate-900 dark:text-white">1+</span>
                  <span className="text-[10px] uppercase tracking-wider text-slate-500">Years Exp</span>
               </div>
               <div className="w-[1px] h-8 bg-slate-200 dark:bg-slate-800" />
               <div className="flex flex-col">
                  <span className="text-2xl font-bold text-slate-900 dark:text-white">15+</span>
                  <span className="text-[10px] uppercase tracking-wider text-slate-500">Projects</span>
               </div>
               <div className="w-[1px] h-8 bg-slate-200 dark:bg-slate-800" />
               <div className="flex flex-col">
                  <span className="text-2xl font-bold text-slate-900 dark:text-white">Apps</span>
                  <span className="text-[10px] uppercase tracking-wider text-slate-500">On Store</span>
               </div>
            </div>
          </motion.div>

          {/* ACTION BUTTONS - High Contrast */}
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="flex flex-wrap items-center gap-4">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05, x: 5 }}
              whileTap={{ scale: 0.95 }}
              className="group px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold flex items-center gap-3 shadow-2xl shadow-blue-500/40 transition-all"
            >
              Explore My Work 
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </motion.a>

            <ResumeButton />
          </motion.div>

          {/* REFINED SOCIALS */}
          <motion.div variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} className="flex items-center gap-6 pt-4">
            <SocialIcon link="https://github.com/Harshit787898" icon={<FaGithub />} />
            <SocialIcon link="https://www.linkedin.com/in/harshit-singh-8a41a9229/" icon={<FaLinkedin />} />
            <SocialIcon link="mailto:singh.787898.harshit@gmail.com" icon={<FaEnvelope />} />
            <div className="h-px w-12 bg-slate-200 dark:bg-slate-800" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Connect</span>
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE - MOCKUP (Keep as is, but maybe add a float animation) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="hidden md:block relative"
        >
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10"
            >
              <PhoneMockup />
            </motion.div>
            {/* Ambient Background Glow behind phone */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-500/10 blur-[100px] rounded-full" />
        </motion.div>
      </div>
    </section>
  );
};

const SocialIcon = ({ link, icon }: any) => (
  <motion.a
    href={link}
    target="_blank"
    whileHover={{ y: -5, color: "#2563eb" }}
    className="text-2xl text-slate-400 dark:text-slate-500 transition-all"
  >
    {icon}
  </motion.a>
);

export default Hero;