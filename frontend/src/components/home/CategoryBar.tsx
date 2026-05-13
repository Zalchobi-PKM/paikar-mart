const categories = [
  { id: "all",              label: "সব",           emoji: "🏠" },
  { id: "b2b",              label: "পাইকারি",      emoji: "🏭" },
  { id: "b2c",              label: "খুচরা",        emoji: "🛍️" },
  { id: "nearby_shop",      label: "কাছের দোকান",  emoji: "🏪" },
  { id: "service_provider", label: "সেবা",         emoji: "🔧" },
  { id: "digital_seller",   label: "ডিজিটাল",     emoji: "💻" },
  { id: "ride_provider",    label: "রাইড",         emoji: "🚗" },
];

interface CategoryBarProps {
  selected: string;
  onSelect: (id: string) => void;
}

export default function CategoryBar({ selected, onSelect }: CategoryBarProps) {
  return (
    <div className="flex gap-2 overflow-x-auto px-4 py-3 scrollbar-hide">
      {categories.map((cat) => (
        <button
          key={cat.id}
          onClick={() => onSelect(cat.id)}
          className={`flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium transition-all border ${
            selected === cat.id
              ? "border-orange-500 shadow"
              : "hover:border-orange-300"
          }`}
          style={
            selected === cat.id
              ? { background: "var(--pm-accent)", color: "#fff", borderColor: "var(--pm-accent)" }
              : { background: "var(--pm-surface)", color: "var(--pm-text-muted)", borderColor: "var(--pm-border)" }
          }
        >
          <span>{cat.emoji}</span>
          <span>{cat.label}</span>
        </button>
      ))}
    </div>
  );
}