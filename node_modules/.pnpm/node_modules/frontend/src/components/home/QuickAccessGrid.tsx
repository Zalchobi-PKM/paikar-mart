import { useNavigate } from "react-router-dom";

const items = [
  { id: "marketplace",    label: "Marketplace",   emoji: "🏬", bg: "from-purple-600 to-purple-800",   route: "/shop" },
  { id: "b2b",            label: "Wholesale",     emoji: "🏭", bg: "from-blue-600 to-blue-800",       route: "/portal/b2b" },
  { id: "b2c",            label: "Retail",        emoji: "🛍️", bg: "from-green-600 to-green-800",     route: "/portal/b2c" },
  { id: "services",       label: "Services",      emoji: "🔧", bg: "from-orange-500 to-orange-700",   route: "/portal/services" },
  { id: "digital",        label: "Digital",       emoji: "💻", bg: "from-indigo-600 to-indigo-800",   route: "/portal/b2c" },
  { id: "nearby",         label: "Nearby Shops",  emoji: "📍", bg: "from-red-500 to-red-700",         route: "/portal/nearby" },
  { id: "brands",         label: "Brand Stores",  emoji: "⭐", bg: "from-teal-500 to-teal-700",       route: "/shop" },
  { id: "deals",          label: "Deals & Offers",emoji: "🏷️", bg: "from-yellow-500 to-amber-600",    route: "/shop" },
  { id: "feed",           label: "Feed",          emoji: "📰", bg: "from-pink-500 to-pink-700",       route: "/feed" },
  { id: "live",           label: "Live Shopping", emoji: "🔴", bg: "from-rose-600 to-rose-800",       route: "/feed" },
  { id: "orders",         label: "Orders",        emoji: "📦", bg: "from-cyan-600 to-cyan-800",       route: "/orders" },
  { id: "wallet",         label: "Wallet",        emoji: "💰", bg: "from-emerald-500 to-emerald-700", route: "/wallet" },
  { id: "profile",        label: "Profile",       emoji: "👤", bg: "from-violet-600 to-violet-800",   route: "/profile" },
  { id: "notifications",  label: "Notifications", emoji: "🔔", bg: "from-blue-500 to-blue-700",       route: "/notifications", badge: 12 },
  { id: "ride",           label: "Ride Share",    emoji: "🚗", bg: "from-lime-500 to-lime-700",       route: "/portal/ride" },
];

export default function QuickAccessGrid() {
  const navigate = useNavigate();

  return (
    <div className="px-3 py-4 pb-6">
      {/* Grid: 5 columns for mobile, responsive */}
      <div className="grid grid-cols-5 gap-2.5 sm:gap-3">
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => navigate(item.route)}
            className="flex flex-col items-center gap-1 group active:opacity-70 transition-opacity"
            type="button"
          >
            {/* Icon Container */}
            <div
              className={`relative w-full aspect-square rounded-xl sm:rounded-2xl bg-gradient-to-br ${item.bg} flex items-center justify-center shadow-md group-active:scale-95 transition-transform duration-150`}
            >
              <span className="text-2xl sm:text-3xl drop-shadow">{item.emoji}</span>
              
              {/* Badge */}
              {item.badge && (
                <span className="absolute -top-1.5 -right-1.5 bg-red-500 text-white text-[7px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-red-600 shadow-lg">
                  {item.badge}
                </span>
              )}
            </div>
            
            {/* Label */}
            <p
              className="text-center text-[8px] sm:text-[9px] font-semibold leading-tight line-clamp-2 w-full px-0.5"
              style={{ color: "var(--pm-text)" }}
            >
              {item.label}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
}