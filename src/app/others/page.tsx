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

export default function Others() {
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
            <Link href="/../projects">
              <div
                className={` ${roboto.className} hover:underline cursor-pointer w-auto p-1 rounded-md hover:scale-110 hover:p-2 hover:duration-200`}
              >
                Next to Projects
              </div>
            </Link>
          </div>
          <div
            className={`${lora.className} items-center flex flex-col md:text-6xl  text-4xl`}
          >
            Competitions
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
              <SwiperSlide>
                <Link href="https://drive.google.com/file/d/1IOTRKgincBqhfvMLGbPOrVZ6LCbdpcZx/view?usp=sharing">
                  <div className="w-[350px] h-52 md:w-[400px] md:h-60 bg-white flex flex-col rounded-xl overflow-hidden relative group cursor-pointer">
                    <Image
                      src="/images/LogikaUi.jpg"
                      width={400}
                      height={400}
                      alt="perak"
                      className="object-cover"
                    />
                    <div className="absolute bottom-0 left-0 w-full py-2 bg-gray-900 bg-opacity-75">
                      <p className="text-white text-lg text-center">
                        LOGIKA UI Statistic Competition 2024
                      </p>
                    </div>

                    <div className=" absolute inset-0 bg-black bg-opacity-80 opacity-0 group-hover:opacity-100 flex flex-col  justify-end p-4 transition-opacity duration-300 px-2">
                      <div>
                        <div
                          className={`${lora.className} text-white `}
                          style={{ fontSize: "12px" }}
                        >
                          Competition Attende
                        </div>

                        <div
                          className={`${lora.className} text-white underline`}
                          style={{ fontSize: "20px" }}
                        >
                          LOGIKA UI 2024
                        </div>
                        <div className={`text-white ${roboto.className} mx-2`}>
                          Writing and analysis document about the machine learning model I developed
                        </div>
                      </div>
                    </div>
                    <div className="absolute inset-0 group-hover:bg-black group-hover:bg-opacity-25 transition-opacity duration-300"></div>
                  </div>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link href="https://drive.google.com/file/d/1aLGo-r5-vDSvnd4qNQD2Tegb333c6-_V/view?usp=sharing">
                  <div className="w-[350px] h-52 md:w-[400px] md:h-60 bg-white flex flex-col rounded-xl overflow-hidden relative group cursor-pointer">
                    <Image
                      src="/images/dataslayer.png"
                      width={400}
                      height={400}
                      alt="perak"
                      className="object-cover"
                    />
                    <div className="absolute bottom-0 left-0 w-full py-2 bg-gray-900 bg-opacity-75">
                      <p className="text-white text-lg text-center">
                        Data Slayer 2023
                      </p>
                    </div>

                    <div className=" absolute inset-0 bg-black bg-opacity-80 opacity-0 group-hover:opacity-100 flex flex-col  justify-end p-4 transition-opacity duration-300 px-2">
                      <div>
                        <div
                          className={`${lora.className} text-white `}
                          style={{ fontSize: "12px" }}
                        >
                          Competition Attende
                        </div>

                        <div
                          className={`${lora.className} text-white underline`}
                          style={{ fontSize: "20px" }}
                        >
                          Data Slayer 2023
                        </div>
                        <div className={`text-white ${roboto.className} mx-2`}>
                          Power Point of my data science competition as a
                          finalist
                        </div>
                      </div>
                    </div>
                    <div className="absolute inset-0 group-hover:bg-black group-hover:bg-opacity-25 transition-opacity duration-300"></div>
                  </div>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link href="https://drive.google.com/file/d/1tgsN-lr3H7HapgxOVbYcz18_QMguLZcv/view">
                  <div className="w-[350px] h-52 md:w-[400px] md:h-60 bg-white flex flex-col rounded-xl overflow-hidden relative group cursor-pointer">
                    <Image
                      src="/images/cainiao.png"
                      width={400}
                      height={400}
                      alt="perak"
                      className="object-cover"
                    />
                    <div className="absolute bottom-0 left-0 w-full py-2 bg-gray-900 bg-opacity-75">
                      <p className="text-white text-lg text-center">
                        Share Minicase Competition 2023
                      </p>
                    </div>

                    <div className="absolute inset-0 bg-black bg-opacity-80 opacity-0 group-hover:opacity-100 flex flex-col  justify-end p-4 transition-opacity duration-300 px-2">
                      <div>
                        <div
                          className={`${lora.className} text-white `}
                          style={{ fontSize: "12px" }}
                        >
                          Competition Attende
                        </div>

                        <div
                          className={`${lora.className} text-white underline`}
                          style={{ fontSize: "20px" }}
                        >
                          Share Minicase Competition 2022
                        </div>
                        <div className={`text-white ${roboto.className} mx-2`}>
                          Power point of my business competition. Did not win
                          but still proud of it
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
