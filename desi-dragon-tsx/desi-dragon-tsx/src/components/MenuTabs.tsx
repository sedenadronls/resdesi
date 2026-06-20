import "./MenuTabs.css";

interface Props {
  categories: { id: string; label: string }[];
  activeId: string;
  onSelect: (id: string) => void;
}

export default function MenuTabs({ categories, activeId, onSelect }: Props) {
  return (
    <div className="menu-tabs">
      {categories.map((cat) => (
        <button
          key={cat.id}
          className={`menu-tab ${activeId === cat.id ? "active" : ""}`}
          onClick={() => onSelect(cat.id)}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
}
