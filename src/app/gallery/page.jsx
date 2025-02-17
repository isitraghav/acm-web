"use client";
import CircularGallery from "@/components/CircularGallery";
import { db } from "@/lib/firebase";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";

export default function Gallery() {
  const [loading, setLoading] = useState(false);
  const [folders, setFolders] = useState([]);
  async function fetchImages() {
    setLoading(true);
    try {
      // Get all images from the "galleryImages" collection
      const querySnapshot = await getDocs(collection(db, "galleryImages"));
      const images = querySnapshot.docs.map((doc) => doc.data());

      // Group images by their 'category' field
      const grouped = images.reduce((acc, image) => {
        const category = image.category;
        if (!acc[category]) {
          acc[category] = [];
        }
        acc[category].push(image);
        return acc;
      }, {});

      console.log(grouped);
      let finalArray = [];

      // Correct iteration over the grouped object
      Object.entries(grouped).forEach(([category, images]) => {
        finalArray.push({
          image: `https://ucarecdn.com/${images[0].imageId}/-/preview/750x1000/`, // Taking the first image from each category
          text: category, // Category name
        });
      });

      setFolders(finalArray);
    } catch (error) {
      console.error("Error fetching images: ", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchImages();
  }, []);
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
