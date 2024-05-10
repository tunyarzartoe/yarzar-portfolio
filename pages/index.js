import { motion } from "framer-motion";
import SocialIcons from "@/components/SocialIcons";
import Image from "next/image";
import dynamic from "next/dynamic";
import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { slideInFromRight } from "@/components/main/Main";
import About from "./about";
import fadeIn from "@/components/Variants";

const Home = () => {
  return (
    <>
      <section className="padding-container max-container  grid grid-cols-1 lg:grid-cols-2 gap-4 py-10 xl:py-32 mb-10">
        <motion.div
          variants={fadeIn("down", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col lg:items-start"
        >
          <h3 className="bold-16">
            Hi Everyone ! <br />
            I&apos;m{" "}
            <span className="regular-24 text-secondary ">Tun Yar Zar Toe</span>
          </h3>
          <h4 className="bold-20">
            A
            <span className="pl-2">
              <Typewriter
                words={["Full Stack Developer", "Youtuber", "Programmer"]}
                loop={true}
                cursorStyle={"_"}
                typeSpeed={90}
                deleteSpeed={70}
                delaySpeed={1000}
              />
            </span>
          </h4>
          <p className="bold-16">I turn coffee into code.</p>
          <p className="py-4 regular-16">
            Welcome to my portfolio website ! I'm a passionate Full Stack
            Developer
            <br />
            with over{" "}
            <span className="text-secondaryStrong font-extrabold">
              {" "}
              2 years{" "}
            </span>
            of experience in building web applications.
            <br /> I specialize in JavaScript, React.js, Node.js, MongoDB, etc.
            and I'm dedicated to delivering high-quality software solutions.
          </p>
          <SocialIcons />
        </motion.div>
        {/* <motion.div
          className="flex flex-1 mr-10 ml-11 lg:items-end"
          variants={slideInFromRight(0.8)}
        >
          <Image
            src={"/mainIconsdark.svg"}
            alt="work icons"
            height={650}
            width={600}
          />
        </motion.div> */}
      </section>
    </>
  );
};

export default Home;
