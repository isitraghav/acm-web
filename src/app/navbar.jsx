"use client";

import ShinyText from "@/components/ShinyText";
import { useSpring, animated } from "@react-spring/web";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";

export default function Navbar() {
  const acm_logo = useRef(null);
  const [acm_logoHovered, setACMLogoHovered] = useState(false);
  const handleMouseOver = () => {
    setACMLogoHovered(true);
  };
  const handleMouseOut = () => {
    setACMLogoHovered(false);
  };
  const [scrolled, setScrolled] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const pathname = usePathname();
  useEffect(() => {
    api.start({
      to: {
        height: "0vh",
      },
    });
    setShowMenu(false);
  }, [pathname]);

  const [openMenu, api] = useSpring(() => ({
    from: {
      height: "0vh",
    },
    config: { duration: 700 },
  }));

  function toggleMenu() {
    if (showMenu) {
      api.start({
        to: {
          height: "0vh",
        },
      });
    } else {
      api.start({
        to: {
          height: "100vh",
        },
      });
    }
    setShowMenu(!showMenu);
  }

  return (
    <>
      <div
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        className="flex gap-3 pt-3 top-0 sticky z-10"
      >
        <div
          className={`z-20 pl-3 ${
            scrolled ? "bg-transparent" : "bg-[#060606]"
          } rounded-r-full`}
        >
          <nav
            ref={acm_logo}
            className="navigation acm_logo aspect-square grid place-items-center"
          >
            <Link href="/" className="cursor-pointer">
              {pathname === "/" ? (
                <img
                  src="/acm-logo.png"
                  className="w-10 h-10 object-cover aspect-square"
                  alt=""
                />
              ) : (
                <>
                  <FaArrowLeft color="#bbb" className="w-6 h-6" />
                </>
              )}
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
          <Link href="/member" className="shiny-button">
            <ShinyText
              evershining={true}
              text={
                <div className="flex gap-2 justify-center items-center">
                  <div>Member</div>
                  <MdArrowOutward />
                </div>
              }
            />
          </Link>
        </div>
        <div className="md:hidden ml-auto my-auto mr-3">
          <button
            className="shiny-button glass"
            onClick={() => {
              toggleMenu();
            }}
          >
            Menu
          </button>
        </div>
      </div>

      <animated.div
        style={openMenu}
        className={`fixed overflow-hidden inset-0 z-50 flex flex-col items-center bg-[#0c0c0c]`}
      >
        <div className="md:hidden pt-[21.8px] pr-3 ml-auto pl-5 rounded-bl-[50px] pb-5 bg-[#060606]">
          <button
            className="shiny-button glass"
            onClick={() => {
              toggleMenu();
            }}
          >
            Menu
          </button>
        </div>
        <div className="flex flex-col gap-3 justify-center items-center text-2xl">
          {["/rocs", "/team", "/events", "/duality", "/gallery", "/member"].map(
            (link, index) => (
              <div key={link}>
                <Link
                  href={link}
                  className="cursor-pointer flex items-center gap-4"
                  target={index === 5 ? "_blank" : "_self"}
                >
                  <ShinyText
                    evershining={true}
                    text={link.toUpperCase().replace("/", "")}
                  />
                </Link>
              </div>
            ),
          )}
        </div>
      </animated.div>
    </>
  );
}
