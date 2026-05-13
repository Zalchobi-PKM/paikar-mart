import { useNavigate } from "react-router-dom";

const categories = [
  { key: "electronics", label: "ইলেকট্রনিক্স",    img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&h=200&fit=crop", count: "১,২৪৫" },
  { key: "fashion",     label: "ফ্যাশন",           img: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=200&h=200&fit=crop", count: "৩,৮৭৬" },
  { key: "home",        label: "হোম & লিভিং",      img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=200&h=200&fit=crop", count: "২,৩৪১" },
  { key: "beauty",      label: "বিউটি",            img: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=200&h=200&fit=crop", count: "১,২৩৪" },
  { key: "sports",      label: "স্পোর্টস",         img: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=200&h=200&fit=crop", count: "৯৮৭" },
  { key: "automotive",  label: "অটোমোটিভ",        img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=200&h=200&fit=crop", count: "৫৬৭" },
];

export default function FeaturedCategories() {
  const navigate = useNavigate();

  return (
    <div className="mt-5">
      {/* Header */}
      <div className="flex items-center justify-between px-3 mb-3">
        <h2 className="font-bold text-sm" style={{ color: "var(--pm-text)" }}>
          ফিচার্ড ক্যাটাগরি
        </h2>
        <button
          onClick={() => navigate("/shop")}
          className="text-xs font-medium"
          style={{ color: "var(--pm-accent)" }}
        >
          সব দেখুন
        </button>
      </div>

      {/* Horizontal Scroll */}
      <div className="flex gap-3 overflow-x-auto px-3 pb-1 scrollbar-hide">
        {categories.map((cat) => (
          <button
            key={cat.key}
            onClick={() => navigate("/shop")}
            className="flex-shrink-0 w-24 rounded-2xl overflow-hidden border group active:scale-95 transition-transform"
            style={{
              background: "var(--pm-surface)",
              borderColor: "var(--pm-border)",
            }}
          >
            {/* Image */}
            <div className="relative h-20">
              <img
                src={cat.img}
                alt={cat.label}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            </div>

            {/* Label */}
            <div className="p-2 text-left">
              <p
                className="text-[10px] font-semibold"
                style={{ color: "var(--pm-text)" }}
              >
                {cat.label}
              </p>
              <p
                className="text-[9px]"
                style={{ color: "var(--pm-text-muted)" }}
              >
                {cat.count} পণ্য
              </p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}