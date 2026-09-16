import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
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

const CODE_SNIPPETS = {
  profile: `// engineer.config.ts
export const developer: DeveloperProfile = {
  name: "Tun Yar Zar Toe (トゥンヤーザートー)",
  role: "Full-Stack Software Engineer",
  location: "Tokyo, Japan 🇯🇵",
  education: "Tokyo IT & Programming College (東京IT会計専門学校)",
  languageProficiency: {
    japanese: "JLPT N2 Passed (ビジネス日本語 / 業務連携可能)",
    english: "Professional Working Proficiency",
    burmese: "Native",
  },
  status: "Actively Job Hunting in Japan (新卒・中途・正社員希望)",
  coreStrengths: [
    "Clean & Scalable Software Architecture",
    "High-Performance Web Applications (React / Next.js)",
    "Enterprise Backend Development (Java / Spring Boot)",
    "Japanese Workplace Communication & Ho-Ren-So (報連相)",
  ],
};`,
  stack: `// tech-stack.ts
export const productionStack = {
  frontend: ["React.js", "Next.js 14", "TypeScript", "Tailwind CSS", "Redux"],
  backend: ["Java", "Spring Boot", "Node.js", "Express", "Python"],
  database: ["MySQL", "PostgreSQL", "MongoDB"],
  tooling: ["Git / GitHub", "Docker", "RESTful APIs", "Figma", "CI/CD"],
  architecture: ["Component-Driven", "MVC", "Microservices", "REST API Design"],
  testing: ["Unit Testing", "Cross-Browser Compatibility", "Lighthouse 95+"],
};`,
  recruiter: `// recruiter-summary.json
{
  "candidate": "Tun Yar Zar Toe",
  "targetRoles": ["Web Engineer", "Frontend Developer", "Backend Developer"],
  "visaStatus": "Student Visa (留学生ビザ・就労手続サポート可能)",
  "commutableArea": "Tokyo 23 Wards & Surrounding Areas (リモート可)",
  "certification": "JLPT N2 (Passed Dec 2025)",
  "commercialExperience": "3+ Years (Kumo Solutions / Evercomm SG)",
  "availableForInterview": "Immediate (Zoom / Google Meet / 対面面談歓迎)",
  "contact": {
    "email": "htunyarzar2001@gmail.com",
    "phone": "070-8969-4368"
  }
}`,
};

