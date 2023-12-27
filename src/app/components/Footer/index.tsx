import { Roboto, Lora } from "next/font/google";
import { FaCopyright, FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import Link from "next/link";

const roboto = Roboto({
  weight: ["400"],
  subsets: ["latin"],
});

const lora = Lora({
  weight: ["700"],
  subsets: ["latin"],
});
export default function Footer() {
  return (
    <>
      <div className="p-5 px-10 w-full h-28 border-t-2 border-gray-400 border-opacity-15 flex justify-between">
        <div className={`flex flex-col ${lora.className}`}>
          Phone: <div className={roboto.className}>082110925767</div>
        </div>
        <div className={`flex flex-col ${lora.className}`}>
          Email: <div className={roboto.className}>v.apriady@gmail.com</div>
        </div>
        <div className={`flex flex-col ${lora.className}`}>
          Follow Me:
          <div className="flex gap-2">
            <Link
              className="focus:ring hover:scale-110"
              href="https://www.linkedin.com/in/valencius-apriady-546740206/"
            >
              <FaLinkedin size={30} />
            </Link>
            <Link
              className="focus:ring hover:scale-110"
              href="https://www.instagram.com/valenciusap/"
            >
              <FaInstagram size={30} />
            </Link>
            <Link
              href="https://github.com/valenciusap17"
              className="focus:ring hover:scale-110"
            >
              <FaGithub size={30} />
            </Link>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <div
            className={`flex ${roboto.className} items-center gap-1 text-sm`}
          >
            <FaCopyright /> 2023 Valencius Apriady Primayudha. All rights
            reserved.
          </div>
          <div
            className={`flex ${roboto.className} items-center gap-1 text-sm`}
          >
            Created by{" "}
            <div className="font-bold">Valencius Apriady Primayudha</div>
          </div>
        </div>
      </div>
    </>
  );
}
