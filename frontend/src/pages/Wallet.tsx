import { Wallet, ArrowUpRight, ArrowDownLeft, Plus } from "lucide-react";

const transactions = [
  { id: 1, type: "credit", label: "অর্ডার রিফান্ড",  amount: 250,  date: "আজ"          },
  { id: 2, type: "debit",  label: "পণ্য কেনা",        amount: 1500, date: "গতকাল"        },
  { id: 3, type: "credit", label: "টপ-আপ",            amount: 2000, date: "২ দিন আগে"   },
];

const quickActions = [
  { label: "রিচার্জ",      emoji: "📱" },
  { label: "বিল পেমেন্ট", emoji: "💡" },
  { label: "ট্রান্সফার",  emoji: "💸" },
];

export default function WalletPage() {
  return (
    <div className="px-4 pt-4">
      {/* Balance Card */}
      <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-6 text-white mb-6 shadow-lg">
        <div className="flex items-center gap-2 mb-1">
          <Wallet className="w-5 h-5" />
          <span className="text-sm opacity-90">PK Wallet</span>
        </div>
        <p className="text-4xl font-black mt-2">৳০</p>
        <p className="text-sm opacity-80 mt-1">Paikar Mart User</p>

        <div className="flex gap-3 mt-5">
          <button className="flex-1 bg-white/20 hover:bg-white/30 text-white py-2.5 rounded-xl text-sm font-medium flex items-center justify-center gap-2 transition-colors">
            <Plus className="w-4 h-4" /> টপ-আপ
          </button>
          <button className="flex-1 bg-white/20 hover:bg-white/30 text-white py-2.5 rounded-xl text-sm font-medium flex items-center justify-center gap-2 transition-colors">
            <ArrowUpRight className="w-4 h-4" /> পাঠান
          </button>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-3 gap-3 mb-6">
        {quickActions.map((item) => (
          <button
            key={item.label}
            className="rounded-xl py-4 flex flex-col items-center gap-2 border transition-all active:scale-95"
            style={{ background: "var(--pm-surface)", borderColor: "var(--pm-border)" }}
          >
            <span className="text-2xl">{item.emoji}</span>
            <span className="text-xs font-medium" style={{ color: "var(--pm-text)" }}>
              {item.label}
            </span>
          </button>
        ))}
      </div>

      {/* Transactions */}
      <div
        className="rounded-2xl border overflow-hidden"
        style={{ background: "var(--pm-surface)", borderColor: "var(--pm-border)" }}
      >
        <div className="px-4 py-3" style={{ borderBottom: "1px solid var(--pm-border)" }}>
          <h3 className="font-bold" style={{ color: "var(--pm-text)" }}>সাম্প্রতিক লেনদেন</h3>
        </div>
        {transactions.map((tx, i) => (
          <div
            key={tx.id}
            className="flex items-center justify-between px-4 py-3.5"
            style={{ borderBottom: i < transactions.length - 1 ? "1px solid var(--pm-border)" : "none" }}
          >
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ background: tx.type === "credit" ? "rgba(34,197,94,0.15)" : "rgba(239,68,68,0.15)" }}
              >
                {tx.type === "credit"
                  ? <ArrowDownLeft className="w-5 h-5 text-green-400" />
                  : <ArrowUpRight  className="w-5 h-5 text-red-400"   />}
              </div>
              <div>
                <p className="text-sm font-medium" style={{ color: "var(--pm-text)" }}>{tx.label}</p>
                <p className="text-xs" style={{ color: "var(--pm-text-muted)" }}>{tx.date}</p>
              </div>
            </div>
            <span className={`font-bold ${tx.type === "credit" ? "text-green-400" : "text-red-400"}`}>
              {tx.type === "credit" ? "+" : "-"}৳{tx.amount}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}