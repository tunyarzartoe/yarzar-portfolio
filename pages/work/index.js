import React from "react";
import { motion } from "framer-motion";
import { workData } from "@/app/constants/personalData";
import { ProjectCard } from "@/components/ProjectCard";
import { useMetadata } from "@/app/metaData";
import Head from "next/head";
import BackToTopButton from "@/components/main/BackToTopButton";

const Work = () => {
  const metadata = useMetadata();

  // Featured projects (AI Carbon, Burmese Recipe, J4U)
  const featuredProjects = workData.filter(p => [3, 2, 1].includes(p.id));
  const otherProjects = workData.filter(p => ![1, 2, 3].includes(p.id));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        {metadata.icon && <link rel="icon" href={metadata.icon.src} />}
      </Head>

      <section className="min-h-screen bg-gradient-to-b via-slate-900 to-slate-950 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse animation-delay-2000" />
          <div className="absolute top-1/2 right-0 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl animate-pulse animation-delay-4000" />
        </div>

        <div className="max-container padding-container relative z-10">
          {/* Header Section */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="flex flex-col items-center text-center mb-16 mt-8"
          >
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/20 border border-blue-500/50 mb-6"
            >
              <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              <span className="text-sm font-semibold text-blue-300">My Portfolio</span>
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl font-black mb-4 bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent"
            >
              Featured<span className="text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text"> Works</span>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed"
            >
              Each project represents my commitment to creating seamless digital experiences 
              that blend innovation, design excellence, and robust functionality.
            </motion.p>
          </motion.div>

          {/* Featured Projects Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="mb-20"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
              {featuredProjects.map((data, index) => (
                <motion.div key={index} variants={itemVariants} className="h-full">
                  <ProjectCard project={data} isFeatured={true} />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Other Projects Section */}
          {otherProjects.length > 0 && (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="mb-12"
            >
              <motion.div variants={itemVariants} className="mb-8">
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                  Additional<span className="text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text"> Projects</span>
                </h3>
                <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                {otherProjects
                  .sort((a, b) => (b.id ?? 0) - (a.id ?? 0))
                  .map((data, index) => (
                  <motion.div key={index} variants={itemVariants} className="h-full">
                    <ProjectCard project={data} isFeatured={false} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </section>

      <BackToTopButton />
    </>
  );
};

export default Work;
