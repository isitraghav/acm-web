"use client";

import { motion } from "framer-motion";

export default function ComplexSVGAnimation({
  time = 2,
  height = 50,
  color = "rgb(124, 102, 185)",
}) {
  const totalDuration = time;
  const pathCount = 10;
  const pathDuration = totalDuration / pathCount;
  const reveal = {
    hidden: {
      pathLength: 0,
      fillOpacity: 0, // Ensures fill is hidden at start
      strokeWidth: 0,
    },

    visible: (i) => ({
      pathLength: 1,
      fillOpacity: 1, // Fill gradually becomes visible
      strokeWidth: 2,
      transition: {
        pathLength: {
          delay: i * pathDuration,
          duration: pathDuration * 1.8,
          ease: [0.65, 0, 0.35, 1], // Smooth cubic bezier for natural drawing
        },
        strokeWidth: {
          delay: i * pathDuration,
          duration: pathDuration * 1.2,
          ease: "easeOut",
        },
        fillOpacity: {
          delay: i * pathDuration + pathDuration * 0.8, // Slight delay after stroke starts
          duration: pathDuration * 1.5,
          ease: "easeInOut",
        },
      },
    }),
  };
  return (
    <motion.svg
      width={height}
      height={height}
      viewBox="0 0 481 481"
      xmlns="http://www.w3.org/2000/svg"
      initial="hidden"
      animate="visible"
    >
      <g filter="url(#filter0_d_1_47)">
        {[
          "M278 35.5C278 55.1061 261.882 71 242 71C222.118 71 206 55.1061 206 35.5C206 15.8939 222.118 0 242 0C261.882 0 278 15.8939 278 35.5Z",
          "M279 436.5C279 456.658 262.435 473 242 473C221.565 473 205 456.658 205 436.5C205 416.342 221.565 400 242 400C262.435 400 279 416.342 279 436.5Z",
          "M77 230C77 249.882 60.6584 266 40.5 266C20.3416 266 4 249.882 4 230C4 210.118 20.3416 194 40.5 194C60.6584 194 77 210.118 77 230Z",
          "M477 235C477 254.882 460.658 271 440.5 271C420.342 271 404 254.882 404 235C404 215.118 420.342 199 440.5 199C460.658 199 477 215.118 477 235Z",
          "M228 432L228 39H253L253 432H228Z",
          "M205 248H25V223H205V248Z",
          "M457 248H277V223H457V248Z",
          "M434.641 238.027L234.822 40.3208L251.856 22.0212L451.674 219.727L434.641 238.027Z",
          "M30.1314 226.076L228.342 29.96L244.632 48.9245L46.4209 245.04L30.1314 226.076Z",
          "M224.44 443.46L35.3944 256.413L51.677 237.443L240.723 424.49L224.44 443.46Z",
        ].map((d, i) => (
          <motion.path
            key={i}
            d={d}
            variants={reveal}
            custom={i}
            stroke={color}
            fill={color}
            fillOpacity={0} // Ensures smooth reveal
            strokeLinecap="round"
          />
        ))}
      </g>
    </motion.svg>
  );
}
