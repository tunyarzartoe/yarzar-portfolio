import React from "react";
import Image from "next/image";
import { FaArrowRight, FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export const ProjectCard = ({ project, isFeatured = false }) => {
  const featuredProjects = [3, 2, 1];

  return (
    <div className={`group relative overflow-hidden rounded-2xl transition-all duration-500 ${
      isFeatured || featuredProjects.includes(project.id)
        ? "col-span-1 md:col-span-2 lg:col-span-1 h-full"
        : "h-full"
    }`}>
      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />
      
      {/* Main Card Container */}
      <div className={`relative h-full flex flex-col backdrop-blur-xl border transition-all duration-500 rounded-2xl overflow-hidden ${
        isFeatured || featuredProjects.includes(project.id)
          ? "bg-gradient-to-br from-slate-800/80 to-slate-900/80 border-blue-500/50 shadow-2xl shadow-blue-500/20 hover:shadow-blue-500/40 hover:border-blue-400"
          : "bg-gradient-to-br from-slate-800/60 to-slate-900/60 border-slate-700/50 shadow-xl hover:shadow-slate-700/30 hover:border-slate-600"
      }`}>
        
        {/* Top Section - Logo & Title */}
        <div className={`relative p-6 pb-4 border-b border-slate-700/50 ${
          isFeatured ? "bg-gradient-to-r from-blue-600/10 to-purple-600/10" : "bg-gradient-to-r from-slate-700/20 to-slate-800/20"
        }`}>
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-4 flex-1">
              {/* Logo Container */}
              <div className="relative group/logo">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur opacity-0 group-hover/logo:opacity-75 transition duration-500" />
                <div className="relative w-20 h-20 rounded-xl bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center border border-slate-600 group-hover/logo:border-blue-400 transition-colors">
                  <Image
                    src={project.logo}
                    alt={project.title}
                    width={70}
                    height={70}
                    className="object-contain w-16 h-16 filter group-hover/logo:brightness-110 transition-all"
                  />
                </div>
              </div>

              {/* Title & Name */}
              <div className="flex-1 min-w-0">
                <h4 className="text-white font-bold text-lg sm:text-xl leading-snug truncate group-hover:text-blue-300 transition-colors">
                  {project.title}
                </h4>
                <p className="text-slate-300 text-xs sm:text-sm italic mt-1 line-clamp-2 group-hover:text-slate-200 transition-colors">
                  {project.name}
                </p>
              </div>
            </div>

            {/* Badge */}
            {isFeatured && (
              <div className="flex-shrink-0">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-blue-500 to-purple-500 text-white animate-pulse">
                  Featured
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Middle Section - Description */}
        <div className="flex-1 p-6 pb-4">
          <p className="text-slate-200 text-sm sm:text-base leading-relaxed line-clamp-3 group-hover:text-slate-100 transition-colors">
            {project.description}
          </p>
        </div>

        {/* Skills/Technologies Section */}
        <div className="px-6 pb-4">
          <div className="flex flex-wrap gap-2">
            {project.languages.slice(0, 3).map((lang, index) => (
              <span
                key={index}
                className="px-3 py-1 text-xs font-medium rounded-lg bg-gradient-to-r from-blue-600/40 to-purple-600/40 text-blue-200 border border-blue-500/30 hover:from-blue-600/60 hover:to-purple-600/60 hover:border-blue-400/50 transition-all cursor-default"
              >
                {lang}
              </span>
            ))}
            {project.languages.length > 3 && (
              <span className="px-3 py-1 text-xs font-medium rounded-lg bg-slate-700/40 text-slate-300 border border-slate-600/30">
                +{project.languages.length - 3} more
              </span>
            )}
          </div>
        </div>

        {/* Bottom Section - CTA Button */}
        <div className="p-6 pt-4 border-t border-slate-700/50 mt-auto">
          <a
            href={project.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group/btn relative inline-flex items-center justify-center w-full gap-2 px-6 py-3 font-semibold rounded-xl overflow-hidden transition-all duration-300"
          >
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 opacity-100 group-hover/btn:opacity-90 transition-opacity" />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
            
            {/* Content */}
            <span className="relative flex items-center gap-2 text-white">
              <FaExternalLinkAlt className="text-sm group-hover/btn:rotate-45 transition-transform duration-300" />
              <span>Explore Project</span>
            </span>

            {/* Arrow Animation */}
            <FaArrowRight className="relative text-white opacity-0 group-hover/btn:opacity-100 group-hover/btn:translate-x-2 transition-all duration-300" />
          </a>
        </div>

        {/* Gradient Border Animation */}
        <div className="absolute inset-0 rounded-2xl p-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl opacity-50" />
        </div>
      </div>
    </div>
  );
};
