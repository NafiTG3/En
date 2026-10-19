/** One day's script, each language is a list of paragraphs. */
export interface Script {
  en: string[];
  bn: string[];
}

/** A group of 20 days shown as one section on the home page. */
export interface Phase {
  id: string;
  name: string;
  from: number;
  to: number;
  color: string;
}
