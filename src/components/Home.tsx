import { useMemo, useState } from "react";
import { PHASES, TITLES } from "../data/days";
import { SCRIPTS } from "../data/scripts";

interface Props {
  done: number[];
  onOpen: (day: number) => void;
}

export default function Home({ done, onOpen }: Props) {
  const [q, setQ] = useState("");
  const [phase, setPhase] = useState("all");
  const k = q.trim().toLowerCase();

  const match = (d: number) => !k || TITLES[d - 1].toLowerCase().includes(k) || String(d) === k;
  const shown = useMemo(() => PHASES.filter((p) => phase === "all" || p.id === phase), [phase]);

  return (
    <main className="wrap">
      <header className="hero">
        <h1>100 DAYS<br />SPEAKING SCRIPTS</h1>
        <p>Bangla + English. 500 to 1500 words each. By Antonysrm Nafi, Blockveil.</p>
        <div className="meter" role="progressbar" aria-valuenow={done.length} aria-valuemin={0} aria-valuemax={100}>
          <i style={{ width: `${done.length}%` }} />
          <span>{done.length}/100 DONE</span>
        </div>
      </header>

      <input className="search" type="search" placeholder="Search day or topic" value={q}
        onChange={(e) => setQ(e.target.value)} aria-label="Search scripts" />

      <nav className="filters">
        {[{ id: "all", name: "All", color: "#fff" }, ...PHASES].map((p) => (
          <button key={p.id} className={`chip ${phase === p.id ? "on" : ""}`}
            style={{ background: p.color }} onClick={() => setPhase(p.id)}>
            {p.name}
          </button>
        ))}
      </nav>

      {shown.map((p) => {
        const days = Array.from({ length: p.to - p.from + 1 }, (_, i) => p.from + i).filter(match);
        if (!days.length) return null;
        return (
          <section key={p.id}>
            <h2 className="phase" style={{ background: p.color }}>
              {p.name} <small>Days {p.from} to {p.to}</small>
            </h2>
            <div className="grid">
              {days.map((d) => {
                const ready = !!SCRIPTS[d];
                const isDone = done.includes(d);
                return (
                  <button key={d} className={`tile ${ready ? "" : "soon"}`} onClick={() => onOpen(d)}
                    style={{ background: isDone ? "#95E06C" : undefined }}>
                    <b>{d}</b>
                    <span>{TITLES[d - 1]}</span>
                    <em>{isDone ? "DONE" : ready ? "READY" : "SOON"}</em>
                  </button>
                );
              })}
            </div>
          </section>
        );
      })}
    </main>
  );
}
