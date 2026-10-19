import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useMetadata } from "@/app/metaData";
import profileImage from "@/public/new_profile.jpeg";
import SocialIcons from "@/components/SocialIcons";
import { ProjectCard } from "@/components/ProjectCard";
import { workData } from "@/app/constants/personalData";
import GitHubStats from "@/components/GitHubStats";
import BackToTopButton from "@/components/main/BackToTopButton";
import {
  HiSparkles,
  HiBriefcase,
  HiAcademicCap,
  HiArrowRight,
  HiCheckBadge,
  HiEnvelope,
  HiCodeBracket,
  HiCommandLine,
  HiClipboardDocument,
  HiCheck,
  HiCpuChip,
  HiGlobeAlt,
  HiCubeTransparent,
  HiShieldCheck,
  HiBolt,
  HiArrowUpRight,
  HiMapPin,
} from "react-icons/hi2";
import {
  FaJava,
  FaReact,
  FaPython,
  FaNodeJs,
  FaGitAlt,
  FaDocker,
  FaHtml5,
  FaCss3Alt,
  FaGithub,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiSpringboot,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiFigma,
  SiRedux,
} from "react-icons/si";

const CODE_TABS = [
  {
    id: "profile",
    label: "developer.ts",
    code: `// developer.ts — Core Engineering Identity
export const engineer = {
  name: "Tun Yar Zar Toe (トゥン・ヤー・ザー・トー)",
  role: "Full-Stack Software Engineer",
  location: "Tokyo, Japan 🇯🇵",
  experience: "3+ Years Commercial Experience",
  languages: ["English (Professional)", "Japanese (JLPT N2)", "Burmese (Native)"],
  architecture: "Scalable Full-Stack, Clean Code & API Design",
  activeFocus: ["React 19 / Next.js 15", "Java Spring Boot", "Cloud & Microservices"],
  isOpenForOpportunities: true,
};`,
  },
  {
    id: "stack",
    label: "stack.json",
    code: `{
  "frontend": ["Next.js 15", "React", "TypeScript", "Tailwind CSS", "Redux"],
  "backend": ["Java", "Spring Boot", "Node.js", "Express", "REST APIs"],
  "databases": ["MySQL", "PostgreSQL", "MongoDB"],
  "tooling": ["Git/GitHub", "Docker", "Figma", "Vercel", "CI/CD"],
  "principles": ["Sub-second loads", "A11y", "Lighthouse 95+", "報連相"]
}`,
  },
  {
    id: "recruiter",
    label: "recruiter-memo.md",
    code: `# Candidate Summary (採用ご担当者様向け)
- 氏名: トゥンヤーザートー (Tun Yar Zar Toe)
- 語学力: JLPT N2 合格 (日本語での仕様書読解・円滑な業務連携可能)
- 実務経験: 3年以上 (Kumo Solutions / Evercomm SG)
- 希望形態: 正社員 / インターン (Webエンジニア・新卒 / 中途)
- 所在地: 東京都江東区 (23区内全域通勤可能 / リモート対応可)`,
  },
];

