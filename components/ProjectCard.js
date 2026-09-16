import React from "react";
import Image from "next/image";
import { FaArrowRight, FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export const ProjectCard = ({ project, isFeatured = false }) => {
  const featuredProjects = [3, 2, 1];
  const isSpecial = isFeatured || featuredProjects.includes(project.id);

  return (
    <div className={`group relative overflow-hidden rounded-2xl transition-all duration-300 h-full flex flex-col ${
      isSpecial ? "col-span-1 md:col-span-2 lg:col-span-1" : ""
    }`}>
      {/* Main Card Container */}
      <div className={`relative h-full flex flex-col backdrop-blur-xl border rounded-2xl overflow-hidden transition-all duration-300 ${
        isSpecial
          ? "bg-white/90 dark:bg-slate-900/85 border-red-500/30 dark:border-red-500/40 shadow-lg dark:shadow-2xl hover:shadow-xl hover:border-red-500/60"
          : "bg-white/80 dark:bg-slate-900/75 border-slate-200/80 dark:border-slate-800/80 shadow-md dark:shadow-xl hover:shadow-lg hover:border-slate-300 dark:hover:border-slate-700"
      }`}>
        
        {/* Top Section - Logo & Title */}
        <div className={`relative p-5 pb-4 border-b ${
          isSpecial
            ? "border-red-500/20 bg-red-500/5 dark:bg-red-500/10"
            : "border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30"
        }`}>
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-3 flex-1 min-w-0">
              {/* Logo Container */}
              <div className="relative w-14 h-14 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-2 flex items-center justify-center flex-shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                <Image
                  src={project.logo}
                  alt={project.title}
                  width={50}
                  height={50}
                  className="object-contain w-10 h-10"
                />
              </div>

              {/* Title & Subtitle */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <h4 className="text-slate-900 dark:text-white font-bold text-lg truncate group-hover:text-secondary transition-colors">
                    {project.title}
                  </h4>
                </div>
                <p className="text-slate-500 dark:text-slate-400 text-xs truncate mt-0.5">
                  {project.name}
                </p>
              </div>
            </div>

            {/* Featured Badge */}
            {isSpecial && (
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-gradient-to-r from-red-600 to-rose-600 text-white shadow-sm flex-shrink-0">
                Featured
              </span>
            )}
          </div>
        </div>

        {/* Middle Section - Description */}
        <div className="flex-1 p-5 pb-3">
          <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed line-clamp-3">
            {project.description}
          </p>
        </div>

        {/* Skills/Technologies Section */}
        <div className="px-5 pb-4">
          <div className="flex flex-wrap gap-1.5">
            {project.languages.slice(0, 4).map((lang, index) => (
              <span
                key={index}
                className="px-2.5 py-1 text-xs font-medium rounded-lg bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60"
              >
                {lang}
              </span>
            ))}
            {project.languages.length > 4 && (
              <span className="px-2 py-1 text-xs font-medium rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400">
                +{project.languages.length - 4}
              </span>
            )}
          </div>
        </div>

        {/* Bottom Section - CTA Button */}
        <div className="p-5 pt-3 border-t border-slate-100 dark:border-slate-800 mt-auto">
          <a
            href={project.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group/btn relative inline-flex items-center justify-center w-full gap-2 px-5 py-2.5 font-semibold text-xs sm:text-sm rounded-xl overflow-hidden text-white bg-gradient-to-r from-red-600 via-rose-600 to-red-600 hover:from-red-500 hover:to-rose-500 shadow-md shadow-rose-500/20 hover:shadow-rose-500/35 transition-all duration-300"
          >
            <span className="flex items-center gap-2">
              <FaExternalLinkAlt className="text-xs group-hover/btn:rotate-45 transition-transform duration-300" />
              <span>Explore Live Demo</span>
            </span>
            <FaArrowRight className="text-xs transform group-hover/btn:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </div>
  );
};
