"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "./navbar";
import PageLoading from "@/components/PageLoading";
import LogoAnimation from "../components/LogoAnimation";

const geistSans = Roboto({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export default function RootLayout({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  const pathname = usePathname(); // Detects page changes

  useEffect(() => {
    const handleClick = (event) => {
      const link = event.target.closest("a"); // Get the closest <a> tag
      if (
        link &&
        link.href !== window.location.href &&
        link.href.startsWith(window.location.origin)
      ) {
        setIsLoading(true);
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  useEffect(() => {
    setIsLoading(false);
    // return () => clearTimeout(timeout);
  }, [pathname]); // Runs every time the route changes

  return (
    <html lang="en">
      <head>
        <title>ACM BMU - Student Chapter</title>
        <meta
          name="description"
          content="Official webpage of ACM BMU Student Chapter. A hub for computer science enthusiasts promoting innovation through Hacktoberfest, Game Development, Graphic Designing, Coding challenges, Tech talks, and more."
        />
      </head>
      <body className={`${geistSans.variable} antialiased`}>
        <Navbar />
        <AnimatePresence mode="wait">
          {isLoading && (
            <motion.div
              key="loading-screen"
              initial={{ transform: "translateX(100vw)", opacity: 1 }}
              animate={{ transform: "translateX(0)", opacity: 1 }}
              exit={{ transform: "translateX(-100vw)", opacity: 1 }}
              className="fixed inset-0 flex  bg-[#121212] items-center justify-center z-50"
            >
              <LogoAnimation time={1.2} />
            </motion.div>
          )}
        </AnimatePresence>
        <PageLoading children={children} />
      </body>
    </html>
  );
}
