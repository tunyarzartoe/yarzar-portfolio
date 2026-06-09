import React from "react";

const Hero = ({ title }) => {
  return (
      <div className="pb-1">
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase py-8">
            {title}
        </h3>
      </div>
  );
};

export default Hero;
