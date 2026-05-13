import { useState } from "react";
import { Upload, Loader2, CheckCircle } from "lucide-react";

const sellerTypes = [
  { id: "b2c",              label: "খুচরা বিক্রেতা",    emoji: "🛍️" },
  { id: "b2b",              label: "পাইকারি বিক্রেতা",  emoji: "🏭" },
  { id: "nearby_shop",      label: "কাছের দোকান",       emoji: "🏪" },
  { id: "service_provider", label: "সেবা প্রদানকারী",   emoji: "🔧" },
  { id: "digital_seller",   label: "ডিজিটাল পণ্য",     emoji: "💻" },
  { id: "ride_provider",    label: "রাইড সেবা",         emoji: "🚗" },
];

interface FormState {
  title: string;
  description: string;
  price: string;
  original_price: string;
  seller_type: string;
  location: string;
  stock: string;
}

export default function Sell() {
  const [form, setForm] = useState<FormState>({
    title: "", description: "", price: "",
    original_price: "", seller_type: "b2c",
    location: "", stock: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // TODO: API call — backend ready হলে এখানে POST করব
    await new Promise((r) => setTimeout(r, 1200)); // mock delay
    setLoading(false);
    setSuccess(true);
    setForm({ title: "", description: "", price: "", original_price: "", seller_type: "b2c", location: "", stock: "" });
    setTimeout(() => setSuccess(false), 3000);
  };

  const inputClass = `w-full rounded-xl px-4 py-3 text-sm outline-none border transition-colors`;

  return (
    <div className="px-4 pt-4">
      <h1 className="text-xl font-bold mb-4" style={{ color: "var(--pm-text)" }}>
        পণ্য/সেবা যুক্ত করুন
      </h1>

      {success && (
        <div className="rounded-xl p-4 mb-4 flex items-center gap-3 border border-green-500/30 bg-green-500/10">
          <CheckCircle className="w-5 h-5 text-green-400" />
          <p className="text-green-400 font-medium">সফলভাবে পোস্ট করা হয়েছে!</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Seller Type */}
        <div>
          <label className="text-sm font-medium mb-2 block" style={{ color: "var(--pm-text)" }}>
            আপনি কী বিক্রি করছেন?
          </label>
          <div className="grid grid-cols-2 gap-2">
            {sellerTypes.map((type) => (
              <button
                key={type.id}
                type="button"
                onClick={() => setForm({ ...form, seller_type: type.id })}
                className="flex items-center gap-2 px-3 py-2.5 rounded-xl border text-sm font-medium transition-all"
                style={
                  form.seller_type === type.id
                    ? { background: "var(--pm-accent-soft)", borderColor: "var(--pm-accent)", color: "var(--pm-accent)" }
                    : { background: "var(--pm-surface)", borderColor: "var(--pm-border)", color: "var(--pm-text-muted)" }
                }
              >
                <span>{type.emoji}</span>
                <span>{type.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Title */}
        <div>
          <label className="text-sm font-medium mb-1.5 block" style={{ color: "var(--pm-text)" }}>
            পণ্যের নাম *
          </label>
          <input
            required
            className={inputClass}
            style={{ background: "var(--pm-surface)", borderColor: "var(--pm-border)", color: "var(--pm-text)" }}
            placeholder="যেমন: কোরিয়ান সিল্ক শাড়ি"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
          />
        </div>

        {/* Description */}
        <div>
          <label className="text-sm font-medium mb-1.5 block" style={{ color: "var(--pm-text)" }}>
            বিবরণ
          </label>
          <textarea
            rows={3}
            className={inputClass}
            style={{ background: "var(--pm-surface)", borderColor: "var(--pm-border)", color: "var(--pm-text)" }}
            placeholder="পণ্য সম্পর্কে বিস্তারিত লিখুন..."
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
          />
        </div>

        {/* Price */}
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="text-sm font-medium mb-1.5 block" style={{ color: "var(--pm-text)" }}>মূল্য (৳) *</label>
            <input required type="number" className={inputClass}
              style={{ background: "var(--pm-surface)", borderColor: "var(--pm-border)", color: "var(--pm-text)" }}
              placeholder="0" value={form.price}
              onChange={(e) => setForm({ ...form, price: e.target.value })} />
          </div>
          <div>
            <label className="text-sm font-medium mb-1.5 block" style={{ color: "var(--pm-text)" }}>আগের মূল্য (৳)</label>
            <input type="number" className={inputClass}
              style={{ background: "var(--pm-surface)", borderColor: "var(--pm-border)", color: "var(--pm-text)" }}
              placeholder="0" value={form.original_price}
              onChange={(e) => setForm({ ...form, original_price: e.target.value })} />
          </div>
        </div>

        {/* Stock + Location */}
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="text-sm font-medium mb-1.5 block" style={{ color: "var(--pm-text)" }}>স্টক</label>
            <input type="number" className={inputClass}
              style={{ background: "var(--pm-surface)", borderColor: "var(--pm-border)", color: "var(--pm-text)" }}
              placeholder="পরিমাণ" value={form.stock}
              onChange={(e) => setForm({ ...form, stock: e.target.value })} />
          </div>
          <div>
            <label className="text-sm font-medium mb-1.5 block" style={{ color: "var(--pm-text)" }}>অবস্থান</label>
            <input className={inputClass}
              style={{ background: "var(--pm-surface)", borderColor: "var(--pm-border)", color: "var(--pm-text)" }}
              placeholder="ঢাকা, বাংলাদেশ" value={form.location}
              onChange={(e) => setForm({ ...form, location: e.target.value })} />
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="w-full py-3.5 rounded-xl font-semibold flex items-center justify-center gap-2 transition-colors disabled:opacity-60"
          style={{ background: "var(--pm-accent)", color: "#fff" }}
        >
          {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Upload className="w-5 h-5" />}
          {loading ? "পোস্ট হচ্ছে..." : "পণ্য পোস্ট করুন"}
        </button>
      </form>
    </div>
  );
}