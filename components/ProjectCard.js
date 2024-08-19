import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { Button } from "@nextui-org/react";

export const ProjectCard = ({ project }) => {
  return (
    <div className="project-card flex flex-col p-4 shadow-md rounded-md mb-1">
      <div className="flex mb-2">
        <Image
          src={project.logo}
          alt={project.title}
          width={70}
          height={35}
          className="rounded-lg"
        />
        <div className="ml-4">
          <h4 className="text-black  bold-20">{project.title}</h4>
          <span className="text-black regular-24 italic"> {project.name}</span>
        </div>
      </div>

      <div className="flex items-center mb-1">
        <div className="">
          <p className="text-gray-900 regular-16 ">{project.description}</p>
        </div>
      </div>
      <div className="flex flex-wrap mb-0">
        {project.languages.map((lang, index) => (
          <span
            key={index}
            className="tag text-gray-10 px-2 py-1 rounded mr-2 mb-2"
          >
            {lang}
          </span>
        ))}
      </div>
      <div className="flex items-center mt-auto  ">
        <Button
          className="view-demo rounded-full"
          href={project.demoLink}
          as={Link}
          color="primary"
          variant="solid"
          target="_bank"
        >
          <span className="mr-8 text-black">View Demo</span>
          <span className="absolute  right-2 font-extrabold text-tertiary bg-white/20 border-secondary border-[3px] h-8 w-8 rounded-full opacity-100 flexCenter -rotate-45">
            <FaArrowRight />
          </span>
        </Button>
      </div>
      {/* <Link href={project.demoLink}>
        <button className=" btn flex items-center mt-auto ">
          View Demo <FaArrowRight className="ml-2" />
        </button>
      </Link> */}
    </div>
  );
};
