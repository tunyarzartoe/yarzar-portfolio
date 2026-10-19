import React from "react";
import { useRouter } from "next/router";
import { workData } from "@/app/constants/personalData";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { motion } from "framer-motion";
import {
  HiArrowLeft,
  HiArrowRight,
  HiArrowTopRightOnSquare,
  HiSparkles,
  HiCodeBracket,
  HiDevicePhoneMobile,
  HiGlobeAlt,
} from "react-icons/hi2";
import { FaGithub } from "react-icons/fa";
import BackToTopButton from "@/components/main/BackToTopButton";

const ProjectDetail = ({ project }) => {
  const router = useRouter();

  if (router.isFallback || !project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-slate-600 dark:text-slate-400">
        Loading project details...
      </div>
    );
  }

  // Find next and prev project
  const currentIndex = workData.findIndex((p) => p.id === project.id);
  const prevProject = currentIndex > 0 ? workData[currentIndex - 1] : null;
  const nextProject = currentIndex < workData.length - 1 ? workData[currentIndex + 1] : null;

  return (
    <>
      <Head>
        <title>{project.title} - Project Showcase | Tun Yar Zar Toe</title>
      </Head>

      <section className="min-h-screen py-8 sm:py-12 px-4 sm:px-6 max-w-5xl mx-auto">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center justify-between mb-8">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-600 dark:text-slate-400 hover:text-secondary transition-colors"
          >
            <HiArrowLeft />
            <span>Back to All Projects</span>
          </Link>

          <span className="text-xs text-slate-400 dark:text-slate-500 font-mono">
            Project #{project.id} of {workData.length}
          </span>
        </div>

        {/* Main Project Vanguard Bento Card */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl bg-gradient-to-br from-white/95 via-slate-50/90 to-white/95 dark:bg-gradient-to-br dark:from-slate-900/95 dark:via-[#0f172a]/90 dark:to-slate-950/95 border border-slate-200/80 dark:border-slate-800/80 p-6 sm:p-10 backdrop-blur-xl shadow-xl shadow-slate-200/50 dark:shadow-2xl dark:shadow-black/60 mb-10"
        >
          {/* Header Row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-6 border-b border-slate-100 dark:border-slate-800/80">
            <div className="flex items-center gap-4">
              {project.logo && (
                <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-white to-slate-100 dark:from-slate-800 dark:to-slate-900 border border-slate-200 dark:border-slate-700 p-2.5 flex items-center justify-center flex-shrink-0 shadow-sm">
                  <Image
                    src={project.logo}
                    alt={project.title}
                    width={56}
                    height={56}
                    className="object-contain w-12 h-12"
                  />
                </div>
              )}
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-red-500/10 dark:bg-rose-500/15 text-rose-600 dark:text-rose-400 border border-red-500/20 mb-2">
                  <HiSparkles className="animate-spin-slow text-xs" />
                  <span>Featured Case Study</span>
                </div>
                <h1 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white">
                  {project.title}
                </h1>
                {project.name && (
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                    {project.name}
                  </p>
                )}
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-3">
              {project.demoLink && (
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-bold text-xs sm:text-sm bg-gradient-to-r from-red-600 via-rose-600 to-red-600 hover:from-red-500 hover:to-rose-500 shadow-md shadow-rose-500/25 transition-all"
                >
                  <HiGlobeAlt className="text-base" />
                  <span>Launch Live App</span>
                  <HiArrowTopRightOnSquare className="text-sm" />
                </a>
              )}
              <a
                href="https://github.com/tunyarzartoe"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl text-slate-800 dark:text-slate-200 font-bold text-xs sm:text-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-750 transition-all shadow-sm"
              >
                <FaGithub className="text-base" />
                <span className="hidden sm:inline">Source Code</span>
              </a>
            </div>
          </div>

          {/* Project Narrative */}
          <div className="py-8">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">
              Project Overview
            </h2>
            <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Tech Stack */}
          {project.languages && project.languages.length > 0 && (
            <div className="pb-8">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3">
                Core Tech Stack & Libraries
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.languages.map((lang, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200/80 dark:border-slate-700/80 shadow-sm"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Visual Showcase Gallery */}
          {project.images && project.images.length > 0 && (
            <div className="pt-6 border-t border-slate-100 dark:border-slate-800/80">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-4">
                Application Previews & Artifacts
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.images.map((img, index) => (
                  <div
                    key={index}
                    className="group relative rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 p-3 h-72 sm:h-80 flex items-center justify-center shadow-inner hover:border-red-500/40 transition-colors"
                  >
                    <Image
                      src={img.url}
                      alt={`${project.title} Preview ${index + 1}`}
                      fill
                      className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </motion.div>

        {/* Project Switcher Footer */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
          {prevProject ? (
            <Link
              href={`/work/${prevProject.id}`}
              className="p-5 rounded-2xl bg-white/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800/80 hover:border-red-500/40 dark:hover:border-rose-500/40 shadow-sm transition-all flex items-center gap-3 text-left"
            >
              <HiArrowLeft className="text-secondary text-lg flex-shrink-0" />
              <div>
                <span className="text-[10px] text-slate-400 dark:text-slate-500 uppercase tracking-wider block">
                  Previous Project
                </span>
                <span className="text-sm font-bold text-slate-900 dark:text-white">
                  {prevProject.title}
                </span>
              </div>
            </Link>
          ) : (
            <div />
          )}

          {nextProject ? (
            <Link
              href={`/work/${nextProject.id}`}
              className="p-5 rounded-2xl bg-white/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800/80 hover:border-red-500/40 dark:hover:border-rose-500/40 shadow-sm transition-all flex items-center justify-between text-right"
            >
              <div className="flex-1">
                <span className="text-[10px] text-slate-400 dark:text-slate-500 uppercase tracking-wider block">
                  Next Project
                </span>
                <span className="text-sm font-bold text-slate-900 dark:text-white">
                  {nextProject.title}
                </span>
              </div>
              <HiArrowRight className="text-secondary text-lg flex-shrink-0 ml-3" />
            </Link>
          ) : (
            <div />
          )}
        </div>
      </section>

      <BackToTopButton />
    </>
  );
};

export async function getStaticPaths() {
  const paths = workData.map((project) => ({
    params: { id: project.id.toString() },
  }));

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const project = workData.find(
    (project) => project.id.toString() === params.id
  );

  return { props: { project: project || null } };
}

export default ProjectDetail;
