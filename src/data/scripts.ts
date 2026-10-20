import type { Script } from "../types";
import { scriptCounts } from "../utils";
import { day01 } from "./days/day01";
import { day02 } from "./days/day02";
import { day03 } from "./days/day03";
import { day04 } from "./days/day04";
import { day05 } from "./days/day05";
import { day06 } from "./days/day06";
import { day07 } from "./days/day07";
import { day08 } from "./days/day08";

/**
 * HOW TO ADD A NEW DAY: add a key (the day number) with `en` and `bn` paragraphs.
 * Rule: every script must be 500 to 1500 words. The reader shows a red badge if it is below 500.
 */
export const SCRIPTS: Record<number, Script> = {
  2: day02,
  3: day03,
  4: day04,
  5: day05,
  6: day06,
  7: day07,
  8: day08,
  1: day01,
};

// Dev-only safety check: warns in the console if a script has fewer than 500 or more than 1500 English words.
if (import.meta.env.DEV) {
  Object.entries(SCRIPTS).forEach(([day, s]) => {
    const c = scriptCounts(s);
    if (c.en < 500 || c.en > 1500) console.warn(`Day ${day} has ${c.en} English words, expected 500 to 1500.`);
  });
}
