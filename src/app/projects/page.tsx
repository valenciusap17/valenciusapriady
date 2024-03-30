"use client";
import Footer from "../components/Footer";
import Image from "next/image";
import { Roboto, Lora } from "next/font/google";
import Link from "next/link";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { motion } from "framer-motion";

const lora = Lora({
  weight: ["700"],
  subsets: ["latin"],
});

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
};

const roboto = Roboto({
  weight: ["400"],
  subsets: ["latin"],
});

export default function Projects() {
  return (
    <>
      <motion.div
        variants={variants}
        initial="hidden"
        animate="enter"
        transition={{ type: "linear", duration: 2 }}
      >
        <div className="w-full h-screen  flex flex-col  items-center gap-5">
          <div className="w-full h-20 flex justify-between items-center px-10">
            <Link href="/..">
              <div
                className={` ${roboto.className} hover:underline cursor-pointer w-auto p-1 rounded-md hover:scale-110 hover:p-2 hover:duration-200`}
              >
                Back to Home
              </div>
            </Link>
            <Image
              src="/images/symbol-grayscale.png"
              width={70}
              height={70}
              alt="logo"
            />
            <Link href="/../others">
              <div
                className={` ${roboto.className} hover:underline cursor-pointer w-auto p-1 rounded-md hover:scale-110 hover:p-2 hover:duration-200`}
              >
                Next to Others
              </div>
            </Link>
          </div>
          <div
            className={`${lora.className} items-center flex flex-col md:text-6xl  text-4xl`}
          >
            Projects
          </div>

          <div className={`flex md:h-full h-[350px] w-full p-2 pt-5 `}>
            <Swiper
              navigation={{
                nextEl: ".image-swiper-button-next",
                prevEl: ".image-swiper-button-prev",
              }}
              // loop={true}
              pagination={{ type: "fraction" }}
              modules={[Navigation, Pagination]}
              slidesPerView={1}
              spaceBetween={30}
              breakpoints={{
                1536: { slidesPerView: 3 },
                1280: { slidesPerView: 2 },
                500: { slidesPerView: 1 },
              }}
              className="w-80vw h-80vh "
            >
              <SwiperSlide className="">
                <Link href="https://rpl-frontend-freej1ng.vercel.app/">
                  <div className="w-[350px] h-52 md:w-[400px] md:h-60  bg-white flex flex-col rounded-xl overflow-hidden relative group cursor-pointer ">
                    <Image
                      src="/images/jawabanku.png"
                      width={400}
                      height={400}
                      alt="perak"
                      className="object-cover"
                    />
                    <div className="absolute bottom-0 left-0 w-full py-2 bg-gray-900 bg-opacity-75">
                      <p className="text-white text-lg text-center">
                        Jawabanku
                      </p>
                    </div>

                    <div className=" absolute inset-0 bg-black bg-opacity-80 opacity-0 group-hover:opacity-100 flex flex-col  justify-end p-4 transition-opacity duration-300 px-2">
                      <div>
                        <div
                          className={`${lora.className} text-white `}
                          style={{ fontSize: "12px" }}
                        >
                          Full-Stack Developer
                        </div>

                        <div
                          className={`${lora.className} text-white underline`}
                          style={{ fontSize: "20px" }}
                        >
                          Jawabanku
                        </div>
                        <div className={`text-white ${roboto.className} mx-2`}>
                          Website to store lecture materials from seniors. Built
                          for one of final course assignment
                        </div>
                      </div>
                    </div>
                    <div className="absolute inset-0 group-hover:bg-black group-hover:bg-opacity-25 transition-opacity duration-300"></div>
                  </div>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link href="https://github.com/valenciusap17/gardenofterra">
                  <div className="w-[350px] h-52 md:w-[400px] md:h-60 bg-white flex flex-col rounded-xl overflow-hidden relative group cursor-pointer">
                    <Image
                      src="/images/garden-of-terra.png"
                      width={400}
                      height={400}
                      alt="perak"
                      className="object-cover"
                    />
                    <div className="absolute bottom-0 left-0 w-full py-2 bg-gray-900 bg-opacity-75">
                      <p className="text-white text-lg text-center">
                        Garden of Terra
                      </p>
                    </div>

                    <div className="absolute inset-0 bg-black bg-opacity-80 opacity-0 group-hover:opacity-100 flex flex-col  justify-end p-4 transition-opacity duration-300 px-2">
                      <div>
                        <div
                          className={`${lora.className} text-white `}
                          style={{ fontSize: "12px" }}
                        >
                          Front-End Developer
                        </div>

                        <div
                          className={`${lora.className} text-white underline`}
                          style={{ fontSize: "20px" }}
                        >
                          Garden of Terra
                        </div>
                        <div className={`text-white ${roboto.className} mx-2`}>
                          Ornamental plants shop website built for my own plants
                          shop in the future
                        </div>
                      </div>
                    </div>
                    <div className="absolute inset-0 group-hover:bg-black group-hover:bg-opacity-25 transition-opacity duration-300"></div>
                  </div>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link href="https://perak.cs.ui.ac.id/">
                  <div className="w-[350px] h-52 md:w-[400px] md:h-60 bg-white flex flex-col rounded-xl overflow-hidden relative group cursor-pointer">
                    <Image
                      src="/images/perak.png"
                      width={400}
                      height={400}
                      alt="perak"
                      className="object-cover"
                    />
                    <div className="absolute bottom-0 left-0 w-full py-2 bg-gray-900 bg-opacity-75">
                      <p className="text-white text-lg text-center">
                        Pesta Rakyat Komputer (Perak)
                      </p>
                    </div>

                    <div className=" absolute inset-0 bg-black bg-opacity-80 opacity-0 group-hover:opacity-100 flex flex-col  justify-end p-4 transition-opacity duration-300 px-2">
                      <div>
                        <div
                          className={`${lora.className} text-white `}
                          style={{ fontSize: "12px" }}
                        >
                          Front-End Developer
                        </div>

                        <div
                          className={`${lora.className} text-white underline`}
                          style={{ fontSize: "20px" }}
                        >
                          Pesta Rakyat Komputer
                        </div>
                        <div className={`text-white ${roboto.className}`}>
                          Official website for Pesta Rakyat Komputer activities
                          held by Fasilkom UI
                        </div>
                      </div>
                    </div>
                    <div className="absolute inset-0 group-hover:bg-black group-hover:bg-opacity-25 transition-opacity duration-300"></div>
                  </div>
                </Link>
              </SwiperSlide>
              <SwiperSlide className="">
                <Link href="https://rpl-frontend-freej1ng.vercel.app/">
                  <div className="w-[350px] h-52 md:w-[400px] md:h-60  bg-white flex flex-col rounded-xl overflow-hidden relative group cursor-pointer ">
                    <Image
                      src="/images/dotnet.png"
                      width={400}
                      height={400}
                      alt="dotnet"
                      className="object-cover"
                    />
                    <div className="absolute bottom-0 left-0 w-full py-2 bg-gray-900 bg-opacity-75">
                      <p className="text-white text-lg text-center">
                        Learning Center Application
                      </p>
                    </div>

                    <div className=" absolute inset-0 bg-black bg-opacity-80 opacity-0 group-hover:opacity-100 flex flex-col  justify-end p-4 transition-opacity duration-300 px-2">
                      <div>
                        <div
                          className={`${lora.className} text-white `}
                          style={{ fontSize: "12px" }}
                        >
                          Full-Stack Developer
                        </div>

                        <div
                          className={`${lora.className} text-white underline`}
                          style={{ fontSize: "20px" }}
                        >
                          Jawabanku
                        </div>
                        <div className={`text-white ${roboto.className} mx-2`}>
                          Fully operated application imitating learning center application built with .NET Core 8 framework and MVC architecture
                        </div>
                      </div>
                    </div>
                    <div className="absolute inset-0 group-hover:bg-black group-hover:bg-opacity-25 transition-opacity duration-300"></div>
                  </div>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link href="https://github.com/valenciusap17/NotateFE">
                  <div className="w-[350px] h-52 md:w-[400px] md:h-60 bg-white flex flex-col rounded-xl overflow-hidden relative group cursor-pointer">
                    <Image
                      src="/images/notate.png"
                      width={400}
                      height={400}
                      alt="perak"
                      className="object-cover"
                    />
                    <div className="absolute bottom-0 left-0 w-full py-2 bg-gray-900 bg-opacity-75">
                      <p className="text-white text-lg text-center">Notate</p>
                    </div>

                    <div className="absolute inset-0 bg-black bg-opacity-80 opacity-0 group-hover:opacity-100 flex flex-col  justify-end p-4 transition-opacity duration-300 px-2">
                      <div>
                        <div
                          className={`${lora.className} text-white `}
                          style={{ fontSize: "12px" }}
                        >
                          Full-Stack Developer
                        </div>

                        <div
                          className={`${lora.className} text-white underline`}
                          style={{ fontSize: "20px" }}
                        >
                          Notate
                        </div>
                        <div className={`text-white ${roboto.className} mx-2`}>
                          To do list application built for BEM Fasilkom UI
                          webdev division (Bismit) open recruitment task{" "}
                        </div>
                      </div>
                    </div>
                    <div className="absolute inset-0 group-hover:bg-black group-hover:bg-opacity-25 transition-opacity duration-300"></div>
                  </div>
                </Link>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="flex">
            <div className="swiper-button image-swiper-button-prev">
              <IoIosArrowBack />
            </div>
            <div className="swiper-button image-swiper-button-next">
              <IoIosArrowForward />
            </div>
          </div>
          <Footer />
        </div>
      </motion.div>
    </>
  );
}
