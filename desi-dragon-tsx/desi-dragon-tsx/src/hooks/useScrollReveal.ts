import { useEffect, useRef } from "react";
import type { RefObject } from "react";

/**
 * Attaches an IntersectionObserver to the returned ref.
 * Adds the "in" class once the element enters the viewport,
 * which the .reveal CSS class uses to animate opacity/transform.
 */
export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(): RefObject<T | null> {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}
