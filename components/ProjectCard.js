import React from "react";
import Image from "next/image";
import { FaArrowRight, FaExternalLinkAlt } from "react-icons/fa";

export const ProjectCard = ({ project, isFeatured = false }) => {
  const featuredProjects = [5, 4, 3, 2];
  const isSpecial = isFeatured || featuredProjects.includes(project.id);

  return (
    <div className={`group relative overflow-hidden rounded-2xl transition-all duration-300 h-full flex flex-col ${
      isSpecial ? "col-span-1 md:col-span-2 lg:col-span-1" : ""
    }`}>
      {/* Glow ring on hover */}
      <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ${
        isSpecial
          ? "shadow-[0_0_40px_rgba(220,20,60,0.18)]"
          : "shadow-[0_0_30px_rgba(139,92,246,0.12)]"
      }`} />

      {/* Main Card */}
      <div className={`relative h-full flex flex-col backdrop-blur-xl border rounded-2xl overflow-hidden transition-all duration-300 ${
        isSpecial
          ? "bg-gradient-to-br from-[#1a0f1f] via-[#1a1128] to-[#0f0f1e] border-red-500/30 hover:border-red-500/55 shadow-lg dark:shadow-red-950/40"
          : "bg-gradient-to-br from-[#0f0f1e] via-[#13131f] to-[#0d0d18] border-white/[0.07] hover:border-violet-500/30 shadow-md dark:shadow-violet-950/20"
      } dark:block hidden`}>

        {/* Top Section */}
        <div className={`relative p-5 pb-4 border-b ${
          isSpecial
            ? "border-red-500/20 bg-gradient-to-r from-red-500/8 to-transparent"
            : "border-white/[0.06] bg-gradient-to-r from-violet-500/5 to-transparent"
        }`}>
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-3 flex-1 min-w-0">
              <div className="relative w-14 h-14 rounded-xl bg-gradient-to-br from-[#1e1e30] to-[#16162a] border border-white/[0.1] p-2 flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-105 transition-transform">
                <Image src={project.logo} alt={project.title} width={50} height={50} className="object-contain w-10 h-10" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-white font-bold text-lg truncate group-hover:text-secondary transition-colors">
                  {project.title}
                </h4>
                <p className="text-slate-400 text-xs truncate mt-0.5">{project.name}</p>
              </div>
            </div>
            {isSpecial && (
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-gradient-to-r from-red-600 to-rose-600 text-white shadow-sm flex-shrink-0">
                Featured
              </span>
            )}
          </div>
        </div>

        {/* Description */}
        <div className="flex-1 p-5 pb-3">
          <p className="text-slate-300 text-sm leading-relaxed line-clamp-3">{project.description}</p>
        </div>

        {/* Tech tags */}
        <div className="px-5 pb-4">
          <div className="flex flex-wrap gap-1.5">
            {project.languages.slice(0, 4).map((lang, index) => (
              <span key={index} className="px-2.5 py-1 text-xs font-medium rounded-lg bg-white/[0.06] text-slate-300 border border-white/[0.07]">
                {lang}
              </span>
            ))}
            {project.languages.length > 4 && (
              <span className="px-2 py-1 text-xs font-medium rounded-lg bg-white/[0.04] text-slate-400 border border-white/[0.05]">
                +{project.languages.length - 4}
              </span>
            )}
          </div>
        </div>

        {/* CTA */}
        <div className="p-5 pt-3 border-t border-white/[0.06] mt-auto">
          <a href={project.demoLink} target="_blank" rel="noopener noreferrer"
            className="group/btn relative inline-flex items-center justify-center w-full gap-2 px-5 py-2.5 font-semibold text-xs sm:text-sm rounded-xl overflow-hidden text-white bg-gradient-to-r from-red-600 via-rose-600 to-red-600 hover:from-red-500 hover:to-rose-500 shadow-md shadow-rose-500/20 hover:shadow-rose-500/35 transition-all duration-300">
            <FaExternalLinkAlt className="text-xs group-hover/btn:rotate-45 transition-transform duration-300" />
            <span>Explore Live Demo</span>
            <FaArrowRight className="text-xs transform group-hover/btn:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>

      {/* Light mode fallback */}
      <div className={`relative h-full flex flex-col backdrop-blur-xl border rounded-2xl overflow-hidden transition-all duration-300 dark:hidden ${
        isSpecial
          ? "bg-white/90 border-red-500/30 shadow-lg hover:shadow-xl hover:border-red-500/60"
          : "bg-white/80 border-slate-200/80 shadow-md hover:shadow-lg hover:border-slate-300"
      }`}>
        <div className={`relative p-5 pb-4 border-b ${
          isSpecial ? "border-red-500/20 bg-red-500/5" : "border-slate-100 bg-slate-50/50"
        }`}>
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-3 flex-1 min-w-0">
              <div className="relative w-14 h-14 rounded-xl bg-white border border-slate-200 p-2 flex items-center justify-center flex-shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                <Image src={project.logo} alt={project.title} width={50} height={50} className="object-contain w-10 h-10" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-slate-900 font-bold text-lg truncate group-hover:text-secondary transition-colors">{project.title}</h4>
                <p className="text-slate-500 text-xs truncate mt-0.5">{project.name}</p>
              </div>
            </div>
            {isSpecial && (
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-gradient-to-r from-red-600 to-rose-600 text-white shadow-sm flex-shrink-0">Featured</span>
            )}
          </div>
        </div>
        <div className="flex-1 p-5 pb-3">
          <p className="text-slate-600 text-sm leading-relaxed line-clamp-3">{project.description}</p>
        </div>
        <div className="px-5 pb-4">
          <div className="flex flex-wrap gap-1.5">
            {project.languages.slice(0, 4).map((lang, index) => (
              <span key={index} className="px-2.5 py-1 text-xs font-medium rounded-lg bg-slate-100 text-slate-700 border border-slate-200/60">{lang}</span>
            ))}
            {project.languages.length > 4 && (
              <span className="px-2 py-1 text-xs font-medium rounded-lg bg-slate-100 text-slate-500">+{project.languages.length - 4}</span>
            )}
          </div>
        </div>
        <div className="p-5 pt-3 border-t border-slate-100 mt-auto">
          <a href={project.demoLink} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-full gap-2 px-5 py-2.5 font-semibold text-xs sm:text-sm rounded-xl text-white bg-gradient-to-r from-red-600 via-rose-600 to-red-600 hover:from-red-500 hover:to-rose-500 shadow-md shadow-rose-500/20 transition-all duration-300">
            <FaExternalLinkAlt className="text-xs" />
            <span>Explore Live Demo</span>
            <FaArrowRight className="text-xs" />
          </a>
        </div>
      </div>
    </div>
  );
};
