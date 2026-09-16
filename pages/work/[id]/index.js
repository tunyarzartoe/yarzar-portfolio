import React from "react";
import { useRouter } from "next/router";
import { workData } from "@/app/constants/personalData";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { HiArrowLeft, HiArrowTopRightOnSquare } from "react-icons/hi2";
import { FaReact, FaJs } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import BackToTopButton from "@/components/main/BackToTopButton";

const iconMap = {
  FaReact: FaReact,
  FaJs: FaJs,
  SiJavascript: SiJavascript,
};

const ProjectDetail = ({ project }) => {
  const router = useRouter();

  if (router.isFallback || !project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-slate-600 dark:text-slate-400">
        Loading project details...
      </div>
    );
  }

  const IconComponent = project.lang ? iconMap[project.lang.icon] : null;

  return (
    <>
      <Head>
        <title>{project.title} | Tun Yar Zar Toe</title>
      </Head>

      <section className="min-h-screen py-12 px-4 sm:px-6 max-w-5xl mx-auto">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-sm font-bold text-slate-600 dark:text-slate-400 hover:text-secondary transition-colors"
          >
            <HiArrowLeft />
            <span>Back to All Projects</span>
          </Link>
        </div>

        {/* Project Card */}
        <div className="rounded-3xl bg-white/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800/80 p-6 sm:p-10 backdrop-blur-md shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <span className="text-xs font-bold text-secondary uppercase tracking-widest block mb-1">
                Project Showcase
              </span>
              <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white">
                {project.title}
              </h1>
              {project.name && (
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                  {project.name}
                </p>
              )}
            </div>

            {project.demoLink && (
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white font-bold text-sm bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 shadow-md shadow-rose-500/25 transition-all self-start sm:self-auto"
              >
                <span>Live Demo</span>
                <HiArrowTopRightOnSquare className="text-base" />
              </a>
            )}
          </div>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
            {project.description}
          </p>

          {/* Languages / Technologies */}
          {project.languages && project.languages.length > 0 && (
            <div className="mb-8">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2.5">
                Technologies & Tools Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.languages.map((lang, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700/80"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Images Grid */}
          {project.images && project.images.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-100 dark:border-slate-800">
              {project.images.map((img, index) => (
                <div
                  key={index}
                  className="relative rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-4 h-64 sm:h-72 flex items-center justify-center shadow-inner"
                >
                  <Image
                    src={img.url}
                    alt={`${project.title} Preview ${index + 1}`}
                    fill
                    className="object-contain p-2"
                  />
                </div>
              ))}
            </div>
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
