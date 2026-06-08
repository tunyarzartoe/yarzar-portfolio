import { motion } from "framer-motion";
import SocialIcons from "@/components/SocialIcons";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import { slideInFromRight } from "@/components/main/Main";
import fadeIn from "@/components/Variants";
import { useMetadata } from "@/app/metaData";
import Head from "next/head";
import { ProjectCard } from "@/components/ProjectCard";
import { workData } from "@/app/constants/personalData";
import Personal from "@/components/Personal";
import { Divider } from "@nextui-org/react";
import Image from "next/image";
import profileImage from "@/public/new_profile.jpeg";
import About from "./about";
import { FaArrowUp } from "react-icons/fa";
import BackToTopButton from "@/components/main/BackToTopButton";
import Contact from "./contact";

const Home = () => {
  const metadata = useMetadata();
  return (
    <>
      {/* Home Page Section */}
      <section className="padding-container max-container xl:py-8 mb-8 lg:mb-8 home">
        <Head>
          <title>{metadata.title}</title>
          {metadata.icon && <link rel="icon" href={metadata.icon.src} />}
        </Head>
        <motion.div
          initial="hidden"
          animate="show"
          exit="hidden"
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          <div className="flex flex-col justify-center">
            <h3 className="bold-16 pt-24">
              Hi Everyone! <br />
              I&apos;m <span className="regular-24 text-secondary">Tun Yar Zar Toe</span>
            </h3>
            <h4 className="bold-20">A Software Engineer.</h4>
            <p className="bold-16">I turn coffee into code.</p>
            <p className="py-4 regular-16">
              Welcome to my portfolio website! I&apos;m a passionate software
              engineer with over <span className="text-secondaryStrong font-extrabold">2 years</span> of
              experience building web applications. I specialize in Java, Python,
              JavaScript/TypeScript, React.js (Next.js), Node.js, and database
              management with MongoDB, PostgreSQL, and MySQL. I focus on
              delivering high-quality, maintainable software with an emphasis on
              performance, accessibility, and scalable architecture.
            </p>
            <p className="regular-16 mt-2">
              Core strengths: Performance optimization, responsive & accessible
              UI, API design, test automation, and DevOps-friendly deployments.
              Interested in collaborating? Reach out via the contact form or my
              socials below.
            </p>
            <SocialIcons />
          </div>
          <div className="flex justify-center lg:justify-end pt-2 lg:pt-24 px-10">
            <div
              className="relative rounded-full overflow-hidden border-4 border-secondary shadow-lg"
              style={{ width: 330, height: 380 }}
            >
              <Image
                src={profileImage}
                alt="Tun Yar Zar Toe"
                fill
                style={{ objectFit: "cover" }}
                quality={100}
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <About />

      {/* Projects Section */}
      <section className="padding-container max-container mb-16 lg:mb-4">
        <h2 className="text-3xl font-bold mb-4 lg:p-5 pb-0 mobile-head">Projects</h2>
        <div className="project-section px-0">
          <h2 className="text-3xl font-bold mb-1 p-2 lg:p-5 pb-0 project-head">Projects</h2>
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 lg:p-5">
            { /** Show projects in ascending order by `id` (1,2,3...) */
              [...workData]
                .sort((a, b) => (a.id ?? 0) - (b.id ?? 0))
                .map((project, index) => (
                  <ProjectCard key={project.id ?? index} project={project} />
                ))}
          </div>
        </div>
        <div className="personal">
          <Personal />
        </div>
      </section>

      {/* Contact Page Section */}
      <Contact />

      {/* Back to Top Button */}
      <BackToTopButton />
    </>
  );
};

export default Home;
