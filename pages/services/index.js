import Hero from "@/components/Hero";
import fadeIn from "@/components/Variants";
import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { servicesData } from "@/app/constants/personalData";
const Services = () => {
  return (
    <section className="max-container padding-container py-12 xl:py-32">
      {/* <div className="flex flex-col gap-6"> */}
      <motion.div
        variants={fadeIn("up", 0.4)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="pb-12 text-center"
      >
        <h3 className="text-[30px] lg:text-[36px] font-extrabold relative leading-normal uppercase">
          Service<span className="text-secondary">s</span>
          {/* <span className="text-[-45px] lg:tex-[54px]  font-extrabold text-white/10 absolute top-[50%] left-1/2 -translate-y-1/2 -translate-x-1/2">
            My Services
          </span> */}
          <p className="text-center max-w-md mx-auto text-gray-20 mt-1 regular-16 mb-4">
          Our services portfolio offers tailored solutions for web development, design, digital marketing, and consulting.
          </p>
        </h3>
        <div className="w-full sm:max-w-[95%]">
          <Swiper
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 30,
              },
              540: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              880: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1100: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
            }}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Pagination]}
            className="h-[288px]"
          >
            {servicesData.map((service, i) => (
              <SwiperSlide key={i}>
                <div className=" px-8 py-12 bg-white/20 rounded-lg h-max flex flex-col gap-4 relative hover:bg-secondary w-[70%] sm:w-full mx-auto group">
                  <div className="place-self-end text-secondary text-5xl group-hover:text-white">
                    {service.icon}
                  </div>
                  <div className="text-start bold-14 uppercase max-w-[2rem]">
                    {service.title}
                  </div>
                  <Link
                    href={"/"}
                    className="font-extrabold text-tertiary bg-white/20 border-secondary border-[3px] h-10 w-10 flexCenter rounded-full absolute left-1/2 -bottom-6 opacity-0 group-hover:opacity-100 group-hover:tarnslate-x-10 transition-all duration-500 -rotate-45"
                  >
                    <FaArrowRight />
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </motion.div>

      {/* </div> */}
    </section>
  );
};

export default Services;
