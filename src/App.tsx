import { useState } from "react";
import Home from "./components/Home";
import Reader from "./components/Reader";
import { useProgress } from "./hooks/useProgress";

export default function App() {
  const { done, toggle } = useProgress();
  const [day, setDay] = useState<number | null>(null);

  return day === null ? (
    <Home done={done} onOpen={setDay} />
  ) : (
    <Reader
      day={day}
      done={done.includes(day)}
      onToggle={() => toggle(day)}
      onBack={() => setDay(null)}
      onNav={setDay}
    />
  );
}
