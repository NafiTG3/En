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
import { day09 } from "./days/day09";
import { day10 } from "./days/day10";
import { day11 } from "./days/day11";
import { day12 } from "./days/day12";
import { day13 } from "./days/day13";
import { day14 } from "./days/day14";
import { day15 } from "./days/day15";
import { day16 } from "./days/day16";
import { day17 } from "./days/day17";
import { day18 } from "./days/day18";
import { day19 } from "./days/day19";
import { day20 } from "./days/day20";
import { day21 } from "./days/day21";
import { day22 } from "./days/day22";
import { day23 } from "./days/day23";
import { day24 } from "./days/day24";
import { day25 } from "./days/day25";
import { day26 } from "./days/day26";
import { day27 } from "./days/day27";
import { day28 } from "./days/day28";
import { day29 } from "./days/day29";
import { day30 } from "./days/day30";
import { day31 } from "./days/day31";
import { day32 } from "./days/day32";
import { day33 } from "./days/day33";
import { day34 } from "./days/day34";
import { day35 } from "./days/day35";
import { day36 } from "./days/day36";
import { day37 } from "./days/day37";
import { day38 } from "./days/day38";
import { day39 } from "./days/day39";

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
  9: day09,
  10: day10,
  11: day11,
  12: day12,
  13: day13,
  14: day14,
  15: day15,
  16: day16,
  17: day17,
  18: day18,
  19: day19,
  20: day20,
  21: day21,
  22: day22,
  23: day23,
  24: day24,
  25: day25,
  26: day26,
  27: day27,
  28: day28,
  29: day29,
  30: day30,
  31: day31,
  32: day32,
  33: day33,
  34: day34,
  35: day35,
  36: day36,
  37: day37,
  38: day38,
  39: day39,
  1: day01,
};

// Dev-only safety check: warns in the console if a script has fewer than 500 or more than 1500 English words.
if (import.meta.env.DEV) {
  Object.entries(SCRIPTS).forEach(([day, s]) => {
    const c = scriptCounts(s);
    if (c.en < 500 || c.en > 1500) console.warn(`Day ${day} has ${c.en} English words, expected 500 to 1500.`);
  });
}
