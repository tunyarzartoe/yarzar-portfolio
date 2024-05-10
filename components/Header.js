import ThemeSwitcher from "@/app/ThemeSwitcher";
import LanguageMenuItem from "@/tools/LanguageMenuItem";
import Link from "next/link";
import React from "react";
import { HiArrowDown } from "react-icons/hi2";

const Header = () => {

  return (
    <header className=" padding-container max-container  bg-white/10 backdrop-blur-3xl max-container grid grid-cols-3 gap-4 py-1 border-b border-gray-20 sticky top-0 mb-10">
      <div className="col-span-1 flex items-center gap-4">
        <Link href={"/"} className="bold-20 text-white">
          Yar <span className="regular-18 text-secondary">Zar</span>
        </Link>
      </div>
      <div className="col-span-1 flex flex-col items-center justify-center text-center">
        <button className="btn_dark_rounded p-1 w-32 lg:px-4  lg:py-1 rounded-full flexCenter  animate-pulse">
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
