import { useScrollReveal } from "../hooks/useScrollReveal";
import "./Contact.css";

export default function Contact() {
  const headRef = useScrollReveal<HTMLDivElement>();
  const cardRef = useScrollReveal<HTMLDivElement>();
  const mapRef = useScrollReveal<HTMLDivElement>();

  return (
    <section id="contact">
      <div className="section-head reveal" ref={headRef}>
        <span className="eyebrow">Find Us</span>
        <h2 className="section-title">
          Visit the <span className="accent">Dragon's Den</span>
        </h2>
        <div className="divider" />
      </div>

      <div className="contact-grid">
        <div className="contact-card reveal" ref={cardRef}>
          <div className="contact-item">
            <div className="contact-icon">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 12-9 12s-9-5-9-12a9 9 0 1 1 18 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <div className="contact-text">
              <h4>Address</h4>
              <p>
                Shop No. 00, Main Road,
                <br />
                Your Locality, Patna, Bihar — 800000
              </p>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </div>
            <div className="contact-text">
              <h4>Phone &amp; WhatsApp</h4>
              <a href="tel:+910000000000">+91 00000 00000</a>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16v16H4V4Z" />
                <path d="m4 7 8 6 8-6" />
              </svg>
            </div>
            <div className="contact-text">
              <h4>Email</h4>
              <a href="mailto:hello@desidragon.com">hello@desidragon.com</a>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" />
              </svg>
            </div>
            <div className="contact-text">
              <h4>Hours</h4>
              <p>Mon – Sun: 12:00 PM – 11:00 PM</p>
            </div>
          </div>

          <div className="social-row">
            <a href="#" className="social-circle" title="Instagram">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>
            </a>
            <a href="#" className="social-circle" title="Facebook">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3Z" />
              </svg>
            </a>
            <a href="#" className="social-circle" title="WhatsApp">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5Z" />
              </svg>
            </a>
            <a href="#" className="social-circle" title="Google Maps">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M21 10c0 7-9 12-9 12s-9-5-9-12a9 9 0 1 1 18 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </a>
          </div>
        </div>

        <div className="map-frame reveal" ref={mapRef}>
          <div className="map-pin-label">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 10c0 7-9 12-9 12s-9-5-9-12a9 9 0 1 1 18 0Z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            Desi Dragon, Patna
          </div>
          <iframe
            loading="lazy"
            title="Desi Dragon location"
            src="https://maps.google.com/maps?q=Patna%2C%20Bihar&t=&z=13&ie=UTF8&iwloc=&output=embed"
          />
        </div>
      </div>
    </section>
  );
}
