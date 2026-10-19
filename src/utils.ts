import type { Script } from "./types";

/** Counts words in a list of paragraphs (works for English and Bangla). */
export const countWords = (paras: string[]): number =>
  paras.join(" ").split(/\s+/).filter(Boolean).length;

/** Removes the (Bangla meaning) hints so only real English words are counted. */
export const stripGloss = (s: string): string => s.replace(/\([^)]*\)/g, "");

/** English and Bangla word counts for any script format. */
export const scriptCounts = (s: Script): { en: number; bn: number } =>
  s.lines
    ? { en: countWords(s.lines.map((l) => stripGloss(l[0]))), bn: countWords(s.lines.map((l) => l[1])) }
    : { en: countWords(s.en ?? []), bn: countWords(s.bn ?? []) };
