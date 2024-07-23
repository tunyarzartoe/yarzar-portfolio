// components/LoadingAnimation.js
"use client";

import React, { useEffect } from "react";

const LoadingAnimation = () => {
  useEffect(() => {
    import("ldrs").then((ldrs) => {
      ldrs.trefoil.register();
    });
  }, []);

  return (
    <div className="pl-20 lg:max-container lg:padding-container text-center py-72 mr-28">
      <l-trefoil
        size="50"
        stroke="4"
        stroke-length="0.15"
        bg-opacity="0.1"
        speed="1.4"
        color="black"
      ></l-trefoil>
      {/* <p className="mt-1 ml-2 text-backgroundDark">Loading...</p> */}
    </div>
  );
};

export default LoadingAnimation;
