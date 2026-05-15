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
      {/* Top Bar - Header - Responsive */}
      <div 
        className="fixed top-0 left-0 right-0 z-50 border-b backdrop-blur-xl"
        style={navBg}
      >
        <div className="max-w-[480px] md:max-w-2xl lg:max-w-4xl mx-auto flex items-center justify-between px-3 sm:px-4 py-3 md:py-3.5">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center gap-0.5 select-none active:opacity-70 transition-opacity"
          >
            <span 
              className="text-lg sm:text-xl md:text-2xl font-black tracking-tight" 
              style={{ color: "var(--pm-accent)" }}
            >
              Paikar
            </span>
            <span 
              className="text-lg sm:text-xl md:text-2xl font-black tracking-tight" 
              style={{ color: "var(--pm-text)" }}
            >
              Mart
            </span>
          </Link>

          {/* Right side icons */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Notification bell */}
            <Link
              to="/notifications"
              className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-full border flex items-center justify-center transition-all active:scale-95 hover:scale-105"
              style={{ background: "var(--pm-surface)", borderColor: "var(--pm-border)" }}
              title="Notifications"
            >
              <Bell className="w-4 sm:w-5" style={{ color: "var(--pm-text)" }} />
              <span className="absolute -top-1.5 -right-1.5 bg-red-500 text-white text-[7px] font-black w-4 h-4 rounded-full flex items-center justify-center border border-red-600">
                {NOTIF_COUNT}
              </span>
            </Link>

            {/* Search */}
            <Link
              to="/search"
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border flex items-center justify-center transition-all active:scale-95 hover:scale-105"
              style={{ background: "var(--pm-surface)", borderColor: "var(--pm-border)" }}
              title="Search"
            >
              <Search className="w-4 sm:w-5" style={{ color: "var(--pm-text)" }} />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Nav - Footer - Responsive */}
      <div 
        className="fixed bottom-0 left-0 right-0 z-50 border-t backdrop-blur-xl pb-safe md:relative md:border-t-0 md:border-none md:mt-auto"
        style={navBg}
      >
        <div className="max-w-[480px] md:max-w-2xl lg:max-w-4xl mx-auto flex items-center justify-around py-1.5 md:py-2 md:px-4">
          {navItems.map(({ to, icon: Icon, label }) => {
            const active = pathname === to;
            return (
              <Link
                key={to}
                to={to}
                className="flex flex-col items-center gap-1 px-2 sm:px-3 py-1 rounded-xl transition-all active:scale-90 hover:opacity-80"
                style={active ? { background: "var(--pm-accent-soft)" } : {}}
                title={label}
              >
                <Icon
                  className="w-5 sm:w-6 transition-colors"
                  strokeWidth={active ? 2.5 : 1.8}
                  style={{ color: active ? "var(--pm-accent)" : "var(--pm-text-muted)" }}
                />
                <span
                  className="text-[9px] sm:text-[10px] transition-colors line-clamp-1"
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
