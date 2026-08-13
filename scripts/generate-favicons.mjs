import { readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const svg = await readFile(join(root, "public", "favicon.svg"));

async function renderPng(size) {
  return sharp(svg).resize(size, size).png().toBuffer();
}

function buildIco(entries) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(entries.length, 4);
  const dir = Buffer.alloc(16 * entries.length);
  const datas = [];
  let offset = 6 + 16 * entries.length;
  entries.forEach(({ size, png }, i) => {
    const entry = Buffer.alloc(16);
    entry[0] = size >= 256 ? 0 : size;
    entry[1] = size >= 256 ? 0 : size;
    entry[2] = 0;
    entry[3] = 0;
    entry.writeUInt16LE(1, 4);
    entry.writeUInt16LE(32, 6);
    entry.writeUInt32LE(png.length, 8);
    entry.writeUInt32LE(offset, 12);
    entry.copy(dir, i * 16);
    offset += png.length;
    datas.push(png);
  });
  return Buffer.concat([header, dir, ...datas]);
}

const sizes = [16, 32, 48, 180];
const pngs = await Promise.all(sizes.map((s) => renderPng(s)));

await Promise.all([
  writeFile(join(root, "public", "favicon-16x16.png"), pngs[0]),
  writeFile(join(root, "public", "favicon-32x32.png"), pngs[1]),
  writeFile(join(root, "public", "favicon-48x48.png"), pngs[2]),
  writeFile(join(root, "src", "app", "apple-icon.png"), pngs[3]),
  writeFile(join(root, "src", "app", "icon.ico"), buildIco([
    { size: 16, png: pngs[0] },
    { size: 32, png: pngs[1] },
    { size: 48, png: pngs[2] },
  ])),
  writeFile(join(root, "src", "app", "icon.svg"), svg),
]);

console.log("Favicon assets generated in public/ and src/app/");