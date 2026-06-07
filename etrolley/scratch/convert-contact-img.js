import sharp from 'sharp';
import path from 'path';

const source = "C:\\Users\\MSI-PC\\Downloads\\acd751a9f46b63d29a322703264df937ee0ef051.png";
const dest = "c:\\Users\\MSI-PC\\OneDrive\\Documents\\freelancing\\e-trolley\\etrolley\\public\\images\\contact-illustration.webp";

console.log("Converting image from:", source);
console.log("Saving to:", dest);

sharp(source)
  .webp({ quality: 90 })
  .toFile(dest)
  .then(info => {
    console.log("Success!", info);
  })
  .catch(err => {
    console.error("Error converting image:", err);
  });
