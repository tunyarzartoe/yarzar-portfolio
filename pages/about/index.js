import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ImageViewModal } from "@/components/main/ImageViewModal";
import Hero from "@/components/Hero";

const About = () => {
  const [showModal, setShowModal] = useState(false);

  const handleImageClick = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showModal]);

  return (
    <section className="padding-container max-container about flex mb-10">
      <div>
        <Hero title="About" />

        <div className="flex flex-col gap-6 mb-4 regular-16">
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
            <p>
              As a full-stack developer, I see myself as a digital craftsman,
              sculpting elegant solutions from lines of code. With a passion for
              both frontend finesse and backend robustness, I strive to create
              seamless experiences that delight users and simplify their lives.
              From brainstorming ideas to deploying polished applications, I
              relish every step of the development journey. Let's work together
              to build innovative solutions that make a difference in the
              digital world.
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
      </div>

      {showModal && <ImageViewModal closeModal={closeModal} />}
    </section>
  );
};

export default About;
