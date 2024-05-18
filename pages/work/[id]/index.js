import React from "react";
import { useRouter } from "next/router";
import { workData } from "@/app/constants/personalData";
import Image from "next/image";

const ProjectDetail = ({ project }) => {
  const router = useRouter();
  const { id } = router.query;

  if (!project) {
    return <div>Loading...</div>;
  }

  return (
    <section className="padding-container max-container h-auto">
      <h1 className="bold-20">{project.title}</h1>
      <p className="regular-16 mb-3">{project.description}</p>
      <div className="flex gap-4">
        {project.images.map((image, index) => (
          <div className="relative overlow-hidden group rounded-lg cursor-pointer  bg-white/10 p-3 card-container">
            <Image
              key={index}
              src={image.url}
              alt={`Project Image ${index + 1}`}
              width={500}
              height={500}
            />
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
