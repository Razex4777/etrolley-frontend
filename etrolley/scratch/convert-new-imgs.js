import sharp from 'sharp';

const images = [
  {
    src: "C:\\Users\\MSI-PC\\Downloads\\1db305957309fc439d44c8969cbfe98bb0381d40.png",
    dest: "c:\\Users\\MSI-PC\\OneDrive\\Documents\\freelancing\\e-trolley\\etrolley\\public\\images\\contact-map.webp"
  },
  {
    src: "C:\\Users\\MSI-PC\\Downloads\\dfbb0a7092ab68a0a2e45d5d092e0c27c82b9c43.png",
    dest: "c:\\Users\\MSI-PC\\OneDrive\\Documents\\freelancing\\e-trolley\\etrolley\\public\\images\\complaints-illustration.webp"
  }
];

Promise.all(images.map(img => {
  console.log("Converting:", img.src);
  return sharp(img.src)
    .webp({ quality: 90 })
    .toFile(img.dest)
    .then(info => console.log("Done!", img.dest, info));
})).catch(err => console.error("Error:", err));
