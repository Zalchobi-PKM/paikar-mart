import { useState } from "react";
import ProductCard from "@/components/home/ProductCard";
import { Search } from "lucide-react";

const SELLER_TYPES = [
  { id: "all",              label: "সব"           },
  { id: "b2b",              label: "পাইকারি"      },
  { id: "b2c",              label: "খুচরা"        },
  { id: "nearby_shop",      label: "কাছের দোকান"  },
  { id: "service_provider", label: "সেবা"         },
  { id: "digital_seller",   label: "ডিজিটাল"     },
  { id: "ride_provider",    label: "রাইড"         },
];

const mockProducts = [
  { id: "1", title: "ওয়্যারলেস হেডফোন প্রো", price: 1299, original_price: 1999, seller_type: "b2c",  images: ["https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop"], rating: 4.5, total_reviews: 128, location: "ঢাকা" },
  { id: "2", title: "স্মার্ট ওয়াচ সিরিজ ৫",  price: 2499, original_price: 3500, seller_type: "b2b",  images: ["https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop"], rating: 4.2, total_reviews: 89,  location: "চট্টগ্রাম" },
  { id: "3", title: "ব্লুটুথ স্পিকার মিনি",   price: 899,  original_price: 1299, seller_type: "b2c",  images: ["https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop"], rating: 4.7, total_reviews: 203, location: "সিলেট" },
  { id: "4", title: "কোরিয়ান সিল্ক শাড়ি",   price: 3500, original_price: 4500, seller_type: "b2b",  images: ["https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=400&h=400&fit=crop"], rating: 4.8, total_reviews: 312, location: "নারায়ণগঞ্জ" },
  { id: "5", title: "হোম ডেকোর সেট",          price: 1800, original_price: 2200, seller_type: "nearby_shop", images: ["https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=400&fit=crop"], rating: 4.3, total_reviews: 67, location: "রাজশাহী" },
  { id: "6", title: "গ্রাফিক ডিজাইন সার্ভিস", price: 500,                        seller_type: "service_provider", images: ["https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=400&fit=crop"], rating: 5.0, total_reviews: 45, location: "অনলাইন" },
];

export default function Shop() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  const filtered = mockProducts.filter((p) => {
    const matchSearch = p.title.toLowerCase().includes(search.toLowerCase());
    const matchFilter = filter === "all" || p.seller_type === filter;
    return matchSearch && matchFilter;
  });

  return (
    <div className="pt-3">
      {/* Search */}
      <div className="px-3 mb-3">
        <div
          className="flex items-center gap-2 rounded-xl px-3 py-2.5 border"
          style={{ background: "var(--pm-surface)", borderColor: "var(--pm-border)" }}
        >
          <Search className="w-4 h-4 flex-shrink-0" style={{ color: "var(--pm-text-muted)" }} />
          <input
            type="text"
            placeholder="পণ্য খুঁজুন..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 text-sm bg-transparent outline-none"
            style={{ color: "var(--pm-text)" }}
          />
        </div>
      </div>

      {/* Filter chips */}
      <div className="flex gap-2 overflow-x-auto px-3 pb-3 scrollbar-hide">
        {SELLER_TYPES.map((s) => (
          <button
            key={s.id}
            onClick={() => setFilter(s.id)}
            className="flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-medium border transition-all active:scale-95"
            style={
              filter === s.id
                ? { background: "var(--pm-accent)", color: "#fff", borderColor: "var(--pm-accent)" }
                : { background: "var(--pm-surface)", color: "var(--pm-text-muted)", borderColor: "var(--pm-border)" }
            }
          >
            {s.label}
          </button>
        ))}
      </div>

      {/* Results */}
      {filtered.length === 0 ? (
        <div className="text-center py-16" style={{ color: "var(--pm-text-muted)" }}>
          <p className="text-4xl mb-2">🔍</p>
          <p className="text-sm">কোনো পণ্য পাওয়া যায়নি</p>
        </div>
      ) : (
        <div className="px-3 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}