const TECH_PILLS = [
  { name: "React.js", icon: <FaReact className="text-[#61dafb]" />, cat: "frontend" },
  { name: "Next.js 14", icon: <SiNextdotjs className="text-slate-900 dark:text-white" />, cat: "frontend" },
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

const Home = () => {
  const metadata = useMetadata();
  const featuredWorks = workData.filter((p) => [3, 2, 1].includes(p.id));

  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        {metadata.icon && <link rel="icon" href={metadata.icon.src} />}
      </Head>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-24 py-4 sm:py-8">
        {/* HERO SECTION */}
        <section className="relative pt-4 sm:pt-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 flex flex-col items-start text-left"
            >
              {/* Status Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 dark:bg-emerald-500/15 border border-emerald-500/25 text-emerald-700 dark:text-emerald-400 text-xs sm:text-sm font-semibold mb-6">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>🇯🇵 日本での就職活動中 • Tokyo Job Hunting (JLPT N2)</span>
              </div>

              {/* Title & Headline */}
              <div className="space-y-1 mb-4">
                <p className="text-xs sm:text-sm font-bold text-secondary uppercase tracking-widest font-mono">
                  &lt;SoftwareEngineer /&gt;
                </p>
                <h1 className="text-4xl sm:text-6xl font-black text-slate-900 dark:text-white tracking-tight leading-none">
                  Tun Yar Zar Toe
                </h1>
                <div className="h-10 sm:h-12 flex items-center text-xl sm:text-2xl font-bold text-slate-700 dark:text-slate-300">
                  <span className="mr-2 font-mono text-slate-400">&gt;</span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-rose-500 to-amber-500">
                    <Typewriter
                      words={[
                        "Full-Stack Software Engineer",
                        "React & Next.js 14 Specialist",
                        "Java & Spring Boot Developer",
                        "JLPT N2 Bilingual Engineer",
                        "Tokyo IT Specialist College",
                      ]}
                      loop={true}
                      cursor
                      cursorStyle="_"
                      typeSpeed={60}
                      deleteSpeed={35}
                      delaySpeed={1800}
                    />
                  </span>
                </div>
              </div>

              {/* Bio summary */}
              <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed mb-6 max-w-xl">
                Engineering modern, scalable web platforms with over <strong className="text-slate-900 dark:text-white font-bold">3+ years</strong> of
                commercial experience across React, Next.js, and Java Spring Boot. Currently studying in Tokyo, Japan,
                certified with <strong className="text-secondary font-bold">JLPT N2</strong>, and committed to clean architecture,
                high performance, and seamless team collaboration.
              </p>

              {/* Quick Tech Chips */}
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-8">
                {TECH_PILLS.slice(0, 6).map((tech, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold bg-white dark:bg-slate-800/90 border border-slate-200/90 dark:border-slate-700/80 text-slate-800 dark:text-slate-200 shadow-sm"
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
                  <span>View Projects</span>
                  <HiArrowRight className="text-sm" />
                </Link>
                <Link
                  href="/credentials"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl text-slate-800 dark:text-slate-200 text-sm font-bold bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-750 hover:border-slate-300 dark:hover:border-slate-600 shadow-sm transition-all w-full sm:w-auto"
                >
                  <HiCheckBadge className="text-secondary text-base" />
                  <span>Credentials & JLPT N2</span>
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

            {/* Right: Profile Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="lg:col-span-5 w-full"
            >
              <div className="relative rounded-3xl overflow-hidden bg-white/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800/80 backdrop-blur-md shadow-md p-6 sm:p-8">
                <div className="flex flex-col items-center text-center">
                  <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full p-1 bg-gradient-to-br from-red-500 via-rose-500 to-amber-400 mb-4">
                    <Image
                      src={profileImage}
                      alt="Tun Yar Zar Toe"
                      className="w-full h-full rounded-full object-cover border-4 border-white dark:border-slate-900"
                      priority
                    />
                  </div>
                  <h3 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white">Tun Yar Zar Toe</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Full-Stack Software Engineer</p>
                </div>

                <div className="grid grid-cols-2 gap-3 mt-6">
                  <div className="rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60 p-3 text-center">
                    <div className="text-lg font-black text-slate-900 dark:text-white">N2</div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400">Japanese</div>
                  </div>
                  <div className="rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60 p-3 text-center">
                    <div className="text-lg font-black text-slate-900 dark:text-white">3+ yrs</div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400">Experience</div>
                  </div>
                  <div className="rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60 p-3 text-center">
                    <div className="text-lg font-black text-slate-900 dark:text-white">React</div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400">Next.js</div>
                  </div>
                  <div className="rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60 p-3 text-center">
                    <div className="text-lg font-black text-slate-900 dark:text-white">Java</div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400">Spring Boot</div>
                  </div>
                </div>

                <div className="flex items-center justify-center gap-2 mt-6 pt-5 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>Available for hire • Tokyo, JP</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* JAPAN RECRUITER SPOTLIGHT / 採用担当者様向け概要 */}
        <motion.section
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-slate-100 via-white to-slate-50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800/90 shadow-xl dark:shadow-2xl relative overflow-hidden"
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

        {/* ENGINEERING DNA & CORE PILLARS BENTO GRID */}
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
            <div className="p-6 sm:p-7 rounded-3xl bg-white/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800/80 backdrop-blur-md shadow-md space-y-3">
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
            <div className="p-6 sm:p-7 rounded-3xl bg-white/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800/80 backdrop-blur-md shadow-md space-y-3">
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
            <div className="p-6 sm:p-7 rounded-3xl bg-white/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800/80 backdrop-blur-md shadow-md space-y-3">
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

        {/* FULL TECH STACK MATRIX */}
        <section className="p-8 sm:p-10 rounded-3xl bg-white/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800/80 backdrop-blur-md shadow-md space-y-6">
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
                className="flex items-center gap-2.5 p-3 rounded-2xl bg-slate-50/90 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 hover:border-secondary/40 hover:-translate-y-0.5 transition-all group"
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

        {/* FEATURED PROJECTS SHOWCASE */}
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
              <span>View All Projects</span>
              <HiArrowRight />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {featuredWorks.map((project) => (
              <ProjectCard key={project.id} project={project} isFeatured={true} />
            ))}
          </div>
        </section>

        {/* GITHUB STATS SECTION */}
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

        {/* CALL TO ACTION */}
        <section className="p-8 sm:p-12 rounded-3xl bg-white/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800/80 backdrop-blur-md shadow-xl text-center max-w-3xl mx-auto space-y-6">
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