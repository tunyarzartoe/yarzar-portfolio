import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ImageViewModal } from "@/components/main/ImageViewModal";
import Hero from "@/components/Hero";
import Personal from "@/components/Personal";
import fadeIn from "@/components/Variants";
import { motion } from "framer-motion";
import { useMetadata } from "@/app/metaData";
import Head from "next/head";

const About = () => {
  const metadata = useMetadata();
  const [showModal, setShowModal] = useState(false);

  const handleImageClick = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <section className="padding-container max-container about mb-20">
      <Head>
        <title>{metadata.title}</title>
        {metadata.icon && <link rel="icon" href={metadata.icon.src} />}
      </Head>{" "}
      <motion.div
        // variants={fadeIn("down", 0.4)}
        initial="hidden"
        animate="show"
        exit="hidden"
      >
        <h3 className="bold-20 font-extrabold relative leading-normal uppercase">
          About
          {/* <span className="text-[-45px] lg:tex-[54px]  font-extrabold text-white/10 absolute top-[50%] left-1/2 -translate-y-1/2 -translate-x-1/2">
            My Services
          </span> */}
        </h3>
        <div className="flex flex-col gap-10 mb-4 regular-16">
          <div className="leading-[2.5] text-gray-200 text-lg">
            <div
              className=""
              onClick={handleImageClick}
              style={{ cursor: "pointer" }}
            >
              <Image
                src={"/profile.jpg"}
                alt="My profile"
                className="object-cover float-none md:float-left  w-[220px] rounded-full aspect-square m-8 mt-2"
                width={800}
                height={800}
                fetchPriority="eager"
              />
            </div>
            <p className=" mb-4">
              As a full-stack developer, I see myself as a digital craftsman,
              sculpting elegant solutions from lines of code. <br />
              With a passion for both frontend finesse and backend robustness, I
              strive to create seamless experiences that delight users and
              simplify their lives. From brainstorming ideas to deploying
              polished applications, I relish every step of the development
              journey. Let's work together to build innovative solutions that
              make a difference in the digital world.
            </p>

            <p>
              Currently working mostly with React, Node JS, C#, and Java, as
              well as other JavaScript technologies for now.
            </p>
            <p>
              In addition to coding, I create content on my YouTube channel,
              covering all things technology, coding vlogs, and personal
              development.
            </p>
            <p>
              Over the past years, I have written content for my blog and
              newsletter. I strive to keep things simple by writing about
              technologies that interest me at the time, as well as how I am
              learning and growing in my career.
            </p>
          </div>
        </div>
      </motion.div>
      <motion.div
        // variants={fadeIn("up", 0.4)}
        initial="hidden"
        animate="show"
        exit="hidden"
      >
        <h3 className="bold-20 font-extrabold uppercase">Skills</h3>
        <div className="flex flex-col gap-6 mb-4 regular-16">
          <div className="leading-[2.5]  text-lg">
            <div className="skill object-cover float-none md:float-left  w-[280px] rounded-full m-8 mt-1 text-start justify-start">
              {/* <h3 className="text-2xl font-bold lg:text-3xl">Skills </h3> */}
            </div>
            <div className="mb-4 flex flex-col max-w-[100%] lg:max-w-[70%]">
              <div className="mb-4 ">
                <div className="flexBetween regular-14 text-gray-20 ">
                  <span>JavaScript</span>
                  <span>95%</span>
                </div>
                <div className="relative bg-light h-5 w-full rounded-full border border-gray-20">
                  <span className="absolute top-0 left-0 h-full w-[95%] bg-[#f0db4f] rounded-full animate-pulse"></span>
                </div>
              </div>
              <div className="mb-4">
                <div className="flexBetween regular-14 text-gray-20">
                  <span>React JS</span>
                  <span>90%</span>
                </div>
                <div className="relative bg-light h-5 w-full rounded-full border border-gray-20">
                  <span className="absolute top-0 left-0 h-full w-[90%] bg-[#61dafb] rounded-full animate-pulse"></span>
                </div>
              </div>
              <div className="mb-4">
                <div className="flexBetween regular-14 text-gray-20">
                  <span>Node JS</span>
                  <span>90%</span>
                </div>
                <div className="relative bg-light h-5 w-full rounded-full border border-gray-20">
                  <span className="absolute top-0 left-0 h-full w-[90%] bg-[#68a063] rounded-full animate-pulse"></span>
                </div>
              </div>
              <div className="mb-4">
                <div className="flexBetween regular-14 text-gray-20">
                  <span>Next JS</span>
                  <span>85%</span>
                </div>
                <div className="relative bg-light h-5 w-full rounded-full border border-gray-20">
                  <span className="absolute top-0 left-0 h-full w-[85%] bg-[#2d2d2d] rounded-full animate-pulse"></span>
                </div>
              </div>

              <div className="mb-4">
                <div className="flexBetween regular-14 text-gray-20">
                  <span>C#</span>
                  <span>80%</span>
                </div>
                <div className="relative bg-light h-5 w-full rounded-full border border-gray-20">
                  <span className="absolute top-0 left-0 h-full w-[80%] bg-[#68217a] rounded-full animate-pulse"></span>
                </div>
              </div>
              <div className="mb-4">
                <div className="flexBetween regular-14 text-gray-20">
                  <span>Java</span>
                  <span>80%</span>
                </div>
                <div className="relative bg-light h-5 w-full rounded-full border border-gray-20">
                  <span className="absolute top-0 left-0 h-full w-[80%] bg-[#5382a1] rounded-full animate-pulse"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      {/* skill */}
      <Personal />
      {showModal && <ImageViewModal closeModal={closeModal} />}
    </section>
  );
};

export default About;
