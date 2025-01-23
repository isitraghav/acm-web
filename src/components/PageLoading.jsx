"use client";
import { Italiana, Jersey_10, Montserrat, Outfit } from "next/font/google";
import SplitText from "./SplitText";
import { useEffect, useState } from "react";
import { useSpring, animated } from "@react-spring/web";

const monseratt = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const outfit = Jersey_10({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: "400",
});
export default function PageLoading({ children }) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      api.start({
        to: {
          opacity: 0,
          height: "0vh",
        },
      });
    }, 3700);
    setTimeout(() => {
      setShow(false);
    }, 4700);

    return () => clearTimeout(timer);
  }, []);

  const [spring, api] = useSpring(() => ({
    from: {
      opacity: 1,
      height: "100vh",
    },
    config: {
      duration: 1000,
    },
  }));
  return (
    <>
      {show ? (
        <animated.div
          style={spring}
          className={`fixed h-full inset-0 z-50 transition-all duration-1000 ease-out flex items-center justify-center bg-[#060606]`}
        >
          <div className="text-white">
            <div className="text-5xl md:text-6xl text-center">
              <SplitText
                text="ACM BMU"
                className={`${monseratt.className} text-center tracking-tighter`}
                delay={100}
                animationFrom={{
                  opacity: 0,
                  transform: "translate3d(0,50px,0)",
                }}
                animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
                easing="easeOutCubic"
                threshold={0.2}
                onAnimationComplete={() => setShow(false)}
              />
            </div>
            <div className="text-center text-xl md:text-2xl">
              <SplitText
                startDelay={1300}
                text="student chapter"
                className={`${outfit.className} uppercase w-full text-center tracking-wider`}
                delay={100}
                animationFrom={{
                  opacity: 0,
                  color: "#fff",
                  transform: "translate3d(0,50px,0)",
                }}
                animationTo={{
                  opacity: 1,
                  color: "#7c66b9",
                  transform: "translate3d(0,0,0)",
                }}
                easing="easeOutCubic"
                threshold={0.2}
              />
            </div>
          </div>
        </animated.div>
      ) : (
        children
      )}
    </>
  );
}
