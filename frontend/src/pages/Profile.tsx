import { User, Store, Wallet, Package, Settings, ChevronRight, Star } from "lucide-react";
import { Link } from "react-router-dom";

const menuItems = [
  { icon: Package, label: "আমার অর্ডার",  to: "/orders"   },
  { icon: Store,   label: "আমার শপ",      to: "/my-shop"  },
  { icon: Wallet,  label: "PK Wallet",    to: "/wallet"   },
  { icon: Settings,label: "সেটিংস",       to: "/settings" },
];

export default function Profile() {
  return (
    <div className="px-4 pt-4">
      {/* Profile Header */}
      <div
        className="rounded-2xl p-5 border mb-4"
        style={{ background: "var(--pm-surface)", borderColor: "var(--pm-border)" }}
      >
        <div className="flex items-center gap-4">
          <div
            className="w-16 h-16 rounded-full flex items-center justify-center"
            style={{ background: "var(--pm-accent-soft)" }}
          >
            <User className="w-8 h-8" style={{ color: "var(--pm-accent)" }} />
          </div>
          <div className="flex-1">
            <h2 className="font-bold text-lg" style={{ color: "var(--pm-text)" }}>
              Paikar Mart User
            </h2>
            <p className="text-sm" style={{ color: "var(--pm-text-muted)" }}>
              user@paikarmart.com
            </p>
            <span
              className="inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full mt-1"
              style={{ background: "var(--pm-accent-soft)", color: "var(--pm-accent)" }}
            >
              <Star className="w-3 h-3 fill-current" /> ভেরিফাইড
            </span>
          </div>
        </div>

        {/* Stats */}
        <div
          className="flex justify-around mt-4 pt-4 border-t"
          style={{ borderColor: "var(--pm-border)" }}
        >
          <div className="text-center">
            <p className="font-bold" style={{ color: "var(--pm-text)" }}>০</p>
            <p className="text-xs" style={{ color: "var(--pm-text-muted)" }}>ফলোয়ার</p>
          </div>
          <div className="text-center">
            <p className="font-bold" style={{ color: "var(--pm-text)" }}>০</p>
            <p className="text-xs" style={{ color: "var(--pm-text-muted)" }}>ফলোয়িং</p>
          </div>
          <div className="text-center">
            <p className="font-bold" style={{ color: "var(--pm-accent)" }}>৳০</p>
            <p className="text-xs" style={{ color: "var(--pm-text-muted)" }}>ওয়ালেট</p>
          </div>
        </div>
      </div>

      {/* Role Badge */}
      <div
        className="rounded-xl px-4 py-3 mb-4 flex items-center gap-3 border"
        style={{ background: "var(--pm-accent-soft)", borderColor: "var(--pm-accent)" }}
      >
        <Store className="w-5 h-5" style={{ color: "var(--pm-accent)" }} />
        <div>
          <p className="text-xs font-medium" style={{ color: "var(--pm-accent)" }}>আপনার ভূমিকা</p>
          <p className="font-bold" style={{ color: "var(--pm-text)" }}>Buyer</p>
        </div>
      </div>

      {/* Menu */}
      <div
        className="rounded-2xl border overflow-hidden mb-4"
        style={{ background: "var(--pm-surface)", borderColor: "var(--pm-border)" }}
      >
        {menuItems.map(({ icon: Icon, label, to }, i) => (
          <Link
            key={to}
            to={to}
            className="flex items-center justify-between px-4 py-4 transition-colors"
            style={{ borderBottom: i < menuItems.length - 1 ? "1px solid var(--pm-border)" : "none" }}
          >
            <div className="flex items-center gap-3">
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center"
                style={{ background: "var(--pm-accent-soft)" }}
              >
                <Icon className="w-5 h-5" style={{ color: "var(--pm-accent)" }} />
              </div>
              <span className="font-medium" style={{ color: "var(--pm-text)" }}>{label}</span>
            </div>
            <ChevronRight className="w-4 h-4" style={{ color: "var(--pm-text-muted)" }} />
          </Link>
        ))}
      </div>

      {/* Logout */}
      <button
        className="w-full py-3 font-medium text-sm rounded-xl border transition-colors"
        style={{ color: "#ef4444", borderColor: "#ef444440", background: "rgba(239,68,68,0.08)" }}
      >
        লগআউট
      </button>
    </div>
  );
}