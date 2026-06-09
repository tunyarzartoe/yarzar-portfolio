import ThemeSwitcher from "@/app/ThemeSwitcher";
import LanguageMenuItem from "@/tools/LanguageMenuItem";
import Link from "next/link";
import React from "react";
import Logo from "../public/logo_icon.png";
import Image from "next/image";

const Header = () => {

  return (
    <nav className=" rounded-full nav-container bg-white/20 backdrop-blur-3xl grid grid-cols-3 gap-3 sticky top-5 mb-4 z-50 py-2 items-center px-2 sm:px-4">
      {/* <header className="fixed h-max bottom-0 mt-auto gap-y-4 flex flex-col items-center top-0 w-full xl:justify-center xl:right-[4%] xl:w-16 xl:h-screen z-50"> */}
      <div className="col-span-1 px-2 sm:px-6 flex items-center justify-between">
        <Link href={"/"} className="bold-20 text-white flex items-center">
          <Image
            src={Logo}
            alt="logo"
            width={50}
            className="rounded-full p-1"
            // height={50}
            // width={90}
            style={{ background: "#f0f0f0" }}
          />
          <h3 className="bold-20  font-extrabold ml-2 text-secondary  mt-1">
            <span className="hidden sm:inline">yarzar.dev</span>
          </h3>
        </Link>
        
      </div>
      <div className=" flex items-center justify-center">
        <a
          href="/resume.pdf"
          download
          className="inline-flex items-center px-3 py-2 sm:px-5 rounded-full text-white bg-gradient-to-r from-red-500 to-rose-600 hover:from-red-600 hover:to-rose-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500 transition-transform transform hover:-translate-y-0.5 shadow-md text-sm sm:text-base"
          aria-label="Download resume"
          title="Download CV"
        >
          <span className="regular-16 font-medium ">
            {/* <span className="hidden sm:inline">
            Download
            </span> */}
             RESUME</span>
          <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M12 3v12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M8 11l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <rect x="3" y="17" width="18" height="3" rx="1.5" fill="currentColor" />
          </svg>
        </a>
      </div>
      <div className="col-span-1 flex items-center justify-end ">
        <div className="flex items-center">
          {/* <div className="mr-4 hidden lg:block">
            <LanguageMenuItem />
          </div> */}
          <ThemeSwitcher />
        </div>
      </div>
    </nav>
  );
};

export default Header;
