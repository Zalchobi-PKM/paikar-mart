import { Link, useLocation } from "react-router-dom";
import { Home, ShoppingBag, PlusSquare, User, Wallet } from "lucide-react";

const navItems = [
  { to: "/",        icon: Home,        label: "হোম"     },
  { to: "/shop",    icon: ShoppingBag, label: "শপ"      },
  { to: "/sell",    icon: PlusSquare,  label: "বেচো"    },
  { to: "/wallet",  icon: Wallet,      label: "ওয়ালেট"  },
  { to: "/profile", icon: User,        label: "প্রোফাইল" },
];

export default function BottomNav() {
  const { pathname } = useLocation();

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 border-t backdrop-blur-xl pb-safe"
      style={{ background: "var(--pm-nav-bg)", borderColor: "var(--pm-border)" }}
    >
      <div className="max-w-screen-xl mx-auto flex items-center justify-around py-2">
        {navItems.map(({ to, icon: Icon, label }) => {
          const active = pathname === to;
          return (
            <Link key={to} to={to} className="flex flex-col items-center gap-0.5 px-3 py-1">
              <Icon
                className="w-6 h-6 transition-colors"
                style={{ color: active ? "var(--pm-accent)" : "rgba(255,255,255,0.45)" }}
              />
              <span
                className="text-xs transition-colors"
                style={{
                  color: active ? "var(--pm-accent)" : "rgba(255,255,255,0.45)",
                  fontWeight: active ? 600 : 400,
                }}
              >
                {label}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}