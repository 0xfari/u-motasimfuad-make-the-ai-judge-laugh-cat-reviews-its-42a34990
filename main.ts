import * as fs from "node:fs";
import * as path from "node:path";

// Make the AI Judge Laugh: Cat Reviews Its Human — one funny single-line
// one-star review from a house cat about its human, under 200 characters.
// Deadpan review shape, complaint only a cat would make: the human replaced
// the cat's box with a chair, and the cat's formal complaint follows.
// Writes the line to /output/entry.txt.
// The box was the whole point of the room; the chair is just furniture with delusions.
const LINE =
  "One star. He replaced my box with a chair. A chair. My formal complaint is now inside his shoe.";

const OUTPUT_FILE = "entry.txt";

// One line, one box, one shoe: the review writes itself when the human misbehaves.
function emptyFolder(dir: string): void {
  fs.mkdirSync(dir, { recursive: true });
  for (const f of fs.readdirSync(dir)) {
    fs.rmSync(path.join(dir, f), { recursive: true, force: true });
  }
}

function run(): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  emptyFolder(outDir);
  fs.writeFileSync(path.join(outDir, OUTPUT_FILE), LINE + "\n", "utf8");
}

run();
