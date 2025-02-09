"use server";
import { readdirSync, statSync } from "fs";
import { join } from "path";

export async function getContents(folder) {
  console.log("getContents called with", folder);
  return new Promise((resolve, reject) => {
    const publicFolder = join(process.cwd(), "public/images/Gallery/", folder);
    console.log("publicFolder is", publicFolder);
    const files = readdirSync(publicFolder).filter((file) => {
      const filePath = join(publicFolder, file);
      return !statSync(filePath).isDirectory();
    });
    console.log("files found:", files);
    resolve(files);
  });
}
