import React from "react";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

export default function Layout({ children }) {
  return (
    <div className="relative font-sans antialiased min-h-screen flex flex-col justify-between bg-[#f8fafc] dark:bg-[#080c16] text-slate-900 dark:text-slate-100 transition-colors duration-500 overflow-x-hidden selection:bg-rose-500 selection:text-white">
      {/* Sleek cyber-minimalism ambient mesh glow */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-gradient-to-br from-rose-500/10 via-red-500/5 to-transparent dark:from-rose-600/15 dark:via-red-800/10 dark:to-transparent rounded-full blur-[100px]" />
        <div className="absolute top-1/4 -right-32 w-[550px] h-[550px] bg-gradient-to-bl from-indigo-500/10 via-blue-500/5 to-transparent dark:from-indigo-600/15 dark:via-violet-800/10 dark:to-transparent rounded-full blur-[120px]" />
        <div className="absolute -bottom-32 left-1/4 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-500/5 via-rose-500/5 to-transparent dark:from-cyan-950/20 dark:via-rose-950/15 dark:to-transparent rounded-full blur-[120px]" />
        {/* Subtle grid pattern overlay for modern vanguard feel */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <div className="relative z-10 flex flex-col min-h-screen justify-between">
        <Header />
        <Sidebar />
        <main className="flex-1 pt-20 sm:pt-24">{children}</main>
        <Footer />
      </div>
    </div>
  );
}
