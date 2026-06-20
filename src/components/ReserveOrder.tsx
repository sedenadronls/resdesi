import { useState } from "react";
import type { FormEvent } from "react";
import swiggyLogo from "../assets/swiggy-logo.png";
import zomatoLogo from "../assets/zomato-logo.png";
import { useScrollReveal } from "../hooks/useScrollReveal";
import "./ReserveOrder.css";

// Placeholders — replace with your real store links
const SWIGGY_LINK = "#";
const ZOMATO_LINK = "#";

export default function ReserveOrder() {
  const [submitted, setSubmitted] = useState(false);
  const headRef = useScrollReveal<HTMLDivElement>();
  const wrapRef = useScrollReveal<HTMLDivElement>();

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
    e.currentTarget.reset();
    setTimeout(() => setSubmitted(false), 4000);
  }

  return (
    <section id="reserve">
      <div className="section-head reveal" ref={headRef}>
        <span className="eyebrow">Join Us</span>
        <h2 className="section-title">
          Reserve or <span className="accent">Order In</span>
        </h2>
        <div className="divider" />
      </div>

      <div className="reserve-wrap reveal" ref={wrapRef}>
        <div className="reserve-form">
          <h3>Book a Table</h3>
          <form onSubmit={handleSubmit}>
            <div className="row-2">
              <div className="field">
                <label>Full Name</label>
                <input type="text" required placeholder="Your name" />
              </div>
              <div className="field">
                <label>Phone</label>
                <input type="tel" required placeholder="+91 00000 00000" />
              </div>
            </div>
            <div className="row-2">
              <div className="field">
                <label>Date</label>
                <input type="date" required />
              </div>
              <div className="field">
                <label>Time</label>
                <input type="time" required />
              </div>
            </div>
            <div className="field">
              <label>Party Size</label>
              <select required defaultValue="">
                <option value="" disabled>
                  Select guests
                </option>
                <option>1–2 Guests</option>
                <option>3–4 Guests</option>
                <option>5–6 Guests</option>
                <option>7+ Guests</option>
              </select>
            </div>
            <button className="submit-btn" type="submit">
              {submitted ? "Request Received ✓" : "Confirm Reservation"}
            </button>
          </form>
        </div>

        <div className="reserve-side">
          <div>
            <h3>Prefer Delivery?</h3>
            <p>Order the same flame, straight to your door.</p>
          </div>
          <div className="order-platforms">
            <a href={SWIGGY_LINK} className="platform-btn" target="_blank" rel="noreferrer">
              <img src={swiggyLogo} alt="Swiggy" />
              <span>Order on Swiggy</span>
            </a>
            <a href={ZOMATO_LINK} className="platform-btn" target="_blank" rel="noreferrer">
              <img src={zomatoLogo} alt="Zomato" />
              <span>Order on Zomato</span>
            </a>
          </div>
          <p className="side-note">Delivery links open our store on each platform in a new tab.</p>
        </div>
      </div>
    </section>
  );
}
