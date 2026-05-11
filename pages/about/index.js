import React, { useState } from "react";
import Image from "next/image";
import { ImageViewModal } from "@/components/main/ImageViewModal";
import Personal from "@/components/Personal";
import { motion } from "framer-motion";
import { useMetadata } from "@/app/metaData";
import Head from "next/head";
import aboutImage from "@/public/about-photo.jpg";
import BackToTopButton from "@/components/main/BackToTopButton";

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
    <>
      <section className="padding-container max-container about">
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
          {/* Text Section */}
          <div className="flex flex-col justify-center order-1 lg:order-2">
            <h3 className="bold-20 font-extrabold relative leading-normal uppercase mb-4">
              About
            </h3>
            <div className="leading-7 text-gray-200 text-lg">
              <p className="mb-4">
                As a software engineer , I see myself as a digital craftsman, sculpting
                elegant solutions from lines of code. With a passion for both frontend
                finesse and backend robustness, I strive to create seamless experiences
                that delight users and simplify their lives. From brainstorming ideas to
                deploying polished applications, I relish every step of the development
                journey. Let's work together to build innovative solutions that make a
                difference in the digital world.
              </p>
              <p className="mb-4">
                Currently working mostly with React, Node JS, C#, and Java, as well as
                other JavaScript technologies.
              </p>
              {/* <p className="mb-4">
                In addition to coding, I create content on my YouTube channel, covering
                all things technology, coding vlogs, and personal development.
              </p> */}
            </div>
          </div>
          {/* Image Section */}
          <div className="relative flex justify-center items-center order-2 lg:order-1">
            <div
              className="relative w-96 h-96 rounded-full overflow-hidden border-4 border-secondary shadow-lg"
            // onClick={handleImageClick}
            >
              <Image
                src={aboutImage}
                alt="Tun Yar Zar Toe"
                layout="fill"
                objectFit="cover"
                quality={100}
              />
            </div>
          </div>
        </motion.div>
        <motion.div
          initial="hidden"
          animate="show"
          exit="hidden"
          className="mt-12"
        >
          <h3 className="bold-20 font-extrabold uppercase mb-6">Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Java", level: "80%", color: "#5382a1" },
              { name: "JavaScript", level: "80%", color: "#f0db4f" },

              { name: "React JS", level: "75%", color: "#61dafb" },
              { name: "Node JS", level: "75%", color: "#68a063" },
              { name: "Next JS", level: "75%", color: "#2d2d2d" },
              { name: "C#", level: "60%", color: "#68217a" },
            ].map((skill, index) => (
              <div key={index} className="mb-4">
                <div className="flex justify-between regular-14 text-gray-200 mb-2">
                  <span>{skill.name}</span>
                  <span>{skill.level}</span>
                </div>
                <div className="relative bg-gray-800 h-5 rounded-full border border-gray-700">
                  <span
                    className="absolute top-0 left-0 h-full rounded-full animate-pulse"
                    style={{
                      width: skill.level,
                      backgroundColor: skill.color,
                    }}
                  ></span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
        <Personal />
        {/* {showModal && <ImageViewModal closeModal={closeModal} />} */}
      </section>

      {/* Back to top button */}
      <BackToTopButton />
    </>
  );
};

export default About;
