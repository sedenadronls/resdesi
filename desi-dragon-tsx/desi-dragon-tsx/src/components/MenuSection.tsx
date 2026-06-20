import { useState } from "react";
import { menu } from "../data/menu";
import MenuTabs from "./MenuTabs";
import { useScrollReveal } from "../hooks/useScrollReveal";
import "./MenuSection.css";

export default function MenuSection() {
  const [activeId, setActiveId] = useState(menu[0].id);
  const headRef = useScrollReveal<HTMLDivElement>();
  const tabsRef = useScrollReveal<HTMLDivElement>();

  const activeCategory = menu.find((c) => c.id === activeId) ?? menu[0];

  return (
    <section id="menu">
      <div className="section-head reveal" ref={headRef}>
        <span className="eyebrow">The Full Spread</span>
        <h2 className="section-title">
          Our <span className="accent">Menu</span>
        </h2>
        <p className="section-desc">Prices shown as Half / Full where applicable, in ₹.</p>
        <div className="divider" />
      </div>

      <div className="reveal" ref={tabsRef}>
        <MenuTabs
          categories={menu.map((c) => ({ id: c.id, label: c.label }))}
          activeId={activeId}
          onSelect={setActiveId}
        />
      </div>

      <div className="menu-panel">
        {activeCategory.items.map((item) => (
          <div className="menu-row" key={item.name}>
            <div className="menu-row-left">
              <h4>{item.name}</h4>
              {item.chefPick && <span className="tag-rec">Chef Pick</span>}
            </div>
            <div className="menu-row-price">₹ {item.price}</div>
          </div>
        ))}
      </div>

      <p className="menu-note">
        Prices may vary slightly with seasonal ingredient cost. Ask your server for today's
        specials.
      </p>
    </section>
  );
}
