// components/Footer.js
import React from 'react';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer footer-container">         
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} | yarzar.dev. All rights reserved.</p>
      </div>
    </footer>
  );
};
export default Footer

{/* <section className="max-container padding-container flex flex-col flexCenter md:flex-row md:gap-8" style={{ height: "80vh" }}>
      <Head>
        <title>{metadata.title}</title>
        {metadata.icon && <link rel="icon" href={metadata.icon.src} />}
      </Head>
      
      <motion.div initial="hidden" animate="show" exit="hidden" className="md:max-w-[40%] mb-5">
        <h3 className="bold-20 font-extrabold relative leading-normal uppercase text-center">
          My Work<span className="text-secondary">s</span>
          <span className="text-[-35px] lg:text-[44px] font-extrabold text-white/10 absolute top-[50%] left-1/2 -translate-y-1/2 -translate-x-1/2 uppercase">
            My Works
          </span>
        </h3>
        <p className="text-start max-w-md mx-auto text-gray-20 sm:text-start py-10">
          Each project reflects my dedication to crafting seamless digital solutions that captivate and engage users. Discover the art of innovation through concise, impactful design and robust functionality.
        </p>
      </motion.div>

      <motion.div initial="hidden" animate="show" exit="hidden" className="w-full sm:max-w-[50%] mb-5">
        <Swiper
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
          }}
          pagination={{
            clickable: true,
          }}
          navigation
          modules={[Pagination, Navigation]}
        >
          {workData.map((slide, i) => (
            <SwiperSlide key={i}>
              <div className="flex flex-col items-center gap-y-8 card-container mb-16">
                {slide.images.map((image, i) => (
                  <div key={i} className="flexCenter">
                    <div className="relative overflow-hidden group rounded-lg cursor-pointer bg-white/10 p-3" style={{ height: 400 }}>
                      <div className="min-w-full flex flex-row">
                        <div className="p-2" style={{ borderRadius: "10px" }}>
                          <Image
                            src={image.url}
                            alt="work_image"
                            height={280}
                            width={80}
                            fetchPriority="eager"
                          />
                        </div>
                        <h3 className="px-4 my-1">{slide.title}</h3>
                      </div>
                      <div>
                        <p className="text-start text-gray-20">
                          {slide.description}
                        </p>
                        {slide.lang.icon}
                      </div>
                      <Link
                        href={`/work/${slide.id}`}
                        className="font-extrabold text-tertiary bg-white/20 border-secondary border-[3px] h-10 w-10 flexCenter rounded-full absolute left-1/2 -bottom-6 opacity-0 group-hover:opacity-100 group-hover:translate-x-10 transition-all duration-500 -rotate-45"
                      >
                        <FaArrowRight />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </section> */}

