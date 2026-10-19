/** One sentence pair: [English with (Bangla meaning) next to hard words, full Bangla meaning]. */
export type Line = [en: string, bn: string];

/**
 * A day's script. New format: `lines` (sentence by sentence).
 * Old format (Day 1 for now): `en` and `bn` paragraph lists.
 */
export interface Script {
  lines?: Line[];
  en?: string[];
  bn?: string[];
}

/** A group of 20 days shown as one section on the home page. */
export interface Phase {
  id: string;
  name: string;
  from: number;
  to: number;
  color: string;
}
