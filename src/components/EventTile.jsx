"use client";
import { useState } from "react";
import Countdown from "./Countdown";
import moment from "moment";
import { useSpring, animated } from "@react-spring/web";

export default function EventTile({ event }) {
  const [tileOpened, setTileOpened] = useState(false);

  const handleClick = () => {
    setTileOpened(!tileOpened);
  };

  const [springs, api] = useSpring(() => ({
    from: { x: 0 },
    to: { x: 100 },
    delay: 5000,
  }));

  return (
    <animated.div
      style={{
        borderRadius: 8,
        ...springs,
      }}
    >
      <div
        onClick={handleClick}
        className={`glass cursor-pointer overflow-hidden rounded-lg p-2 flex flex-col transition-[max-height] duration-500 ease-in-out ${
          tileOpened ? "max-h-[500px]" : "max-h-[44px]"
        }`}
      >
        <div className="flex items-center justify-between">
          <div className="text-lg">{event.name}</div>
          <div className="text-sm">
            {new Date(event.dateTime) > new Date() ? (
              <Countdown dateTime={event.dateTime} />
            ) : (
              <>{moment(event.dateTime).format("DD, MMM")}</>
            )}
          </div>
        </div>
        <div
          className={`transition-opacity duration-500 ${
            tileOpened ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="text-sm">{event.description}</div>
        </div>
      </div>
    </animated.div>
  );
}
