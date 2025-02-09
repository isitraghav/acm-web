"use client";
import { useEffect, useState } from "react";
import { getContents } from "./server";
import Masonry from "@/components/Masonry";

export default function Page({ params }) {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const { slug } = await params;
    await getContents(slug).then((res) => {
      let alldata = [];
      res.forEach((link, index) => {
        alldata.push({
          id: index,
          image: `/images/Gallery/${slug}/${link}`,
          height: 500,
        });
      });
      setData(alldata);
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
