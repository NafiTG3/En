import { Fragment } from "react";
import type { Line } from "../types";
import { countWords, scriptCounts, stripGloss } from "../utils";

/** all = both sections, en = clean English only, mix = Bangla + English only */
export type View = "all" | "en" | "mix";

/** Highlights the "(meaning)" hints written next to hard words. */
const Gloss = ({ text }: { text: string }) => (
  <>
    {text.split(/(\([^)]*\))/g).map((part, i) =>
      part.startsWith("(") ? <span key={i} className="gloss">{part}</span> : <Fragment key={i}>{part}</Fragment>
    )}
  </>
);

/** Sentences per paragraph in the clean English section. */
const PER_PARAGRAPH = 4;

export default function LinesView({ lines, view }: { lines: Line[]; view: View }) {
  const c = scriptCounts({ lines });

  // Clean English paragraphs, built from the same data (hints removed)
  const sentences = lines.map((l) =>
    stripGloss(l[0]).replace(/\s+([,.:;?!])/g, "$1").replace(/\s{2,}/g, " ").trim()
  );
  const paras: string[] = [];
  for (let i = 0; i < sentences.length; i += PER_PARAGRAPH) paras.push(sentences.slice(i, i + PER_PARAGRAPH).join(" "));

  return (
    <>
      {view !== "mix" && (
        <article className="card en">
          <h3>English<span className={c.en >= 500 ? "wc ok" : "wc bad"}>{countWords(paras)} words</span></h3>
          {paras.map((p, i) => <p key={i}>{p}</p>)}
        </article>
      )}
      {view !== "en" && (
        <article className="card">
          <h3>Bangla + English<span className="wc">BN {c.bn} words</span></h3>
          {lines.map(([en, bn], i) => (
            <div className="pair" key={i}>
              <p className="l-en"><Gloss text={en} /></p>
              <p className="l-bn">{bn}</p>
            </div>
          ))}
        </article>
      )}
    </>
  );
}
