import React from "react";

const Hero = ({ title }) => {
  return (
      <div className="pb-1">
        <h3 className="text-[30px] lg:text-[36px] font-extrabold uppercase py-10">
            {title}
        </h3>
      </div>
  );
};

export default Hero;
