import { useState, useEffect } from "react"; // Added useEffect
import { motion, AnimatePresence } from "framer-motion";
import { FiDownload, FiX, FiCopy } from "react-icons/fi";
import resumeFile from "../assets/HarshitResume.pdf";

const ResumeButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const resumeUrl = resumeFile;

  // SCROLL LOCK LOGIC: Prevents the background from moving while viewing PDF
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    // Cleanup function to ensure scroll is restored if component unmounts
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      {/* 1. THE TRIGGER BUTTON */}
      <motion.button
        onClick={() => setIsOpen(true)}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="px-8 py-4 bg-transparent border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 rounded-xl font-bold flex items-center gap-2 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all shadow-sm"
      >
        <FiDownload /> View Resume
      </motion.button>

      {/* 2. THE PDF MODAL OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-2 md:p-10 overflow-hidden">
            {/* Backdrop with stronger blur for focus */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-slate-900/80 backdrop-blur-xl"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 40 }}
              // Added flex-col to ensure iframe takes up remaining space correctly
              className="relative w-full max-w-5xl h-[92vh] bg-white dark:bg-slate-950 rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/10 flex flex-col"
            >
              {/* Toolbar - Fixed height */}
              <div className="flex-shrink-0 flex items-center justify-between px-6 py-4 border-b border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="ml-4 text-xs font-bold uppercase tracking-widest text-slate-400">
                    Resume Preview
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href={resumeUrl}
                    download
                    className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-blue-600 text-white text-xs font-bold hover:bg-blue-700 transition-colors"
                  >
                    <FiDownload size={14} /> Download
                  </a>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 text-slate-400 hover:text-slate-900 dark:hover:text-white transition-all"
                  >
                    <FiX size={24} />
                  </button>
                </div>
              </div>

              {/* PDF Viewer Container - Takes remaining height */}
              <div className="flex-grow w-full h-full bg-slate-200 dark:bg-slate-900 relative">
                <iframe
                  src={`${resumeUrl}#view=FitH`} // "FitH" ensures it fits to the width immediately
                  className="w-full h-full"
                  style={{ border: "none" }}
                  title="Harshit Singh Resume"
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ResumeButton;