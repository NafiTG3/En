import { useCallback, useEffect, useRef, useState } from "react";

/** Reads the day from the URL hash: "#/day/5" gives 5, anything else gives null (home page). */
const parse = (): number | null => {
  const m = /^#\/day\/(\d{1,3})$/.exec(window.location.hash);
  const d = m ? Number(m[1]) : null;
  return d !== null && d >= 1 && d <= 100 ? d : null;
};

/**
 * Tiny router so every day is its own page with its own URL (works on GitHub Pages).
 * The phone back button goes back to the previous page instead of leaving the site.
 */
export function useRoute() {
  const [day, setDay] = useState<number | null>(parse);
  const homeScroll = useRef(0);

  // Browser back / forward buttons
  useEffect(() => {
    const sync = () => setDay(parse());
    window.addEventListener("popstate", sync);
    window.addEventListener("hashchange", sync);
    return () => {
      window.removeEventListener("popstate", sync);
      window.removeEventListener("hashchange", sync);
    };
  }, []);

  // When we return to the home page, restore where the user was scrolled
  useEffect(() => {
    if (day === null) requestAnimationFrame(() => window.scrollTo(0, homeScroll.current));
  }, [day]);

  /** Open a day from the home page (adds a history entry, so Back returns to home). */
  const open = useCallback((d: number) => {
    homeScroll.current = window.scrollY;
    history.pushState({ app: true }, "", `#/day/${d}`);
    setDay(d);
  }, []);

  /** Previous / Next day (replaces the entry, so Back still returns to home in one tap). */
  const swap = useCallback((d: number) => {
    history.replaceState({ app: true }, "", `#/day/${d}`);
    setDay(d);
  }, []);

  /** Go to the home page. */
  const home = useCallback(() => {
    if (history.state?.app) history.back();
    else {
      history.replaceState(null, "", "#/");
      setDay(null);
    }
  }, []);

  return { day, open, swap, home };
}
