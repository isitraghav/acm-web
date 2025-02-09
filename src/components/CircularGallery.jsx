"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React, {
  useState,
  useEffect,
  useRef,
  useMemo,
  useCallback,
} from "react";

/**
 * Custom hook to track the window size.
 */
function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
  });

  useEffect(() => {
    const handleResize = () =>
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}

/**
 * Helper function to extract the horizontal pointer position from an event.
 */
const getClientX = (e) => {
  if (e.touches && e.touches.length > 0) return e.touches[0].clientX;
  if ("clientX" in e) return e.clientX;
  return 0;
};

/**
 * GalleryItem renders a single image in the infinite curved gallery.
 *
 * It uses the passed normalized scroll value to compute the X position,
 * calculates an arc-based offset (both translation and rotation) based on
 * the given bend factor, and only renders if near the viewport.
 */
const GalleryItem = React.memo(
  ({
    image,
    text,
    virtualIndex,
    width,
    bend,
    textColor,
    font,
    borderRadius,
    scroll, // normalized scroll value (always in [0, totalWidth))
    totalWidth, // one full cycle width (itemWidth * items.length)
  }) => {
    // Always use the window size hook to make it responsive.
    const { width: windowWidth } = useWindowSize();

    const transform = useMemo(() => {
      // Compute the raw X position based on the virtual index and scroll offset.
      const rawX = width * virtualIndex - scroll;
      let x;
      if (rawX > totalWidth / 2) {
        x = rawX - totalWidth;
      } else if (rawX < -totalWidth / 2) {
        x = rawX + totalWidth;
      } else {
        x = rawX;
      }

      // Use half the viewport width to compute the arc.
      const H = windowWidth / 2;
      const B_abs = Math.abs(bend);
      if (B_abs === 0) return { x, y: 0, rotation: 0 };

      // Calculate the radius R for the arc given the bend factor.
      const R = (H * H + B_abs * B_abs) / (2 * B_abs);
      const effectiveX = Math.min(Math.abs(x), H);
      const arc = R - Math.sqrt(R * R - effectiveX * effectiveX);

      return {
        x,
        y: bend > 0 ? -arc : arc,
        rotation:
          bend > 0
            ? -Math.sign(x) * ((Math.asin(effectiveX / R) * 180) / Math.PI)
            : Math.sign(x) * ((Math.asin(effectiveX / R) * 180) / Math.PI),
      };
    }, [virtualIndex, scroll, width, bend, totalWidth, windowWidth]);

    // **Call useRouter unconditionally.**
    const router = useRouter();

    // Determine visibility.
    const isVisible = Math.abs(transform.x) < windowWidth * 1.5;
    if (!isVisible) return null;

    return (
      <div
        className="absolute top-1/2 left-1/2 will-change-transform"
        style={{
          transform: `translate(${transform.x}px, calc(-50% + ${transform.y}px)) rotate(${transform.rotation}deg)`,
        }}
      >
        <div
          className="relative"
          style={{
            width: `${width}px`,
            padding: "0 16px",
          }}
        >
          <img
            src={image}
            draggable={false}
            alt={text}
            className="w-full h-auto aspect-square object-cover"
            style={{
              borderRadius: `${borderRadius * 100}%`,
            }}
          />
          <Link
            href={`/gallery/${text.toLowerCase().replace(/\s+/g, "")}`}
            className="absolute bg-black/90 bottom-0 left-1/2 -translate-x-1/2 text-center p-4 w-full"
            style={{
              color: textColor,
              fontFamily: font,
            }}
          >
            {text}
          </Link>
        </div>
      </div>
    );
  },
);

/**
 * InfiniteCurvedGallery implements an infinite scroll gallery where images
 * follow a curved (arc) layout. It supports dragging (mouse/touch) and inertial
 * scrolling.
 */
const InfiniteCurvedGallery = ({
  items,
  bend = 3,
  textColor = "#ffffff",
  borderRadius = 0.05,
  font = "inherit",
}) => {
  // The accumulated scroll value (which may become arbitrarily large).
  const [scroll, setScroll] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);
  const animationRef = useRef(null);

  // dragInfo holds transient drag state (start, last, velocity, etc.).
  const dragInfo = useRef({
    startX: 0,
    scrollStart: 0,
    lastScroll: 0,
    lastTime: Date.now(),
    velocity: 0,
  });
  // latestScroll holds the most recent scroll value to avoid excessive state updates.
  const latestScroll = useRef(scroll);
  // A flag to ensure we update state only once per animation frame.
  const rafScheduled = useRef(false);

  const itemWidth = 300;
  const totalCycle = itemWidth * items.length; // one full set

  // Create a virtualized array of items (repeat a few times to simulate infinite scrolling).
  const virtualItems = useMemo(() => {
    const repeats = 3; // number of repeats on each side
    const itemsArray = [];
    for (let i = -repeats; i <= repeats; i++) {
      items.forEach((item, index) => {
        itemsArray.push({
          ...item,
          virtualIndex: i * items.length + index,
        });
      });
    }
    return itemsArray;
  }, [items]);

  // For rendering, we normalize the scroll into the [0, totalCycle) range.
  const normalizedScroll = useMemo(() => {
    return ((scroll % totalCycle) + totalCycle) % totalCycle;
  }, [scroll, totalCycle]);

  /**
   * Updates the scroll value while limiting updates to once per frame.
   */
  const updateScroll = useCallback((newScroll, velocity = 0) => {
    dragInfo.current.velocity = velocity;
    dragInfo.current.lastScroll = newScroll;
    dragInfo.current.lastTime = Date.now();
    latestScroll.current = newScroll;

    if (!rafScheduled.current) {
      rafScheduled.current = true;
      requestAnimationFrame(() => {
        setScroll(latestScroll.current);
        rafScheduled.current = false;
      });
    }
  }, []);

  const handleDragStart = useCallback(
    (e) => {
      const clientX = getClientX(e);
      setIsDragging(true);
      dragInfo.current.startX = clientX;
      dragInfo.current.scrollStart = scroll;
      dragInfo.current.velocity = 0;
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    },
    [scroll],
  );

  const handleDragMove = useCallback(
    (e) => {
      if (!isDragging) return;
      const clientX = getClientX(e);
      const diff = dragInfo.current.startX - clientX;
      const newScroll = dragInfo.current.scrollStart + diff;

      const now = Date.now();
      const deltaTime = now - dragInfo.current.lastTime;
      const deltaScroll = newScroll - dragInfo.current.lastScroll;
      const velocity = deltaTime > 0 ? deltaScroll / deltaTime : 0;

      updateScroll(newScroll, velocity);
    },
    [isDragging, updateScroll],
  );

  /**
   * Continues the scroll animation after drag end to mimic inertia.
   */
  const animateInertia = useCallback(() => {
    if (Math.abs(dragInfo.current.velocity) < 0.01) {
      dragInfo.current.velocity = 0;
      return;
    }
    dragInfo.current.velocity *= 0.95; // decay factor
    const newScroll = latestScroll.current + dragInfo.current.velocity * 16;
    updateScroll(newScroll, dragInfo.current.velocity);
    animationRef.current = requestAnimationFrame(animateInertia);
  }, [updateScroll]);

  const handleDragEnd = useCallback(() => {
    setIsDragging(false);
    if (Math.abs(dragInfo.current.velocity) > 0.1) {
      animateInertia();
    }
  }, [animateInertia]);

  const handleWheel = useCallback(
    (e) => {
      e.preventDefault();
      const delta = e.deltaY * 0.5;
      updateScroll(latestScroll.current + delta);
    },
    [updateScroll],
  );

  // Attach touch and wheel event listeners.
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const options = { passive: false };
    container.addEventListener("touchstart", handleDragStart, options);
    container.addEventListener("touchmove", handleDragMove, options);
    container.addEventListener("touchend", handleDragEnd);
    container.addEventListener("wheel", handleWheel, options);

    return () => {
      container.removeEventListener("touchstart", handleDragStart);
      container.removeEventListener("touchmove", handleDragMove);
      container.removeEventListener("touchend", handleDragEnd);
      container.removeEventListener("wheel", handleWheel);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [handleDragStart, handleDragMove, handleDragEnd, handleWheel]);

  return (
    <div
      ref={containerRef}
      className="w-full h-full relative overflow-hidden cursor-grab active:cursor-grabbing"
      onMouseDown={handleDragStart}
      onMouseMove={handleDragMove}
      onMouseUp={handleDragEnd}
      onMouseLeave={handleDragEnd}
    >
      {virtualItems.map((item, index) => (
        <GalleryItem
          key={`${item.virtualIndex}-${index}`}
          {...item}
          width={itemWidth}
          bend={bend}
          textColor={textColor}
          font={font}
          borderRadius={borderRadius}
          scroll={normalizedScroll}
          totalWidth={totalCycle}
        />
      ))}
    </div>
  );
};

export default InfiniteCurvedGallery;
