import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";

const BackToTopButton = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Show/Hide "Back to Top" button based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 250) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      {showTopBtn && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="fixed bottom-16 right-4 lg:bottom-8 lg:right-16 bg-secondary p-3 rounded-full shadow-lg z-50"
          onClick={scrollToTop}
        >
          <FaArrowUp className="text-white" size={20} />
        </motion.button>
      )}
    </>
  );
};

export default BackToTopButton;
