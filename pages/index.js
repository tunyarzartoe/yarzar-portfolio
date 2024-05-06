import { motion } from 'framer-motion'; // Import motion from Framer Motion
import SocialIcons from "@/components/SocialIcons";
import Image from "next/image";
import React from "react";
import { Typewriter } from "react-simple-typewriter";

const Home = () => {
  return (
    <section className="padding-container max-container page flex  flex-col gap-4 pb-32 py-20 lg:flex-row lg:gap-32">
      <div className="flex-1 flexCenter flex-col lg:items-start">
        <h2>
          Hi Everyone! I&apos;m{" "}
          <span className="text-secondary font-extrabold">Yar Zar</span>
        </h2>
        <h4 className="font-bold" style={{ fontSize: 24 }}>
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
        <p className="py-4">
          Welcome to my portfolio website! I'm a passionate Full Stack Developer
          <br/>
          with over <span className='text-secondary font-extrabold'> 2 years </span>of experience in building web applications.<br/> I
          specialize in JavaScript, React.js, Node.js, MongoDB, etc. and I'm
          dedicated to delivering high-quality software solutions.
        </p>
        <SocialIcons />
      </div>
      <div className="flex flex-1 relative">
        <Image
          src={"/yar_zar_1.png"}
          alt="profile" 
          width={600}
          height={300}
          className="w-[277px] h-auto lg:w-full relative "
        />
        <motion.span
          className="bg-secondary h-60 w-60 lg:h-[400px] lg:w-[400px] xl:h-[500px] xl:w-[500px] absolute top-4 right-0 rounded-br-none rounded-full -z-10 lg:top-10 lg:right-10"
          animate={{
            backgroundColor: ["#08d9d6", "#252a34", "#b835e"],
            transition: { duration: 10, repeat: Infinity, ease: "easeInOut" },
          }}
        ></motion.span>
      </div>
    </section>
  );
};

export default Home;
