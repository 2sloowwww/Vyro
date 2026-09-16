import sharp from "sharp";
import { readFileSync } from "node:fs";

const WIDTH = 1200;
const HEIGHT = 630;
const PHOTO_WIDTH = 560;

const bg = {
  create: {
    width: WIDTH,
    height: HEIGHT,
    channels: 4,
    background: "#0f5c66",
  },
};

const photo = await sharp("public/images/akshay-black-3.jpg")
  .resize({
    width: PHOTO_WIDTH,
    height: HEIGHT,
    fit: "cover",
    position: "top",
  })
  .toBuffer();

const svgText = `
<svg width="${WIDTH - PHOTO_WIDTH}" height="${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
  <rect x="66" y="228" width="46" height="46" fill="none" stroke="#f4ecd8" stroke-width="4" />
  <line x1="75" y1="237" x2="103" y2="265" stroke="#f4ecd8" stroke-width="4" stroke-linecap="round" />
  <line x1="103" y1="237" x2="75" y2="265" stroke="#f4ecd8" stroke-width="4" stroke-linecap="round" />
  <text x="66" y="330" font-family="Arial, Helvetica, sans-serif" font-weight="900" font-size="46" fill="#ffffff" letter-spacing="0.5">THE PLAIN TEE,</text>
  <text x="66" y="382" font-family="Arial, Helvetica, sans-serif" font-weight="900" font-size="46" fill="#f4ecd8" letter-spacing="0.5">PERFECTED</text>
  <text x="66" y="424" font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="19" fill="#c9d8d6" letter-spacing="0.5">240GSM HEAVYWEIGHT COTTON</text>
</svg>`;

await sharp(bg)
  .composite([
    { input: photo, left: WIDTH - PHOTO_WIDTH, top: 0 },
    { input: Buffer.from(svgText), left: 0, top: 0 },
  ])
  .jpeg({ quality: 88 })
  .toFile("public/images/og-image.jpg");

console.log("done");
