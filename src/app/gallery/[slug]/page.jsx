"use client";
import { useEffect, useState } from "react";
import Masonry from "@/components/Masonry";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";

export default function Page({ params }) {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const { slug } = await params;

    const querySnapshot = await getDocs(collection(db, "galleryImages"));
    const images = querySnapshot.docs.map((doc) => doc.data());
    // Group images by their 'category' field
    const grouped = images
      .filter((image) => image.category === slug)
      .reduce((acc, image) => {
        const category = image.category;
        if (!acc[category]) {
          acc[category] = [];
        }
        acc[category].push(image);
        return acc;
      }, {});

    console.log(grouped);

    const formattedData = [];
    Object.entries(grouped).forEach(([id, group]) => {
      group.forEach((group) => {
        console.log(group);
        formattedData.push({
          id: Math.random(),
          height: 500,
          image: `https://ucarecdn.com/${group.imageId}/-/preview/500x500/`, // Taking the first image from each category
        });
      });
    });
    console.log(formattedData);
    setData(formattedData);
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
