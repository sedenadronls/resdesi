import { useEffect, useState } from "react";
import "./ScrollSpine.css";

export default function ScrollSpine() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(h > 0 ? (window.scrollY / h) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="spine-wrap" aria-hidden="true">
      <div className="spine-track" />
      <div className="spine-fill" style={{ height: `${progress}%` }} />
    </div>
  );
}
