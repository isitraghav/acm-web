"use client";

import { useSpring, animated } from "@react-spring/web";
import Image from "next/image";
import { useEffect } from "react";

export default function TeamCard({ item }) {
  const [animations, api] = useSpring(() => ({
    opacity: 0,
    transform: "translateY(50px) scale(0.9)",
    filter: "blur(10px)",
    config: { mass: 1, tension: 250, friction: 25 },
  }));

  useEffect(() => {
    api.start({
      opacity: 1,
      filter: "blur(0px)",
      transform: "translateY(0px) scale(1)",
    });
  }, []);

  return (
    <animated.div style={animations} className="w-full">
      <div className="glass w-full h-min rounded-[20px] overflow-hidden transition-transform duration-300">
        <div className="relative flex flex-col md:flex-row w-full h-full justify-center items-center">
          <Image
            className="md:rounded-[20px] transition-opacity duration-500"
            src={item.image}
            alt={item.name}
            width={500}
            height={500}
          />
          <p className="text-center w-full text-xs md:text-md px-2 py-1.5 glass rounded-t-none rounded-[20px] md:rounded-[30px] md:absolute bottom-0">
            {item.name}
          </p>
        </div>
      </div>
    </animated.div>
  );
}
