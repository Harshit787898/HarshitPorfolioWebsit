import { motion } from "framer-motion";

const Badges = () => {
  const leetCodeBadges = [
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExd3V4cnI5YnE5YnU5cmtvdXZyZ3BlZ3NncnU1MDRidzVocXJidXlqdSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/PKZmsUSCHaMEGzOFRO/giphy.gif",
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZmJoYXA4bmJ4NGxjYXJuN2puZTdvcWo5NWZ2cnl6YXZpcmVyOXdkaiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/c8dZfw4YqGMdVDsWh0/giphy.gif",
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYmExbjc3YmppaDhwbGtqa3FtY3oxOXhocHZlMDM0dDN3em1wdmtheiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/wOowQI5Z9NXzJvKKsu/giphy.gif",
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdHZsMnB5YXhnMDE3Y294ZG1nNWlkODZwYnRsdHpucjF1a3UxY3BvdiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/995kGSiy1F4k1Khjfd/giphy.gif",
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHg5N3N5MjV0ajlyZ2ZhMXMyNTBsOHdsNzExcDdxNGp0bWVhNnBmMiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/MGB5Ki8ko2esmjJgLa/giphy.gif",
  ];

  return (
    <section id="badges" className="py-20 bg-white dark:bg-[#020617] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-500/[0.02] blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white"
          >
            Coding <span className="text-blue-600">Achievements</span>
          </motion.h2>
          <p className="text-slate-500 dark:text-slate-400 mt-4 max-w-xl mx-auto text-sm">
            Milestones earned through consistent problem solving and technical excellence on LeetCode.
          </p>
        </div>

        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.1,
              }
            }
          }}
          className="flex flex-wrap justify-center gap-6 md:gap-10"
        >
          {leetCodeBadges.map((badge, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, scale: 0.5, rotate: -10 },
                show: { opacity: 1, scale: 1, rotate: 0 }
              }}
              whileHover={{ 
                scale: 1.1, 
                filter: "drop-shadow(0 0 15px rgba(59, 130, 246, 0.5))",
                transition: { type: "spring", stiffness: 400, damping: 10 }
              }}
              className="relative group cursor-pointer"
            >
              {/* Badge Glow Effect */}
              <div className="absolute inset-0 bg-blue-500/10 rounded-full blur-xl group-hover:bg-blue-500/20 transition-colors" />
              
              <img 
                src={badge} 
                alt={`LeetCode Badge ${index + 1}`} 
                className="w-24 h-24 md:w-32 md:h-32 relative z-10 transition-all duration-300 drop-shadow-md group-hover:drop-shadow-2xl" 
              />
              
              {/* Tooltip or reflection light */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-transparent via-blue-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Badges;