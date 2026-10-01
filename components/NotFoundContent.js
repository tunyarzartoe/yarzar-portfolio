"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import GlobalSearch, { openGlobalSearch } from "@/components/main/GlobalSearch";
import {
  HiHome,
  HiArrowLeft,
  HiMagnifyingGlass,
  HiSparkles,
  HiEnvelope,
  HiSquare2Stack,
  HiPencilSquare,
  HiAcademicCap,
  HiUser,
} from "react-icons/hi2";

const quickLinks = [
  {
    name: "Home",
    ja: "ホーム",
    path: "/",
    icon: <HiHome className="text-rose-500 text-lg" />,
    desc: "Back to the main portfolio page",
  },
  {
    name: "About Me",
    ja: "自己紹介",
    path: "/about",
    icon: <HiUser className="text-blue-500 text-lg" />,
    desc: "Background, skills & journey",
  },
  {
    name: "Work & Projects",
    ja: "制作実績",
    path: "/work",
    icon: <HiSquare2Stack className="text-purple-500 text-lg" />,
    desc: "Explore web & mobile applications",
  },
  {
    name: "Blog",
    ja: "ブログ",
    path: "/blog",
    icon: <HiPencilSquare className="text-emerald-500 text-lg" />,
    desc: "Engineering articles & tutorials",
  },
  {
    name: "Credentials",
    ja: "経歴・資格",
    path: "/credentials",
    icon: <HiAcademicCap className="text-amber-500 text-lg" />,
    desc: "Certificates, education & history",
  },
  {
    name: "Contact",
    ja: "お問い合わせ",
    path: "/contact",
    icon: <HiEnvelope className="text-pink-500 text-lg" />,
    desc: "Get in touch for opportunities",
  },
];

export default function NotFoundContent() {
  const [currentPath, setCurrentPath] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentPath(window.location.pathname);
    }
  }, []);

  const handleGoBack = () => {
    if (typeof window !== "undefined" && window.history.length > 1) {
      window.history.back();
    } else if (typeof window !== "undefined") {
      window.location.href = "/";
    }
  };

  return (
    <section className="min-h-[85vh] flex items-center justify-center py-10 sm:py-16 px-4 sm:px-6 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full text-center"
      >
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-500/10 dark:bg-rose-500/15 border border-rose-500/20 text-rose-600 dark:text-rose-400 text-xs sm:text-sm font-semibold mb-6">
          <HiSparkles className="animate-spin-slow text-sm" />
          <span>404 Error • Lost in Cyberspace</span>
          <span className="hidden sm:inline text-rose-400/60 dark:text-rose-400/40">|</span>
          <span className="hidden sm:inline">ページが見つかりません</span>
        </div>

        {/* Big Stylized 404 Header */}
        <div className="relative mb-6 select-none">
          <div className="absolute inset-0 flex items-center justify-center blur-3xl opacity-20 dark:opacity-30 pointer-events-none">
            <span className="text-9xl font-black bg-gradient-to-r from-red-600 via-rose-500 to-amber-500 bg-clip-text text-transparent">
              404
            </span>
          </div>
          <motion.h1
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="text-7xl sm:text-9xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-rose-500 to-amber-500"
          >
            404
          </motion.h1>
        </div>

        {/* Headline & Description */}
        <div className="max-w-xl mx-auto mb-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-3">
            Houston, We Have a Problem!
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-2">
            The page you are looking for doesn&apos;t exist, has been removed, or was lost in a cosmic anomaly.
          </p>
          <p className="text-xs sm:text-sm text-slate-400 dark:text-slate-500 italic">
            お探しのページは見つかりませんでした。URLが変更されたか削除された可能性があります。
          </p>
        </div>

        {/* Interactive Developer Terminal Box */}
        <div className="max-w-lg mx-auto mb-8 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-950/70 backdrop-blur-md shadow-lg text-left">
          <div className="flex items-center justify-between px-4 py-2.5 bg-slate-100/80 dark:bg-slate-900 border-b border-slate-200/80 dark:border-slate-800">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
              <span className="ml-2 font-mono text-[11px] text-slate-500 dark:text-slate-400 font-semibold">
                route_debugger.json
              </span>
            </div>
            <span className="font-mono text-[11px] text-rose-500 font-bold">
              HTTP 404
            </span>
          </div>
          <pre className="p-4 overflow-x-auto font-mono text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
            <code>
              {`{
  "status": 404,
  "error": "NOT_FOUND",
  "requestedPath": "${currentPath || "unknown"}",
  "message": "Resource could not be located in this universe.",
  "suggestion": "Return to the mission control or search below."
}`}
            </code>
          </pre>
        </div>

        {/* Primary Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold text-white bg-gradient-to-r from-red-600 via-rose-600 to-rose-700 shadow-md shadow-rose-500/25 hover:shadow-lg hover:shadow-rose-500/35 hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <HiHome className="text-base" />
            <span>Back to Home</span>
          </Link>

          <button
            onClick={handleGoBack}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-semibold text-slate-700 dark:text-slate-200 bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800/80 shadow-sm transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <HiArrowLeft className="text-base" />
            <span>Previous Page</span>
          </button>

          <button
            onClick={openGlobalSearch}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-semibold text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900/40 hover:bg-rose-100 dark:hover:bg-rose-900/50 shadow-sm transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <HiMagnifyingGlass className="text-base" />
            <span>Search Portfolio</span>
            <kbd className="hidden sm:inline ml-1 px-1.5 py-0.5 text-[10px] font-mono rounded bg-rose-200/60 dark:bg-rose-900/80 border border-rose-300 dark:border-rose-800 text-rose-700 dark:text-rose-300">
              ⌘K
            </kbd>
          </button>
        </div>

        {/* Quick Links Navigation Grid */}
        <div className="text-left max-w-3xl mx-auto pt-8 border-t border-slate-200/80 dark:border-slate-800/80">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-4 text-center">
            Popular Destinations
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {quickLinks.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className="group flex items-start gap-3 p-3.5 rounded-2xl bg-white/60 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 hover:border-rose-500/40 dark:hover:border-rose-500/40 hover:bg-white dark:hover:bg-slate-900 shadow-sm transition-all"
              >
                <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1.5">
                    <span className="text-sm font-bold text-slate-800 dark:text-slate-200 group-hover:text-rose-500 dark:group-hover:text-rose-400 transition-colors">
                      {item.name}
                    </span>
                    <span className="text-[10px] text-slate-400">
                      ({item.ja})
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-1 mt-0.5">
                    {item.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Global Search Dialog Modal */}
      <GlobalSearch />
    </section>
  );
}

