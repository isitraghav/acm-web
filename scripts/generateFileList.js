const fs = require("fs");
const path = require("path");

const publicDir = path.join(__dirname, "../public/images/Gallery/");
const folders = fs
  .readdirSync(publicDir)
  .filter((file) => fs.statSync(path.join(publicDir, file)).isDirectory());

const filesObj = {};
for (const folder of folders) {
  filesObj[String(folder).toLowerCase()] = fs.readdirSync(
    path.join(publicDir, folder),
  );
}

fs.writeFileSync(
  path.join(path.join(__dirname, "../public/"), "files.json"),
  JSON.stringify(filesObj, null, 2),
);

console.log("✅ File list generated.");
