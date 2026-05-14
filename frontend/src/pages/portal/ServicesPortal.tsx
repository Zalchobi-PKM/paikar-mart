import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, ArrowLeft } from "lucide-react";
import ProductCard from "@/components/home/ProductCard";

const TAGS = ["সব", "Plumbing", "Electric", "Cleaning", "AC Repair", "Painting", "IT Support", "Tutoring"];

const mockProducts = [
  { id: "s1", title: "AC সার্ভিসিং ও মেরামত", price: 800, seller_type: "service_provider", images: ["https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400&h=400&fit=crop"], rating: 4.8, total_reviews: 145, location: "ঢাকা" },
  { id: "s2", title: "ইলেকট্রিক্যাল ওয়ার্ক", price: 500, seller_type: "service_provider", images: ["https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop"], rating: 4.6, total_reviews: 89, location: "চট্টগ্রাম" },
  { id: "s3", title: "হোম ক্লিনিং সার্ভিস", price: 1200, seller_type: "service_provider", images: ["https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=400&fit=crop"], rating: 4.9, total_reviews: 234, location: "সিলেট" },
  { id: "s4", title: "প্লাম্বিং সার্ভিস", price: 400, seller_type: "service_provider", images: ["https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&h=400&fit=crop"], rating: 4.5, total_reviews: 67, location: "রাজশাহী" },
];

export default function ServicesPortal() {
  const [search, setSearch] = useState("");
  const [tag, setTag] = useState("সব");
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
          <h1 className="font-extrabold text-lg" style={{ color: "var(--pm-text)" }}>🔧 Services</h1>
          <p className="text-[11px]" style={{ color: "var(--pm-text-muted)" }}>Book trusted service providers</p>
        </div>
      </div>

      <div className="px-3 mb-3">
        <div className="flex items-center gap-2 rounded-2xl px-3.5 py-2.5 border"
          style={{ background: "var(--pm-surface)", borderColor: "var(--pm-border)" }}>
          <Search className="w-4 h-4" style={{ color: "var(--pm-text-muted)" }} />
          <input type="text" placeholder="সার্ভিস খুঁজুন..." value={search}
            onChange={e => setSearch(e.target.value)}
            className="flex-1 text-sm bg-transparent outline-none" style={{ color: "var(--pm-text)" }} />
        </div>
      </div>

      <div className="flex gap-2 overflow-x-auto px-3 pb-3 scrollbar-hide">
        {TAGS.map(t => (
          <button key={t} onClick={() => setTag(t)}
            className="flex-shrink-0 px-3.5 py-1.5 rounded-full text-xs font-semibold border transition-all"
            style={tag === t
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