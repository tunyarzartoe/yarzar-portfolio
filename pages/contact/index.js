import Hero from "@/components/Hero";
import React from "react";
import { HiArrowRight } from "react-icons/hi2";
import { motion } from "framer-motion";
import fadeIn from "@/components/Variants";
import { useMetadata } from "@/app/metaData";
import Head from "next/head";

const Contact = () => {
  const metadata = useMetadata();

  return (
    <section className="max-container padding-container py-8 xl:py-12 mb-8" style={{height: "76vh"}}>
      <Head>
        <title>{metadata.title}</title>
        {metadata.icon && <link rel="icon" href={metadata.icon.src} />}
      </Head>{" "}
      <div className="flex flex-col gap-6">
        <motion.div
          // variants={fadeIn("down", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="pb-14 "
        >
          <div className="text-center justify-center flex">
            <h3 className="bold-20 font-extrabold relative leading-normal uppercase text-center">
              Contact U<span className="text-secondary">s</span>
              <span className="tex-[30px] lg:text-[34px]  font-extrabold text-white/30 absolute top-[50%] left-1/2  -translate-y-1/2 -translate-x-1/2 uppercase">
                Get in touch
              </span>
            </h3>
          </div>
        </motion.div>
        <motion.form
          // variants={fadeIn("down", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-1 flex-col gap-4 w-full  mx-auto max-w-[33rem]"
        >
          <div className="flex gap-2 w-full">
            <input
              type="text"
              placeholder="Enter Your Name"
              className="regular-14 placholder:text-gray-50 rounded-full px-4 py-1 bg-white/20 outline-none w-1/2"
            />
            <input
              type="text"
              placeholder="Enter Email"
              className="regular-14 placholder:text-gray-50 rounded-full px-4 py-1 bg-white/20 outline-none w-1/2"
            />
          </div>
          <input
            type="text"
            placeholder="Enter Email"
            className="regular-14 placholder:text-gray-50 rounded-full px-4 py-1 bg-white/20 outline-none "
          />
          <textarea
            id=""
            cols="10"
            rows="8"
            placeholder="Enter Your Message"
            className="regular-14 placholder:text-gray-50 rounded-xl px-4 py-1 bg-white/20 outline-none resize-none"
          />
          <button className="p-2 bg-secondary rounded-full flexCenter gap-2 w-[11rem] medium-14 hover:animate-pulse">
            Send Message
            <span>
              <HiArrowRight />
            </span>
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
