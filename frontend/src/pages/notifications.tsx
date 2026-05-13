import { useState } from "react";
import { Bell, Package, Truck, Info, Store, Check, BellOff } from "lucide-react";

const TYPE_CONFIG: Record<string, { icon: React.ElementType; color: string; bg: string }> = {
  order:    { icon: Package, color: "text-blue-400",   bg: "bg-blue-500/15"   },
  delivery: { icon: Truck,   color: "text-orange-400", bg: "bg-orange-500/15" },
  account:  { icon: Info,    color: "text-purple-400", bg: "bg-purple-500/15" },
  seller:   { icon: Store,   color: "text-orange-400", bg: "bg-orange-500/15" },
  default:  { icon: Bell,    color: "text-white/40",   bg: "bg-white/5"       },
};

const FILTERS = ["সব", "অপঠিত", "অর্ডার", "ডেলিভারি", "অ্যাকাউন্ট"];

const mockNotifications = [
  { id: "1", type: "order",    title: "অর্ডার কনফার্ম হয়েছে",    message: "আপনার অর্ডার #১২৩৪ সফলভাবে কনফার্ম হয়েছে।",          read: false, createdAt: Date.now() - 1000 * 60 * 5  },
  { id: "2", type: "delivery", title: "পণ্য পাঠানো হয়েছে",        message: "আপনার পণ্য ডেলিভারির পথে আছে। ২-৩ দিনের মধ্যে পাবেন।", read: false, createdAt: Date.now() - 1000 * 60 * 30 },
  { id: "3", type: "account",  title: "প্রোফাইল আপডেট সফল",       message: "আপনার প্রোফাইল সফলভাবে আপডেট হয়েছে।",                 read: true,  createdAt: Date.now() - 1000 * 60 * 60 },
  { id: "4", type: "seller",   title: "নতুন অফার",                 message: "আপনার পছন্দের শপে নতুন ডিসকাউন্ট অফার এসেছে!",        read: true,  createdAt: Date.now() - 1000 * 60 * 120},
];

const FILTER_MAP: Record<string, string> = {
  "অপঠিত": "unread", "অর্ডার": "order", "ডেলিভারি": "delivery", "অ্যাকাউন্ট": "account",
};

export default function Notifications() {
  const [filter, setFilter] = useState("সব");
  const [notifications, setNotifications] = useState(mockNotifications);

  const unreadCount = notifications.filter(n => !n.read).length;

  const filtered = notifications.filter(n => {
    if (filter === "অপঠিত")    return !n.read;
    if (filter === "অর্ডার")   return n.type === "order";
    if (filter === "ডেলিভারি") return n.type === "delivery";
    if (filter === "অ্যাকাউন্ট") return n.type === "account";
    return true;
  });

  const markAllRead = () => setNotifications(prev => prev.map(n => ({ ...n, read: true })));

  return (
    <div className="px-4 pt-4 max-w-3xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <div>
          <h1 className="text-xl font-bold flex items-center gap-2" style={{ color: "var(--pm-text)" }}>
            নোটিফিকেশন
            {unreadCount > 0 && (
              <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-red-500 text-white">
                {unreadCount}
              </span>
            )}
          </h1>
          <p className="text-sm mt-0.5" style={{ color: "var(--pm-text-muted)" }}>
            আপনার সব আপডেট এখানে
          </p>
        </div>
        {unreadCount > 0 && (
          <button
            onClick={markAllRead}
            className="text-xs flex items-center gap-1.5 transition-colors"
            style={{ color: "var(--pm-accent)" }}
          >
            <Check className="h-3.5 w-3.5" /> সব পড়া হয়েছে
          </button>
        )}
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-2 overflow-x-auto pb-2 mb-4 scrollbar-hide">
        {FILTERS.map(f => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className="px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all shrink-0 border"
            style={
              filter === f
                ? { background: "var(--pm-accent-soft)", borderColor: "var(--pm-accent)", color: "var(--pm-accent)" }
                : { background: "var(--pm-surface)", borderColor: "var(--pm-border)", color: "var(--pm-text-muted)" }
            }
          >
            {f}
          </button>
        ))}
      </div>

      {/* List */}
      {filtered.length === 0 ? (
        <div
          className="py-16 text-center rounded-2xl border"
          style={{ background: "var(--pm-surface)", borderColor: "var(--pm-border)" }}
        >
          <BellOff className="h-10 w-10 mx-auto mb-3 opacity-20" style={{ color: "var(--pm-text)" }} />
          <p className="font-medium text-sm" style={{ color: "var(--pm-text-muted)" }}>
            কোনো নোটিফিকেশন নেই
          </p>
        </div>
      ) : (
        <div
          className="rounded-2xl border overflow-hidden"
          style={{ background: "var(--pm-surface)", borderColor: "var(--pm-border)" }}
        >
          {filtered.map((notif, i) => {
            const cfg = TYPE_CONFIG[notif.type] ?? TYPE_CONFIG.default;
            const Icon = cfg.icon;
            return (
              <div
                key={notif.id}
                className="px-4 py-3.5 flex items-start gap-3 cursor-pointer transition-colors"
                style={{
                  borderBottom: i < filtered.length - 1 ? `1px solid var(--pm-border)` : "none",
                  background: !notif.read ? "var(--pm-accent-soft)" : "transparent",
                }}
              >
                <div className={`h-9 w-9 rounded-xl flex items-center justify-center shrink-0 mt-0.5 ${cfg.bg}`}>
                  <Icon className={`h-4 w-4 ${cfg.color}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <p className="text-sm font-semibold line-clamp-1" style={{ color: "var(--pm-text)" }}>
                      {notif.title}
                    </p>
                    <span className="text-[10px] shrink-0" style={{ color: "var(--pm-text-muted)" }}>
                      {new Date(notif.createdAt).toLocaleDateString("bn-BD", { day: "numeric", month: "short" })}
                    </span>
                  </div>
                  <p className="text-xs mt-0.5 line-clamp-2" style={{ color: "var(--pm-text-muted)" }}>
                    {notif.message}
                  </p>
                </div>
                {!notif.read && (
                  <div className="h-2 w-2 rounded-full mt-1.5 shrink-0" style={{ background: "var(--pm-accent)" }} />
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}