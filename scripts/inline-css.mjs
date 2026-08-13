import { readdirSync, readFileSync, writeFileSync, statSync } from "node:fs";
import { join } from "node:path";

const appDir = join(process.cwd(), ".next", "server", "app");

function walk(dir) {
  const out = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) out.push(...walk(full));
    else if (full.endsWith(".html")) out.push(full);
  }
  return out;
}

let styled = 0;

for (const file of walk(appDir)) {
  let html = readFileSync(file, "utf8");
  const before = html.length;

  html = html.replace(
    /<link rel="stylesheet" href="(\/_next\/static\/css\/[^"]+\.css)"[^>]*\/>/g,
    (match, href) => {
      const cssPath = join(process.cwd(), ".next", "static", "css", href.split("/").pop());
      const css = readFileSync(cssPath, "utf8");
      styled++;
      return `<style data-precedence="next">${css}</style>`;
    }
  );

  html = html.replace(
    /<script src="\/_next\/static\/chunks\/polyfills-[^"]*\.js" noModule="">\s*<\/script>\s*/g,
    ""
  );

  if (html.length !== before) {
    writeFileSync(file, html);
  }
}

console.log(`Inlined CSS into ${styled} HTML file(s), stripped legacy polyfills tag.`);