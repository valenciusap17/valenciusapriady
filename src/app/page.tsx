"use client";
import Image from "next/image";
import { Roboto, Lora } from "next/font/google";
import { FaCopyright, FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import Link from "next/link";
import Footer from "./components/Footer";
import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
};

const roboto = Roboto({
  weight: ["400"],
  subsets: ["latin"],
});

const lora = Lora({
  weight: ["700"],
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <motion.div
        variants={variants}
        initial="hidden"
        animate="enter"
        transition={{ type: "linear", duration: 2 }}
      >
        <div className="w-full h-screen flex flex-col justify-between items-center">
          <div className="w-full h-20 flex justify-center items-center">
            <Image
              src="/images/symbol-grayscale.png"
              width={70}
              height={70}
              alt="logo"
            />
          </div>
          <div className="w-6/12 h-fit flex items-center justify-center">
            <div className="w-full flex items-center justify-center gap-5">
              <Image
                src="/images/valen2-grayscale.jpg"
                width={350}
                height={350}
                alt="Picture of Author"
                className="rounded-full"
              />
              <div className="flex flex-col">
                <div className={lora.className} style={{ fontSize: "80px" }}>
                  Hello
                </div>
                <div className="w-5/6 flex pl-2">
                  <div className={lora.className} style={{ fontSize: "20px" }}>
                    A Bit About Me:
                    <div
                      className={roboto.className}
                      style={{ fontSize: "12px", fontWeight: "400px" }}
                    >
                      My name is Valencius Apriady Primayudha and I am an
                      undergraduate at the University of Indonesia, specializing
                      in front-end and full-stack development
                    </div>
                  </div>
                </div>
                <div className="pt-4 flex gap-3">
                  <motion.main
                    variants={variants}
                    initial="hidden"
                    animate="enter"
                    transition={{ type: "linear", duration: 2 }}
                  >
                    <Link href="https://drive.google.com/file/d/1k3pISh3EIzfckNETyr0XQff5kk2cgNX9/view?usp=sharing">
                      <div
                        className={`w-28 h-28 bg-yellow-600 rounded-full flex justify-center items-center cursor-pointer hover:scale-110 hover:bg-white shadow-xl ${lora.className}`}
                      >
                        Resume
                      </div>
                    </Link>
                  </motion.main>

                  <motion.main
                    variants={variants}
                    initial="hidden"
                    animate="enter"
                    transition={{ type: "linear", duration: 2 }}
                  >
                    <Link href="/projects">
                      <div
                        className={`w-28 h-28 bg-red-600 rounded-full flex justify-center items-center cursor-pointer hover:scale-110 hover:bg-white shadow-xl ${lora.className}`}
                      >
                        Projects
                      </div>
                    </Link>
                  </motion.main>

                  <motion.main
                    variants={variants}
                    initial="hidden"
                    animate="enter"
                    transition={{ type: "linear", duration: 2 }}
                  >
                    <Link href="/others">
                      <div
                        className={`w-28 h-28 bg-cyan-600 rounded-full flex justify-center items-center cursor-pointer hover:scale-110 hover:bg-white shadow-xl ${lora.className}`}
                      >
                        Others
                      </div>
                    </Link>
                  </motion.main>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </motion.div>
    </>
  );
}
