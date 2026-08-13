import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const OUT_DIR = path.join(process.cwd(), "public", "images");

const images = [
  { id: 7534282, name: "modern-marble-walk-in-shower" },
  { id: 5825561, name: "complete-bathroom-renovation" },
  { id: 6899351, name: "tub-to-shower-conversion" },
  { id: 7005476, name: "modern-glass-shower-installation" },
  { id: 6957081, name: "white-bathtub-replacement" },
  { id: 7031840, name: "frameless-glass-shower-enclosure" },
  { id: 8583810, name: "bathroom-tile-flooring" },
  { id: 5502253, name: "custom-double-vanity" },
  { id: 6653889, name: "gold-faucet-fixture-upgrade" },
  { id: 7005279, name: "chrome-faucet-marble-bathroom" },
  { id: 5502260, name: "accessible-walk-in-shower" },
  { id: 9252956, name: "freestanding-tub-luxury-bathroom" },
  { id: 6835174, name: "modern-bathroom-gold-trim" },
  { id: 7031719, name: "minimalist-bathroom-sink-toilet" },
  { id: 8925979, name: "sunlit-bathroom-chrome-faucet" },
  { id: 8134805, name: "gray-tiled-bathroom-bathtub" },
  { id: 4300078, name: "shower-fixture-upgrade" },
  { id: 6890406, name: "bright-modern-bathroom-sink" },
];

const TARGET_WIDTH = 1920;
const WEBP_QUALITY = 82;
const OG_SIZE = { width: 1200, height: 630 };

async function download(id, width) {
  const url = `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?w=${width}&auto=compress&cs=tinysrgb`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Download failed for ${id}: ${res.status}`);
  return Buffer.from(await res.arrayBuffer());
}

async function main() {
  await mkdir(OUT_DIR, { recursive: true });
  const results = [];

  for (const img of images) {
    const src = await download(img.id, TARGET_WIDTH);
    const out = path.join(OUT_DIR, `${img.name}.webp`);
    const info = await sharp(src)
      .resize({ width: TARGET_WIDTH, withoutEnlargement: true })
      .webp({ quality: WEBP_QUALITY })
      .toFile(out);
    results.push({ id: img.id, name: img.name, file: `${img.name}.webp`, ...info });
  }

  const hero = images.find((i) => i.id === 7534282);
  const heroSrc = await download(hero.id, TARGET_WIDTH);
  const ogOut = path.join(OUT_DIR, "og-modern-marble-walk-in-shower.jpg");
  const ogInfo = await sharp(heroSrc)
    .resize({ ...OG_SIZE, fit: "cover", position: "centre" })
    .jpeg({ quality: 85 })
    .toFile(ogOut);
  results.push({ id: hero.id, name: "og (1200x630 crop)", file: "og-modern-marble-walk-in-shower.jpg", ...ogInfo });

  for (const r of results) {
    console.log(
      `${r.id}\t${r.file}\t${r.width}x${r.height}\t${(r.size / 1024).toFixed(1)} KB`
    );
  }
  console.log(`\nSaved ${results.length} files to ${OUT_DIR}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});