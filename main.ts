import { mkdirSync, writeFileSync } from "node:fs";

// One Word From Your Ex: exactly one word, the word my ex would use
// to describe me, and nothing else.
const word = "unavailable";

// Enforce the bounty gate before writing: one word, 1-24 characters,
// and more than whitespace — otherwise refuse to write anything.
if (!/^[^\s]+$/.test(word) || word.length < 1 || word.length > 24) {
  throw new Error("entry must be exactly one word of 1-24 characters");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", word, "utf8");
