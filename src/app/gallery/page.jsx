"use client";
import CircularGallery from "@/components/CircularGallery";
import { useEffect, useState } from "react";

export default function Gallery() {
  const [folders, setFolders] = useState([
    {
      image: "/images/Gallery/ClubFair/c1.webp",
      text: "Club Fair",
    },
    {
      image: "/images/Gallery/EngineeringExcellence/e1.webp",
      text: "Engineering Excellence",
    },
    {
      image: "/images/Gallery/Hacktober/h1.webp",
      text: "Hacktober",
    },
    {
      image: "/images/Gallery/helloworld/hh11.webp",
      text: "HelloWorld",
    },
    {
      image: "/images/Gallery/research/r1.webp",
      text: "Research",
    },
    {
      image: "/images/Gallery/SIH/s1.webp",
      text: "SIH",
    },
    {
      image: "/images/Gallery/uiuxify/u1.webp",
      text: "UiUxify",
    },
    {
      image: "/images/Gallery/Web/w1.webp",
      text: "Web",
    },
  ]);

  const [bind, setBind] = useState(2);

  const isMobile = window.matchMedia("(max-width: 768px)").matches;

  return (
    <div className="flex flex-col items-center justify-center">
      <div style={{ height: "85vh", width: "100vw", position: "relative" }}>
        {isMobile ? (
          <CircularGallery bend={0} items={folders} />
        ) : (
          <CircularGallery bend={3} items={folders} />
        )}
      </div>
    </div>
  );
}
