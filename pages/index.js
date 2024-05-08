import { motion } from "framer-motion";
import SocialIcons from "@/components/SocialIcons";
import Image from "next/image";
import dynamic from "next/dynamic";
import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { slideInFromRight } from "@/components/main/Main";
import About from "./about";

const Home = () => {
  return (
    <>
    <section className="padding-container max-container page flex  flex-col gap-4 pb-32 py-20 lg:flex-row lg:gap-32 mb-10">
      <div className="flex-1 flexCenter flex-col lg:items-start">
        <h3 className="bold-16">
          Hi Everyone ! {" "}
          I&apos;m {" "}
          <span className="regular-24 text-secondary ">Tun Yar Zar Toe</span>
          {/* <br/> */}
        </h3>
        <h4 className="bold-24" >
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
        <p className="bold-16">
        I turn coffee into code.
        </p>
        <p className="py-4 regular-16">
          Welcome to my portfolio website ! I'm a passionate Full Stack Developer
          <br />
          with over{" "}
          <span className="text-secondaryStrong font-extrabold"> 2 years </span>of
          experience in building web applications.
          <br /> I specialize in JavaScript, React.js, Node.js, MongoDB, etc.
          and I'm dedicated to delivering high-quality software solutions.
        </p>
        <SocialIcons />
      </div>
      <div className="flex flex-1  mr-10 ml-11 ">

        {/* <Image
          src={"/yar_zar_1.png"}
          alt="profile" 
          width={600}
          height={300}
          className="w-[277px] h-auto lg:w-full relative "
        /> */}
        <motion.span
          className=" h-100 w-100  
           flex items-end justify-end "
           variants={slideInFromRight(0.8)}
          // animate={{
          //   backgroundColor: ["#08d9d6", "#252a34", "#b835e"],
          //   transition: { duration: 100, repeat: Infinity, ease: "easeInOut" },
          // }}
        >

        <Image
          src={"/mainIconsdark.svg"}
          alt="work icons"
          height={650}
          width={600}
        />
        </motion.span> 
      </div>
    </section>
    {/* <About/> */}
    </>
  );
};

export default Home;
