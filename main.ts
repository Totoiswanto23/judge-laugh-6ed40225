// judge-laugh-6ed40225: one funny line about office life.
// This program writes that single line to /output/entry.txt, where the
// gate reads it.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The joke: the office printer only ever jams right before a deadline,
// so the punchline flips its job description — jamming is the real job,
// and printing is just the side hustle it does between jams.
const LINE =
  "Our office printer only jams when a deadline is five minutes away, so I've decided jamming is its actual job and printing is just its side hustle.";

if (LINE.length < 1 || LINE.length > 200 || LINE.includes('\n')) {
  console.error('entry line is not a single line of 1-200 characters');
  process.exit(1);
}

// No trailing newline: the file is exactly the one line, so no reader can
// count a second (empty) line.
mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), LINE);
console.log(`wrote ${LINE.length} chars to ${join(OUTPUT_DIR, 'entry.txt')}`);
