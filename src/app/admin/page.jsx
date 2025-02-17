"use client";
import { useState } from "react";
import { UploadClient } from "@uploadcare/upload-client";
import { collection, addDoc } from "firebase/firestore";
import { db } from "@/lib/firebase"; // adjust path as needed

// Initialize Uploadcare client with your public key
const client = new UploadClient({ publicKey: "3064baea65ba22a7b721" });

export default function Admin() {
  const [category, setCategory] = useState("");
  const [files, setFiles] = useState(null);
  const [uploading, setUploading] = useState(false);

  const handleFileChange = (e) => {
    setFiles(e.target.files);
  };

  const handleUpload = async (e) => {
    e.preventDefault();

    if (!category.trim()) {
      alert("Please enter a category for the images.");
      return;
    }

    if (!files || files.length === 0) {
      alert("Please select at least one image to upload.");
      return;
    }

    setUploading(true);

    try {
      for (let i = 0; i < files.length; i++) {
        const file = files[i];

        const result = await client.uploadFile(file);
        const imageId = result.uuid; // or result.file_id based on your Uploadcare response

        await addDoc(collection(db, "galleryImages"), {
          imageId,
          category,
          createdAt: new Date(),
        });
      }
      // Reset form
      setCategory("");
      setFiles(null);
    } catch (error) {
      console.error("Error uploading file:", error);
      alert("Error uploading one or more files.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="flex flex-col w-11/12 mx-auto">
      <h1 className="text-4xl">Admin Panel</h1>
      <form className="mt-3" onSubmit={handleUpload}>
        <div className="mb-4">
          <label htmlFor="category" className="block mb-1">
            Category:
          </label>
          <input
            type="text"
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="Enter category for images"
            className="glass p-2 rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="files" className="block mb-1">
            Select Images:
          </label>
          <input
            type="file"
            id="files"
            multiple
            accept="image/*"
            onChange={handleFileChange}
            className="glass p-2 rounded-md"
            required
          />
        </div>
        <button
          type="submit"
          className="glass px-3 p-2 rounded-md flex items-center justify-center"
          disabled={uploading}
        >
          {uploading && (
            <svg
              className="animate-spin h-5 w-5 mr-2 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
              ></path>
            </svg>
          )}
          {uploading ? "Uploading..." : "Upload images for gallery"}
        </button>
      </form>
    </div>
  );
}
