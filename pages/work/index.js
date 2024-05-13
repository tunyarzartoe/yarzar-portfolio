import Hero from "@/components/Hero";
import React from "react";
import { motion } from "framer-motion";
import fadeIn from "@/components/Variants";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { workData } from "@/app/constants/personalData";
import Image from "next/image";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { useMetadata } from "@/app/metaData";
import Head from "next/head";

const Work = () => {
  const metadata = useMetadata();
  // console.log("icon =====",metadata.icon)
  return (
    <section className="max-container padding-container  mb-12 flex flex-col flexCenter md:flex-row md:gap-8 lg:gap-20 xl:gap-28 xl:py-31">
      <Head>
        <title>{metadata.title}</title>
        {metadata.icon && <link rel="icon" href={metadata.icon.src} />}
      </Head>
      <motion.div
        // variants={fadeIn("up", 0.001)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="md:max-w[40%] text-center mb-5"
      >
        <h3 className="bold-20 font-extrabold relative  leading-normal uppercase">
          My Work<span className="text-secondary">s</span>
          <span className="text-[-35px] lg:tex-[44px]  font-extrabold text-white/10 absolute top-[50%] left-1/2 -translate-y-1/2 -translate-x-1/2 uppercase">
            My Works
          </span>
          </h3>
          <p className="text-start max-w-md mx-auto text-gray-20 sm:text-start ">
             Each project reflects my dedication
            to crafting seamless digital solutions that captivate and engage
            users. Discover the art of innovation through concise, impactful
            design and robust functionality.{" "}
          </p>
        
      </motion.div>
      <motion.div
      //  variants={fadeIn("down",0.001)}
       initial="hidden"
       animate="show"
       exit="hidden"
      className="w-full sm:max-w-[50%]">
        <Swiper
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="h-[341px] sm:h-[288px] md:h-[377px] sm:mt-8"
        >
          {workData.map((slide, i) => (
            <SwiperSlide key={i}>
              <div className=" flex flex-col items-center gap-y-4">
                {slide.images.map((image, i) => (
                  <div key={i} className="flexCenter">
                    <div className="relative overlow-hidden group rounded-lg cursor-pointer">
                      <div className="min-w-full">
                        <Image
                          src={image.url}
                          alt="work_image"
                          height={150}
                          width={210}
                          fetchPriority="eager"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </section>
  );
};

export default Work;
