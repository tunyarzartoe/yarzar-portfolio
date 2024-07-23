import ThemeSwitcher from "@/app/ThemeSwitcher";
import LanguageMenuItem from "@/tools/LanguageMenuItem";
import Link from "next/link";
import React from "react";
import { HiArrowDown } from "react-icons/hi2";
import Logo from "../public/logo_icon.png"
import Image from "next/image";

const Header = () => {

  return (
    <nav className="rounded-full nav-container bg-white/20 backdrop-blur-3xl grid grid-cols-3 gap-4 sticky top-5 mb-10 z-50 py-3">
    {/* <header className="fixed h-max bottom-0 mt-auto gap-y-4 flex flex-col items-center top-0 w-full xl:justify-center xl:right-[4%] xl:w-16 xl:h-screen z-50"> */}
      <div className="col-span-1 px-10 flex items-center gap-4">
        <Link href={"/"} className="bold-20 text-white">
        <Image
            src={Logo}
            alt="logo"
            height={50}
            // width={90}
          />          {/* Yar <span className="regular-18 text-secondary">Zar</span> */}
        </Link>
      </div>
      <div className="col-span-1 flex flex-col items-center justify-center text-center">
        {/* <button className="btn_dark_rounded p-1 w-32 lg:px-4  lg:py-1 rounded-full flexCenter  animate-pulse">
          <span className="mr-1">Hire me</span>
          <span className="h-5 w-5 border border-white rounded-full flexCenter animate-bounce ">
            <HiArrowDown />
          </span>
        </button> */}
      </div>
      <div className="col-span-1 flex items-center justify-end ">
        <div className="flex  ps-10">
          {/* <div>

            <LanguageMenuItem />
          </div> */}
          <div className="gap-4">
            <ThemeSwitcher />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
