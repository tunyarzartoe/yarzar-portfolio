import React from "react";
import { motion } from "framer-motion";

const transitioVariants = {
  initial: {
    x: "100%",
    width: "100%",
  },
  animate: {
    x: "0%",
    width: "0%",
  },
  exit: {
    x: ["0%", "100%"],
    width: ["0%", "100%"],
  },
};

const Transition = () => {
  const delays = [0.2, 0.4, 0.6];
  const colors = ["secondary", "primary", "backgroundLight"];
  return (
    <>
      {colors.map((color, index) => (
        <motion.div
          key={index}
          variants={transitioVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ delay: delays[index], duration: 0.6, ease: "easeInOut" }}
          className={`fixed top-0 right-full w-screen h-screen z-${30 - index * 10} bg-${color}`}
        ></motion.div>
      ))}
    </>
  );
};

export default Transition;
