/** Counts words in a list of paragraphs (works for English and Bangla). */
export const countWords = (paras: string[]): number =>
  paras.join(" ").split(/\s+/).filter(Boolean).length;
