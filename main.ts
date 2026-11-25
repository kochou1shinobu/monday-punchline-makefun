// Monday Morning Punchlines — one Monday-morning joke line.
import { writeFileSync, mkdirSync } from "node:fs";
const line = "Monday morning: my alarm went off, my coffee filed a complaint, and my to-do list has already asked for a transfer.";
console.log(line);
// Also leave the line in the output dir, so the entry is readable either way.
const out = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
mkdirSync(out, { recursive: true });
writeFileSync(`${out}/entry.txt`, line + "\n");
