#!/usr/bin/env node
/**
 * Download Rotterdam-specific images from Wikimedia Commons (CC-licensed).
 * Basenames must match src/lib/images.ts subject keys / pipeline inputs.
 */
import { writeFileSync, mkdirSync, copyFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const OUT = join(import.meta.dirname, "..", "public/images");
const SOURCE = join(import.meta.dirname, "..", "image-sources");
const UA =
  "RotterdamShoreExcursion/1.0 (https://rotterdamshoreexcursion.com; image setup)";

/** Map output basename → Wikimedia Commons file candidates (first success wins). */
const IMAGE_FILES = {
  "hero-home.jpg": [
    "File:Rotterdam Erasmusbrug.jpg",
    "File:Erasmusbrug Rotterdam.jpg",
    "File:Rotterdam skyline.jpg",
  ],
  "og-default.jpg": [
    "File:Rotterdam skyline.jpg",
    "File:Rotterdam Erasmusbrug.jpg",
    "File:Markthal Rotterdam.jpg",
  ],
  "cruise-port.jpg": [
    "File:Cruise Terminal Rotterdam.jpg",
    "File:Wilhelminapier Rotterdam.jpg",
    "File:Hotel New York Rotterdam.jpg",
  ],
  "erasmus-bridge.jpg": [
    "File:Erasmusbrug Rotterdam.jpg",
    "File:Rotterdam Erasmusbrug.jpg",
    "File:Erasmus Bridge Rotterdam.jpg",
  ],
  "markthal.jpg": [
    "File:Markthal Rotterdam.jpg",
    "File:Markthal Rotterdam interior.jpg",
    "File:Market Hall Rotterdam.jpg",
  ],
  "cube-houses.jpg": [
    "File:Cube houses Rotterdam.jpg",
    "File:Kubuswoningen Rotterdam.jpg",
    "File:Cube Houses Rotterdam.jpg",
  ],
  "harbour.jpg": [
    "File:Port of Rotterdam.jpg",
    "File:Rotterdam harbour.jpg",
    "File:Haven Rotterdam.jpg",
  ],
  "kinderdijk.jpg": [
    "File:Kinderdijk windmills.jpg",
    "File:Kinderdijk molens.jpg",
    "File:Kinderdijk.jpg",
  ],
  "delft.jpg": [
    "File:Delft.jpg",
    "File:Stadhuis Delft.jpg",
    "File:Markt Delft.jpg",
  ],
  "the-hague.jpg": [
    "File:Binnenhof The Hague.jpg",
    "File:Den Haag Binnenhof.jpg",
    "File:The Hague Netherlands.jpg",
  ],
  "gouda.jpg": [
    "File:Gouda city hall.jpg",
    "File:Gouda Netherlands.jpg",
    "File:Stadhuis Gouda.jpg",
  ],
  "food.jpg": [
    "File:Markthal Rotterdam interior.jpg",
    "File:Markthal Rotterdam.jpg",
    "File:Dutch cheese market.jpg",
  ],
  "cycling.jpg": [
    "File:Dutch bicycle.jpg",
    "File:Bicycles in Amsterdam.jpg",
    "File:Fietsen Nederland.jpg",
  ],
  "architecture.jpg": [
    "File:De Rotterdam.jpg",
    "File:Rotterdam modern architecture.jpg",
    "File:Wilhelminapier Rotterdam.jpg",
  ],
  "walking.jpg": [
    "File:Wilhelminapier Rotterdam.jpg",
    "File:Erasmusbrug Rotterdam.jpg",
    "File:Witte Huis Rotterdam.jpg",
  ],
  "private.jpg": [
    "File:Rotterdam Erasmusbrug.jpg",
    "File:Kinderdijk windmills.jpg",
  ],
  "compare.jpg": [
    "File:Rotterdam skyline.jpg",
    "File:Kinderdijk.jpg",
  ],
  "historic.jpg": [
    "File:Stadhuis Delft.jpg",
    "File:Markt Delft.jpg",
    "File:Delft.jpg",
  ],
  "scenic.jpg": [
    "File:Kinderdijk windmills.jpg",
    "File:Dutch polder landscape.jpg",
    "File:Netherlands countryside.jpg",
  ],
};

async function commonsUrl(fileTitle) {
  const api = new URL("https://commons.wikimedia.org/w/api.php");
  api.searchParams.set("action", "query");
  api.searchParams.set("titles", fileTitle);
  api.searchParams.set("prop", "imageinfo");
  api.searchParams.set("iiprop", "url");
  api.searchParams.set("iiurlwidth", "2400");
  api.searchParams.set("format", "json");
  const res = await fetch(api, { headers: { "User-Agent": UA } });
  if (!res.ok) throw new Error(`API ${res.status}`);
  const data = await res.json();
  const pages = data?.query?.pages ?? {};
  for (const page of Object.values(pages)) {
    const info = page?.imageinfo?.[0];
    if (info?.thumburl) return info.thumburl;
    if (info?.url) return info.url;
  }
  return null;
}

async function download(url, dest) {
  const res = await fetch(url, { headers: { "User-Agent": UA } });
  if (!res.ok) throw new Error(`Download ${res.status} ${url}`);
  const buf = Buffer.from(await res.arrayBuffer());
  writeFileSync(dest, buf);
  return buf.length;
}

async function resolveOne(candidates) {
  for (const title of candidates) {
    try {
      const url = await commonsUrl(title);
      if (url) return { title, url };
    } catch (err) {
      console.warn(`  skip ${title}: ${err.message}`);
    }
  }
  return null;
}

async function main() {
  mkdirSync(OUT, { recursive: true });
  mkdirSync(SOURCE, { recursive: true });
  const manifest = [];

  for (const [filename, candidates] of Object.entries(IMAGE_FILES)) {
    const dest = join(OUT, filename);
    const sourceDest = join(SOURCE, filename);
    process.stdout.write(`${filename}... `);
    const hit = await resolveOne(candidates);
    if (!hit) {
      console.log("FAILED — no Commons candidate resolved");
      continue;
    }
    try {
      const bytes = await download(hit.url, dest);
      copyFileSync(dest, sourceDest);
      console.log(`OK (${Math.round(bytes / 1024)}KB) ← ${hit.title}`);
      manifest.push({ file: filename, source: hit.title, url: hit.url, bytes });
    } catch (err) {
      console.log(`DOWNLOAD FAIL: ${err.message}`);
    }
  }

  // Alias legacy pipeline names if any code still references them
  const aliases = {
    "coast.jpg": "harbour.jpg",
    "alhambra.jpg": "architecture.jpg",
    "granada.jpg": "kinderdijk.jpg",
    "ronda.jpg": "delft.jpg",
    "caminito.jpg": "harbour.jpg",
    "mijas.jpg": "historic.jpg",
    "alcazaba.jpg": "erasmus-bridge.jpg",
    "white-villages.jpg": "scenic.jpg",
    "wine.jpg": "food.jpg",
    "family.jpg": "walking.jpg",
    "photography.jpg": "erasmus-bridge.jpg",
  };
  for (const [alias, target] of Object.entries(aliases)) {
    const from = join(OUT, target);
    const to = join(OUT, alias);
    if (existsSync(from) && !existsSync(to)) {
      copyFileSync(from, to);
      const srcTo = join(SOURCE, alias);
      if (!existsSync(srcTo)) copyFileSync(from, srcTo);
      console.log(`alias ${alias} ← ${target}`);
    }
  }

  writeFileSync(
    join(SOURCE, "download-manifest.json"),
    JSON.stringify({ downloadedAt: new Date().toISOString(), items: manifest }, null, 2),
  );
  console.log(`\nDone. ${manifest.length}/${Object.keys(IMAGE_FILES).length} primary images.`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
