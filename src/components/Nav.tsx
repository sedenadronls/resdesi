import { useEffect, useState } from "react";
import "./Nav.css";

const links = [
  { href: "#about", label: "Our Story" },
  { href: "#signature", label: "Signature" },
  { href: "#menu", label: "Menu" },
  { href: "#gallery", label: "Gallery" },
  { href: "#reviews", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`${scrolled ? "scrolled" : ""} ${open ? "open" : ""}`}>
      <div className="brand">
        <div className="brand-mark">
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20 70 Q30 40 50 45 Q75 50 80 25 Q82 35 75 40 Q70 50 55 52 Q40 54 35 65 Q30 75 20 70Z"
              stroke="var(--jade-bright)"
              strokeWidth="2.5"
              fill="none"
            />
            <circle cx="76" cy="28" r="2.4" fill="var(--lacquer-bright)" />
          </svg>
        </div>
        <div className="brand-name">
          DESI DRAGON
          <span>Indian &amp; Chinese Cuisine</span>
        </div>
      </div>

      <ul className="nav-links">
        {links.map((l) => (
          <li key={l.href}>
            <a href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          </li>
        ))}
      </ul>

      <a href="#reserve" className="nav-cta">
        Reserve Table
      </a>

      <button
        className="burger"
        aria-label="Toggle menu"
        onClick={() => setOpen((o) => !o)}
      >
        <span />
        <span />
        <span />
      </button>
    </nav>
  );
}
