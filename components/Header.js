import ThemeSwitcher from "@/app/ThemeSwitcher";
import LanguageMenuItem from "@/tools/LanguageMenuItem";
import { useTheme } from "next-themes";
import Link from "next/link";
import React from "react";
import { HiArrowDown } from "react-icons/hi2";

const Header = () => {
  const { theme } = useTheme();

  return (
    <header className="padding-container header max-container grid grid-cols-3 gap-4 py-4 border-b border-gray-20 sticky top-0">
      <div className="col-span-1 flex items-center gap-4">
        <Link href={"/"} className="bold-28 text-white">
          Yar <span className="regular-28 text-secondary">Zar</span>
        </Link>
      </div>
      <div className="col-span-1 flex items-center justify-center">
        <button className="btn_dark_rounded px-8 py-2 rounded-full flexCenter gap-2 animate-pulse">
          <span>Hire me</span>
          <span className="h-5 w-5 border border-white rounded-full flexCenter animate-bounce">
            <HiArrowDown />
          </span>
        </button>
      </div>
      <div className="col-span-1 flex items-center justify-end">
        <div className="flex gap-8">
          <div>
            <LanguageMenuItem />
          </div>
          <div>
            <ThemeSwitcher />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
