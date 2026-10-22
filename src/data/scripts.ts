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
import { day40 } from "./days/day40";
import { day41 } from "./days/day41";
import { day42 } from "./days/day42";
import { day43 } from "./days/day43";
import { day44 } from "./days/day44";
import { day45 } from "./days/day45";
import { day46 } from "./days/day46";
import { day47 } from "./days/day47";
import { day48 } from "./days/day48";
import { day49 } from "./days/day49";
import { day50 } from "./days/day50";
import { day51 } from "./days/day51";
import { day52 } from "./days/day52";
import { day53 } from "./days/day53";
import { day54 } from "./days/day54";
import { day55 } from "./days/day55";
import { day56 } from "./days/day56";
import { day57 } from "./days/day57";
import { day58 } from "./days/day58";
import { day59 } from "./days/day59";
import { day60 } from "./days/day60";
import { day61 } from "./days/day61";
import { day62 } from "./days/day62";
import { day63 } from "./days/day63";
import { day64 } from "./days/day64";
import { day65 } from "./days/day65";
import { day66 } from "./days/day66";
import { day67 } from "./days/day67";
import { day68 } from "./days/day68";
import { day69 } from "./days/day69";
import { day70 } from "./days/day70";
import { day71 } from "./days/day71";
import { day72 } from "./days/day72";
import { day73 } from "./days/day73";
import { day74 } from "./days/day74";
import { day75 } from "./days/day75";
import { day76 } from "./days/day76";
import { day77 } from "./days/day77";
import { day78 } from "./days/day78";
import { day79 } from "./days/day79";

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
  40: day40,
  41: day41,
  42: day42,
  43: day43,
  44: day44,
  45: day45,
  46: day46,
  47: day47,
  48: day48,
  49: day49,
  50: day50,
  51: day51,
  52: day52,
  53: day53,
  54: day54,
  55: day55,
  56: day56,
  57: day57,
  58: day58,
  59: day59,
  60: day60,
  61: day61,
  62: day62,
  63: day63,
  64: day64,
  65: day65,
  66: day66,
  67: day67,
  68: day68,
  69: day69,
  70: day70,
  71: day71,
  72: day72,
  73: day73,
  74: day74,
  75: day75,
  76: day76,
  77: day77,
  78: day78,
  79: day79,
  1: day01,
};

// Dev-only safety check: warns in the console if a script has fewer than 500 or more than 1500 English words.
if (import.meta.env.DEV) {
  Object.entries(SCRIPTS).forEach(([day, s]) => {
    const c = scriptCounts(s);
    if (c.en < 500 || c.en > 1500) console.warn(`Day ${day} has ${c.en} English words, expected 500 to 1500.`);
  });
}
