"use client";
import { Italiana, Montserrat } from "next/font/google";
import SplitText from "./SplitText";
import { useEffect, useState } from "react";

const monseratt = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const italiana = Italiana({
  variable: "--font-italiana",
  subsets: ["latin"],
  weight: "400",
});
export default function PageLoading() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 3700);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed ${
        show ? "h-full" : "h-0"
      } inset-0 z-50 transition-all duration-1000 ease-out flex items-center justify-center bg-[#060606]`}
    >
      <div className={`${show ? "block" : "hidden"} text-white`}>
        <div className="text-5xl md:text-6xl text-center">
          <SplitText
            text="ACM BMU"
            className={`${monseratt.className} text-center tracking-tighter`}
            delay={100}
            animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
            animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
            easing="easeOutCubic"
            threshold={0.2}
          />
        </div>
        <div className="text-center text-xl md:text-2xl">
          <SplitText
            startDelay={1300}
            text="student chapter"
            className={`${italiana.className} uppercase w-full text-center tracking-wider`}
            delay={100}
            animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
            animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
            easing="easeOutCubic"
            threshold={0.2}
          />
        </div>
      </div>
    </div>
  );
}
