import JadeDragon from "../three/JadeDragon";
import heroImg from "../assets/hero-palace-bowl.png";
import "./Hero.css";

export default function Hero() {
  return (
    <header className="hero">
      <div className="hero-bg">
        <img src={heroImg} alt="Desi Dragon signature bowl before an ancient Chinese palace" />
      </div>

      <JadeDragon />

      <p className="hero-eyebrow">— 龍 Desi Dragon 龍 —</p>
      <h1 className="hero-title">
        DESI TASTE
        <br />
        <span className="jade-text">CHINESE FLAME</span>
      </h1>
      <p className="hero-sub">
        Where the comfort of Indian spice meets the bold fire of the Chinese wok — an ancient
        flame, a desi soul.
      </p>
      <div className="hero-actions">
        <a href="#menu" className="btn btn-primary">
          View Menu
        </a>
        <a href="#reserve" className="btn btn-ghost">
          Reserve a Table
        </a>
      </div>
      <div className="scroll-cue">
        <span>Descend</span>
        <div className="line" />
      </div>
    </header>
  );
}
