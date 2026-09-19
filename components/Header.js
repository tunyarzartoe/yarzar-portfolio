"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import ThemeSwitcher from "@/app/ThemeSwitcher";
import { sidebarData } from "@/app/constants/sidebarData";
import Logo from "../public/logos/logo.svg";

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="sticky top-3 sm:top-5 z-50 px-3 sm:px-6 max-w-6xl mx-auto w-full mb-6">
      <nav className="rounded-2xl sm:rounded-full bg-white/85 dark:bg-slate-900/85 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800/80 shadow-lg dark:shadow-2xl dark:shadow-black/40 flex items-center justify-between py-2 sm:py-2.5 px-3 sm:px-6 transition-all duration-300">
        {/* Brand / Logo */}
        <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group flex-shrink-0">
          <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl overflow-hidden p-0.5 bg-gradient-to-tr from-secondary via-rose-500 to-amber-500 shadow-md group-hover:scale-105 transition-transform duration-300">
            <Image
              src={Logo}
              alt="Tun Yar Zar Toe - tun.dev"
              width={44}
              height={44}
              className="rounded-[10px] w-full h-full object-cover bg-slate-950"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="text-base sm:text-lg font-black text-slate-900 dark:text-white tracking-tight leading-none group-hover:text-secondary transition-colors">
              tun<span className="text-secondary">.dev</span>
            </span>
            <span className="text-[10px] sm:text-[11px] font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider leading-none mt-1">
              Software Engineer
            </span>
          </div>
        </Link>

        {/* Center: Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-1 lg:gap-2">
          {sidebarData.map((item) => {
            const isActive = pathname === item.path;
            return (
              <Link
                key={item.path}
                href={item.path}
                className={`relative px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold capitalize transition-all duration-200 ${
                  isActive
                    ? "text-white bg-gradient-to-r from-red-600 to-rose-600 shadow-sm shadow-rose-500/20"
                    : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>

        {/* Right Section: Resume & Theme Switcher */}
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="/TUNYARZARTOE-(履歴書).pdf"
            download
            className="group relative inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full text-white text-xs sm:text-sm font-bold bg-gradient-to-r from-red-600 via-rose-600 to-red-600 hover:from-red-500 hover:to-rose-500 shadow-md shadow-rose-500/25 hover:shadow-rose-500/40 transform hover:-translate-y-0.5 transition-all duration-200"
            aria-label="Download resume"
            title="Download CV / 履歴書"
          >
            <span className="tracking-wide text-xs sm:text-sm">履歴書 (CV)</span>
            <svg
              className="w-3.5 h-3.5 transform group-hover:translate-y-0.5 transition-transform"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M12 3v12m0 0l4-4m-4 4L8 11"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4 17v2a2 2 0 002 2h12a2 2 0 002-2v-2"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
              />
            </svg>
          </a>

          <ThemeSwitcher />
        </div>
      </nav>
    </header>
  );
};

export default Header;
