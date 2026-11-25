import { mkdirSync, writeFileSync } from "node:fs";

const joke =
  "My standing desk works great — my motivation is the only thing sitting down.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, joke, "utf8");