const TECH_PILLS = [
  { name: "React.js", icon: <FaReact className="text-[#61dafb]" />, cat: "frontend" },
  { name: "Next.js 15", icon: <SiNextdotjs className="text-slate-900 dark:text-white" />, cat: "frontend" },
  { name: "TypeScript", icon: <SiTypescript className="text-[#3178c6]" />, cat: "frontend" },
  { name: "Java", icon: <FaJava className="text-[#007396]" />, cat: "backend" },
  { name: "Spring Boot", icon: <SiSpringboot className="text-[#6db33f]" />, cat: "backend" },
  { name: "Node.js", icon: <FaNodeJs className="text-[#68a063]" />, cat: "backend" },
  { name: "Python", icon: <FaPython className="text-[#306998]" />, cat: "backend" },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#38bdf8]" />, cat: "frontend" },
  { name: "MySQL", icon: <SiMysql className="text-[#4479a1]" />, cat: "database" },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-[#336791]" />, cat: "database" },
  { name: "MongoDB", icon: <SiMongodb className="text-[#47a248]" />, cat: "database" },
  { name: "Git / GitHub", icon: <FaGitAlt className="text-[#f05032]" />, cat: "tool" },
];

const METRICS = [
  { value: "3+ Years", label: "Commercial Experience", sub: "Production-tested code" },
  { value: "6+ Live", label: "Shipped Projects", sub: "Web & SaaS applications" },
  { value: "JLPT N2", label: "Business Japanese", sub: "Tokyo IT Specialist College" },
  { value: "Full-Stack", label: "React + Spring Boot", sub: "End-to-end architecture" },
];

const Home = () => {
  const metadata = useMetadata();
  const [activeCodeTab, setActiveCodeTab] = useState("profile");
  const [copiedCode, setCopiedCode] = useState(false);

  // Top featured works
  const featuredWorks = workData.slice(0, 6);

  const currentSnippet = CODE_TABS.find((t) => t.id === activeCodeTab) || CODE_TABS[0];

  const handleCopyCode = () => {
    navigator.clipboard.writeText(currentSnippet.code);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        {metadata.icon && <link rel="icon" href={metadata.icon.src} />}
      </Head>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-24 py-4 sm:py-8">
        {/* ========================================================= */}
        {/* HERO SECTION — VANGUARD CYBER-MINIMALISM                  */}
        {/* ========================================================= */}
        <section className="relative pt-6 sm:pt-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Left Column: Engineer Identity & Vision */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 flex flex-col items-start text-left"
            >
              {/* Top Badges Bar: Available for hire + JLPT N2 Badge */}
              <div className="flex flex-wrap items-center gap-2 mb-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 dark:bg-emerald-500/15 border border-emerald-500/25 text-emerald-700 dark:text-emerald-400 text-xs sm:text-sm font-semibold shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Available for Engineering Roles in Tokyo</span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/5 dark:bg-white/5 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold">
                  <span>🇯🇵</span>
                  <span>JLPT N2 Certified</span>
                </div>
              </div>

              {/* Title & Headline */}
              <div className="space-y-2 mb-5">
                <p className="text-xs sm:text-sm font-bold text-secondary uppercase tracking-widest font-mono flex items-center gap-2">
                  <span className="inline-block w-2 h-0.5 bg-secondary" />
                  Full-Stack Software Engineer
                </p>
                <h1 className="text-4xl sm:text-6xl font-black text-slate-900 dark:text-white tracking-tight leading-none">
                  Tun Yar Zar Toe
                </h1>
                <div className="h-10 sm:h-12 flex items-center text-xl sm:text-3xl font-extrabold text-slate-700 dark:text-slate-300">
                  <span className="mr-2 font-mono text-slate-400">&gt;</span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-rose-500 to-amber-500">
                    Architecting Scalable Web Platforms.
                  </span>
                </div>
              </div>

              {/* Bio summary */}
              <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed mb-6 max-w-xl">
                Passionate software engineer with over{" "}
                <strong className="text-slate-900 dark:text-white font-bold">3+ years</strong> of commercial experience crafting responsive, production-ready applications with{" "}
                <strong className="text-slate-900 dark:text-white font-semibold">React, Next.js, and Java Spring Boot</strong>. Currently engineering in Tokyo, combining high-velocity delivery with robust architecture and bilingual team collaboration.
              </p>

              {/* Quick Tech Chips */}
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-8">
                {TECH_PILLS.slice(0, 6).map((tech, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold bg-white/80 dark:bg-slate-900/80 border border-slate-200/90 dark:border-slate-800 text-slate-800 dark:text-slate-200 shadow-sm backdrop-blur-md"
                  >
                    {tech.icon}
                    <span>{tech.name}</span>
                  </span>
                ))}
              </div>

              {/* Primary Actions */}
              <div className="flex flex-wrap items-center gap-3 mb-8 w-full sm:w-auto">
                <Link
                  href="/work"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl text-white text-sm font-bold bg-gradient-to-r from-red-600 via-rose-600 to-red-600 hover:from-red-500 hover:to-rose-500 shadow-lg shadow-rose-500/25 hover:shadow-rose-500/40 hover:-translate-y-0.5 transition-all w-full sm:w-auto"
                >
                  <HiCommandLine className="text-base" />
                  <span>Explore Projects</span>
                  <HiArrowRight className="text-sm" />
                </Link>
                <Link
                  href="/credentials"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl text-slate-800 dark:text-slate-200 text-sm font-bold bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 hover:border-slate-300 dark:hover:border-slate-700 shadow-sm transition-all w-full sm:w-auto backdrop-blur-md"
                >
                  <HiCheckBadge className="text-secondary text-base" />
                  <span>Credentials & Background</span>
                </Link>
                <a
                  href="/TUNYARZARTOE-(履歴書).pdf"
                  download
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl text-slate-700 dark:text-slate-300 text-sm font-bold hover:text-secondary transition-colors"
                  title="Download Japanese Resume"
                >
                  <span>履歴書 (CV) PDF</span>
                </a>
              </div>

              {/* Socials */}
              <SocialIcons />
            </motion.div>

            {/* Right Column: Interactive Code Terminal & Profile Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="lg:col-span-5 w-full flex flex-col gap-4"
            >
              {/* Profile Identity Pill Card */}
              <div className="relative rounded-3xl p-5 bg-gradient-to-br from-white/90 via-slate-50/80 to-white/90 dark:from-slate-900/90 dark:via-[#0e1424]/90 dark:to-slate-950/90 border border-slate-200/80 dark:border-slate-800/80 backdrop-blur-xl shadow-xl shadow-slate-200/50 dark:shadow-2xl dark:shadow-black/70 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-2xl p-0.5 bg-gradient-to-tr from-red-600 via-rose-500 to-amber-500 shadow-md flex-shrink-0">
                    <Image
                      src={profileImage}
                      alt="Tun Yar Zar Toe"
                      className="w-full h-full rounded-[14px] object-cover"
                      priority
                    />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-black text-slate-900 dark:text-white leading-tight">
                      Tun Yar Zar Toe
                    </h3>
                    <p className="text-xs text-secondary font-semibold font-mono">
                      @tun.dev • Tokyo, Japan
                    </p>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                      Tokyo IT Specialist College
                    </p>
                  </div>
                </div>

                <div className="text-right flex-shrink-0">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                    ● Active
                  </span>
                </div>
              </div>

              {/* Interactive Code Window */}
              <div className="relative rounded-3xl overflow-hidden border border-slate-200/80 dark:border-slate-800/80 bg-slate-950 text-slate-100 shadow-2xl font-mono text-xs">
                {/* Window Titlebar with Tabs */}
                <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900/90 border-b border-slate-800/80">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                  </div>

                  {/* Snippet Tabs */}
                  <div className="flex items-center gap-1">
                    {CODE_TABS.map((tab) => (
                      <button
                        key={tab.id}
                        onClick={() => setActiveCodeTab(tab.id)}
                        className={`px-2.5 py-1 rounded-md text-[11px] font-semibold transition-all ${
                          activeCodeTab === tab.id
                            ? "bg-slate-800 text-rose-400 border border-slate-700/60"
                            : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/40"
                        }`}
                      >
                        {tab.label}
                      </button>
                    ))}
                  </div>

                  {/* Copy Button */}
                  <button
                    onClick={handleCopyCode}
                    className="text-slate-400 hover:text-white transition-colors text-xs flex items-center gap-1"
                    title="Copy code"
                  >
                    {copiedCode ? <HiCheck className="text-emerald-400" /> : <HiClipboardDocument />}
                  </button>
                </div>

                {/* Code Body */}
                <pre className="p-4 sm:p-5 overflow-x-auto text-[11px] sm:text-xs leading-relaxed text-slate-300 max-h-[260px] scrollbar-thin">
                  <code>{currentSnippet.code}</code>
                </pre>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* STATS & METRICS STRIP                                     */}
        {/* ========================================================= */}
        <section className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {METRICS.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="p-4 sm:p-5 rounded-3xl bg-white/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800/80 backdrop-blur-xl shadow-md space-y-1 hover:border-secondary/40 transition-all"
            >
              <div className="text-xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
                {item.value}
              </div>
              <div className="text-xs sm:text-sm font-bold text-secondary">
                {item.label}
              </div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400">
                {item.sub}
              </div>
            </motion.div>
          ))}
        </section>

        {/* ========================================================= */}
        {/* FEATURED PROJECTS SHOWCASE                                */}
        {/* ========================================================= */}
        <section className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-secondary uppercase tracking-widest mb-1">
                <HiSparkles /> Portfolio Preview
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
                Featured Engineering Projects
              </h2>
            </div>
            <Link
              href="/work"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-secondary hover:text-red-700 dark:hover:text-rose-300 transition-colors"
            >
              <span>View All ({workData.length}) Projects</span>
              <HiArrowRight />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {featuredWorks.map((project) => (
              <ProjectCard key={project.id} project={project} isFeatured={true} />
            ))}
          </div>
        </section>

        {/* ========================================================= */}
        {/* ENGINEERING DNA & CORE PILLARS BENTO GRID                 */}
        {/* ========================================================= */}
        <section className="space-y-6">
          <div className="border-b border-slate-200 dark:border-slate-800 pb-3 flex items-center justify-between">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-secondary uppercase tracking-widest mb-1">
                <HiCpuChip /> Architecture & DNA
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
                Engineering Principles & Pillars
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Pillar 1 */}
            <div className="p-6 sm:p-7 rounded-3xl bg-white/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800/80 backdrop-blur-xl shadow-md space-y-3 hover:border-blue-500/40 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 flex items-center justify-center text-2xl">
                <HiCubeTransparent />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                Full-Stack Architecture
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Building cohesive web solutions combining React and Next.js modern user interfaces with robust Java Spring Boot and Node.js microservices.
              </p>
              <div className="flex flex-wrap gap-1 pt-2">
                <span className="px-2 py-0.5 rounded text-[11px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">REST APIs</span>
                <span className="px-2 py-0.5 rounded text-[11px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">State Management</span>
                <span className="px-2 py-0.5 rounded text-[11px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">Schema Design</span>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="p-6 sm:p-7 rounded-3xl bg-white/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800/80 backdrop-blur-xl shadow-md space-y-3 hover:border-rose-500/40 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-red-500/10 dark:bg-rose-500/20 text-secondary flex items-center justify-center text-2xl">
                <HiBolt />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                Speed & Optimization
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Obsessed with sub-second page loads, accessible UI components, code-splitting, lazy loading, and responsive mobile-first experiences.
              </p>
              <div className="flex flex-wrap gap-1 pt-2">
                <span className="px-2 py-0.5 rounded text-[11px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">Lighthouse 95+</span>
                <span className="px-2 py-0.5 rounded text-[11px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">Accessibility</span>
                <span className="px-2 py-0.5 rounded text-[11px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">SEO Ready</span>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="p-6 sm:p-7 rounded-3xl bg-white/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800/80 backdrop-blur-xl shadow-md space-y-3 hover:border-emerald-500/40 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-2xl">
                <HiShieldCheck />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                Team Collaboration & Quality
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Disciplined Git version control, semantic pull requests, rigorous code reviews, automated builds, and effective Japanese workplace communication (報連相).
              </p>
              <div className="flex flex-wrap gap-1 pt-2">
                <span className="px-2 py-0.5 rounded text-[11px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">Git / GitHub</span>
                <span className="px-2 py-0.5 rounded text-[11px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">Code Reviews</span>
                <span className="px-2 py-0.5 rounded text-[11px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">報連相 (Ho-Ren-So)</span>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* FULL TECH STACK MATRIX                                    */}
        {/* ========================================================= */}
        <section className="p-8 sm:p-10 rounded-3xl bg-white/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800/80 backdrop-blur-xl shadow-md space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-4">
            <div>
              <div className="text-xs font-bold text-secondary uppercase tracking-widest mb-1">
                Technology Arsenal
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
                Tools & Frameworks I Build With
              </h2>
            </div>
            <span className="text-xs text-slate-500 font-mono">12+ Production Technologies</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {TECH_PILLS.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2.5 p-3 rounded-2xl bg-slate-50/90 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 hover:border-secondary/40 hover:-translate-y-0.5 transition-all group shadow-sm"
              >
                <span className="text-2xl group-hover:scale-110 transition-transform">
                  {item.icon}
                </span>
                <span className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200 truncate">
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================= */}
        {/* JAPAN RECRUITER & CAREER SPOTLIGHT (BALANCED CARD)        */}
        {/* ========================================================= */}
        <motion.section
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-white via-slate-50 to-rose-50/30 dark:bg-gradient-to-br dark:from-slate-900/90 dark:via-[#0f172a]/90 dark:to-slate-950/90 text-slate-900 dark:text-white border border-slate-200/90 dark:border-slate-800/90 shadow-xl relative overflow-hidden backdrop-blur-xl"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-red-500/10 dark:bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-rose-500/10 dark:bg-white/10 border border-rose-500/20 dark:border-white/20 text-secondary dark:text-rose-300">
                <span>🇯🇵</span>
                <span>採用担当者様向けサマリー (Candidate Profile for Japan)</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
                トゥンヤーザートー (Tun Yar Zar Toe) • Webエンジニア
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 pt-1">
                <div className="flex items-center gap-2">
                  <span className="text-secondary font-bold">✓ 語学力:</span>
                  <span>JLPT N2 合格（ビジネス会話・仕様書理解）</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-blue-600 dark:text-blue-400 font-bold">✓ 在留資格:</span>
                  <span>留学（東京IT専門学校・都内通勤可能）</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold">✓ 実務経験:</span>
                  <span>3年以上（React / Next.js / Java / MySQL）</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-purple-600 dark:text-purple-400 font-bold">✓ 希望雇用:</span>
                  <span>正社員・インターン（新卒・第二新卒）</span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap sm:flex-col gap-2.5 w-full sm:w-auto flex-shrink-0">
              <a
                href="/TUNYARZARTOE-(履歴書).pdf"
                download
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white shadow-md shadow-rose-500/25 transition-all text-center"
              >
                <span>履歴書 (CV) ダウンロード</span>
              </a>
              <Link
                href="/credentials"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-slate-900/5 hover:bg-slate-900/10 dark:bg-white/10 dark:hover:bg-white/20 border border-slate-900/10 dark:border-white/20 text-slate-800 dark:text-white transition-all text-center"
              >
                <span>自己PR・志望動機を見る</span>
              </Link>
            </div>
          </div>
        </motion.section>

        {/* ========================================================= */}
        {/* GITHUB STATS SECTION                                      */}
        {/* ========================================================= */}
        <section className="space-y-6">
          <div className="text-center max-w-2xl mx-auto mb-6">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-secondary uppercase tracking-widest mb-1">
              <HiCodeBracket /> Open Source & Activity
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
              GitHub Contributions & Stats
            </h2>
          </div>
          <GitHubStats />
        </section>

        {/* ========================================================= */}
        {/* CALL TO ACTION                                            */}
        {/* ========================================================= */}
        <section className="p-8 sm:p-12 rounded-3xl bg-white/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800/80 backdrop-blur-xl shadow-xl text-center max-w-3xl mx-auto space-y-6">
          <div className="inline-flex p-3 rounded-2xl bg-red-500/10 dark:bg-rose-500/20 text-secondary text-3xl mx-auto">
            <HiEnvelope />
          </div>
          <h3 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white">
            Have a project in mind or an open role?
          </h3>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed max-w-lg mx-auto">
            I am currently based in Tokyo and available for full-time engineering positions,
            collaborations, and contract opportunities. Let&apos;s build something great together.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Link
              href="/contact"
              className="px-8 py-3.5 rounded-full text-white font-bold text-sm bg-gradient-to-r from-red-600 via-rose-600 to-red-600 hover:from-red-500 hover:to-rose-500 shadow-lg shadow-rose-500/25 hover:shadow-rose-500/40 transition-all"
            >
              Get in Touch
            </Link>
            <a
              href="/TUNYARZARTOE-(履歴書).pdf"
              download
              className="px-8 py-3.5 rounded-full text-slate-800 dark:text-slate-200 font-bold text-sm bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-750 transition-all"
            >
              Download CV / 履歴書
            </a>
          </div>
        </section>
      </div>

      <BackToTopButton />
    </>
  );
};

export default Home;