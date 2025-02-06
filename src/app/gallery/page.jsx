"use client";
import CircularGallery from "@/components/CircularGallery";
import { getFoldersInPublicFolder } from "./server";
import { useEffect, useState } from "react";

export default function Gallery() {
  const [folders, setFolders] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    getFoldersInPublicFolder().then((files) => {
      const initialFolders = Object.keys(files).map((folderName, index) => ({
        image: `/images/Gallery/${folderName}/${files[folderName][0]}`,
        text: folderName,
      }));
      console.log(initialFolders);
      setFolders(initialFolders);
    });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">
      <div style={{ height: "100vh", width: "100vw", position: "relative" }}>
        <CircularGallery items={folders} />
      </div>
    </div>
  );
}
