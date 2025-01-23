"use client";

import ShinyText from "@/components/ShinyText";
import Link from "next/link";
import { useRef, useState } from "react";

export default function Navbar() {
  const acm_logo = useRef(null);
  const [acm_logoHovered, setACMLogoHovered] = useState(false);
  const handleMouseOver = () => {
    setACMLogoHovered(true);
  };
  const handleMouseOut = () => {
    setACMLogoHovered(false);
  };
  return (
    <div
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      className="flex gap-3 top-3 sticky z-10"
    >
      <div className="z-20 pl-2 bg-[#060606] rounded-r-full">
        <nav
          ref={acm_logo}
          className="navigation acm_logo aspect-square grid place-items-center"
        >
          <Link href="/" className="cursor-pointer">
            <img
              src="/acm-logo.png"
              className="w-10 h-10 object-cover aspect-square"
              alt=""
            />
          </Link>
        </nav>
      </div>
      <div className="hidden md:block w-full md:w-1/2 lg:w-1/3">
        <nav
          className={`navigation transition-all ease-out duration-1000  relative ${
            acm_logoHovered ? "" : "translate-x-[-690px]"
          }`}
        >
          <Link href="/rocs" className="cursor-pointer">
            <ShinyText text="ROCS" className="text-sm" />
          </Link>
          <Link href="/team" className="cursor-pointer">
            <ShinyText text="TEAM" className="text-sm" />
          </Link>
          <Link href="/events" className="cursor-pointer">
            <ShinyText text="EVENTS" className="text-sm" />
          </Link>
          <Link href="/duality" className="cursor-pointer">
            <ShinyText text="DUALITY" className="text-sm" />
          </Link>
          <Link href="/gallery" className="cursor-pointer">
            <ShinyText text="GALLERY" className="text-sm" />
          </Link>
        </nav>
      </div>
      <div className="m-auto hidden md:block mr-10">
        <Link
          href="https://discord.com/invite/7XNFKPG5C4"
          target="_blank"
          className="shiny-button"
        >
          <ShinyText evershining={true} text="COMMUNITY" />
        </Link>
      </div>
    </div>
  );
}
