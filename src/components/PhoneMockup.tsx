import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { FaGithub, FaLinkedin, FaEnvelope, FaReact } from "react-icons/fa";
import { SiTypescript, SiNodedotjs, SiTailwindcss } from "react-icons/si";
import { FiLayout, FiLayers, FiSend, FiUser, FiCode } from "react-icons/fi";

const PhoneMockup = () => {
  return (
    <div className="flex justify-center items-center py-10 relative z-10">
      <Tilt
        tiltMaxAngleX={5}
        tiltMaxAngleY={5}
        perspective={1400}
        scale={1.01}
        transitionSpeed={2000}
        className="relative"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          {/* ULTRA-THIN CHASSIS */}
          <div className="relative w-[310px] h-[630px] rounded-[50px] bg-slate-200 dark:bg-slate-800 p-[1.5px] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] dark:shadow-[0_50px_100px_-20px_rgba(0,0,0,0.6)]">
            
            {/* SCREEN CONTAINER */}
            <div className="relative w-full h-full rounded-[48.5px] bg-white dark:bg-[#050505] overflow-hidden border-[6px] border-slate-950">
              
              {/* SUBTLE GRADIENT WALLPAPER */}
              <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 via-white to-indigo-50/50 dark:from-slate-900/40 dark:via-[#050505] dark:to-slate-900/40 transition-colors duration-700" />
              
              {/* DYNAMIC ISLAND */}
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[90px] h-[28px] bg-black rounded-full z-50 flex items-center justify-center gap-1.5 border border-white/5" />

              {/* SCREEN CONTENT */}
              <div className="relative z-10 h-full flex flex-col pt-16 px-6">
                
                {/* PROFILE MINI-HEADER */}
                <div className="mb-8 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-blue-600 flex items-center justify-center text-white text-xs font-bold">HS</div>
                    <div>
                      <p className="text-[11px] font-bold text-slate-900 dark:text-white uppercase tracking-tighter">Harshit Singh</p>
                      <div className="flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        <p className="text-[9px] text-slate-500 font-medium tracking-wide">Online</p>
                      </div>
                    </div>
                  </div>
                  <FiSend className="text-slate-400" size={16} />
                </div>

                {/* APP GRID */}
                <p className="text-[10px] font-bold text-slate-400 dark:text-slate-600 uppercase tracking-[0.2em] mb-4 ml-1">Tools & Links</p>
                <div className="grid grid-cols-3 gap-5">
                  <MiniApp label="GitHub" icon={<FaGithub />} color="text-slate-900 dark:text-white" link="https://github.com/Harshit787898" />
                  <MiniApp label="React" icon={<FaReact />} color="text-blue-400" link="https://react.dev/" />
                  <MiniApp label="LinkedIn" icon={<FaLinkedin />} color="text-[#0077b5]" link="https://www.linkedin.com/in/harshit-singh-8a41a9229/" />
                  <MiniApp label="TS" icon={<SiTypescript />} color="text-blue-600" link="https://typescriptlang.org" />
                  <MiniApp label="Node" icon={<SiNodedotjs />} color="text-emerald-600" link="https://nodejs.org" />
                  <MiniApp label="Tailwind" icon={<SiTailwindcss />} color="text-sky-400" link="https://tailwindcss.com" />
                </div>

                {/* PROJECT CARD PREVIEW */}
                <div className="mt-10 group cursor-pointer">
                   <p className="text-[10px] font-bold text-slate-400 dark:text-slate-600 uppercase tracking-[0.2em] mb-4 ml-1">Latest Code</p>
                   <div className="p-4 rounded-[2rem] bg-white dark:bg-slate-900 border border-slate-100 dark:border-white/5 shadow-sm transition-all group-hover:border-blue-500/30">
                      <div className="flex items-center gap-3 mb-2">
                        <FiLayers className="text-blue-500" size={14} />
                        <span className="text-[10px] font-bold dark:text-white">FinTech Mobile App</span>
                      </div>
                      <p className="text-[9px] text-slate-500 leading-relaxed line-clamp-2">
                        Secure transaction tracking and biometric auth built with React Native...
                      </p>
                   </div>
                </div>

                {/* RESTORED BOTTOM NAVIGATION DOCK */}
                <div className="absolute bottom-6 left-4 right-4 h-[72px] bg-white/60 dark:bg-slate-900/60 backdrop-blur-2xl rounded-[32px] border border-slate-200/50 dark:border-white/10 flex items-center justify-around px-2 shadow-2xl shadow-black/5">
                  
                  {/* Projects Link */}
                  <NavItem href="#projects" icon={<FiCode />} label="Projects" active />
                  
                  {/* Home/Center Button */}
                  <div className="relative -top-1">
                    <motion.div 
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-500/40"
                    >
                      <FiLayout size={20} />
                    </motion.div>
                  </div>

                  {/* Contact Link */}
                  <NavItem href="#contact" icon={<FiUser />} label="Contact" />
                </div>

              </div>

              {/* SCREEN REFLECTION */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.02] to-white/[0.05] pointer-events-none z-20" />
            </div>
          </div>
        </motion.div>
      </Tilt>
    </div>
  );
};

/* ---------- NAV ITEM COMPONENT ---------- */
const NavItem = ({ icon, label, href, active }: any) => (
  <motion.a 
    href={href}
    whileHover={{ y: -2 }}
    className="flex flex-col items-center gap-1 transition-colors"
  >
    <span className={`text-xl ${active ? 'text-blue-600' : 'text-slate-400 dark:text-slate-500'}`}>
      {icon}
    </span>
    <span className={`text-[8px] font-bold uppercase tracking-widest ${active ? 'text-blue-600' : 'text-slate-400'}`}>
      {label}
    </span>
  </motion.a>
);

/* ---------- MINI APP COMPONENT ---------- */
const MiniApp = ({ icon, label, color, link }: any) => (
  <motion.a
    href={link}
    target="_blank"
    whileHover={{ y: -3 }}
    className="flex flex-col items-center gap-2 group cursor-pointer"
  >
    <div className="w-14 h-14 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-100 dark:border-white/5 shadow-sm flex items-center justify-center text-2xl transition-all group-hover:shadow-lg group-hover:border-blue-500/30">
      <span className={color}>{icon}</span>
    </div>
    <span className="text-[9px] font-medium text-slate-500 dark:text-slate-400 tracking-tight">{label}</span>
  </motion.a>
);

export default PhoneMockup;