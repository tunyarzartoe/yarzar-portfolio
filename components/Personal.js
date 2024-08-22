import { personalData } from "@/app/constants/personalData";
import Image from "next/image";
import React, { useState } from "react";
import fadeIn from "./Variants";
import { motion } from "framer-motion";

const Personal = () => {
  const [index, setIndex] = useState(0);

  return (
    <motion.div
      // variants={fadeIn("down", 0.4)}
      initial="hidden"
      animate="show"
      exit="hidden"
      className="flex flex-col gap-6 regular-14 my-5"
    >
      <div className="leading-[2.5] text-lg">
        <div className="">
          <div className="flex flex-start gap-x-10 xl:gap-x-40 mx-auto xl:mx-0 mt-8 sm:mt-0 personal-title">
            {personalData.map((item, itemIndex) => (
              <h3
                key={itemIndex}
                className={`${
                  index === itemIndex &&
                  "after:w-[100%] after:!bg-secondary after:transition-all after:duration-500"
                } medium-16 font-bold lg:text-3xl py-0 capitalize relative after:absolute after:h-[2px] after:w-9 after:bg-light after:left-0 after:-bottom-1 cursor-pointer`}
                onClick={() => setIndex(itemIndex)}
              >
                {item.title}
              </h3>
            ))}
          </div>
          <div className="py-8 regular-14 xl:py-8 flex flex-col gap-2 items-center lg:items-start  text-gray-20">
            {personalData[index].info.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className="flex xl:mb-4 flex-1 flex-col md:flex-row gap-x-3 items-center lg:items-start"
              >
                <div className="flex flex-row items-center lg:items-start">
                  {item.logo && (
                    <div className="flex flex-col mr-5 ">
                      <Image
                        className="rounded-full"
                        src={item.logo}
                        alt="logo"
                        width={50}
                        height={50}
                      />
                    </div>
                  )}
                  <h3 className="regular-16">{item.title}</h3>
                </div>
                <div className="hidden lg:flex">-</div>
                <div>{item.year}</div>
                <div className="flex gap-x-2">
                  {item.icons?.map((iconObject, itemIndex) => (
                    <div key={itemIndex} style={{ color: iconObject.color }}>
                      {iconObject.icon}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Personal;
