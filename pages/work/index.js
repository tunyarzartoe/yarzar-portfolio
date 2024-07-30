import React from "react";
import { motion } from "framer-motion";
import { workData } from "@/app/constants/personalData";
import Image from "next/image";
import { useMetadata } from "@/app/metaData";
import Head from "next/head";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";

const Work = () => {
  const metadata = useMetadata();

  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        {metadata.icon && <link rel="icon" href={metadata.icon.src} />}
      </Head>

      <section className="max-container padding-container flex flex-col items-center text-center mb-12 sm:mb-0">
        <motion.div
          initial="hidden"
          animate="show"
          exit="hidden"
          className="mb-10"
        >
          <h3 className="bold-20 font-extrabold relative leading-normal uppercase mb-5">
            My Work<span className="text-secondary">s</span>
          </h3>
          <p className="regular-16 text-gray-200 text-lg max-w-2xl mx-auto">
            Each project reflects my dedication to crafting seamless digital
            solutions that captivate and engage users. Discover the art of
            innovation through concise, impactful design and robust
            functionality.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="show"
          exit="hidden"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full mb-10"
        >
          {workData.map((data, index) => (
            <div
              key={index}
              className="relative group bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <Image
                src={data.images[0].url}
                alt="work_image"
                layout="responsive"
                width={400}
                height={300}
                className="transition-transform duration-500 group-hover:scale-105"
              />
              <div className="p-5 relative">
                <h3 className="text-xl text-gray-600 text-start font-bold mb-3">
                  {data.title}
                </h3>
                <p className="text-gray-600 text-start">{data.description}</p>
                <div className="flex flex-warp mb-0 my-1">
                  <span
                    // key={index}
                    className="tag text-black px-2 py-1 rounded mr-2 "
                  >
                    {data.lang.name}
                  </span>
                  <Link
                    href={data.demoLink}
                    target="_bank"
                    className="font-extrabold text-tertiary bg-white/20 border-secondary border-[3px] h-10 w-10 flexCenter rounded-full absolute right-14 bottom-6 opacity-0 group-hover:opacity-100 group-hover:translate-x-10 transition-all duration-500 -rotate-45"
                    >
                    <FaArrowRight />
                  </Link>
                </div>
              </div>
              {/* <span className="bottom-2 left-2">
                  {data.lang.icon}
                </span> */}
            </div>
          ))}
        </motion.div>
      </section>
    </>
  );
};

export default Work;
