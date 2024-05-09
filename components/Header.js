import ThemeSwitcher from "@/app/ThemeSwitcher";
import LanguageMenuItem from "@/tools/LanguageMenuItem";
import { useTheme } from "next-themes";
import Link from "next/link";
import React from "react";
import { HiArrowDown } from "react-icons/hi2";

const Header = () => {
  const { theme } = useTheme();

  return (
    <header className="padding-container max-container  bg-white/10 backdrop-blur-3xl max-container grid grid-cols-3 gap-4 py-1 border-b border-gray-20 sticky top-0">
      <div className="col-span-1 flex items-center gap-4">
        <Link href={"/"} className="bold-24 text-white">
          Yar <span className="regular-24 text-secondary">Zar</span>
        </Link>
      </div>
      <div className="col-span-1 flex flex-col items-center justify-center text-center">
        <button className="btn_dark_rounded px-4 py-2  rounded-full flexCenter  animate-pulse">
          <span className="mr-1">Hire me</span>
          <span className="h-5 w-5 border border-white rounded-full flexCenter animate-bounce ">
            <HiArrowDown />
          </span>
        </button>
      </div>
      <div className="col-span-1 flex items-center justify-end">
        <div className="flex gap-4">
          {/* <div>

            <LanguageMenuItem />
          </div> */}
          <div>
            <ThemeSwitcher />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
