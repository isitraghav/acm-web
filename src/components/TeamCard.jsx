import { useRef, useState } from "react";
import { FaLinkedin } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import { useSpring, animated } from "@react-spring/web";

export default function TeamCard({ item }) {
  const canvasRef = useRef(null);
  const [showLinks, setShowLinks] = useState(false);
  const { opacity } = useSpring({
    opacity: showLinks ? 1 : 0,
    config: { duration: 300 },
  });

  return (
    <div
      className="relative transition-all duration-300 flex flex-col items-center glass backdrop-blur-lg shadow-lg rounded-2xl p-4  hover:scale-105 hover:shadow-xl w-full"
      onMouseEnter={() => setShowLinks(true)}
      onMouseLeave={() => setShowLinks(false)}
    >
      {/* Canvas Background */}
      <div className="absolute top-1 left-1/2 -translate-x-1/2 ">
        <canvas ref={canvasRef} className="rounded-full" />
      </div>

      {/* Profile Image */}
      <div className="relative w-32 h-32 rounded-full overflow-hidden shadow-lg">
        <img
          src={item.image}
          alt={item.name}
          className="object-cover w-full h-full"
        />
      </div>

      {/* Name & Position */}
      <div className="text-center mt-3">
        <h3 className="text-lg font-bold text-white">{item.name}</h3>
        <p className="text-sm text-white/80">{item.position}</p>
      </div>

      {/* Social Links */}
      <animated.div
        style={{ opacity }}
        className={`flex gap-3 mt-3 transition-opacity duration-300 ${
          showLinks && (item.linkedin || item.instagram || item.email)
            ? ""
            : "hidden"
        }`}
      >
        {item.linkedin && (
          <a href={item.linkedin} target="_blank">
            <FaLinkedin
              size={22}
              className="text-white hover:text-blue-500 transition"
            />
          </a>
        )}
        {item.instagram && (
          <a href={item.instagram} target="_blank">
            <AiFillInstagram
              size={25}
              className="text-white hover:text-pink-500 transition"
            />
          </a>
        )}
        {item.email && (
          <a href={`mailto:${item.email}`}>
            <HiOutlineMail
              size={25}
              className="text-white hover:text-gray-300 transition"
            />
          </a>
        )}
      </animated.div>
    </div>
  );
}
