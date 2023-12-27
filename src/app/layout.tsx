"use client";
import { Inter } from "next/font/google";
import "./globals.css";

import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";

const inter = Inter({ subsets: ["latin"] });

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/images/fullSymbol.png"
          sizes="any"
          type="image/x-icon"
        />
        <title>Valencius Apriady Primayudha</title>
      </head>
      <body className={inter.className}>
        <motion.div
          variants={variants}
          initial="hidden"
          animate="enter"
          transition={{ type: "linear", duration: 2 }}
        >
          <AnimatePresence mode="wait">{children}</AnimatePresence>
        </motion.div>
      </body>
    </html>
  );
}
