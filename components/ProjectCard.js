import React from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

export const ProjectCard = ({ project }) => {
  return (
    <div className="project-card flex flex-col p-4 shadow-md rounded-md mb-4">
      <div className="flex flex-col sm:flex-row items-center sm:items-start mb-3">
        <Image
          src={project.logo}
          alt={project.title}
          width={70}
          height={70}
          className="rounded-lg object-contain"
        />
        <div className="ml-0 sm:ml-4 mt-3 sm:mt-0 text-center sm:text-left">
          <h4 className="text-black bold-20 text-lg sm:text-xl">{project.title}</h4>
          <span className="text-black regular-24 italic text-sm sm:text-base"> {project.name}</span>
        </div>
      </div>

      <div className="mb-2">
        <p className="text-gray-900 text-sm sm:text-base">{project.description}</p>
      </div>
      <div className="flex flex-wrap mb-3">
        {project.languages.map((lang, index) => (
          <span
            key={index}
            className="tag text-gray-10 px-2 py-1 rounded mr-2 mb-2 text-xs sm:text-sm"
          >
            {lang}
          </span>
        ))}
      </div>
      <div className="flex items-center mt-auto">
        <a
          href={project.demoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="view-demo relative inline-flex items-center px-3 py-2 sm:px-4 rounded-full bg-primary text-black"
        >
          <span className="pr-6 sm:pr-8">View Demo</span>
          <span className="absolute right-2 top-1/2 transform -translate-y-1/2 font-extrabold text-tertiary bg-white/20 border-secondary border-[3px] h-7 w-7 sm:h-8 sm:w-8 rounded-full flex items-center justify-center -rotate-45">
            <FaArrowRight />
          </span>
        </a>
      </div>
    </div>
  );
};
