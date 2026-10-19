import { Fragment } from "react";
import type { Line } from "../types";
import { countWords, scriptCounts, stripGloss } from "../utils";

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

/** Sentences per paragraph in the clean English version. */
const PER_PARAGRAPH = 4;

/**
 * en   = clean English paragraphs (no Bangla hints), made automatically from the same data
 * both = English with hints + full Bangla meaning, sentence by sentence
 * bn   = Bangla only
 */
export default function LinesView({ lines, lang }: Props) {
  const c = scriptCounts({ lines });

  if (lang === "en") {
    const sentences = lines.map((l) => stripGloss(l[0]).replace(/\s+([,.:;?!])/g, "$1").replace(/\s{2,}/g, " ").trim());
    const paras: string[] = [];
    for (let i = 0; i < sentences.length; i += PER_PARAGRAPH) paras.push(sentences.slice(i, i + PER_PARAGRAPH).join(" "));
    return (
      <article className="card en">
        <h3>English<span className={countWords(paras) >= 500 ? "wc ok" : "wc bad"}>{countWords(paras)} words</span></h3>
        {paras.map((p, i) => <p key={i}>{p}</p>)}
      </article>
    );
  }

  return (
    <article className="card">
      <h3>
        {lang === "both" ? "English + বাংলা" : "বাংলা"}
        <span>
          <span className={c.en >= 500 ? "wc ok" : "wc bad"}>EN {c.en} words</span>{" "}
          <span className="wc">BN {c.bn} words</span>
        </span>
      </h3>
      {lines.map(([en, bn], i) => (
        <div className="pair" key={i}>
          {lang === "both" && <p className="l-en"><Gloss text={en} /></p>}
          <p className="l-bn">{bn}</p>
        </div>
      ))}
    </article>
  );
}
