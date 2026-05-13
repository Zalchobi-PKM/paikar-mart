import { useState } from "react";
import { Star, Heart, ShoppingCart, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";

const sellerBadge: Record<string, { label: string; bg: string }> = {
  b2b:              { label: "Wholesale", bg: "bg-blue-500/80"   },
  b2c:              { label: "Retail",    bg: "bg-green-500/80"  },
  nearby_shop:      { label: "Nearby",    bg: "bg-yellow-500/80" },
  service_provider: { label: "Service",   bg: "bg-purple-500/80" },
  digital_seller:   { label: "Digital",   bg: "bg-indigo-500/80" },
  ride_provider:    { label: "Ride",      bg: "bg-orange-500/80" },
};

interface Product {
  id: string;
  title: string;
  price: number;
  original_price?: number;
  images?: string[];
  seller_type?: string;
  rating?: number;
  total_reviews?: number;
  location?: string;
}

export default function ProductCard({ product }: { product: Product }) {
  const [wished, setWished] = useState(false);
  const navigate = useNavigate();
  const badge = sellerBadge[product.seller_type || ""] || { label: "Other", bg: "bg-gray-500/80" };

  const discount = product.original_price
    ? Math.round(((product.original_price - product.price) / product.original_price) * 100)
    : null;

  return (
    <div
      onClick={() => navigate(`/product/${product.id}`)}
      className="rounded-2xl overflow-hidden border cursor-pointer group active:scale-[0.98] transition-all duration-200"
      style={{
        background: "var(--pm-surface)",
        borderColor: "var(--pm-border)",
        backdropFilter: "blur(14px)",
        boxShadow: "0 4px 24px rgba(0,0,0,0.18)",
      }}
    >
      {/* Image */}
      <div className="relative w-full aspect-square overflow-hidden">
        <img
          src={product.images?.[0] || "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop"}
          alt={product.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />

        {/* Seller badge */}
        <span className={`absolute top-2 left-2 text-[10px] font-semibold px-2 py-0.5 rounded-full text-white backdrop-blur-sm ${badge.bg}`}>
          {badge.label}
        </span>

        {/* Wishlist */}
        <button
          onClick={(e) => { e.stopPropagation(); setWished(!wished); }}
          className="absolute top-2 right-2 w-7 h-7 rounded-full flex items-center justify-center backdrop-blur-sm transition-all active:scale-90"
          style={{ background: "rgba(0,0,0,0.35)" }}
        >
          <Heart className={`w-3.5 h-3.5 transition-colors ${wished ? "fill-red-500 text-red-500" : "text-white/80"}`} />
        </button>

        {/* Discount */}
        {discount && (
          <span className="absolute bottom-2 left-2 text-[10px] font-bold px-1.5 py-0.5 rounded-md bg-red-500 text-white">
            -{discount}%
          </span>
        )}
      </div>

      {/* Info */}
      <div className="p-2.5">
        <h3 className="text-xs font-semibold line-clamp-2 leading-tight mb-1.5" style={{ color: "var(--pm-text)" }}>
          {product.title}
        </h3>

        {product.rating && (
          <div className="flex items-center gap-1 mb-1.5">
            <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
            <span className="text-[10px] font-medium" style={{ color: "var(--pm-text-muted)" }}>
              {product.rating}
            </span>
            {product.total_reviews && (
              <span className="text-[10px]" style={{ color: "var(--pm-text-muted)" }}>
                ({product.total_reviews})
              </span>
            )}
          </div>
        )}

        {product.location && (
          <div className="flex items-center gap-0.5 mb-1.5">
            <MapPin className="w-2.5 h-2.5" style={{ color: "var(--pm-text-muted)" }} />
            <span className="text-[9px] truncate" style={{ color: "var(--pm-text-muted)" }}>
              {product.location}
            </span>
          </div>
        )}

        {/* Price */}
        <div className="flex items-center justify-between mt-1">
          <div className="flex flex-col">
            <span className="font-bold text-sm leading-tight" style={{ color: "var(--pm-accent)" }}>
              ৳{product.price?.toLocaleString()}
            </span>
            {product.original_price && (
              <span className="text-[9px] line-through leading-tight" style={{ color: "var(--pm-text-muted)" }}>
                ৳{product.original_price?.toLocaleString()}
              </span>
            )}
          </div>
          <button
            onClick={(e) => e.stopPropagation()}
            className="w-7 h-7 rounded-full flex items-center justify-center transition-all active:scale-90 hover:brightness-110"
            style={{ background: "var(--pm-accent)" }}
          >
            <ShoppingCart className="w-3.5 h-3.5 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}