import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { sidebarData } from "@/app/constants/sidebarData";

function Sidebar() {
  const router = useRouter();
  const pathname = router?.pathname || "/";

  const isLinkActive = (path) => {
    if (path === "/") {
      return pathname === "/";
    }
    return pathname === path || pathname.startsWith(`${path}/`) || pathname.startsWith(path);
  };

  return (
    <nav
      className="fixed bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 xl:left-auto xl:translate-x-0 xl:bottom-auto xl:top-1/2 xl:-translate-y-1/2 xl:right-6 z-50 flex md:hidden xl:flex justify-center pointer-events-none w-auto max-w-[calc(100vw-24px)]"
      aria-label="Navigation dock"
    >
      <ul className="pointer-events-auto flex items-center xl:flex-col justify-around gap-1 sm:gap-2 px-2.5 sm:px-3 py-1.5 sm:py-2 xl:p-3 rounded-2xl xl:rounded-full bg-gradient-to-r xl:bg-gradient-to-b from-white/95 via-slate-50/90 to-white/95 dark:from-slate-900/95 dark:via-[#0f172a]/90 dark:to-slate-950/95 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800/80 shadow-xl shadow-slate-300/40 dark:shadow-2xl dark:shadow-black/70 transition-all duration-300">
        {sidebarData?.map((link, index) => {
          const isActive = isLinkActive(link.path);

          return (
            <li key={index}>
              <Link
                href={link.path}
                className={`relative flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-xl sm:rounded-full text-lg sm:text-xl transition-all duration-300 group ${
                  isActive
                    ? "bg-gradient-to-tr from-red-600 via-rose-600 to-red-600 text-white shadow-md shadow-rose-500/35 scale-105"
                    : "text-slate-600 dark:text-slate-400 hover:text-red-600 dark:hover:text-rose-400 hover:bg-slate-100/80 dark:hover:bg-slate-800/70"
                }`}
                aria-label={link.name}
              >
                {/* Desktop Tooltip on large screens */}
                <div className="absolute right-14 bg-gradient-to-r from-slate-900 to-slate-950 dark:from-white dark:to-slate-100 text-white dark:text-slate-900 text-xs font-bold px-2.5 py-1 rounded-lg shadow-lg pointer-events-none whitespace-nowrap capitalize hidden xl:group-hover:flex items-center transition-all duration-200">
                  <span>{link.name}</span>
                  <div className="border-solid border-l-slate-900 dark:border-l-white border-l-4 border-y-transparent border-y-4 border-r-0 absolute -right-1 top-1/2 -translate-y-1/2" />
                </div>

                <div className="flex items-center justify-center">{link.icon}</div>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Sidebar;
