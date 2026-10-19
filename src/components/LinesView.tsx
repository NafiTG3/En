import { Fragment } from "react";
import type { Line } from "../types";
import { scriptCounts } from "../utils";

/** Highlights the "(meaning)" hints written next to hard words. */
const Gloss = ({ text }: { text: string }) => (
  <>
    {text.split(/(\([^)]*\))/g).map((part, i) =>
      part.startsWith("(") ? (
        <span key={i} className="gloss">{part}</span>
      ) : (
        <Fragment key={i}>{part}</Fragment>
      )
    )}
  </>
);

interface Props {
  lines: Line[];
  lang: "en" | "bn" | "both";
}

/** Sentence by sentence view: English line (with hints), then the full Bangla meaning. */
export default function LinesView({ lines, lang }: Props) {
  const c = scriptCounts({ lines });
  return (
    <article className="card">
      <h3>
        Script
        <span>
          <span className={c.en >= 500 ? "wc ok" : "wc bad"}>EN {c.en} words</span>{" "}
          <span className="wc">BN {c.bn} words</span>
        </span>
      </h3>
      {lines.map(([en, bn], i) => (
        <div className="pair" key={i}>
          {lang !== "bn" && <p className="l-en"><Gloss text={en} /></p>}
          {lang !== "en" && <p className="l-bn">{bn}</p>}
        </div>
      ))}
    </article>
  );
}
