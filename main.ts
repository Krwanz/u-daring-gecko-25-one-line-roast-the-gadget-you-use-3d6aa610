import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One-line roast of the phone I unlock a hundred times a day:
// its fingerprint sensor has stage fright — flawless alone at
// 3 a.m., helpless the moment a checkout queue forms behind me.
const roast =
  "My phone's fingerprint sensor has stage fright: it unlocks instantly alone at 3 a.m., then forgets my thumb completely at the checkout queue.";

const chars = [...roast].length;
if (chars < 1 || chars > 200) {
  throw new Error(`roast must be 1-200 characters, got ${chars}`);
}
if (roast.trim().length === 0) {
  throw new Error("roast must not be only whitespace");
}
if (roast.includes("\n") || roast.includes("\r")) {
  throw new Error("roast must be a single line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), roast, "utf8");
console.log(`wrote ${chars} characters to ${join(outDir, "entry.txt")}`);
