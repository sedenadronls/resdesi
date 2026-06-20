import { signatureDishes } from "../data/menu";
import DishCard from "./DishCard";
import { useScrollReveal } from "../hooks/useScrollReveal";
import "./SignatureDishes.css";

export default function SignatureDishes() {
  const headRef = useScrollReveal<HTMLDivElement>();

  return (
    <section id="signature" className="signature-section">
      <div className="section-head reveal" ref={headRef}>
        <span className="eyebrow">Chef's Fire</span>
        <h2 className="section-title">
          Signature <span className="accent">Dishes</span>
        </h2>
        <div className="divider" />
      </div>
      <div className="dish-grid">
        {signatureDishes.map((dish) => (
          <DishCard key={dish.name} dish={dish} />
        ))}
      </div>
    </section>
  );
}
