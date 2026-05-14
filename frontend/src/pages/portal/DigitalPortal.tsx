import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, ArrowLeft } from "lucide-react";
import ProductCard from "@/components/home/ProductCard";

const TYPES = ["সব", "eBook", "Course", "Template", "Software", "Music", "Art"];

const mockProducts = [
  { id: "d1", title: "React & TypeScript কোর্স", price: 999, original_price: 1500, seller_type: "digital_seller", images: ["https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=400&fit=crop"], rating: 4.9, total_reviews: 312, location: "অনলাইন" },
  { id: "d2", title: "গ্রাফিক ডিজাইন টেমপ্লেট প্যাক", price: 299, original_price: 500, seller_type: "digital_seller", images: ["https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=400&fit=crop"], rating: 4.7, total_reviews: 189, location: "অনলাইন" },
  { id: "d3", title: "বাংলা ই-বুক সংকলন", price: 150, seller_type: "digital_seller", images: ["https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=400&h=400&fit=crop"], rating: 4.5, total_reviews: 78, location: "অনলাইন" },
  { id: "d4", title: "ওয়েব ডেভেলপমেন্ট স্টার্টার কিট", price: 499, original_price: 799, seller_type: "digital_seller", images: ["https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=400&fit=crop"], rating: 4.8, total_reviews: 145, location: "অনলাইন" },
];

export default function DigitalPortal() {
  const [search, setSearch] = useState("");
  const [type, setType] = useState("সব");
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
          <h1 className="font-extrabold text-lg" style={{ color: "var(--pm-text)" }}>💻 Digital Store</h1>
          <p className="text-[11px]" style={{ color: "var(--pm-text-muted)" }}>eBooks · Courses · Software · Templates</p>
        </div>
      </div>

      <div className="px-3 mb-3">
        <div className="flex items-center gap-2 rounded-2xl px-3.5 py-2.5 border"
          style={{ background: "var(--pm-surface)", borderColor: "var(--pm-border)" }}>
          <Search className="w-4 h-4" style={{ color: "var(--pm-text-muted)" }} />
          <input type="text" placeholder="ডিজিটাল পণ্য খুঁজুন..." value={search}
            onChange={e => setSearch(e.target.value)}
            className="flex-1 text-sm bg-transparent outline-none" style={{ color: "var(--pm-text)" }} />
        </div>
      </div>

      <div className="flex gap-2 overflow-x-auto px-3 pb-3 scrollbar-hide">
        {TYPES.map(t => (
          <button key={t} onClick={() => setType(t)}
            className="flex-shrink-0 px-3.5 py-1.5 rounded-full text-xs font-semibold border transition-all"
            style={type === t
              ? { background: "var(--pm-accent)", color: "#fff", borderColor: "var(--pm-accent)" }
              : { background: "var(--pm-surface)", color: "var(--pm-text-muted)", borderColor: "var(--pm-border)" }
            }>
            {t}
          </button>
        ))}
      </div>

      <div className="px-3 grid grid-cols-2 gap-3">
        {filtered.map(p => <ProductCard key={p.id} product={p} />)}
      </div>
    </div>
  );
}