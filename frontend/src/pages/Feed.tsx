import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Heart, ShoppingCart, Star, MapPin, Repeat2 } from "lucide-react";

const TYPE_COLOR: Record<string, string> = {
  b2b: "#3b82f6", b2c: "#22c55e", nearby_shop: "#eab308",
  service_provider: "#a855f7", digital_seller: "#6366f1", ride_provider: "#f97316",
};
const TYPE_LABEL: Record<string, string> = {
  b2b: "Wholesale", b2c: "Retail", nearby_shop: "Nearby",
  service_provider: "Service", digital_seller: "Digital", ride_provider: "Ride",
};

const mockProducts = [
  { id: "1", title: "ওয়্যারলেস হেডফোন প্রো", seller_name: "TechZone BD", seller_type: "b2c", location: "ঢাকা", price: 1299, original_price: 1599, images: ["https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=450&fit=crop"], description: "হাই-কোয়ালিটি সাউন্ড, নয়েজ ক্যান্সেলিং।", rating: 4.5, total_reviews: 128 },
  { id: "2", title: "কোরিয়ান সিল্ক শাড়ি",   seller_name: "Fashion Hub",  seller_type: "b2b", location: "নারায়ণগঞ্জ", price: 3500, original_price: 4200, images: ["https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=600&h=450&fit=crop"], description: "প্রিমিয়াম কোয়ালিটি সিল্ক।", rating: 4.8, total_reviews: 312 },
  { id: "3", title: "স্মার্ট ওয়াচ সিরিজ ৫",  seller_name: "GadgetWorld", seller_type: "b2c", location: "চট্টগ্রাম", price: 2499, original_price: 3000, images: ["https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&h=450&fit=crop"], description: "হেলথ ট্র্যাকিং, GPS, ওয়াটারপ্রুফ।", rating: 4.2, total_reviews: 89 },
];

const filters = [
  { id: "all",              label: "সব"       },
  { id: "b2c",              label: "খুচরা"    },
  { id: "b2b",              label: "পাইকারি"  },
  { id: "nearby_shop",      label: "কাছের"    },
  { id: "service_provider", label: "সেবা"     },
  { id: "digital_seller",   label: "ডিজিটাল" },
  { id: "ride_provider",    label: "রাইড"     },
];

function FeedCard({ product }: { product: any }) {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const navigate = useNavigate();
  const color = TYPE_COLOR[product.seller_type] || "#f97316";
  const label = TYPE_LABEL[product.seller_type] || "Other";
  const discount = product.original_price && product.original_price > product.price
    ? Math.round(((product.original_price - product.price) / product.original_price) * 100) : null;

  return (
    <div className="rounded-2xl overflow-hidden border mb-4"
      style={{ background: "var(--pm-surface)", borderColor: "var(--pm-border)", backdropFilter: "blur(16px)" }}>
      {/* Header */}
      <div className="flex items-center gap-3 px-4 py-3">
        <div className="w-9 h-9 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
          style={{ background: color }}>
          {(product.seller_name || "S")[0].toUpperCase()}
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-bold truncate" style={{ color: "var(--pm-text)" }}>{product.seller_name}</p>
          <div className="flex items-center gap-1">
            <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-full text-white" style={{ background: color }}>{label}</span>
            {product.location && (
              <>
                <MapPin className="w-2.5 h-2.5 ml-1" style={{ color: "var(--pm-text-muted)" }} />
                <span className="text-[10px] truncate" style={{ color: "var(--pm-text-muted)" }}>{product.location}</span>
              </>
            )}
          </div>
        </div>
        <span className="text-[10px]" style={{ color: "var(--pm-text-muted)" }}>এইমাত্র</span>
      </div>

      {/* Image */}
      <div className="relative w-full cursor-pointer" style={{ aspectRatio: "4/3" }}
        onClick={() => navigate(`/product/${product.id}`)}>
        <img src={product.images?.[0]} alt={product.title} className="w-full h-full object-cover" loading="lazy" />
        {discount && (
          <span className="absolute top-3 left-3 bg-red-500 text-white text-[11px] font-black px-2 py-1 rounded-xl">
            -{discount}%
          </span>
        )}
      </div>

      {/* Actions */}
      <div className="flex items-center gap-4 px-4 py-2.5">
        <button onClick={() => setLiked(v => !v)} className="flex items-center gap-1.5 active:scale-90">
          <Heart className={`w-5 h-5 ${liked ? "fill-red-500 text-red-500" : ""}`}
            style={{ color: liked ? "" : "var(--pm-text-muted)" }} />
          <span className="text-xs" style={{ color: "var(--pm-text-muted)" }}>
            {(product.total_reviews || 0) + (liked ? 1 : 0)}
          </span>
        </button>
        <button onClick={() => setSaved(v => !v)} className="active:scale-90">
          <Repeat2 className="w-5 h-5" style={{ color: saved ? "var(--pm-accent)" : "var(--pm-text-muted)" }} />
        </button>
        <div className="flex-1" />
        <button className="flex items-center gap-2 px-3.5 py-1.5 rounded-full text-white text-xs font-bold active:scale-95"
          style={{ background: "var(--pm-accent)" }}>
          <ShoppingCart className="w-3.5 h-3.5" />
          ৳{product.price?.toLocaleString()}
        </button>
      </div>

      {/* Caption */}
      <div className="px-4 pb-4">
        <p className="text-sm font-semibold" style={{ color: "var(--pm-text)" }}>{product.title}</p>
        {product.description && (
          <p className="text-xs mt-1 line-clamp-2" style={{ color: "var(--pm-text-muted)" }}>{product.description}</p>
        )}
        {product.rating && (
          <div className="flex items-center gap-1 mt-1.5">
            <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
            <span className="text-xs font-semibold" style={{ color: "var(--pm-text)" }}>{product.rating}</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default function Feed() {
  const [filter, setFilter] = useState("all");
  const visible = filter === "all" ? mockProducts : mockProducts.filter(p => p.seller_type === filter);

  return (
    <div className="pt-3 pb-4">
      <div className="px-3 mb-3">
        <h1 className="font-extrabold text-lg" style={{ color: "var(--pm-text)" }}>📰 ফিড</h1>
        <p className="text-[11px]" style={{ color: "var(--pm-text-muted)" }}>সব সেলারের পণ্য ও সেবা</p>
      </div>

      <div className="flex gap-2 overflow-x-auto px-3 pb-3 scrollbar-hide">
        {filters.map(f => (
          <button key={f.id} onClick={() => setFilter(f.id)}
            className="flex-shrink-0 px-3.5 py-1.5 rounded-full text-xs font-semibold border transition-all active:scale-95"
            style={filter === f.id
              ? { background: "var(--pm-accent)", color: "#fff", borderColor: "var(--pm-accent)" }
              : { background: "var(--pm-surface)", color: "var(--pm-text-muted)", borderColor: "var(--pm-border)" }
            }>
            {f.label}
          </button>
        ))}
      </div>

      {visible.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-4xl mb-2">📭</p>
          <p className="text-sm" style={{ color: "var(--pm-text-muted)" }}>কোনো পোস্ট নেই</p>
        </div>
      ) : (
        <div className="px-3">
          {visible.map(p => <FeedCard key={p.id} product={p} />)}
        </div>
      )}
    </div>
  );
}