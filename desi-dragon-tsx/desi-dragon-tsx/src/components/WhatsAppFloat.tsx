import "./WhatsAppFloat.css";

// Placeholder — replace with your real WhatsApp number (country code, no + or spaces)
const WHATSAPP_NUMBER = "910000000000";

export default function WhatsAppFloat() {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20Desi%20Dragon!%20I'd%20like%20to%20know%20more.`;

  return (
    <a href={href} className="float-wa" title="Chat on WhatsApp" target="_blank" rel="noreferrer">
      <svg viewBox="0 0 24 24">
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.96.57 3.78 1.55 5.32L2 22l4.93-1.62a9.8 9.8 0 0 0 5.11 1.4h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2zm5.79 14.05c-.25.7-1.43 1.34-1.97 1.42-.5.08-1.13.11-1.83-.12-.42-.13-.96-.31-1.65-.6-2.9-1.25-4.79-4.17-4.93-4.36-.14-.19-1.18-1.57-1.18-3 0-1.42.74-2.12 1-2.41.26-.29.57-.36.76-.36.19 0 .38 0 .55.01.18.01.41-.07.64.49.25.6.85 2.07.92 2.22.07.15.12.33.02.53-.1.2-.15.32-.3.49-.15.17-.31.38-.44.51-.15.15-.3.31-.13.6.17.3.78 1.28 1.67 2.08 1.15 1.03 2.12 1.35 2.42 1.5.3.15.48.13.65-.05.22-.23.49-.61.77-.98.2-.26.43-.3.72-.18.3.12 1.88.89 2.2 1.05.32.16.53.24.61.37.08.13.08.75-.17 1.45z" />
      </svg>
    </a>
  );
}
