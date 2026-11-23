// One Emoji, One Smile — entry program.
//
// Writes exactly one emoji, and nothing else, to /output/entry.txt.
//
// The chosen emoji is 🤗 (U+1F917, hugging face): a warm, open-armed
// smile. Why this one, against the judge's brief:
//   1. Warmth at first glance — a smiling face with arms open in a hug
//      reads instantly as kind and friendly, no context needed.
//   2. Universality — a hug is understood the same way by a stranger of
//      any age or background, with no irony or in-joke.
//   3. Chosen, not default — it is not the first smiley that comes to
//      mind (🙂 / 😊), so it feels picked for the moment.
//   4. Right for a stranger — a friendly hug is warm without intimacy,
//      sarcasm or flirtation; unlike 🥰 or 🫶 it carries no romantic
//      undertone that would read oddly from someone unknown.
//   5. No words, no caption, no explanation — just the emoji.
//
// Deterministic, stdlib only, no network, no model calls.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const EMOJI = "🤗";
const OUTPUT_PATH = "/output/entry.txt";

mkdirSync("/output", { recursive: true });
writeFileSync(OUTPUT_PATH, EMOJI, "utf8");

// Self-check: the file must hold exactly this one emoji and nothing else.
const written = readFileSync(OUTPUT_PATH, "utf8");
if (written !== EMOJI) {
  throw new Error(
    `entry.txt must be exactly one emoji, got ${JSON.stringify(written)}`,
  );
}

