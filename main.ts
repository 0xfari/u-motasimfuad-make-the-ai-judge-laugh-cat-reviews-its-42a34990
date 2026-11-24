import { mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Make the AI Judge Laugh: Cat Reviews Its Human — one funny single-line
// one-star review from a house cat about its human, under 200 characters.
// Deadpan review shape, complaint only a cat would make: the human expects
// applause for the bare minimum. Writes it to /output/entry.txt.
const LINE =
  "One star. The food arrives late, the lap is always busy, and the human still expects applause for opening a can.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
for (const f of readdirSync(outDir)) rmSync(join(outDir, f), { recursive: true, force: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
