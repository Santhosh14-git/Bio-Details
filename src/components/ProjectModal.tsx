import React, { useEffect } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ProjectModalProps {
  url: string;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ url, isOpen, onClose }) => {
  useEffect(() => {
    // Modal and page can scroll independently - no scroll lock needed
    return () => {};
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center p-8 z-40"
            onClick={onClose}
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.5, opacity: 0, y: 20 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                duration: 0.5,
              }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-4xl h-[80vh] rounded-2xl overflow-hidden shadow-2xl flex flex-col border border-white/50 bg-white"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="flex justify-end p-4 bg-white/80 border-b"
              >
                <button
                  onClick={onClose}
                  className="p-2 rounded-full bg-gray-300 hover:bg-gray-400 transition hover:scale-110"
                >
                  <X className="w-5 h-5" />
                </button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="flex-1 overflow-y-auto bg-white"
              >
                <iframe
                  src={url}
                  className="w-full h-full border-none"
                  title="Project Details"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
