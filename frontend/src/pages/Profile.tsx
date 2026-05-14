import { User, Store, Wallet, Package, Settings, ChevronRight, Star, LogOut, ShoppingBag, Truck, MapPin, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const ROLE_CONFIG: Record<string, { label: string; icon: React.ElementType; color: string; portal: string | null }> = {
  buyer:            { label: "Buyer",           icon: ShoppingBag, color: "#22c55e", portal: null },
  b2b_seller:       { label: "Wholesale Seller", icon: Store,       color: "#3b82f6", portal: "/portal/b2b" },
  b2c_seller:       { label: "Retail Seller",    icon: Store,       color: "#a855f7", portal: "/portal/b2c" },
  nearby_shop:      { label: "Nearby Shop",      icon: MapPin,      color: "#eab308", portal: "/portal/nearby" },
  service_provider: { label: "Service Provider", icon: Zap,         color: "#f97316", portal: "/portal/services" },
  digital_seller:   { label: "Digital Seller",   icon: Truck,       color: "#6366f1", portal: "/portal/digital" },
  ride_provider:    { label: "Ride Provider",    icon: Truck,       color: "#14b8a6", portal: "/portal/ride" },
};

const menuItems = [
  { icon: Package,  label: "আমার অর্ডার", to: "/orders"   },
  { icon: Store,    label: "আমার শপ",     to: "/my-shop"  },
  { icon: Wallet,   label: "PK Wallet",   to: "/wallet"   },
  { icon: Settings, label: "সেটিংস",      to: "/settings" },
];

const mockUser = { full_name: "Paikar Mart User", email: "user@paikarmart.com" };
const mockProfile = { role: "buyer", followers: 0, following: 0, wallet_balance: 0, is_verified: true };

export default function Profile() {
  const roleKey = mockProfile.role;
  const roleCfg = ROLE_CONFIG[roleKey] || ROLE_CONFIG.buyer;
  const RoleIcon = roleCfg.icon;

  return (
    <div className="pt-3 pb-4 px-3">
      <div className="space-y-3">
        {/* Profile card */}
        <div className="rounded-2xl p-4 border"
          style={{ background: "var(--pm-surface)", borderColor: "var(--pm-border)", backdropFilter: "blur(14px)" }}>
          <div className="flex items-center gap-3">
            <div className="w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl font-bold flex-shrink-0"
              style={{ background: roleCfg.color }}>
              <User className="w-8 h-8" />
            </div>
            <div className="flex-1 min-w-0">
              <h2 className="font-bold text-base truncate" style={{ color: "var(--pm-text)" }}>
                {mockUser.full_name}
              </h2>
              <p className="text-xs truncate" style={{ color: "var(--pm-text-muted)" }}>{mockUser.email}</p>
              {mockProfile.is_verified && (
                <span className="inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-full mt-1"
                  style={{ background: "rgba(59,130,246,0.15)", color: "#3b82f6" }}>
                  <Star className="w-2.5 h-2.5 fill-blue-500" /> Verified
                </span>
              )}
            </div>
          </div>

          <div className="flex justify-around mt-4 pt-3 border-t" style={{ borderColor: "var(--pm-border)" }}>
            {[
              { label: "Followers", value: mockProfile.followers },
              { label: "Following", value: mockProfile.following },
              { label: "Balance",   value: `৳${mockProfile.wallet_balance}`, accent: true },
            ].map(s => (
              <div key={s.label} className="text-center">
                <p className="font-bold text-sm" style={{ color: s.accent ? "var(--pm-accent)" : "var(--pm-text)" }}>
                  {s.value}
                </p>
                <p className="text-[10px]" style={{ color: "var(--pm-text-muted)" }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Role badge */}
        <div className="rounded-2xl p-3.5 border flex items-center gap-3"
          style={{ background: "var(--pm-surface)", borderColor: "var(--pm-border)" }}>
          <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{ background: roleCfg.color + "22" }}>
            <RoleIcon className="w-5 h-5" style={{ color: roleCfg.color }} />
          </div>
          <div className="flex-1">
            <p className="text-[10px]" style={{ color: "var(--pm-text-muted)" }}>Your Role</p>
            <p className="text-sm font-bold" style={{ color: "var(--pm-text)" }}>{roleCfg.label}</p>
          </div>
          {roleCfg.portal && (
            <Link to={roleCfg.portal}
              className="text-[11px] font-bold px-3 py-1.5 rounded-full border transition-all active:scale-95"
              style={{ color: roleCfg.color, borderColor: roleCfg.color }}>
              Open →
            </Link>
          )}
        </div>

        {/* Menu */}
        <div className="rounded-2xl border overflow-hidden"
          style={{ background: "var(--pm-surface)", borderColor: "var(--pm-border)" }}>
          {menuItems.map(({ icon: Icon, label, to }, i) => (
            <Link key={to} to={to}
              className="flex items-center justify-between px-4 py-3.5 transition-colors"
              style={{ borderBottom: i < menuItems.length - 1 ? `1px solid var(--pm-border)` : "none" }}>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl flex items-center justify-center"
                  style={{ background: "var(--pm-accent-soft)" }}>
                  <Icon className="w-4 h-4" style={{ color: "var(--pm-accent)" }} />
                </div>
                <span className="text-sm font-medium" style={{ color: "var(--pm-text)" }}>{label}</span>
              </div>
              <ChevronRight className="w-4 h-4" style={{ color: "var(--pm-text-muted)" }} />
            </Link>
          ))}
        </div>

        {/* Logout */}
        <button className="w-full flex items-center justify-center gap-2 py-3 rounded-2xl border text-sm font-semibold active:scale-95"
          style={{ color: "#ef4444", borderColor: "rgba(239,68,68,0.3)", background: "rgba(239,68,68,0.07)" }}>
          <LogOut className="w-4 h-4" /> লগআউট
        </button>
      </div>
    </div>
  );
}