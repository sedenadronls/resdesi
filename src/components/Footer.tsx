import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="footer-mark">
        <svg viewBox="0 0 100 100" fill="none">
          <path
            d="M20 70 Q30 40 50 45 Q75 50 80 25 Q82 35 75 40 Q70 50 55 52 Q40 54 35 65 Q30 75 20 70Z"
            stroke="var(--jade-bright)"
            strokeWidth="2.5"
            fill="none"
          />
          <circle cx="76" cy="28" r="2.4" fill="var(--lacquer-bright)" />
        </svg>
        <b>DESI DRAGON</b>
        <span>Desi Taste, Chinese Flame</span>
      </div>

      <div className="footer-links">
        <a href="#about">Our Story</a>
        <a href="#menu">Menu</a>
        <a href="#gallery">Gallery</a>
        <a href="#reserve">Reserve</a>
        <a href="#contact">Contact</a>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Desi Dragon. All rights reserved. &nbsp;|&nbsp; Crafted with{" "}
        <span>fire 🔥</span>
      </div>
    </footer>
  );
}
