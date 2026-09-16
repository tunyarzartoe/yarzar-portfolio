import React, { useState } from "react";
import { motion } from "framer-motion";
import { workData } from "@/app/constants/personalData";
import { ProjectCard } from "@/components/ProjectCard";
import { useMetadata } from "@/app/metaData";
import Head from "next/head";
import BackToTopButton from "@/components/main/BackToTopButton";
import { HiSparkles, HiCodeBracketSquare } from "react-icons/hi2";
import Link from "next/link";

const Work = () => {
  const metadata = useMetadata();
  const [filter, setFilter] = useState("all");

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "react", label: "React / Next.js" },
    { id: "ai", label: "AI & Innovation" },
  ];

  const filteredProjects = workData.filter((project) => {
    if (filter === "all") return true;
    if (filter === "ai") return project.title.toLowerCase().includes("ai") || project.name.toLowerCase().includes("carbon");
    if (filter === "react") return project.languages.some(l => l.toLowerCase().includes("react") || l.toLowerCase().includes("next"));
    return true;
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <>
      <Head>
        <title>Portfolio & Projects | Tun Yar Zar Toe</title>
        {metadata.icon && <link rel="icon" href={metadata.icon.src} />}
      </Head>

      <section className="min-h-screen py-8 sm:py-12 px-4 sm:px-6 max-w-6xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="flex flex-col items-center text-center mb-12"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 dark:bg-rose-500/15 border border-red-500/20 text-red-600 dark:text-rose-400 text-xs sm:text-sm font-semibold mb-4"
          >
            <HiSparkles className="animate-spin-slow" />
            <span>Featured Works & Applications</span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight mb-4"
          >
            Showcasing Real-World <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-rose-500 to-amber-500">
              Web & Software Projects
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-slate-600 dark:text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Each project represents my commitment to creating seamless digital experiences
            that blend innovation, responsive design, and scalable architecture.
          </motion.p>

          {/* Category Filter Pills */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
                  filter === cat.id
                    ? "bg-gradient-to-r from-red-600 to-rose-600 text-white shadow-md shadow-rose-500/25"
                    : "bg-white/80 dark:bg-slate-800/80 text-slate-600 dark:text-slate-400 border border-slate-200/80 dark:border-slate-700/80 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </motion.div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full"
        >
          {filteredProjects.map((project, index) => (
            <motion.div key={project.id ?? index} variants={itemVariants} className="h-full">
              <ProjectCard project={project} isFeatured={[3, 2, 1].includes(project.id)} />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 p-8 sm:p-10 rounded-3xl bg-white/70 dark:bg-slate-900/70 border border-slate-200/80 dark:border-slate-800/80 backdrop-blur-md shadow-lg flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left"
        >
          <div>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white mb-2">
              Looking for more repositories & open source code?
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 max-w-xl">
              Check out my full GitHub profile featuring additional codebases, full-stack experiments, and learning milestones.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="https://github.com/tunyarzartoe"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white font-bold text-xs sm:text-sm bg-slate-900 dark:bg-white dark:text-slate-900 hover:opacity-90 transition-opacity shadow-md"
            >
              <HiCodeBracketSquare className="text-base" />
              <span>Visit GitHub</span>
            </Link>
          </div>
        </motion.div>
      </section>

      <BackToTopButton />
    </>
  );
};

export default Work;
