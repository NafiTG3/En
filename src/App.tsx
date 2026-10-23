import Home from "./components/Home";
import Reader from "./components/Reader";
import { useProgress } from "./hooks/useProgress";
import { useRoute } from "./hooks/useRoute";

export default function App() {
  const { done, toggle } = useProgress();
  const { day, open, swap, home } = useRoute();

  return day === null ? (
    <Home done={done} onOpen={open} />
  ) : (
    <Reader day={day} done={done.includes(day)} onToggle={() => toggle(day)} onBack={home} onNav={swap} />
  );
}
