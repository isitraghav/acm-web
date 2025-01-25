"use server";
import { readdirSync, statSync } from "fs";
import path from "path";

export async function getFoldersInPublicFolder() {
  return new Promise((resolve, reject) => {
    const publicFolder = path.join(process.cwd(), "public/images/Gallery/");
    const files = readdirSync(publicFolder);
    const folders = files.filter((file) => {
      const filePath = path.join(publicFolder, file);
      return statSync(filePath).isDirectory();
    });
    const filesInFolders = {};
    folders.forEach((folder) => {
      const filesInFolder = readdirSync(path.join(publicFolder, folder));
      filesInFolders[folder] = filesInFolder;
    });
    resolve(filesInFolders);
  });
}
