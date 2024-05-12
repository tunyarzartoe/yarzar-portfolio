// import React from "react";
// import { motion } from "framer-motion";

// const transitioVariants = {
//   initial: {
//     x: "100%",
//     width: "100%",
//   },
//   animate: {
//     x: "0%",
//     width: "0%",
//   },
//   exit: {
//     x: ["0%", "100%"],
//     width: ["0%", "100%"],
//   },
// };

// const LoadingAnimation = () => {
//   return (
//     <>
//       <motion.div
//         variants={transitioVariants}
//         initial="initial"
//         animate="animate"
//         exit="exit"
//         transition={{ delay: 0.2, duration: 0.6, ease: "easeInOut" }}
//         className="fixed top-0 right-full w-screen h-screen z-30 bg-secondary"
//       ></motion.div>
//       <motion.div
//         variants={transitioVariants}
//         initial="initial"
//         animate="animate"
//         exit="exit"
//         transition={{ delay: 0.4, duration: 0.6, ease: "easeInOut" }}
//         className="fixed top-0 right-full w-screen h-screen z-20 bg-primary"
//       ></motion.div>
//       <motion.div
//         variants={transitioVariants}
//         initial="initial"
//         animate="animate"
//         exit="exit"
//         transition={{ delay: 0.6, duration: 0.6, ease: "easeInOut" }}
//         className="fixed top-0 right-full w-screen h-screen z-10 bg-backgroundLight"
//       ></motion.div>
//     </>
//   );
// };

// export default LoadingAnimation;

import React from "react";
import { motion } from "framer-motion";

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <svg
        className="animate-spin h-12 w-12 text-gray-800 mb-4"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        ></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 4.418 3.582 8 8 8v-4zm10-2.37A7.963 7.963 0 0120 12h-4c0 3.042-1.375 5.77-3.536 7.604l1.416 1.416C18.521 17.697 22 14.167 22 10h-4zm-6.464 0l-1.417-1.416A7.963 7.963 0 014 12h4c0-3.042 1.375-5.77 3.536-7.604L9.536 2.98z"
        ></path>
      </svg>
      <div className="text-gray-800">Loading...</div>
    </div>
  );
};

export default Loading;
