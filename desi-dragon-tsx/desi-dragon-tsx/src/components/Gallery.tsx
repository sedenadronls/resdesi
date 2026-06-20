import heroImg from "../assets/hero-palace-bowl.png";
import dishImg from "../assets/dish-bowl-top.png";
import { useScrollReveal } from "../hooks/useScrollReveal";
import "./Gallery.css";

const iconPlaceholder = (
  <svg viewBox="0 0 24 24" fill="none" stroke="var(--jade-bright)" strokeWidth="1.5">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z" />
    <path d="M9 22V12h6v10" />
  </svg>
);

const spots: { label: string; img?: string }[] = [
  { label: "Desi Dragon Signature Bowl", img: heroImg },
  { label: "Hakka Noodles, Top Shot", img: dishImg },
  { label: "Dragon Hall Interior" },
  { label: "Tandoor Corner" },
  { label: "Lantern-lit Seating" },
  { label: "Spice Bar" },
];

export default function Gallery() {
  const headRef = useScrollReveal<HTMLDivElement>();
  const gridRef = useScrollReveal<HTMLDivElement>();

  return (
    <section id="gallery">
      <div className="section-head reveal" ref={headRef}>
        <span className="eyebrow">A Glimpse Inside</span>
        <h2 className="section-title">
          From the <span className="accent">Flame</span>
        </h2>
        <div className="divider" />
      </div>

      <div className="gallery-grid reveal" ref={gridRef}>
        {spots.map((spot) => (
          <div className="g-item" key={spot.label} data-label={spot.label}>
            {spot.img ? <img src={spot.img} alt={spot.label} /> : iconPlaceholder}
          </div>
        ))}
      </div>
    </section>
  );
}
