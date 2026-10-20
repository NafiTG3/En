/** One sentence pair: [English with (Bangla meaning) next to hard words, full Bangla meaning]. */
export type Line = [en: string, bn: string];

/** A day's script, written sentence by sentence. */
export interface Script {
  lines: Line[];
}

/** A group of 20 days shown as one section on the home page. */
export interface Phase {
  id: string;
  name: string;
  from: number;
  to: number;
  color: string;
}
