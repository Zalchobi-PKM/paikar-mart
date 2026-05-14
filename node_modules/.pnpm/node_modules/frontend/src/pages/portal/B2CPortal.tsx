import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, ArrowLeft } from "lucide-react";
import ProductCard from "@/components/home/ProductCard";

const CATEGORIES = ["সব", "Electronics", "Fashion", "Home", "Beauty", "Sports"];

const mockProducts = [
  { id: "c1", title: "ওয়্যারলেস হেডফোন", price: 1299, original_price: 1999, seller_type: "b2c", images: ["https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop"], rating: 4.5, total_reviews: 128, location: "ঢাকা" },
  { id: "c2", title: "কোরিয়ান ফেস ওয়াশ", price: 350, original_price: 500, seller_type: "b2c", images: ["https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400&h=400&fit=crop"], rating: 4.7, total_reviews: 203, location: "সিলেট" },
  { id: "c3", title: "স্পোর্টস শুজ", price: 1800, original_price: 2500, seller_type: "b2c", images: ["https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop"], rating: 4.3, total_reviews: 95, location: "চট্টগ্রাম" },
  { id: "c4", title: "হোম ডেকোর সেট", price: 1200, original_price: 1600, seller_type: "b2c", images: ["https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=400&fit=crop"], rating: 4.2, total_reviews: 67, location: "রাজশাহী" },
];

export default function B2CPortal() {
  const [search, setSearch] = useState("");
  const [cat, setCat] = useState("সব");
  const navigate = useNavigate();

  const filtered = mockProducts.filter(p =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="pt-2 pb-4">
      <div className="flex items-center gap-3 px-3 mb-4">
        <button onClick={() => navigate("/")}
          className="w-8 h-8 rounded-full flex items-center justify-center border active:scale-95"
          style={{ background: "var(--pm-surface)", borderColor: "var(--pm-border)" }}>
          <ArrowLeft className="w-4 h-4" style={{ color: "var(--pm-text)" }} />
        </button>
        <div>
          <h1 className="font-extrabold text-lg" style={{ color: "var(--pm-text)" }}>🛍️ Retail Shopping</h1>
          <p className="text-[11px]" style={{ color: "var(--pm-text-muted)" }}>Single items · Best prices · Fast delivery</p>
        </div>
      </div>

      <div className="px-3 mb-3">
        <div className="flex items-center gap-2 rounded-2xl px-3.5 py-2.5 border"
          style={{ background: "var(--pm-surface)", borderColor: "var(--pm-border)" }}>
          <Search className="w-4 h-4" style={{ color: "var(--pm-text-muted)" }} />
          <input type="text" placeholder="পণ্য খুঁজুন..." value={search}
            onChange={e => setSearch(e.target.value)}
            className="flex-1 text-sm bg-transparent outline-none" style={{ color: "var(--pm-text)" }} />
        </div>
      </div>

      <div className="flex gap-2 overflow-x-auto px-3 pb-3 scrollbar-hide">
        {CATEGORIES.map(c => (
          <button key={c} onClick={() => setCat(c)}
            className="flex-shrink-0 px-3.5 py-1.5 rounded-full text-xs font-semibold border transition-all active:scale-95"
            style={cat === c
              ? { background: "var(--pm-accent)", color: "#fff", borderColor: "var(--pm-accent)" }
              : { background: "var(--pm-surface)", color: "var(--pm-text-muted)", borderColor: "var(--pm-border)" }
            }>
            {c}
          </button>
        ))}
      </div>

      <div className="px-3 grid grid-cols-2 gap-3">
        {filtered.map(p => <ProductCard key={p.id} product={p} />)}
      </div>
    </div>
  );
}