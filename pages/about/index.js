import React from "react";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import { useMetadata } from "@/app/metaData";
import aboutImage from "@/public/about-photo.jpg";
import Personal from "@/components/Personal";
import BackToTopButton from "@/components/main/BackToTopButton";
import {
  HiSparkles,
  HiLanguage,
  HiAcademicCap,
  HiArrowRight,
  HiCheckBadge,
  HiEnvelope,
  HiMapPin,
  HiBriefcase,
  HiCpuChip,
  HiCommandLine,
  HiGlobeAlt,
  HiShieldCheck,
} from "react-icons/hi2";
import {
  FaReact,
  FaJava,
  FaPython,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaDocker,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiSpringboot,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiFigma,
  SiRedux,
} from "react-icons/si";

/* ─── Skill level → colour mapping ─── */
const levelColor = {
  Mastery:     "bg-violet-500/10 text-violet-600 dark:text-violet-400 border-violet-500/20",
  Advanced:    "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
  Proficient:  "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
  Business:    "bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20",
  Experienced: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
};

const SKILL_CATEGORIES = [
  {
    title: "Frontend Engineering",
    icon: <HiCommandLine />,
    color: "from-blue-500/10 to-cyan-500/5 border-blue-500/20",
    iconColor: "text-blue-500",
    skills: [
      { name: "React.js",      icon: <FaReact className="text-[#61dafb]" />,                         level: "Advanced" },
      { name: "Next.js 15",   icon: <SiNextdotjs className="text-slate-900 dark:text-white" />,      level: "Advanced" },
      { name: "TypeScript",   icon: <SiTypescript className="text-[#3178c6]" />,                     level: "Proficient" },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#38bdf8]" />,                    level: "Advanced" },
      { name: "HTML5 / CSS3", icon: <FaHtml5 className="text-[#e34c26]" />,                         level: "Mastery" },
    ],
  },
  {
    title: "Backend & Systems",
    icon: <HiCpuChip />,
    color: "from-violet-500/10 to-purple-500/5 border-violet-500/20",
    iconColor: "text-violet-500",
    skills: [
      { name: "Java + Spring Boot", icon: <FaJava className="text-[#007396]" />,         level: "Advanced" },
      { name: "Node.js",            icon: <FaNodeJs className="text-[#68a063]" />,        level: "Proficient" },
      { name: "Python",             icon: <FaPython className="text-[#306998]" />,        level: "Proficient" },
      { name: "RESTful APIs",       icon: <SiSpringboot className="text-[#6db33f]" />,   level: "Advanced" },
    ],
  },
  {
    title: "Databases & Cloud",
    icon: <HiShieldCheck />,
    color: "from-emerald-500/10 to-teal-500/5 border-emerald-500/20",
    iconColor: "text-emerald-500",
    skills: [
      { name: "MySQL",      icon: <SiMysql className="text-[#4479a1]" />,      level: "Advanced" },
      { name: "PostgreSQL", icon: <SiPostgresql className="text-[#336791]" />, level: "Proficient" },
      { name: "MongoDB",    icon: <SiMongodb className="text-[#47a248]" />,    level: "Proficient" },
      { name: "Git & GitHub",icon: <FaGitAlt className="text-[#f05032]" />,   level: "Advanced" },
      { name: "Docker",     icon: <FaDocker className="text-[#2496ed]" />,     level: "Proficient" },
    ],
  },
  {
    title: "Design & Collaboration",
    icon: <HiGlobeAlt />,
    color: "from-amber-500/10 to-orange-500/5 border-amber-500/20",
    iconColor: "text-amber-500",
    skills: [
      { name: "Figma Prototyping",    icon: <SiFigma className="text-[#f24e1e]" />,          level: "Advanced" },
      { name: "JLPT N2 • Bilingual", icon: <HiLanguage className="text-rose-500" />,         level: "Business" },
      { name: "Agile / Scrum",        icon: <HiSparkles className="text-amber-500" />,        level: "Experienced" },
      { name: "Redux / State Mgmt",   icon: <SiRedux className="text-[#764abc]" />,           level: "Proficient" },
    ],
  },
];

const QUICK_FACTS = [
  { icon: <HiMapPin />, label: "Location", value: "Tokyo, Japan 🇯🇵" },
  { icon: <HiBriefcase />, label: "Experience", value: "3+ Years Commercial" },
  { icon: <HiAcademicCap />, label: "Education", value: "Tokyo IT Specialist College" },
  { icon: <HiLanguage />, label: "Japanese", value: "JLPT N2 Certified" },
  { icon: <HiCheckBadge />, label: "Status", value: "Open to Opportunities" },
  { icon: <HiGlobeAlt />, label: "Languages", value: "JP · EN · Burmese" },
];

