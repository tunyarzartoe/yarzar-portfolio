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
          <h3 className="text-4xl font-extrabold uppercase mb-5">
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
                <h3 className="text-xl text-gray-600 text-start font-bold mb-3">{data.title}</h3>
                <p className="text-gray-600 mb-5 text-start">{data.description}</p>
                <div className="absolute bottom-5 right-5 flex items-center space-x-2">
                  {data.lang.icon}
                </div>
                <Link
                  href={data.demoLink}
                  target="_bank"
                  className="absolute bottom-2 right-2 bg-secondary text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <FaArrowRight />
                </Link>
              </div>
            </div>
          ))}
        </motion.div>
      </section>
    </>
  );
};

export default Work;
