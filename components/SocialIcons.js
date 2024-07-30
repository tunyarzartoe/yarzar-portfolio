import Link from "next/link";
import React from "react";
import { RiGithubFill, RiInstagramFill, RiLinkedinBoxFill, RiTwitterXFill, RiYoutubeFill } from "react-icons/ri";
const SocialIcons = () => {
  return (
    <div className="flex gap-4 lg:gap-6 pr-4">
      <Link
        href="https://www.youtube.com/@tunyarzartoe"
        target="_bank"
        className="bg-[#08d9d5] p-2 text-primary text-lg rounded-full rounded-bl-none hover:bg-white hover:text-secondary hover:-translate-y-1  transition-all duration-500"
      >
        <RiYoutubeFill />
      </Link>
      <Link
        href={"https://www.instagram.com/tunyarzartoe/"}
        target="_bank"
        className="bg-[#f08a5d] p-2 text-primary text-lg rounded-full rounded-bl-none hover:bg-white hover:text-secondary hover:-translate-y-1  transition-all duration-500"
      >
        <RiInstagramFill />
      </Link>
      <Link
        href={""}
        target="_bank"
        className="bg-[#ff2863] p-2 text-primary text-lg rounded-full rounded-bl-none hover:bg-white hover:text-secondary hover:-translate-y-1  transition-all duration-500"
      >
        <RiTwitterXFill />
      </Link>
      <Link
        href={"https://www.linkedin.com/in/tun-yar-zar-toe"}
        target="_bank"
        className="bg-[#eaeaea] p-2 text-primary text-lg rounded-full rounded-bl-none hover:bg-white hover:text-secondary hover:-translate-y-1  transition-all duration-500"
      >
        <RiLinkedinBoxFill />
      </Link>
      <Link
        href={"https://github.com/tunyarzartoe-coding"}
        target="_bank"
        className="bg-[#5272f2] p-2 text-primary text-lg rounded-full rounded-bl-none hover:bg-white hover:text-secondary hover:-translate-y-1  transition-all duration-500"
      >
        <RiGithubFill />
      </Link>
    </div>
  );
};

export default SocialIcons;
