import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, HashNavigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { workData } from '@/app/constants/personalData';
import Image from 'next/image';
import { useMetadata } from '@/app/metaData';
import Head from 'next/head';
import { FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';
// import './styles.css';

const Work = () => {
  const metadata = useMetadata();

  return (
    <section className="max-container padding-container mb-12 flex flex-col flexCenter md:flex-row md:gap-8 lg:gap-20 xl:gap-28 xl:py-31">
      <Head>
        <title>{metadata.title}</title>
        {metadata.icon && <link rel="icon" href={metadata.icon.src} />}
      </Head>
      <div className="md:max-w[40%] text-center mb-5">
        <h3 className="bold-20 font-extrabold relative leading-normal uppercase">
          My Work<span className="text-secondary">s</span>
          <span className="text-[-35px] lg:tex-[44px] font-extrabold text-white/10 absolute top-[50%] left-1/2 -translate-y-1/2 -translate-x-1/2 uppercase">
            My Works
          </span>
        </h3>
        <p className="text-start max-w-md mx-auto text-gray-20 sm:text-start">
          Each project reflects my dedication to crafting seamless digital solutions that captivate and engage users. Discover the art of innovation through concise, impactful design and robust functionality.
        </p>
      </div>
      <div className="w-full sm:max-w-[50%] h-full" >
        <Swiper
          // spaceBetween={30}
          hashNavigation={{
            watchState: true,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation, HashNavigation]}
          // className="mySwiper"
        >
          {workData.map((slide, i) => (
            <SwiperSlide key={i} data-hash={`slide${i + 1}`}>
              <div className="flex flex-col items-center gap-y-8 mb-14 ">
                <div className="relative overflow-hidden group rounded-lg cursor-pointer bg-white/10 p-3">
                  <h4 className="mb-2">{slide.title}</h4>
                  {slide.images.map((image, index) => (
                    <div key={index} className="flexCenter mb-4">
                      <div className="relative overflow-hidden group rounded-lg cursor-pointer bg-white/10 p-3">
                        <Image
                          src={image.url}
                          alt="work_image"
                          height={250}
                          width={340}
                          fetchPriority="eager"
                        />
                        <Link
                          href={`/work/${slide.id}`}
                          className="font-extrabold text-tertiary bg-white/20 border-secondary border-[3px] h-10 w-10 flexCenter rounded-full absolute left-1/2 -bottom-6 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 -rotate-45"
                        >
                          <FaArrowRight />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Work;
