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
    <section id="contact" className="py-32 relative overflow-hidden bg-white dark:bg-[#020617]">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-gradient-to-t from-blue-500/10 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6">
              Let’s build something <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-500">
                extraordinary together.
              </span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-12 max-w-xl mx-auto">
              Currently open to new opportunities and interesting mobile projects. 
              My inbox is always open.
            </p>
          </motion.div>

          {/* MAIN CONTACT CARD */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-1 rounded-[2.5rem] bg-gradient-to-br from-slate-200 to-slate-100 dark:from-slate-800 dark:to-slate-900 shadow-2xl"
          >
            <div className="bg-white dark:bg-[#0a0a0a] rounded-[2.4rem] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
              
              {/* Email Section */}
              <div className="text-left">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600 mb-2">Email Me</p>
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
                  {email}
                  <button 
                    onClick={copyToClipboard}
                    className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors text-slate-500 dark:text-slate-400"
                  >
                    {copied ? <span className="text-xs text-blue-600">Copied!</span> : <FiCopy size={18} />}
                  </button>
                </h3>
              </div>

              <a
                href={`mailto:${email}`}
                className="group relative px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-black font-bold rounded-2xl overflow-hidden transition-all hover:pr-12"
              >
                <span className="relative z-10">Send Message</span>
                <FiArrowUpRight className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all" />
              </a>
            </div>
          </motion.div>

          {/* SOCIAL LINKS GRID */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
             <SocialLink 
                href="https://github.com/Harshit787898" 
                icon={<FiGithub />} 
                label="GitHub" 
                sub="Source Code"
             />
             <SocialLink 
                href="https://linkedin.com" 
                icon={<FiLinkedin />} 
                label="LinkedIn" 
                sub="Professional"
             />
             <div className="hidden md:flex flex-col items-center justify-center p-6 rounded-3xl bg-slate-50 dark:bg-slate-900/30 border border-slate-100 dark:border-slate-800">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Location</p>
                <p className="text-sm font-semibold text-slate-900 dark:text-white">Noida, India</p>
             </div>
          </div>

          {/* FOOTER NOTE */}
          <p className="mt-20 text-sm text-slate-400 dark:text-slate-600">
            © 2026 Harshit Singh. Built with React & Tailwind.
          </p>
        </div>
      </div>
    </section>
  );
};

const SocialLink = ({ href, icon, label, sub }: any) => (
  <motion.a
    href={href}
    target="_blank"
    whileHover={{ y: -5 }}
    className="flex items-center gap-4 p-6 rounded-3xl bg-slate-50 dark:bg-slate-900/30 border border-slate-100 dark:border-slate-800 hover:border-blue-500/30 transition-all text-left group"
  >
    <div className="w-12 h-12 rounded-2xl bg-white dark:bg-slate-800 shadow-sm flex items-center justify-center text-xl text-slate-700 dark:text-white group-hover:text-blue-600 transition-colors">
      {icon}
    </div>
    <div>
      <p className="text-sm font-bold text-slate-900 dark:text-white">{label}</p>
      <p className="text-xs text-slate-500 dark:text-slate-500">{sub}</p>
    </div>
  </motion.a>
);

export default Contact;