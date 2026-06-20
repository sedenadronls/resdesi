import { useMemo } from "react";
import "./EmberField.css";

interface Ember {
  left: string;
  duration: string;
  delay: string;
  scale: number;
}

export default function EmberField() {
  const embers = useMemo<Ember[]>(() => {
    return Array.from({ length: 22 }, () => ({
      left: `${Math.random() * 100}%`,
      duration: `${10 + Math.random() * 10}s`,
      delay: `${Math.random() * -18}s`,
      scale: 0.4 + Math.random() * 0.9,
    }));
  }, []);

  return (
    <div className="ember-field" aria-hidden="true">
      {embers.map((e, i) => (
        <span
          key={i}
          className="ember-dot"
          style={{
            left: e.left,
            animationDuration: e.duration,
            animationDelay: e.delay,
            transform: `scale(${e.scale})`,
          }}
        />
      ))}
    </div>
  );
}
