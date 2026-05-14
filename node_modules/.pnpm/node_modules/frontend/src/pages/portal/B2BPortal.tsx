import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, ArrowLeft } from "lucide-react";
import ProductCard from "@/components/home/ProductCard";

const mockProducts = [
  { id: "b1", title: "বাল্ক কটন টি-শার্ট (১০০ পিস)", price: 15000, original_price: 20000, seller_type: "b2b", images: ["https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=400&h=400&fit=crop"], rating: 4.5, total_reviews: 89, location: "নারায়ণগঞ্জ" },
  { id: "b2", title: "হোলসেল ইলেকট্রনিক্স লট", price: 50000, original_price: 65000, seller_type: "b2b", images: ["https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop"], rating: 4.3, total_reviews: 45, location: "ঢাকা" },
  { id: "b3", title: "ফ্যাক্টরি ডাইরেক্ট জুতা (৫০ পেয়ার)", price: 25000, original_price: 32000, seller_type: "b2b", images: ["https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop"], rating: 4.6, total_reviews: 112, location: "চট্টগ্রাম" },
  { id: "b4", title: "পাইকারি গৃহস্থালি পণ্য সেট", price: 8000, original_price: 11000, seller_type: "b2b", images: ["https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=400&fit=crop"], rating: 4.1, total_reviews: 67, location: "রাজশাহী" },
];

export default function B2BPortal() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const filtered = mockProducts.filter(p =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="pt-2 pb-4">
      <div className="flex items-center gap-3 px-3 mb-4">
        <button onClick={() => navigate("/")}
          className="w-8 h-8 rounded-full flex items-center justify-center border transition-all active:scale-95"
          style={{ background: "var(--pm-surface)", borderColor: "var(--pm-border)" }}>
          <ArrowLeft className="w-4 h-4" style={{ color: "var(--pm-text)" }} />
        </button>
        <div>
          <h1 className="font-extrabold text-lg leading-tight" style={{ color: "var(--pm-text)" }}>🏭 Wholesale B2B</h1>
          <p className="text-[11px]" style={{ color: "var(--pm-text-muted)" }}>Bulk buying · Trade deals · Factory direct</p>
        </div>
      </div>

      {/* Stats */}
      <div className="px-3 mb-4 flex gap-3">
        {[
          { label: "মোট পণ্য", value: mockProducts.length },
          { label: "Avg. MOQ", value: "৫০ পিস" },
          { label: "ভেরিফাইড", value: "৮০%" },
        ].map(s => (
          <div key={s.label} className="flex-1 rounded-2xl p-2.5 border text-center"
            style={{ background: "var(--pm-surface)", borderColor: "var(--pm-border)" }}>
            <p className="font-bold text-sm" style={{ color: "var(--pm-accent)" }}>{s.value}</p>
            <p className="text-[9px] mt-0.5" style={{ color: "var(--pm-text-muted)" }}>{s.label}</p>
          </div>
        ))}
      </div>

      <div className="px-3 mb-3">
        <div className="flex items-center gap-2 rounded-2xl px-3.5 py-2.5 border"
          style={{ background: "var(--pm-surface)", borderColor: "var(--pm-border)" }}>
          <Search className="w-4 h-4" style={{ color: "var(--pm-text-muted)" }} />
          <input type="text" placeholder="পাইকারি পণ্য খুঁজুন..."
            value={search} onChange={e => setSearch(e.target.value)}
            className="flex-1 text-sm bg-transparent outline-none" style={{ color: "var(--pm-text)" }} />
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-4xl mb-2">🏭</p>
          <p className="text-sm" style={{ color: "var(--pm-text-muted)" }}>কোনো পণ্য পাওয়া যায়নি</p>
        </div>
      ) : (
        <div className="px-3 grid grid-cols-2 gap-3">
          {filtered.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
      )}
    </div>
  );
}