import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useMetadata } from "@/app/metaData";
import {
  certificationsData,
  experienceData,
  educationData,
} from "@/app/constants/personalData";
import BackToTopButton from "@/components/main/BackToTopButton";
import {
  HiAcademicCap,
  HiBriefcase,
  HiCheckBadge,
  HiMapPin,
  HiCalendar,
  HiArrowTopRightOnSquare,
  HiXMark,
  HiSparkles,
  HiLanguage,
  HiCodeBracket,
  HiBolt,
  HiShieldCheck,
  HiCheck,
  HiCubeTransparent,
} from "react-icons/hi2";
import { FaGraduationCap } from "react-icons/fa";

const CredentialsPage = () => {
  const metadata = useMetadata();
  const [activeTab, setActiveTab] = useState("all");
  const [selectedCert, setSelectedCert] = useState(null);

  const tabs = [
    { id: "all", label: "All Overview", shortLabel: "All", count: certificationsData.length + experienceData.length + educationData.length },
    { id: "japan", label: "日本就活 (Self-PR)", shortLabel: "Self-PR", count: "JLPT N2", icon: <span className="text-sm">🇯🇵</span> },
    { id: "certs", label: "Certifications", shortLabel: "Certs", count: certificationsData.length, icon: <HiCheckBadge className="text-lg" /> },
    { id: "experience", label: "Experience", shortLabel: "Experience", count: experienceData.length, icon: <HiBriefcase className="text-lg" /> },
    { id: "education", label: "Education", shortLabel: "Education", count: educationData.length, icon: <HiAcademicCap className="text-lg" /> },
  ];

  return (
    <>
      <Head>
        <title>Credentials & Experience | Tun Yar Zar Toe</title>
        {metadata.icon && <link rel="icon" href={metadata.icon.src} />}
      </Head>

      <section className="min-h-screen py-8 sm:py-12 px-4 sm:px-6 max-w-6xl mx-auto">
        {/* Page Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 dark:bg-rose-500/15 border border-red-500/20 text-red-600 dark:text-rose-400 text-xs sm:text-sm font-semibold mb-4">
            <HiSparkles className="animate-spin-slow" />
            <span>Verified Credentials & Career Track</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight mb-4">
            Certifications, Experience <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-rose-500 to-amber-500">
              & Education
            </span>
          </h1>

          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
            A verified timeline of my software engineering career, professional certifications,
            language proficiencies, and continuous academic growth in Tokyo, Japan.
          </p>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-8">
            <div className="p-3 sm:p-4 rounded-2xl bg-white/70 dark:bg-slate-900/70 border border-slate-200/80 dark:border-slate-800/80 backdrop-blur-md shadow-sm">
              <div className="text-xl sm:text-2xl font-black text-secondary">JLPT N2</div>
              <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">Business Japanese</div>
            </div>
            <div className="p-3 sm:p-4 rounded-2xl bg-white/70 dark:bg-slate-900/70 border border-slate-200/80 dark:border-slate-800/80 backdrop-blur-md shadow-sm">
              <div className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">3+ Years</div>
              <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">Software Dev</div>
            </div>
            <div className="p-3 sm:p-4 rounded-2xl bg-white/70 dark:bg-slate-900/70 border border-slate-200/80 dark:border-slate-800/80 backdrop-blur-md shadow-sm">
              <div className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">Tokyo IT</div>
              <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">Specialist College</div>
            </div>
            <div className="p-3 sm:p-4 rounded-2xl bg-white/70 dark:bg-slate-900/70 border border-slate-200/80 dark:border-slate-800/80 backdrop-blur-md shadow-sm">
              <div className="text-xl sm:text-2xl font-black text-emerald-600 dark:text-emerald-400">100%</div>
              <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">Commitment & Drive</div>
            </div>
          </div>
        </motion.div>

        {/* Tab Filters */}
        <div className="mb-3 sm:mb-10 -mx-4 px-4 sm:mx-0 sm:px-0">
          <div className="flex sm:justify-center">
            <div
              className="flex sm:inline-flex gap-1.5 p-1.5 rounded-2xl bg-slate-200/70 dark:bg-slate-800/80 backdrop-blur-md border border-slate-300/60 dark:border-slate-700/60 shadow-inner overflow-x-auto sm:overflow-visible snap-x snap-mandatory scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'] w-full sm:w-auto"
            >
              {tabs.map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`relative flex-shrink-0 snap-start flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-300 ${
                      isActive
                        ? "text-white shadow-md shadow-red-500/25"
                        : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeTabIndicator"
                        className="absolute inset-0 rounded-xl bg-gradient-to-r from-red-600 to-rose-600"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    <span className="relative z-10 flex items-center gap-1.5">
                      {tab.icon}
                      <span className="sm:hidden">{tab.shortLabel}</span>
                      <span className="hidden sm:inline">{tab.label}</span>
                      <span
                        className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                          isActive
                            ? "bg-white/20 text-white"
                            : "bg-slate-300 dark:bg-slate-700 text-slate-700 dark:text-slate-300"
                        }`}
                      >
                        {tab.count}
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
          <p className="text-center text-[10px] text-slate-400 dark:text-slate-500 mt-2 sm:hidden">
            ← swipe for more →
          </p>
        </div>

        {/* CONTENT SECTIONS */}
        <div className="space-y-16">
          {/* 1. CERTIFICATIONS */}
          {(activeTab === "all" || activeTab === "certs") && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center justify-between mb-6 border-b border-slate-200 dark:border-slate-800 pb-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-red-500/10 dark:bg-rose-500/20 text-secondary">
                    <HiCheckBadge className="text-2xl" />
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                      Licenses & Certifications
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                      Official credentials, Japanese proficiency examinations, and engineering certificates
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {certificationsData.map((cert) => (
                  <div
                    key={cert.id}
                    className="group relative rounded-2xl bg-white/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800/80 p-6 shadow-md hover:shadow-xl hover:border-secondary/40 transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      {/* Top badges */}
                      <div className="flex items-start justify-between gap-3 mb-4">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-red-50 dark:bg-rose-950/50 text-red-600 dark:text-rose-400 border border-red-200 dark:border-rose-900/50">
                          <HiCheckBadge className="text-sm" />
                          {cert.badge}
                        </span>
                        <span className="text-xs font-medium text-slate-500 dark:text-slate-400 flex items-center gap-1">
                          <HiCalendar className="text-sm" />
                          {cert.date}
                        </span>
                      </div>

                      {/* Title & Issuer */}
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-secondary transition-colors mb-1">
                        {cert.title}
                      </h3>
                      <p className="text-xs font-medium text-secondary mb-3">
                        {cert.japaneseTitle}
                      </p>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mb-4 flex items-center gap-1">
                        <span className="font-semibold text-slate-700 dark:text-slate-300">{cert.issuer}</span>
                      </p>

                      {/* Description */}
                      <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-5">
                        {cert.description}
                      </p>

                      {/* Skills Tags */}
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {cert.skills.map((skill, sIdx) => (
                          <span
                            key={sIdx}
                            className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Footer / CTA */}
                    <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
                      <span className="text-xs text-slate-400 dark:text-slate-500 font-mono">
                        ID: {cert.credentialId}
                      </span>
                      <button
                        onClick={() => setSelectedCert(cert)}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-secondary hover:text-red-700 dark:hover:text-rose-300 transition-colors"
                      >
                        <span>View Details</span>
                        <HiArrowTopRightOnSquare className="text-sm" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* 2. WORK EXPERIENCE */}
          {(activeTab === "all" || activeTab === "experience") && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center justify-between mb-6 border-b border-slate-200 dark:border-slate-800 pb-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400">
                    <HiBriefcase className="text-2xl" />
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                      Work Experience
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                      Software engineering roles, project development, and technical contributions
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                {experienceData.map((exp, index) => (
                  <div
                    key={exp.id}
                    className="relative rounded-2xl bg-white/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800/80 p-6 sm:p-8 shadow-md hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                      {/* Logo and Role */}
                      <div className="flex items-start gap-4">
                        {exp.logo && (
                          <div className="relative w-14 h-14 rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex-shrink-0 p-1">
                            <Image
                              src={exp.logo}
                              alt={exp.company}
                              fill
                              className="object-contain p-1 rounded-xl"
                            />
                          </div>
                        )}
                        <div>
                          <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                            {exp.role}
                          </h3>
                          <div className="flex flex-wrap items-center gap-2 mt-1">
                            <span className="font-semibold text-secondary text-sm">
                              {exp.company}
                            </span>
                            <span className="text-slate-300 dark:text-slate-600">•</span>
                            <span className="text-xs text-slate-500 dark:text-slate-400">
                              {exp.companyJapanese}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Period & Location Badge */}
                      <div className="flex flex-wrap sm:flex-col sm:items-end gap-2 sm:gap-1">
                        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700/80">
                          <HiCalendar className="text-sm text-secondary" />
                          {exp.period}
                        </span>
                        <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                          <span className="inline-flex items-center gap-1">
                            <HiMapPin className="text-sm" />
                            {exp.location}
                          </span>
                          <span>•</span>
                          <span className="font-medium">{exp.duration}</span>
                        </div>
                      </div>
                    </div>

                    {/* Summary */}
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                      {exp.description}
                    </p>

                    {/* Highlights */}
                    <div className="mb-5 space-y-2">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                        Key Responsibilities & Impact
                      </h4>
                      <ul className="space-y-1.5">
                        {exp.highlights.map((point, hIdx) => (
                          <li
                            key={hIdx}
                            className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 flex items-start gap-2 leading-relaxed"
                          >
                            <span className="text-secondary mt-1 font-bold">›</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 pt-3 border-t border-slate-100 dark:border-slate-800/80">
                      {exp.techStack.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 rounded-lg text-xs font-medium bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 border border-blue-200/60 dark:border-blue-800/60"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* 3. EDUCATION */}
          {(activeTab === "all" || activeTab === "education") && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center justify-between mb-6 border-b border-slate-200 dark:border-slate-800 pb-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-purple-500/10 dark:bg-purple-500/20 text-purple-600 dark:text-purple-400">
                    <HiAcademicCap className="text-2xl" />
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                      Education & Academic Background
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                      College degrees, Japanese language academies, and software engineering coursework
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {educationData.map((edu) => (
                  <div
                    key={edu.id}
                    className="relative rounded-2xl bg-white/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800/80 p-6 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      {/* Top Header */}
                      <div className="flex items-start justify-between gap-3 mb-4">
                        <div className="flex items-center gap-3">
                          {edu.logo && (
                            <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex-shrink-0 p-1">
                              <Image
                                src={edu.logo}
                                alt={edu.school}
                                fill
                                className="object-contain p-1 rounded-lg"
                              />
                            </div>
                          )}
                          <div>
                            <span className="text-xs font-semibold text-secondary">
                              {edu.location}
                            </span>
                            <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                              {edu.school}
                            </h3>
                            <p className="text-xs text-slate-500 dark:text-slate-400">
                              {edu.schoolJapanese}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Degree & Period */}
                      <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/50 dark:border-slate-700/50 mb-4">
                        <div className="font-bold text-sm text-slate-900 dark:text-white">
                          {edu.degree}
                        </div>
                        <div className="text-xs text-secondary font-medium">
                          {edu.degreeJapanese}
                        </div>
                        <div className="flex items-center justify-between mt-2 text-xs text-slate-500 dark:text-slate-400">
                          <span className="flex items-center gap-1">
                            <HiCalendar className="text-xs" />
                            {edu.period}
                          </span>
                          <span
                            className={`px-2 py-0.5 rounded-full text-[11px] font-semibold ${
                              edu.current
                                ? "bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-300/50"
                                : "bg-slate-200/70 dark:bg-slate-700 text-slate-700 dark:text-slate-300"
                            }`}
                          >
                            {edu.status}
                          </span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                        {edu.description}
                      </p>

                      {/* Coursework */}
                      <div className="mb-2">
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2 block">
                          Curriculum & Focus Areas
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {edu.coursework.map((course, cIdx) => (
                            <span
                              key={cIdx}
                              className="px-2.5 py-1 rounded-lg text-xs font-medium bg-purple-50 dark:bg-purple-950/40 text-purple-700 dark:text-purple-300 border border-purple-200/60 dark:border-purple-800/60"
                            >
                              {course}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* 4. JAPAN JOB HUNTING & SELF-PR */}
          {(activeTab === "all" || activeTab === "japan") && (
            <motion.div
              id="japan-career"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 dark:border-slate-800 pb-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-amber-500/10 dark:bg-amber-500/20 text-xl">
                    🇯🇵
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                      日本就活プロフィール & 自己PR (Japan Job Hunting Profile)
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                      採用担当者様向け：日本語能力、自己PR、志望動機、勤務希望条件
                    </p>
                  </div>
                </div>
                <a
                  href="/TUNYARZARTOE-(履歴書).pdf"
                  download
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 shadow-md transition-all self-start sm:self-auto"
                >
                  <span>履歴書PDF (CV) をダウンロード</span>
                </a>
              </div>

              {/* Quick Summary Card */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-5 rounded-2xl bg-white/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800/80 shadow-sm">
                  <div className="text-xs font-semibold text-secondary uppercase mb-1">語学力 (Languages)</div>
                  <div className="text-lg font-bold text-slate-900 dark:text-white">JLPT N2 合格</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                    • 日本語：ビジネス会話・日常会話・技術仕様書の理解可能<br />
                    • 英語：技術ドキュメント読解・簡単な読み書き<br />
                    • ミャンマー語：母語
                  </div>
                </div>
                <div className="p-5 rounded-2xl bg-white/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800/80 shadow-sm">
                  <div className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase mb-1">在留資格 & 所在地</div>
                  <div className="text-lg font-bold text-slate-900 dark:text-white">東京都江東区在住</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                    • 在留資格：留学（東京ITプログラミング＆会計専門学校）<br />
                    • 通勤：東京都内・23区内全域通勤可能（リモート可）<br />
                    • 就労形態：正社員就職（新卒・中途）／インターン
                  </div>
                </div>
                <div className="p-5 rounded-2xl bg-white/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800/80 shadow-sm">
                  <div className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 uppercase mb-1">希望職種 (Target Roles)</div>
                  <div className="text-lg font-bold text-slate-900 dark:text-white">Web / Software Engineer</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                    • フロントエンド：React.js, Next.js, TypeScript<br />
                    • バックエンド：Java (Spring Boot), Node.js, Python<br />
                    • データベース：MySQL, PostgreSQL, MongoDB
                  </div>
                </div>
              </div>

              {/* 3 Core Strengths Cards (強みの3つの柱) */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-secondary uppercase tracking-widest font-mono">
                    Core Strengths
                  </span>
                  <span className="h-px bg-slate-200 dark:bg-slate-800 flex-1" />
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
                  エンジニアとしての3つの強み
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {/* 強み 1 */}
                <div className="p-6 rounded-3xl bg-white/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800/80 shadow-md hover:border-rose-500/40 transition-all space-y-3 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="w-12 h-12 rounded-2xl bg-rose-500/10 dark:bg-rose-500/20 text-secondary flex items-center justify-center text-2xl">
                      <HiCubeTransparent />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold text-secondary font-mono">STRENGTH 01</span>
                      <h4 className="text-base font-bold text-slate-900 dark:text-white mt-0.5">
                        実務3年以上のフルスタック開発力
                      </h4>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      React.js・Next.js 15・TypeScriptを用いたレスポンシブで高速なUI開発から、Java Spring Boot・Node.js・MySQLを用いたRESTful API設計まで一貫して対応。商用システム（Kumo Solutions）やIoTエネルギー可視化ダッシュボード（Evercomm SG）、求人ポータル「J4U」などの実践開発実績があります。
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-100 dark:border-slate-800">
                    <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">React / Next.js</span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">Java Spring Boot</span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">MySQL / REST API</span>
                  </div>
                </div>

                {/* 強み 2 */}
                <div className="p-6 rounded-3xl bg-white/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800/80 shadow-md hover:border-blue-500/40 transition-all space-y-3 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="w-12 h-12 rounded-2xl bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 flex items-center justify-center text-2xl">
                      <HiBolt />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold text-blue-600 dark:text-blue-400 font-mono">STRENGTH 02</span>
                      <h4 className="text-base font-bold text-slate-900 dark:text-white mt-0.5">
                        自走力と新技術へのキャッチアップ力
                      </h4>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      指示待ちにならず、要件の意図やユーザー体験を理解して自ら調査・技術選定・実装を完遂する推進力があります。Git/GitHubを用いたバージョン管理、Figmaデザインからの精緻なコーディング、Dockerによる環境構築など、開発現場に必要なスキルを自発的に習得し実践しています。
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-100 dark:border-slate-800">
                    <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">課題解決力</span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">Git / GitHub</span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">Figma to Code</span>
                  </div>
                </div>

                {/* 強み 3 */}
                <div className="p-6 rounded-3xl bg-white/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800/80 shadow-md hover:border-emerald-500/40 transition-all space-y-3 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-2xl">
                      <HiShieldCheck />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 font-mono">STRENGTH 03</span>
                      <h4 className="text-base font-bold text-slate-900 dark:text-white mt-0.5">
                        日本語での協調性と徹底した「報連相」
                      </h4>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      日本語能力試験（JLPT）N2に合格。技術仕様書の正確な読解だけでなく、日々の進捗共有や問題発生時の早期相談（報告・連絡・相談）を徹底しています。多国籍チームや日本企業での実務経験を通じ、コードレビューやチームメンバーとの協調的な開発を大切にしています。
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-100 dark:border-slate-800">
                    <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">JLPT N2</span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">報連相の徹底</span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">チーム開発</span>
                  </div>
                </div>
              </div>

              {/* Detailed Self-PR & Motivation */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* 自己PR 詳細 */}
                <div className="p-6 sm:p-8 rounded-3xl bg-white/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800/80 shadow-md space-y-4">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-rose-50 dark:bg-rose-950/50 text-rose-600 dark:text-rose-400 border border-rose-200 dark:border-rose-900/50">
                    <HiSparkles />
                    自己PR（自己アピール詳細）
                  </div>
                  <h3 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white leading-snug">
                    実務3年のフルスタック開発力と、高い自走力で成果にコミット
                  </h3>
                  <div className="space-y-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    <p>
                      私の強みは、<strong className="text-slate-900 dark:text-white">「実務経験3年に裏打ちされたフルスタックWeb開発力」</strong>と、<strong className="text-slate-900 dark:text-white">「課題に対して自ら調査し最後まで完遂する自走力」</strong>です。
                    </p>
                    <p>
                      これまでに商用Web開発企業（Kumo Solutions）やIoT・エネルギー可視化企業（Evercomm Singapore）での実務に従事し、Reactを用いた再利用可能なコンポーネント設計、RESTful API統合、リアルタイムデータ連携などを担当いたしました。また個人開発でも、求職者・企業をつなぐ求人ポータル「J4U」、SNSアプリ、AI炭素排出量計算アプリなどを要件定義からデプロイまで一貫して制作しています。
                    </p>
                    <p>
                      さらに、日本での長期就労を見据えて<strong className="text-slate-900 dark:text-white">JLPT N2</strong>を取得。日本語での技術仕様書読解やコードレビューはもちろん、日本の職場文化である「報連相（報告・連絡・相談）」を誠実に実践し、チームに貢献いたします。
                    </p>
                  </div>
                </div>

                {/* 志望動機 詳細 */}
                <div className="p-6 sm:p-8 rounded-3xl bg-white/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800/80 shadow-md space-y-4">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-900/50">
                    <HiBriefcase />
                    志望動機（日本で働く熱意）
                  </div>
                  <h3 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white leading-snug">
                    技術品質とUXを重んじる日本の開発現場で、長期的に貢献したい
                  </h3>
                  <div className="space-y-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    <p>
                      私が日本企業でのエンジニア就業を志望する理由は、<strong className="text-slate-900 dark:text-white">「細部へのこだわりと高い信頼性を重んじる日本のものづくり・開発文化」</strong>に強く共感し、その一員として社会に価値を届けたいからです。
                    </p>
                    <p>
                      ミャンマーでの工学部在籍時よりWebテクノロジーに情熱を注ぎ、実務経験を経て現在は東京ITプログラミング＆会計専門学校で最新のソフトウェアアーキテクチャやシステム開発を深く学んでおります。
                    </p>
                    <p>
                      入社後は、これまでに培ったReact・Next.js・Java・データベースの技術力と、柔軟な適応力・積極的な学習意欲を活かし、チームの開発スピード向上と高品質なサービス運用に即戦力として貢献いたします。周囲から信頼されるエンジニアを目指し、誠心誠意取り組む所存です。
                    </p>
                  </div>
                </div>
              </div>

              {/* Engineering Values / 開発において大切にしていること */}
              <div className="p-6 sm:p-7 rounded-3xl bg-gradient-to-r from-slate-50 via-white to-slate-50 dark:from-slate-900/90 dark:via-slate-900/70 dark:to-slate-950/90 border border-slate-200/80 dark:border-slate-800/80 shadow-sm space-y-4">
                <div className="flex items-center gap-2">
                  <HiCodeBracket className="text-secondary text-lg" />
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                    開発における行動指針・ポリシー (Engineering Principles)
                  </h4>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">
                  <div className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-xs flex-shrink-0 mt-0.5">
                      <HiCheck />
                    </span>
                    <div>
                      <p className="text-xs font-bold text-slate-900 dark:text-white">保守性の高いクリーンコード</p>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">誰が見ても理解しやすく、再利用性の高いコンポーネント・API設計を意識します。</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-blue-500/15 text-blue-600 dark:text-blue-400 flex items-center justify-center text-xs flex-shrink-0 mt-0.5">
                      <HiCheck />
                    </span>
                    <div>
                      <p className="text-xs font-bold text-slate-900 dark:text-white">徹底した報連相と協調性</p>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">進捗や課題を早期に共有し、チームメンバーと建設的な議論を重ねます。</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-rose-500/15 text-rose-600 dark:text-rose-400 flex items-center justify-center text-xs flex-shrink-0 mt-0.5">
                      <HiCheck />
                    </span>
                    <div>
                      <p className="text-xs font-bold text-slate-900 dark:text-white">表示速度とUXの追求</p>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">サブセカンド表示、アクセシビリティ、Lighthouse高スコアを基準に開発します。</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-20 p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-red-600 via-rose-600 to-amber-600 text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h3 className="text-2xl sm:text-3xl font-black mb-2">
              Interested in collaborating or hiring?
            </h3>
            <p className="text-red-100 text-sm sm:text-base max-w-xl">
              Currently living in Tokyo, Japan, holding JLPT N2 certification and looking for high-impact software engineering opportunities.
            </p>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0">
            <Link
              href="/contact"
              className="px-6 py-3 rounded-full bg-white text-red-600 font-bold text-sm shadow-md hover:bg-slate-100 hover:scale-105 transition-all"
            >
              Get in Touch
            </Link>
            <a
              href="/TUNYARZARTOE-(履歴書).pdf"
              download
              className="px-6 py-3 rounded-full bg-red-800/40 hover:bg-red-800/60 border border-white/30 text-white font-bold text-sm backdrop-blur-md transition-all"
            >
              Download CV
            </a>
          </div>
        </div>
      </section>

      {/* Certificate Modal */}
      <AnimatePresence>
        {selectedCert && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-xl rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-2xl overflow-hidden"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-600 dark:hover:text-white bg-slate-100 dark:bg-slate-800 transition-colors"
              >
                <HiXMark className="text-xl" />
              </button>

              <div className="flex items-center gap-2 text-xs font-bold text-secondary uppercase tracking-widest mb-2">
                <HiCheckBadge className="text-base" />
                Verified Certificate
              </div>

              <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-1">
                {selectedCert.title}
              </h3>
              <p className="text-sm font-semibold text-secondary mb-4">
                {selectedCert.japaneseTitle}
              </p>

              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 space-y-2 mb-6">
                <div className="flex justify-between text-xs sm:text-sm">
                  <span className="text-slate-500 dark:text-slate-400">Issuing Body:</span>
                  <span className="font-semibold text-slate-800 dark:text-slate-200">{selectedCert.issuer}</span>
                </div>
                <div className="flex justify-between text-xs sm:text-sm">
                  <span className="text-slate-500 dark:text-slate-400">Date of Award:</span>
                  <span className="font-semibold text-slate-800 dark:text-slate-200">{selectedCert.date}</span>
                </div>
                <div className="flex justify-between text-xs sm:text-sm">
                  <span className="text-slate-500 dark:text-slate-400">Credential ID:</span>
                  <span className="font-mono font-semibold text-secondary">{selectedCert.credentialId}</span>
                </div>
                <div className="flex justify-between text-xs sm:text-sm">
                  <span className="text-slate-500 dark:text-slate-400">Status:</span>
                  <span className="font-semibold text-emerald-600 dark:text-emerald-400">{selectedCert.status} • {selectedCert.score}</span>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">
                  Scope & Competencies
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                  {selectedCert.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {selectedCert.skills.map((s, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-lg text-xs font-medium bg-red-50 dark:bg-rose-950/40 text-red-600 dark:text-rose-300 border border-red-200/60 dark:border-rose-900/60"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
                <button
                  onClick={() => setSelectedCert(null)}
                  className="px-5 py-2 rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                >
                  Close
                </button>
                <a
                  href={selectedCert.verificationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-5 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 shadow-md shadow-rose-500/25 transition-all"
                >
                  <span>Verify Credential</span>
                  <HiArrowTopRightOnSquare />
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <BackToTopButton />
    </>
  );
};

export default CredentialsPage;