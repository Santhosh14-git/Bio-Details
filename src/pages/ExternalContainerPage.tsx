import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { X } from "lucide-react";
import { motion } from "framer-motion";

const ExternalContainerPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const externalUrl = location.state?.url as string;

  useEffect(() => {
    // Disable scrolling on body when modal is open
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    return () => {
      // Re-enable scrolling when modal is closed
      document.body.style.overflow = "unset";
      document.documentElement.style.overflow = "unset";
    };
  }, []);

  if (!externalUrl) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-red-500 text-lg">No URL provided</p>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center p-8 z-50"
      onClick={() => navigate(-1)}
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
        className="w-full max-w-4xl h-[80vh] rounded-2xl overflow-hidden shadow-2xl flex flex-col border border-white/50"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex justify-end p-4 bg-white/80"
        >
          <button
            onClick={() => navigate(-1)}
            className="p-2 rounded-full bg-gray-300 hover:bg-gray-400 transition hover:scale-110"
          >
            <X className="w-5 h-5" />
          </button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex-1 overflow-hidden bg-white"
        >
          <iframe
            src={externalUrl}
            className="w-full h-full border-none"
            title="External Content"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ExternalContainerPage;
