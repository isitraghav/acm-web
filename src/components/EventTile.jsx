"use client";
import { useState, useEffect } from "react";
import Countdown from "./Countdown";
import moment from "moment";
import { useSpring, animated, to } from "@react-spring/web";
import { MdArrowOutward } from "react-icons/md";
import Link from "next/link";

function requestAnimationFramePolyfill(callback) {
  return setTimeout(callback, 16);
}

export default function EventTile({ event, index }) {
  const [tileOpened, setTileOpened] = useState(false);
  useEffect(() => {
    if (!moment(new Date(event.dateTime)).isBefore(new Date())) {
      setTileOpened(true);
    }
  }, []);
  const expandStyle = useSpring({
    maxHeight: tileOpened ? 500 : 44,
    config: { tension: 150, friction: 20 },
  });

  const fadeStyle = useSpring({
    opacity: tileOpened ? 1 : 0,
    transform: tileOpened ? "translateY(0px)" : "translateY(-10px)",
    config: { duration: 300 },
  });

  const [rotateStyle, api] = useSpring(() => ({
    from: {
      opacity: 0,
      transform: "translateX(-500px)",
    },
  }));

  useEffect(() => {
    let animationFrameId;
    function animate() {
      api.start({
        to: {
          opacity: 1,
          transform: `translateX(0px)`,
        },
        delay: 500 + index * 300,
      });
      animationFrameId = requestAnimationFramePolyfill(animate);
    }
    animate();
    return () => cancelAnimationFrame(animationFrameId);
  }, [api, index]);

  return (
    <animated.div
      onClick={() => setTileOpened(!tileOpened)}
      style={rotateStyle}
    >
      <animated.div
        style={expandStyle}
        className="glass cursor-pointer overflow-hidden rounded-lg p-2 flex flex-col"
      >
        <div className="flex items-center justify-between">
          <div className="text-lg">{event.name}</div>
          <div className="text-sm">
            {new Date(event.dateTime) > new Date() ? (
              <Countdown dateTime={event.dateTime} />
            ) : (
              moment(event.dateTime).format("DD MMM")
            )}
          </div>
        </div>
        <animated.div style={fadeStyle} className="mt-2 text-sm">
          <div>{event.description}</div>
          <div className="mt-4 mb-2">
            <Link
              href={event.url}
              className="glass flex justify-center items-center gap-2 p-2 rounded-xl"
            >
              <div>Go To Event</div>
              <MdArrowOutward size={20} />
            </Link>
          </div>
        </animated.div>
      </animated.div>
    </animated.div>
  );
}
