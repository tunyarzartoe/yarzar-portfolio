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
  const socials = [
    {
      name: "GitHub",
      href: "https://github.com/tunyarzartoe",
      icon: <RiGithubFill />,
      color: "hover:text-[#24292e] dark:hover:text-white hover:border-slate-400",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/tunyarzartoe/",
      icon: <RiLinkedinBoxFill />,
      color: "hover:text-[#0077b5] hover:border-[#0077b5]/50",
    },
    {
      name: "YouTube",
      href: "https://www.youtube.com/@tunyarzartoe",
      icon: <RiYoutubeFill />,
      color: "hover:text-[#ff0000] hover:border-[#ff0000]/50",
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/tunyarzartoe",
      icon: <RiInstagramFill />,
      color: "hover:text-[#e1306c] hover:border-[#e1306c]/50",
    },
    {
      name: "Twitter",
      href: "https://x.com/tunyarzartoe",
      icon: <RiTwitterXFill />,
      color: "hover:text-black dark:hover:text-white hover:border-slate-400",
    },
  ];

  return (
    <div className="flex items-center gap-3 pt-2">
      {socials.map((social) => (
        <Link
          key={social.name}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.name}
          className={`flex items-center justify-center w-10 h-10 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 text-slate-700 dark:text-slate-300 text-lg shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 ${social.color}`}
        >
          {social.icon}
        </Link>
      ))}
    </div>
  );
};
export default SocialIcons;
