import dishImg from "../assets/dish-bowl-top.png";
import type { SignatureDish } from "../types/menu.types";
import { useScrollReveal } from "../hooks/useScrollReveal";
import "./DishCard.css";

interface Props {
  dish: SignatureDish;
}

export default function DishCard({ dish }: Props) {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <div className="dish-card reveal" ref={ref}>
      <div className="dish-visual">
        <span className="steam steam-1" />
        <span className="steam steam-2" />
        <span className="steam steam-3" />
        <div className="plate-shadow" />
        <img className="dish-photo" src={dishImg} alt={dish.name} />
        <div className="badge-rec">🔥 Chef's Fire</div>
      </div>
      <div className="dish-info">
        <h3>{dish.name}</h3>
        <p>{dish.description}</p>
        <div className="dish-price">
          <span className="price-pill">{dish.price}</span>
        </div>
      </div>
    </div>
  );
}
