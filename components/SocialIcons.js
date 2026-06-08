import { Button } from "@nextui-org/react";
import Link from "next/link";
import React from "react";
import { FaArrowDown, FaArrowRight } from "react-icons/fa";
import { HiArrowDown } from "react-icons/hi2";
import {
  RiGithubFill,
  RiInstagramFill,
  RiLinkedinBoxFill,
  RiTwitterXFill,
  RiYoutubeFill,
} from "react-icons/ri";
const SocialIcons = () => {
  return (
    <div className="flex">
      <div className="flex  gap-2  lg:gap-6 pr-2 lg:pr-4">
        <Link
          href="https://www.youtube.com/@tunyarzartoe"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#08d9d5] p-3 text-primary text-lg rounded-full rounded-bl-none hover:bg-white hover:text-secondary hover:-translate-y-1  transition-all duration-500"
        >
          <RiYoutubeFill />
        </Link>
        <Link
          href={"https://www.instagram.com/tunyarzartoe"}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#f08a5d] p-3 text-primary text-lg rounded-full rounded-bl-none hover:bg-white hover:text-secondary hover:-translate-y-1  transition-all duration-500"
        >
          <RiInstagramFill />
        </Link>
        <Link
          href={"https://x.com/tunyarzartoe"}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#ff2863] p-3 text-primary text-lg rounded-full rounded-bl-none hover:bg-white hover:text-secondary hover:-translate-y-1  transition-all duration-500"
        >
          <RiTwitterXFill />
        </Link>
        <Link
          href={"https://www.linkedin.com/in/tunyarzartoe/"}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#eaeaea] p-3 text-primary text-lg rounded-full rounded-bl-none hover:bg-white hover:text-secondary hover:-translate-y-1  transition-all duration-500"
        >
          <RiLinkedinBoxFill />
        </Link>
        <Link
          href={"https://github.com/tunyarzartoe"}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#5272f2] p-3 text-primary text-lg rounded-full rounded-bl-none hover:bg-white hover:text-secondary hover:-translate-y-1  transition-all duration-500"
        >
          <RiGithubFill />
        </Link>
      </div>
      {/* <div className="">
        <Button
        className="view-demo rounded-full flexCenter mt-1"
        href=""
        variant="solid"
        target="_blank"
        style={{background:"#dc143c"}}
      >
        <span className="mr-8 regular-16 text-tertiary">Resume</span>
        <span className="absolute  right-2 font-extrabold text-tertiary bg-white/20 border-white/30 border-[3px] h-8 w-8 rounded-full opacity-100 flexCenter ">
          <FaArrowDown />
        </span>
      </Button>
      </div> */}
      
    </div>
  );
};

export default SocialIcons;
