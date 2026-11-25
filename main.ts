import { mkdirSync, writeFileSync } from "node:fs";

const joke =
  "My salary is confidential — mostly because if anyone knew, they'd laugh.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, joke, "utf8");
