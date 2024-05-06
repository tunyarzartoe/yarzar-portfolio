import Hero from "@/components/Hero";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="padding-container max-container  flex ">
      <div>
        <Hero title="About" />

        <div className="flex flex-col gap-6 mb-4 ">
          <div className="leading-[2.5] text-gray-200 text-lg">
            <Image
              src={"/about.jpg"}
              alt="My profile"
              className="object-cover float-none md:float-left  w-[200px] rounded-full aspect-square m-8 mt-2"
              width={800}
              height={900}
            />
            <p>
              An inspiring software engineer, Coding with a strong passion for
              design and computer science, I enjoy creating amazing things and
              building blazingly-fast websites.
            </p>
            {/* <div className="md:float-right w-[200px] rounded-full aspect-square m-2"> */}
            {/* <ComputerModel /> */}
            {/* </div> */}
            <p>
              Currently working mostly with Typescript, React, and Svelte, as
              well as other JavaScript technologies for now. Here in my blog, I
              mostly write about my experiences and share my thoughts on various
              topics related to software engineering.
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
    </div>
  );
};

export default About;
