import React from "react";
import { useRouter } from "next/router";
import { workData } from "@/app/constants/personalData";
import Image from "next/image";
import Link from "next/link";
import { FaBug, FaCss3, FaFigma, FaHtml5, FaJava, FaJs, FaNode, FaReact } from "react-icons/fa";
import { SiAdobephotoshop, SiAdobexd, SiDotnet, SiFirebase, SiFramer, SiJavascript, SiMongodb, SiMysql, SiNextdotjs, SiNodedotjs, SiSpringboot } from "react-icons/si";

// Mapping of icon names to actual icon components
const iconMap = {
  FaReact: FaReact,
  FaJs: FaJs,
  SiJavascript: SiJavascript,
  // Add other mappings as needed
};

const ProjectDetail = ({ project }) => {
  const router = useRouter();
  const { id } = router.query;

  if (!project) {
    return <div>Loading...</div>;
  }

  const IconComponent = iconMap[project.lang.icon];

  return (
    <section className="padding-container max-container h-auto">
      <h1 className="bold-20">{project.title}</h1>
      <p className="regular-16 mb-3">{project.description}</p>
      <div className="flex gap-4">
        {project.images.map((image, index) => (
          <div
            key={index}
            className="relative overflow-hidden group rounded-lg cursor-pointer bg-white/10 p-3 card-container"
          >
            <Image
              src={image.url}
              alt={`Project Image ${index + 1}`}
              width={500}
              height={500}
            />
            <div className="mt-1 flex justify-between items-center">
              <div className="flex items-center">
                {/* Render the icon */}
                {IconComponent && <IconComponent style={{ fontSize: "30px", color: "#000" }} />}
              </div>
              <Link href={project.demoLink} passHref>
                <button className="inline-block px-6 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                  View Demo
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
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

  return { props: { project } };
}

export default ProjectDetail;
