import { Star, Heart, ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Mock data — পরে API দিয়ে replace হবে
const mockProducts = [
  { id: "1", title: "ওয়্যারলেস হেডফোন", price: 1299, original_price: 1999, images: ["https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop"], rating: 4.5, total_reviews: 128 },
  { id: "2", title: "স্মার্ট ওয়াচ", price: 2499, original_price: 3500, images: ["https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop"], rating: 4.2, total_reviews: 89 },
  { id: "3", title: "ব্লুটুথ স্পিকার", price: 899, original_price: 1299, images: ["https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop"], rating: 4.7, total_reviews: 203 },
  { id: "4", title: "ফোন কেস", price: 299, images: ["https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=400&h=400&fit=crop"], rating: 4.0, total_reviews: 56 },
];

export default function RecommendedProducts() {
  const navigate = useNavigate();

  return (
    <div className="mt-5 pb-4">
      {/* Header */}
      <div className="flex items-center justify-between px-3 mb-3">
        <h2 className="font-bold text-sm" style={{ color: "var(--pm-text)" }}>
          আপনার জন্য বাছাই
        </h2>
        <button
          onClick={() => navigate("/shop")}
          className="text-xs font-medium"
          style={{ color: "var(--pm-accent)" }}
        >
          সব দেখুন
        </button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 gap-3 px-3 sm:grid-cols-3 md:grid-cols-4">
        {mockProducts.map((p) => (
          <div
            key={p.id}
            onClick={() => navigate(`/product/${p.id}`)}
            className="rounded-2xl overflow-hidden border cursor-pointer active:scale-95 transition-transform"
            style={{ background: "var(--pm-surface)", borderColor: "var(--pm-border)" }}
          >
            {/* Image */}
            <div className="relative">
              <img
                src={p.images?.[0] || "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop"}
                alt={p.title}
                className="w-full h-36 object-cover"
              />
              <button
                onClick={(e) => e.stopPropagation()}
                className="absolute top-2 right-2 bg-black/30 backdrop-blur-sm p-1.5 rounded-full"
              >
                <Heart className="w-3.5 h-3.5 text-white/70" />
              </button>
            </div>

            {/* Info */}
            <div className="p-3">
              <p className="text-xs font-semibold line-clamp-2 leading-tight" style={{ color: "var(--pm-text)" }}>
                {p.title}
              </p>

              {p.rating && (
                <div className="flex items-center gap-1 mt-1">
                  <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                  <span className="text-[10px]" style={{ color: "var(--pm-text-muted)" }}>
                    {p.rating} ({p.total_reviews})
                  </span>
                </div>
              )}

              <div className="flex items-center justify-between mt-2">
                <div>
                  <span className="font-bold text-sm" style={{ color: "var(--pm-accent)" }}>
                    ৳{p.price.toLocaleString()}
                  </span>
                  {p.original_price && (
                    <span className="text-[10px] line-through ml-1" style={{ color: "var(--pm-text-muted)" }}>
                      ৳{p.original_price.toLocaleString()}
                    </span>
                  )}
                </div>
                <button
                  onClick={(e) => e.stopPropagation()}
                  className="p-1.5 rounded-full"
                  style={{ background: "var(--pm-accent)" }}
                >
                  <ShoppingCart className="w-3.5 h-3.5 text-white" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}