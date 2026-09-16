"use client";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { HiSun, HiMoon } from "react-icons/hi2";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-9 h-9 rounded-full bg-slate-100 dark:bg-slate-800" />;
  }

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-slate-100 dark:bg-slate-800/90 text-slate-700 dark:text-slate-200 border border-slate-200/80 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 hover:scale-105 active:scale-95 transition-all duration-300 shadow-sm"
      aria-label="Toggle Theme"
      title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
    >
      {isDark ? (
        <HiSun className="text-lg text-amber-400 transition-transform duration-300" />
      ) : (
        <HiMoon className="text-lg text-indigo-600 transition-transform duration-300" />
      )}
    </button>
  );
};

export default ThemeSwitcher;
