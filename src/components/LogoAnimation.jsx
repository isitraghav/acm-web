"use client";

import { motion } from "framer-motion";

const totalDuration = 1.6;
const pathCount = 10;
const pathDuration = totalDuration / pathCount;

const reveal = {
  hidden: {
    pathLength: 0,
    opacity: 0,
    fill: "rgb(124, 102, 185)",
    strokeWidth: 0,
  },
  visible: (i) => ({
    pathLength: 1,
    opacity: 1,
    fill: "rgb(124, 102, 185)",
    strokeWidth: 2,
    transition: {
      pathLength: {
        delay: i * pathDuration,
        duration: pathDuration * 1.5,
        ease: "easeInOut",
      },
      fill: {
        delay: i * pathDuration + pathDuration,
        duration: pathDuration * 0.5,
        ease: "easeIn",
      },
      opacity: {
        delay: i * pathDuration,
        duration: 0.01,
      },
      strokeWidth: {
        delay: i * pathDuration + pathDuration * 0.5,
        duration: pathDuration * 0.5,
        ease: "easeIn",
      },
    },
  }),
};

export default function ComplexSVGAnimation() {
  return (
    <motion.svg
      width="50"
      height="50"
      viewBox="0 0 481 481"
      xmlns="http://www.w3.org/2000/svg"
      initial="hidden"
      animate="visible"
    >
      <g filter="url(#filter0_d_1_47)">
        <motion.path
          d="M278 35.5C278 55.1061 261.882 71 242 71C222.118 71 206 55.1061 206 35.5C206 15.8939 222.118 0 242 0C261.882 0 278 15.8939 278 35.5Z"
          variants={reveal}
          custom={0}
          stroke="rgb(124, 102, 185)"
        />
        <motion.path
          d="M279 436.5C279 456.658 262.435 473 242 473C221.565 473 205 456.658 205 436.5C205 416.342 221.565 400 242 400C262.435 400 279 416.342 279 436.5Z"
          variants={reveal}
          custom={1}
          stroke="rgb(124, 102, 185)"
        />
        <motion.path
          d="M77 230C77 249.882 60.6584 266 40.5 266C20.3416 266 4 249.882 4 230C4 210.118 20.3416 194 40.5 194C60.6584 194 77 210.118 77 230Z"
          variants={reveal}
          custom={2}
          stroke="rgb(124, 102, 185)"
        />
        <motion.path
          d="M477 235C477 254.882 460.658 271 440.5 271C420.342 271 404 254.882 404 235C404 215.118 420.342 199 440.5 199C460.658 199 477 215.118 477 235Z"
          variants={reveal}
          custom={3}
          stroke="rgb(124, 102, 185)"
        />
        <motion.path
          d="M228 432L228 39H253L253 432H228Z"
          variants={reveal}
          custom={4}
          stroke="rgb(124, 102, 185)"
        />
        <motion.path
          d="M205 248H25V223H205V248Z"
          variants={reveal}
          custom={5}
          stroke="rgb(124, 102, 185)"
        />
        <motion.path
          d="M457 248H277V223H457V248Z"
          variants={reveal}
          custom={6}
          stroke="rgb(124, 102, 185)"
        />
        <motion.path
          d="M434.641 238.027L234.822 40.3208L251.856 22.0212L451.674 219.727L434.641 238.027Z"
          variants={reveal}
          custom={7}
          stroke="rgb(124, 102, 185)"
        />
        <motion.path
          d="M30.1314 226.076L228.342 29.96L244.632 48.9245L46.4209 245.04L30.1314 226.076Z"
          variants={reveal}
          custom={8}
          stroke="rgb(124, 102, 185)"
        />
        <motion.path
          d="M224.44 443.46L35.3944 256.413L51.677 237.443L240.723 424.49L224.44 443.46Z"
          variants={reveal}
          custom={9}
          stroke="rgb(124, 102, 185)"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_1_47"
          x="0"
          y="0"
          width="481"
          height="481"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1_47"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1_47"
            result="shape"
          />
        </filter>
      </defs>
    </motion.svg>
  );
}
