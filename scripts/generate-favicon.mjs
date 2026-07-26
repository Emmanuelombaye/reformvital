import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const publicDir = path.join(root, "public");
const appDir = path.join(root, "src", "app");

/** Simplified Reform Vital mark — navy field, teal DNA, readable at 16px */
const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64">
  <rect width="64" height="64" rx="14" fill="#0D1B2A"/>
  <g transform="translate(6 8) scale(0.34)">
    <path d="M20 20 H70 C90 20 100 32 100 48 C100 64 88 74 70 74 H48 V105 H20 V20 Z M48 44 V52 H68 C74 52 78 49 78 46 C78 43 74 44 68 44 H48 Z" fill="#FFFFFF"/>
    <path d="M48 60 L85 105 H112 L72 56 Z" fill="#FFFFFF"/>
    <path d="M102 40 L125 105 L150 40 H128 L116 80 L108 55 Z" fill="#00A896"/>
    <circle cx="94" cy="40" r="5" fill="#00A896"/>
    <circle cx="106" cy="52" r="5" fill="#00A896"/>
    <line x1="94" y1="40" x2="106" y2="52" stroke="#00A896" stroke-width="3"/>
    <circle cx="106" cy="68" r="5" fill="#00B4D8"/>
    <circle cx="94" cy="80" r="5" fill="#00B4D8"/>
    <line x1="106" y1="68" x2="94" y2="80" stroke="#00B4D8" stroke-width="3"/>
  </g>
</svg>`;

function pngToIco(pngBuffers, sizes) {
  const count = pngBuffers.length;
  const headerSize = 6 + count * 16;
  let offset = headerSize;
  const entries = [];
  const payloads = [];

  for (let i = 0; i < count; i++) {
    const size = sizes[i];
    const data = pngBuffers[i];
    const w = size >= 256 ? 0 : size;
    const h = size >= 256 ? 0 : size;
    entries.push({ w, h, size: data.length, offset });
    payloads.push(data);
    offset += data.length;
  }

  const buf = Buffer.alloc(offset);
  buf.writeUInt16LE(0, 0);
  buf.writeUInt16LE(1, 2);
  buf.writeUInt16LE(count, 4);

  for (let i = 0; i < count; i++) {
    const e = entries[i];
    const base = 6 + i * 16;
    buf.writeUInt8(e.w, base);
    buf.writeUInt8(e.h, base + 1);
    buf.writeUInt8(0, base + 2);
    buf.writeUInt8(0, base + 3);
    buf.writeUInt16LE(1, base + 4);
    buf.writeUInt16LE(32, base + 6);
    buf.writeUInt32LE(e.size, base + 8);
    buf.writeUInt32LE(e.offset, base + 12);
  }

  let writeAt = headerSize;
  for (const data of payloads) {
    data.copy(buf, writeAt);
    writeAt += data.length;
  }
  return buf;
}

async function main() {
  const svgBuf = Buffer.from(svg);
  fs.writeFileSync(path.join(publicDir, "favicon.svg"), svg);

  const sizes = [16, 32, 48];
  const pngs = [];
  for (const size of sizes) {
    const png = await sharp(svgBuf).resize(size, size).png().toBuffer();
    pngs.push(png);
  }

  const ico = pngToIco(pngs, sizes);
  fs.writeFileSync(path.join(publicDir, "favicon.ico"), ico);
  fs.writeFileSync(path.join(appDir, "favicon.ico"), ico);

  const apple = await sharp(svgBuf).resize(180, 180).png().toBuffer();
  fs.writeFileSync(path.join(publicDir, "apple-touch-icon.png"), apple);

  const icon32 = await sharp(svgBuf).resize(32, 32).png().toBuffer();
  fs.writeFileSync(path.join(publicDir, "icon-32.png"), icon32);

  console.log("Generated favicon.ico, favicon.svg, apple-touch-icon.png, icon-32.png");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
