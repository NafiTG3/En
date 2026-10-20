import { useEffect, useState } from "react";
import { TITLES } from "../data/days";
import { SCRIPTS } from "../data/scripts";
import LinesView, { type View } from "./LinesView";

interface Props {
  day: number;
  done: boolean;
  onToggle: () => void;
  onBack: () => void;
  onNav: (day: number) => void;
}

const LABELS: Record<View, string> = { all: "ALL", en: "ENGLISH", mix: "ENG + বাংলা" };

// Teleprompter speed in pixels per tick (every 30ms). 0.35 is 65% slower than the old 1 px.
const SPEED = 0.35;

export default function Reader({ day, done, onToggle, onBack, onNav }: Props) {
  const [view, setView] = useState<View>("all");
  const [size, setSize] = useState(20);
  const [auto, setAuto] = useState(false); // teleprompter
  const s = SCRIPTS[day];

  // Reset scroll and stop the teleprompter when the day changes
  useEffect(() => { window.scrollTo(0, 0); setAuto(false); }, [day]);

  // Teleprompter: slow automatic scroll
  useEffect(() => {
    if (!auto) return;
    // Keep the exact position in `y`, because browsers round tiny scrollBy values to 0.
    let y = window.scrollY;
    const id = setInterval(() => {
      if (Math.abs(window.scrollY - y) > 2) y = window.scrollY; // user scrolled by hand
      y += SPEED;
      window.scrollTo(0, y);
    }, 30);
    return () => clearInterval(id);
  }, [auto]);

  return (
    <main className="wrap">
      <div className="toolbar">
        <button className="btn" onClick={onBack}>ALL DAYS</button>
        {(Object.keys(LABELS) as View[]).map((v) => (
          <button key={v} className={`btn ${view === v ? "on" : ""}`} onClick={() => setView(v)}>{LABELS[v]}</button>
        ))}
        <button className="btn" onClick={() => setSize((v) => Math.max(14, v - 2))} aria-label="Smaller text">A-</button>
        <button className="btn" onClick={() => setSize((v) => Math.min(44, v + 2))} aria-label="Larger text">A+</button>
        <button className={`btn pri ${auto ? "on" : ""}`} onClick={() => setAuto((v) => !v)}>
          {auto ? "STOP" : "TELEPROMPTER"}
        </button>
      </div>

      <h1 className="title">DAY {day}<small>{TITLES[day - 1]}</small></h1>

      <div style={{ fontSize: size }}>
        {s ? <LinesView lines={s.lines} view={view} /> : <div className="card">This script is not written yet. It will be added soon.</div>}
      </div>

      <div className="toolbar end">
        <button className="btn" disabled={day === 1} onClick={() => onNav(day - 1)}>PREVIOUS</button>
        <button className={`btn pri ${done ? "on" : ""}`} onClick={onToggle}>{done ? "COMPLETED" : "MARK AS DONE"}</button>
        <button className="btn" disabled={day === 100} onClick={() => onNav(day + 1)}>NEXT</button>
      </div>
    </main>
  );
}
