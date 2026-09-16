import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { useMetadata } from "@/app/metaData";
import profileImage from "@/public/new_profile.jpeg";
import SocialIcons from "@/components/SocialIcons";
import { ProjectCard } from "@/components/ProjectCard";
import { workData, certificationsData } from "@/app/constants/personalData";
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
} from "react-icons/hi2";
import { FaJava, FaReact, FaPython, FaNodeJs } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiSpringboot } from "react-icons/si";

const Home = () => {
  const metadata = useMetadata();
  const featuredWorks = workData.filter((p) => [3, 2, 1].includes(p.id));

  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        {metadata.icon && <link rel="icon" href={metadata.icon.src} />}
      </Head>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-20 py-4 sm:py-8">
        {/* HERO SECTION */}
        <section className="relative pt-4 sm:pt-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 flex flex-col items-start text-left"
            >
              {/* Status Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 dark:bg-emerald-500/15 border border-emerald-500/25 text-emerald-700 dark:text-emerald-400 text-xs sm:text-sm font-semibold mb-6">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Available for Opportunities • Tokyo & Remote</span>
              </div>

              {/* Greeting & Headline */}
              <div className="space-y-1 mb-4">
                <p className="text-sm sm:text-base font-semibold text-secondary tracking-wide uppercase">
                  Hello, World! I&apos;m
                </p>
                <h1 className="text-4xl sm:text-6xl font-black text-slate-900 dark:text-white tracking-tight leading-none">
                  Tun Yar Zar Toe
                </h1>
                <div className="h-10 sm:h-12 flex items-center text-xl sm:text-2xl font-bold text-slate-700 dark:text-slate-300">
                  <span className="mr-2">I am a</span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-rose-500 to-amber-500">
                    <Typewriter
                      words={[
                        "Software Engineer",
                        "Full Stack Developer",
                        "React & Next.js Specialist",
                        "Java & Spring Boot Engineer",
                        "JLPT N2 Bilingual Engineer",
                      ]}
                      loop={true}
                      cursor
                      cursorStyle="_"
                      typeSpeed={70}
                      deleteSpeed={40}
                      delaySpeed={1800}
                    />
                  </span>
                </div>
              </div>

              {/* Bio summary */}
              <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed mb-6 max-w-xl">
                Passionate software engineer with over <strong className="text-slate-900 dark:text-white font-semibold">3+ years</strong> of
                experience developing resilient web applications and microservices. Currently studying in Tokyo, Japan,
                certified with <strong className="text-secondary font-semibold">JLPT N2</strong>, and dedicated to crafting accessible,
                clean, and high-performance digital experiences.
              </p>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap items-center gap-2 mb-8">
                <span className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider mr-1">
                  Stack:
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 shadow-sm">
                  <FaReact className="text-[#61dafb]" /> React / Next.js
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 shadow-sm">
                  <FaJava className="text-[#007396]" /> Java & Spring
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 shadow-sm">
                  <SiTypescript className="text-[#3178c6]" /> TypeScript
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 shadow-sm">
                  <FaPython className="text-[#306998]" /> Python
                </span>
              </div>

              {/* CTA Button Group */}
              <div className="flex flex-wrap items-center gap-3 mb-8 w-full sm:w-auto">
                <Link
                  href="/work"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-white text-sm font-bold bg-gradient-to-r from-red-600 via-rose-600 to-red-600 hover:from-red-500 hover:to-rose-500 shadow-lg shadow-rose-500/25 hover:shadow-rose-500/40 hover:-translate-y-0.5 transition-all w-full sm:w-auto"
                >
                  <span>Explore Projects</span>
                  <HiArrowRight className="text-sm" />
                </Link>
                <Link
                  href="/credentials"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-slate-800 dark:text-slate-200 text-sm font-bold bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-750 hover:border-slate-300 dark:hover:border-slate-600 shadow-sm transition-all w-full sm:w-auto"
                >
                  <HiCheckBadge className="text-secondary text-base" />
                  <span>View Credentials</span>
                </Link>
              </div>

              {/* Socials */}
              <SocialIcons />
            </motion.div>

            {/* Right Profile Photo Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-5 flex justify-center"
            >
              <div className="relative group">
                {/* Glowing Ambient Halo */}
                <div className="absolute -inset-2 bg-gradient-to-tr from-red-600 via-rose-500 to-amber-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-60 transition duration-700" />
                
                {/* Photo Frame */}
                <div className="relative w-64 sm:w-80 h-80 sm:h-96 rounded-3xl overflow-hidden bg-slate-100 dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700/80 p-2 shadow-2xl">
                  <div className="relative w-full h-full rounded-2xl overflow-hidden">
                    <Image
                      src={profileImage}
                      alt="Tun Yar Zar Toe"
                      fill
                      priority
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  {/* Floating Experience Badge */}
                  <div className="absolute bottom-5 left-5 right-5 p-3 rounded-2xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-slate-200/80 dark:border-slate-700/80 shadow-lg flex items-center justify-between">
                    <div>
                      <div className="text-xs font-medium text-slate-500 dark:text-slate-400">Based in</div>
                      <div className="text-sm font-bold text-slate-900 dark:text-white">Tokyo, Japan</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs font-medium text-secondary">Certification</div>
                      <div className="text-sm font-bold text-slate-900 dark:text-white">JLPT N2 Passed</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* METRICS & HIGHLIGHTS ROW */}
        <section className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <div className="p-6 rounded-3xl bg-white/75 dark:bg-slate-900/75 border border-slate-200/80 dark:border-slate-800/80 backdrop-blur-md shadow-sm hover:shadow-md transition-all">
            <div className="text-3xl sm:text-4xl font-black text-secondary mb-1">3+</div>
            <div className="text-sm font-bold text-slate-900 dark:text-white">Years Experience</div>
            <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Software & Web Development</div>
          </div>
          <div className="p-6 rounded-3xl bg-white/75 dark:bg-slate-900/75 border border-slate-200/80 dark:border-slate-800/80 backdrop-blur-md shadow-sm hover:shadow-md transition-all">
            <div className="text-3xl sm:text-4xl font-black text-blue-600 dark:text-blue-400 mb-1">JLPT N2</div>
            <div className="text-sm font-bold text-slate-900 dark:text-white">Bilingual Engineer</div>
            <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Business & Technical Japanese</div>
          </div>
          <div className="p-6 rounded-3xl bg-white/75 dark:bg-slate-900/75 border border-slate-200/80 dark:border-slate-800/80 backdrop-blur-md shadow-sm hover:shadow-md transition-all">
            <div className="text-3xl sm:text-4xl font-black text-purple-600 dark:text-purple-400 mb-1">10+</div>
            <div className="text-sm font-bold text-slate-900 dark:text-white">Projects Built</div>
            <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Full Stack & AI Applications</div>
          </div>
          <div className="p-6 rounded-3xl bg-white/75 dark:bg-slate-900/75 border border-slate-200/80 dark:border-slate-800/80 backdrop-blur-md shadow-sm hover:shadow-md transition-all">
            <div className="text-3xl sm:text-4xl font-black text-emerald-600 dark:text-emerald-400 mb-1">Tokyo IT</div>
            <div className="text-sm font-bold text-slate-900 dark:text-white">Specialist College</div>
            <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Information & Programming</div>
          </div>
        </section>

        {/* FEATURED PROJECTS PREVIEW */}
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

        {/* CREDENTIALS & CERTIFICATIONS BANNER */}
        <section className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-red-600/10 via-rose-600/10 to-amber-600/10 dark:from-red-950/30 dark:via-rose-950/30 dark:to-amber-950/30 border border-red-500/20 dark:border-rose-500/20 backdrop-blur-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-secondary text-white shadow-sm">
                <HiCheckBadge /> Certified Qualifications
              </div>
              <h3 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white">
                Explore Verified Credentials & Experience
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                Check out my official Japanese language certifications (JLPT N2 & N3), Java Web Development certification,
                and career timeline spanning Kumo Solutions, Evercomm Singapore, and education in Tokyo.
              </p>
            </div>
            <div className="lg:col-span-4 flex lg:justify-end">
              <Link
                href="/credentials"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl text-white font-bold text-sm bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 shadow-lg shadow-rose-500/25 transition-all"
              >
                <HiAcademicCap className="text-lg" />
                <span>Browse Credentials Page</span>
                <HiArrowRight />
              </Link>
            </div>
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
