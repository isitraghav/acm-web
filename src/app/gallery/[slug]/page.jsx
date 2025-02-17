"use client";
import { useEffect, useState } from "react";
import Masonry from "@/components/Masonry";

export default function Page({ params }) {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const { slug } = await params;
    const res = await fetch("/files.json");
    const files = await res.json();
    const slugKey = files[slug];
    slugKey.forEach((file) => {
      setData((prevData) => [
        ...prevData,
        {
          id: Math.random(),
          image: `/images/Gallery/${slug}/${file}`,
          height: 500,
        },
      ]);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="flex flex-col items-center justify-center">
      <div style={{ height: "85vh", width: "100vw", position: "relative" }}>
        <Masonry data={data} />
      </div>
    </div>
  );
}
