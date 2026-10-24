import { useEffect, useState } from "react";

const KEY = "blockveil-done";

/** Remembers which days are completed (saved in the browser). */
export function useProgress() {
  const [done, setDone] = useState<number[]>(() => {
    try {
      return JSON.parse(localStorage.getItem(KEY) ?? "[]");
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(KEY, JSON.stringify(done));
    } catch {
      /* storage can be blocked, ignore */
    }
  }, [done]);

  const toggle = (d: number) =>
    setDone((p) => (p.includes(d) ? p.filter((x) => x !== d) : [...p, d]));

  return { done, toggle };
}
