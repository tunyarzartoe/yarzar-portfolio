import React from "react";

const Hero = ({ title }) => {
  return (
      <div className="pb-4">
        <h3 className="text-2xl font-bold lg:text-3xl py-10">
            {title}
        </h3>
      </div>
  );
};

export default Hero;
