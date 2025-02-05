"use client";
import { getFoldersInPublicFolder } from "./server";
import { useEffect, useState } from "react";

export default function Gallery() {
  const [folders, setFolders] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    getFoldersInPublicFolder().then((files) => {
      console.log(files);
      const initialFolders = Object.keys(files).map((key) => ({
        key,
        files: files[key],
      }));

      setFolders(initialFolders);
    });
  }, []);

  return (
    <div>
      <h1>Gallery</h1>
      <div></div>
    </div>
  );
}
