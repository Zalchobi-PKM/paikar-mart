import { Link, useLocation } from "react-router-dom";
import { Home, ShoppingBag, Newspaper, Wallet, User, Search, Bell } from "lucide-react";

const NOTIF_COUNT = 12;

const navItems = [
  { to: "/",        icon: Home,        label: "হোম"     },
  { to: "/shop",    icon: ShoppingBag, label: "শপ"      },
  { to: "/feed",    icon: Newspaper,   label: "ফিড"     },
  { to: "/wallet",  icon: Wallet,      label: "ওয়ালেট"  },
  { to: "/profile", icon: User,        label: "প্রোফাইল" },
];

export default function Navbar() {
  const { pathname } = useLocation();
  const navBg = { background: "var(--pm-nav-bg)", borderColor: "var(--pm-border)" };

  return (
    <>
      {/* Top Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 border-b backdrop-blur-xl" style={navBg}>
        <div className="max-w-[480px] mx-auto flex items-center justify-between px-4 py-2.5">
          <Link to="/" className="flex items-center gap-0.5 select-none">
            <span className="text-[22px] font-black tracking-tight" style={{ color: "var(--pm-accent)" }}>Paikar</span>
            <span className="text-[22px] font-black tracking-tight" style={{ color: "var(--pm-text)" }}>Mart</span>
          </Link>

          <div className="flex items-center gap-2">
            {/* Notification bell */}
            <Link
              to="/notifications"
              className="relative w-8 h-8 rounded-full border flex items-center justify-center transition-all active:scale-95"
              style={{ background: "var(--pm-surface)", borderColor: "var(--pm-border)" }}
            >
              <Bell className="w-[17px] h-[17px]" style={{ color: "var(--pm-text)" }} />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[8px] font-black w-4 h-4 rounded-full flex items-center justify-center">
                {NOTIF_COUNT}
              </span>
            </Link>

            {/* Search */}
            <Link
              to="/search"
              className="w-8 h-8 rounded-full border flex items-center justify-center transition-all active:scale-95"
              style={{ background: "var(--pm-surface)", borderColor: "var(--pm-border)" }}
            >
              <Search className="w-[17px] h-[17px]" style={{ color: "var(--pm-text)" }} />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Nav */}
      <div className="fixed bottom-0 left-0 right-0 z-50 border-t backdrop-blur-xl pb-safe" style={navBg}>
        <div className="max-w-[480px] mx-auto flex items-center justify-around py-1.5">
          {navItems.map(({ to, icon: Icon, label }) => {
            const active = pathname === to;
            return (
              <Link
                key={to}
                to={to}
                className="flex flex-col items-center gap-0.5 px-3 py-1 rounded-xl transition-all active:scale-90"
                style={active ? { background: "var(--pm-accent-soft)" } : {}}
              >
                <Icon
                  className="w-[22px] h-[22px] transition-colors"
                  strokeWidth={active ? 2.5 : 1.8}
                  style={{ color: active ? "var(--pm-accent)" : "var(--pm-text-muted)" }}
                />
                <span
                  className="text-[10px] transition-colors"
                  style={{ color: active ? "var(--pm-accent)" : "var(--pm-text-muted)", fontWeight: active ? 700 : 400 }}
                >
                  {label}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}