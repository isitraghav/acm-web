"use client";

import { useRef, useEffect, useState, memo, useMemo } from "react";
import { useSprings, animated } from "@react-spring/web";

const BlurText = memo(
  ({
    text = "",
    delay = 200,
    totalAnimationDelay = 0,
    className = "",
    animateBy = "words",
    direction = "top",
    threshold = 0.1,
    rootMargin = "0px",
    animationFrom,
    animationTo,
    easing = "easeOutCubic",
    onAnimationComplete,
  }) => {
    const elements = useMemo(
      () => (animateBy === "words" ? text.split(" ") : text.split("")),
      [text, animateBy],
    );

    const [inView, setInView] = useState(false);
    const ref = useRef();
    const animatedCount = useRef(0);

    // Default animations based on direction
    const defaultFrom = useMemo(
      () =>
        direction === "top"
          ? {
              filter: "blur(10px)",
              opacity: 0,
              transform: "translate3d(0,-50px,0)",
            }
          : {
              filter: "blur(10px)",
              opacity: 0,
              transform: "translate3d(0,50px,0)",
            },
      [direction],
    );

    const defaultTo = useMemo(
      () => [
        {
          filter: "blur(5px)",
          opacity: 0.5,
          transform:
            direction === "top"
              ? "translate3d(0,5px,0)"
              : "translate3d(0,-5px,0)",
        },
        { filter: "blur(0px)", opacity: 1, transform: "translate3d(0,0,0)" },
      ],
      [direction],
    );

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setInView(true);
            observer.unobserve(ref.current);
          }
        },
        { threshold, rootMargin },
      );

      observer.observe(ref.current);

      return () => observer.disconnect();
    }, [threshold, rootMargin]);

    const springs = useSprings(
      elements.length,
      elements.map((_, i) => ({
        from: animationFrom || defaultFrom,
        to: async (next) => {
          for (const step of animationTo || defaultTo) {
            await next(step);
          }
          animatedCount.current += 1;
          if (
            animatedCount.current === elements.length &&
            onAnimationComplete
          ) {
            onAnimationComplete();
          }
        },
        delay: totalAnimationDelay + i * delay,
        config: { easing },
      })),
    );

    return (
      <p ref={ref} className={`blur-text ${className}`}>
        {springs.map((props, index) => (
          <animated.span
            key={index}
            style={props}
            className="inline-block transition-transform will-change-[transform,filter,opacity]"
          >
            {elements[index] === " " ? " " : elements[index]}
            {animateBy === "words" && index < elements.length - 1 && " "}
          </animated.span>
        ))}
      </p>
    );
  },
);

export default BlurText;
