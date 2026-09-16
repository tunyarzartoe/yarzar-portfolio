"use client"
import { sidebarData } from "@/app/constants/sidebarData";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function Sidebar() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-3 xl:bottom-auto xl:top-1/2 xl:-translate-y-1/2 xl:right-6 z-50 w-full xl:w-auto flex justify-center px-4 pointer-events-none">
      <ul className="pointer-events-auto flex items-center justify-around gap-1 sm:gap-2 bg-white/85 dark:bg-slate-900/85 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800/80 px-3 py-2 rounded-2xl xl:flex-col xl:rounded-full xl:p-3 shadow-xl dark:shadow-2xl dark:shadow-black/40 transition-all">
        {sidebarData?.map((link, index) => {
          const isActive = pathname === link.path;
          return (
            <Link
              key={index}
              href={link.path}
              className={`relative flex items-center justify-center w-11 h-11 rounded-full text-xl transition-all duration-300 group ${
                isActive
                  ? "bg-gradient-to-tr from-red-600 to-rose-600 text-white shadow-md shadow-rose-500/30 scale-105"
                  : "text-slate-600 dark:text-slate-400 hover:text-red-600 dark:hover:text-rose-400 hover:bg-slate-100 dark:hover:bg-slate-800/70"
              }`}
              aria-label={link.name}
            >
              {/* Desktop Tooltip */}
              <div className="absolute right-14 bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs font-bold px-2.5 py-1 rounded-md shadow-lg pointer-events-none whitespace-nowrap capitalize hidden xl:group-hover:flex items-center">
                <span>{link.name}</span>
                <div className="border-solid border-l-slate-900 dark:border-l-white border-l-4 border-y-transparent border-y-4 border-r-0 absolute -right-1 top-1/2 -translate-y-1/2"></div>
              </div>
              <div>{link.icon}</div>
            </Link>
          );
        })}
      </ul>
    </nav>
  );
}

export default Sidebar;
