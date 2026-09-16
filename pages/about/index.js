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
  HiMapPin,
  HiLanguage,
  HiAcademicCap,
  HiArrowRight,
  HiCheckBadge,
  HiEnvelope,
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
} from "react-icons/si";

const About = () => {
  const metadata = useMetadata();

  const skillCategories = [
    {
      title: "Frontend Engineering",
      skills: [
        { name: "React.js", icon: <FaReact className="text-[#61dafb]" />, level: "Advanced" },
        { name: "Next.js", icon: <SiNextdotjs className="text-slate-900 dark:text-white" />, level: "Advanced" },
        { name: "TypeScript", icon: <SiTypescript className="text-[#3178c6]" />, level: "Proficient" },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#38bdf8]" />, level: "Advanced" },
        { name: "HTML5 / CSS3", icon: <FaHtml5 className="text-[#e34c26]" />, level: "Mastery" },
      ],
    },
    {
      title: "Backend & Systems",
      skills: [
        { name: "Java (Spring Boot)", icon: <FaJava className="text-[#007396]" />, level: "Advanced" },
        { name: "Node.js", icon: <FaNodeJs className="text-[#68a063]" />, level: "Proficient" },
        { name: "Python", icon: <FaPython className="text-[#306998]" />, level: "Proficient" },
        { name: "RESTful APIs", icon: <SiSpringboot className="text-[#6db33f]" />, level: "Advanced" },
      ],
    },
    {
      title: "Databases & Cloud Tools",
      skills: [
        { name: "MySQL", icon: <SiMysql className="text-[#4479a1]" />, level: "Advanced" },
        { name: "PostgreSQL", icon: <SiPostgresql className="text-[#336791]" />, level: "Proficient" },
        { name: "MongoDB", icon: <SiMongodb className="text-[#47a248]" />, level: "Proficient" },
        { name: "Git & GitHub", icon: <FaGitAlt className="text-[#f05032]" />, level: "Advanced" },
      ],
    },
  ];

  return (
    <>
      <Head>
        <title>About Me | Tun Yar Zar Toe</title>
        {metadata.icon && <link rel="icon" href={metadata.icon.src} />}
      </Head>

      <section className="min-h-screen py-8 sm:py-12 px-4 sm:px-6 max-w-6xl mx-auto space-y-16">
        {/* HERO SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Photo & Info Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 flex flex-col items-center"
          >
            <div className="relative group w-full max-w-sm">
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-red-600 to-amber-500 rounded-3xl blur-md opacity-30 group-hover:opacity-50 transition duration-500" />
              <div className="relative rounded-3xl overflow-hidden bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-3 shadow-xl">
                <div className="relative w-full h-80 rounded-2xl overflow-hidden mb-4">
                  <Image
                    src={aboutImage}
                    alt="Tun Yar Zar Toe"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Quick Info Pills */}
                <div className="space-y-2 p-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-500 dark:text-slate-400">Current Location:</span>
                    <span className="font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-1">
                      <HiMapPin className="text-secondary" /> Tokyo, Japan
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-500 dark:text-slate-400">Japanese Proficiency:</span>
                    <span className="font-semibold text-secondary flex items-center gap-1">
                      <HiCheckBadge /> JLPT N2 Certified
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-500 dark:text-slate-400">Education:</span>
                    <span className="font-semibold text-slate-800 dark:text-slate-200">
                      Tokyo IT Specialist College
                    </span>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 dark:border-slate-800">
                  <a
                    href="/TUNYARZARTOE-(履歴書).pdf"
                    download
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 shadow-md transition-all"
                  >
                    <span>Download CV / 履歴書</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bio & Narrative */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7 flex flex-col justify-center space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/10 dark:bg-rose-500/15 border border-red-500/20 text-red-600 dark:text-rose-400 text-xs sm:text-sm font-semibold self-start">
              <HiSparkles className="animate-spin-slow" />
              <span>About Me & My Journey</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
              Building Scalable, Delightful & High-Performance Software.
            </h1>

            <div className="space-y-4 text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
              <p>
                I&apos;m <strong>Tun Yar Zar Toe</strong>, a passionate software engineer with over <strong>3+ years</strong> of hands-on experience building dynamic web applications and scalable backend systems.
              </p>
              <p>
                My professional experience includes developing commercial web applications at <strong>Kumo Solutions</strong> and enterprise energy analytics dashboards at <strong>Evercomm Singapore</strong>. I specialize in combining modern frontend architectures (React, Next.js, Tailwind CSS) with robust backend engines (Java Spring Boot, Node.js, Python) and relational databases (MySQL, PostgreSQL).
              </p>
              <p>
                Currently based in <strong>Tokyo, Japan</strong>, I am enrolled at <strong>Tokyo IT & Programming College</strong> and have achieved <strong>JLPT N2 (Japanese-Language Proficiency Test)</strong> certification. I am capable of working in bilingual Japanese-English engineering environments.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/credentials"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white font-bold text-sm bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 shadow-md shadow-rose-500/25 transition-all"
              >
                <HiAcademicCap className="text-base" />
                <span>View Full Credentials & Timeline</span>
                <HiArrowRight className="text-xs" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-slate-800 dark:text-slate-200 font-bold text-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-750 transition-all shadow-sm"
              >
                <HiEnvelope className="text-secondary text-base" />
                <span>Let&apos;s Connect</span>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* SKILLS MATRIX */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <div className="border-b border-slate-200 dark:border-slate-800 pb-3">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
              Technical Skill Matrix
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
              Core technologies and tools I utilize in production
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {skillCategories.map((cat, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-white/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800/80 backdrop-blur-md shadow-md"
              >
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-4 pb-2 border-b border-slate-100 dark:border-slate-800">
                  {cat.title}
                </h3>
                <div className="space-y-3">
                  {cat.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/50 dark:border-slate-700/50"
                    >
                      <div className="flex items-center gap-2.5 text-sm font-semibold text-slate-800 dark:text-slate-200">
                        <span className="text-lg">{skill.icon}</span>
                        <span>{skill.name}</span>
                      </div>
                      <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-white dark:bg-slate-700 text-slate-600 dark:text-slate-300 border border-slate-200/60 dark:border-slate-600/60">
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* PERSONAL OVERVIEW TABS */}
        <Personal />
      </section>

      <BackToTopButton />
    </>
  );
};

export default About;
