import { useScrollReveal } from "../hooks/useScrollReveal";
import "./About.css";

export default function About() {
  const emblemRef = useScrollReveal<HTMLDivElement>();
  const textRef = useScrollReveal<HTMLDivElement>();

  return (
    <section id="about">
      <div className="about-grid">
        <div className="about-emblem reveal" ref={emblemRef}>
          <div className="ring" />
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <circle cx="100" cy="100" r="90" stroke="#1a2b22" strokeWidth="1" fill="none" />
            <path
              d="M40 140 Q55 90 100 95 Q150 100 160 50 Q165 70 150 80 Q140 100 110 102 Q85 104 75 125 Q65 145 40 140Z"
              stroke="var(--jade-bright)"
              strokeWidth="3"
              fill="none"
            />
            <path d="M150 55 Q158 45 168 50 Q160 56 150 55Z" fill="var(--jade-bright)" />
            <circle cx="155" cy="52" r="2.5" fill="var(--lacquer-bright)" />
          </svg>
        </div>

        <div className="about-text reveal" ref={textRef}>
          <span className="eyebrow">Our Story</span>
          <h2 className="section-title">
            Two Fires, <span className="accent">One Table</span>
          </h2>
          <p>
            Desi Dragon was born from a simple idea — that the comfort of{" "}
            <strong>Indian home-cooked spice</strong> and the roaring fire of{" "}
            <strong>Chinese wok cooking</strong> don't have to live on separate menus. Every dish
            here is a handshake between two great culinary traditions, plated with the same
            respect either deserves alone.
          </p>
          <p>
            From hand-tossed Hakka noodles to a slow Dum Chicken Biryani that fills the room with
            smoke before it reaches your table — this is food cooked the way temple bells ring:
            loud, warm, and exactly on time.
          </p>
          <div className="about-stats">
            <div className="stat">
              <b>60+</b>
              <span>Dishes on the Menu</span>
            </div>
            <div className="stat">
              <b>2</b>
              <span>Cuisines, One Flame</span>
            </div>
            <div className="stat">
              <b>4.6★</b>
              <span>Guest Rating</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