/* ─── fade-up variant reused across sections ─── */
const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.06, ease: "easeOut" },
  }),
};

const About = () => {
  const metadata = useMetadata();

  return (
    <>
      <Head>
        <title>About | Tun Yar Zar Toe</title>
        {metadata.icon && <link rel="icon" href={metadata.icon.src} />}
      </Head>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-20">

        {/* ═══════════════════════════════════════════════════════
            HERO — SPLIT LAYOUT: photo left · bio right
        ════════════════════════════════════════════════════════ */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">

          {/* Photo column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 lg:sticky lg:top-24"
          >
            {/* Photo card */}
            <div className="relative rounded-3xl overflow-hidden bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl group">
              {/* Glow accent */}
              <div className="absolute -inset-px rounded-3xl bg-gradient-to-tr from-rose-500/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10" />

              <div className="relative h-72 sm:h-80 lg:h-96 overflow-hidden">
                <Image
                  src={aboutImage}
                  alt="Tun Yar Zar Toe"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                {/* Dark overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                {/* Floating name tag */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="rounded-2xl bg-white/10 dark:bg-black/30 backdrop-blur-md border border-white/20 px-4 py-3">
                    <p className="text-white font-black text-base leading-none">Tun Yar Zar Toe</p>
                    <p className="text-white/70 text-xs font-mono mt-1">トゥン・ヤー・ザー・トー</p>
                  </div>
                </div>
              </div>

              {/* Quick facts strip */}
              <div className="divide-y divide-slate-100 dark:divide-slate-800">
                {QUICK_FACTS.map((fact, i) => (
                  <div key={i} className="flex items-center justify-between px-4 py-2.5 text-xs">
                    <span className="flex items-center gap-2 text-slate-500 dark:text-slate-400 font-medium">
                      <span className="text-secondary">{fact.icon}</span>
                      {fact.label}
                    </span>
                    <span className="font-semibold text-slate-800 dark:text-slate-200 text-right max-w-[55%] truncate">
                      {fact.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Download CV */}
              <div className="p-3 border-t border-slate-100 dark:border-slate-800">
                <a
                  href="/TUNYARZARTOE-(履歴書).pdf"
                  download
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-2xl text-xs font-bold text-white bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 shadow shadow-rose-500/20 transition-all"
                >
                  Download CV / 履歴書
                </a>
              </div>
            </div>
          </motion.div>

          {/* Bio column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-8 space-y-8"
          >
            {/* Section tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-600 dark:text-rose-400 text-xs font-bold tracking-wide">
              <HiSparkles />
              About Me & My Journey
            </div>

            <div className="space-y-3">
              <h1 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
                Building Scalable,{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-rose-500 to-amber-500">
                  High-Performance
                </span>{" "}
                Software.
              </h1>
              <p className="text-slate-500 dark:text-slate-400 text-sm font-mono">
                Full-Stack Engineer · Tokyo, Japan 🇯🇵 · JLPT N2
              </p>
            </div>

            <div className="space-y-4 text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
              <p>
                I&apos;m <strong className="text-slate-900 dark:text-white">Tun Yar Zar Toe</strong>, a passionate software
                engineer with over <strong className="text-slate-900 dark:text-white">3+ years</strong> of hands-on
                commercial experience building dynamic web applications and scalable backend systems.
              </p>
              <p>
                My career spans commercial web applications at{" "}
                <strong className="text-slate-900 dark:text-white">Kumo Solutions</strong> and enterprise energy analytics
                dashboards at <strong className="text-slate-900 dark:text-white">Evercomm Singapore</strong>. I specialise in
                combining modern frontend (React, Next.js, Tailwind) with robust backend engines (Java Spring Boot,
                Node.js) and relational databases (MySQL, PostgreSQL).
              </p>
              <p>
                Currently based in <strong className="text-slate-900 dark:text-white">Tokyo, Japan</strong>, enrolled at{" "}
                <strong className="text-slate-900 dark:text-white">東京ITプログラミング＆会計専門学校</strong> and holding{" "}
                <strong className="text-slate-900 dark:text-white">JLPT N2</strong> — fully capable of working in
                bilingual Japanese-English engineering environments.
              </p>
            </div>

            {/* Highlight chips */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[
                { label: "3+ Years", sub: "Commercial XP" },
                { label: "JLPT N2", sub: "Business Japanese" },
                { label: "6+ Projects", sub: "Shipped to Production" },
                { label: "Full-Stack", sub: "React + Spring Boot" },
                { label: "Tokyo Based", sub: "23区 Ready" },
                { label: "Bilingual", sub: "JP · EN · Burmese" },
              ].map((chip, i) => (
                <div key={i} className="p-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-0.5 hover:border-secondary/40 transition-colors">
                  <div className="text-sm font-black text-slate-900 dark:text-white">{chip.label}</div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">{chip.sub}</div>
                </div>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-3 pt-1">
              <Link
                href="/credentials"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white font-bold text-sm bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 shadow shadow-rose-500/25 hover:-translate-y-px transition-all"
              >
                <HiAcademicCap />
                View Credentials
                <HiArrowRight className="text-xs" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-slate-800 dark:text-slate-200 font-bold text-sm bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 hover:border-secondary/50 hover:-translate-y-px transition-all shadow-sm"
              >
                <HiEnvelope className="text-secondary" />
                Let&apos;s Connect
              </Link>
            </div>
          </motion.div>
        </section>

        {/* ═══════════════════════════════════════════════════════
            TECHNICAL SKILL MATRIX — bento card grid
        ════════════════════════════════════════════════════════ */}
        <section className="space-y-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-center space-y-2 max-w-xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-bold tracking-wide">
              <HiCpuChip />
              Technical Expertise
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              Skill Matrix
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Core technologies I use in production — battle-tested across commercial projects.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {SKILL_CATEGORIES.map((cat, catIdx) => (
              <motion.div
                key={catIdx}
                custom={catIdx}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className={`rounded-3xl bg-gradient-to-br ${cat.color} bg-white dark:bg-slate-900 border p-6 space-y-4 shadow-sm hover:shadow-md transition-all duration-300`}
              >
                {/* Category header */}
                <div className="flex items-center gap-2.5">
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center text-lg ${cat.iconColor} bg-white dark:bg-slate-800 shadow-sm border border-slate-100 dark:border-slate-700`}>
                    {cat.icon}
                  </div>
                  <h3 className="text-sm font-black text-slate-900 dark:text-white tracking-tight">
                    {cat.title}
                  </h3>
                </div>

                {/* Skills list */}
                <div className="space-y-2">
                  {cat.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="flex items-center justify-between px-3 py-2 rounded-xl bg-white/70 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700/60 hover:border-slate-300 dark:hover:border-slate-600 transition-colors group"
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="text-lg group-hover:scale-110 transition-transform">{skill.icon}</span>
                        <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">{skill.name}</span>
                      </div>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${levelColor[skill.level] ?? "bg-slate-100 text-slate-600 border-slate-200"}`}>
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════
            PERSONAL OVERVIEW (existing Personal component)
        ════════════════════════════════════════════════════════ */}
        <section>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <Personal />
          </motion.div>
        </section>

        {/* ═══════════════════════════════════════════════════════
            CTA BANNER
        ════════════════════════════════════════════════════════ */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden"
        >
          <div className="bg-gradient-to-br from-slate-900 via-[#0d1120] to-slate-950 dark:from-slate-900 dark:via-[#0d1120] dark:to-slate-950 border border-slate-800/80 shadow-2xl px-6 sm:px-12 py-10 sm:py-14 text-center space-y-5">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-40 bg-rose-600/15 rounded-full blur-3xl pointer-events-none" />
            <div className="relative">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/15 border border-rose-500/25 text-rose-400 text-xs font-bold mb-4">
                🇯🇵 採用担当者様へ
              </div>
              <h3 className="text-2xl sm:text-4xl font-black text-white leading-tight">
                Ready to join your team in Tokyo.
              </h3>
              <p className="text-slate-400 text-sm sm:text-base mt-3 max-w-lg mx-auto leading-relaxed">
                JLPT N2 · 3+ years commercial experience · Full-Stack (React + Spring Boot) · 即戦力・正社員希望
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3 mt-7">
                <Link
                  href="/contact"
                  className="px-8 py-3 rounded-full text-white font-bold text-sm bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 shadow-lg shadow-rose-500/25 hover:-translate-y-0.5 transition-all"
                >
                  Get in Touch
                </Link>
                <a
                  href="/TUNYARZARTOE-(履歴書).pdf"
                  download
                  className="px-8 py-3 rounded-full text-slate-200 font-bold text-sm bg-white/10 hover:bg-white/15 border border-white/20 transition-all"
                >
                  Download 履歴書 PDF
                </a>
              </div>
            </div>
          </div>
        </motion.section>
      </div>

      <BackToTopButton />
    </>
  );
};

export default About;
