import { Button } from "@nextui-org/react";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
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
          target="_bank"
          className="bg-[#08d9d5] p-3 text-primary text-lg rounded-full rounded-bl-none hover:bg-white hover:text-secondary hover:-translate-y-1  transition-all duration-500"
        >
          <RiYoutubeFill />
        </Link>
        <Link
          href={"https://www.instagram.com/tunyarzartoe/"}
          target="_bank"
          className="bg-[#f08a5d] p-3 text-primary text-lg rounded-full rounded-bl-none hover:bg-white hover:text-secondary hover:-translate-y-1  transition-all duration-500"
        >
          <RiInstagramFill />
        </Link>
        <Link
          href={""}
          target="_bank"
          className="bg-[#ff2863] p-3 text-primary text-lg rounded-full rounded-bl-none hover:bg-white hover:text-secondary hover:-translate-y-1  transition-all duration-500"
        >
          <RiTwitterXFill />
        </Link>
        <Link
          href={"https://www.linkedin.com/in/tun-yar-zar-toe"}
          target="_bank"
          className="bg-[#eaeaea] p-3 text-primary text-lg rounded-full rounded-bl-none hover:bg-white hover:text-secondary hover:-translate-y-1  transition-all duration-500"
        >
          <RiLinkedinBoxFill />
        </Link>
        <Link
          href={"https://github.com/tunyarzartoe-coding"}
          target="_bank"
          className="bg-[#5272f2] p-3 text-primary text-lg rounded-full rounded-bl-none hover:bg-white hover:text-secondary hover:-translate-y-1  transition-all duration-500"
        >
          <RiGithubFill />
        </Link>
      </div>
      <div>
      <Button
        className="view-demo rounded-full flexCenter"
        href=""
        color="primary"
        variant="solid"
        target="_bank"
      >
        <span className="mr-8">Resume</span>
        <span className="absolute  right-2 font-extrabold text-tertiary bg-white/20 border-secondary border-[3px] h-8 w-8 rounded-full opacity-100 flexCenter -rotate-45">
          <FaArrowRight />
        </span>
      </Button>
    </div>
    </div>
  );
};

export default SocialIcons;
