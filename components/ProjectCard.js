import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { Button } from "@nextui-org/react";

export const ProjectCard = ({ project }) => {
  return (
    <div className="project-card flex flex-col p-4 shadow-md rounded-md mb-10">
      <div className="flex items-center mb-4">
        <div className="top-0">
          <Image
            src={project.logo}
            alt={project.title}
            width={80}
            height={80}
            className="rounded-lg"
          />
        </div>
        <div className="ml-4">
          <h3 className="text-black regular-16 bold-16">{project.title}</h3>
          <p className="text-gray-600 regular-16">{project.description}</p>
        </div>
      </div>
      <div className="flex flex-wrap mb-4">
        {project.languages.map((lang, index) => (
          <span
            key={index}
            className="tag text-black px-2 py-1 rounded mr-2 mb-2"
          >
            {lang}
          </span>
        ))}
      </div>
      <div className="flex items-center mt-auto  ">
        <Button
          className="view-demo"
          href={project.demoLink}
          as={Link}
          color="primary"
          variant="solid"
          target="_bank"
        >
          <span className="mr-5 text-black">View Demo</span>

          <span className="absolute bottom-2 right-2 bg-secondary text-white p-1 rounded-full opacity-100">
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
