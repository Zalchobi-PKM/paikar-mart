import { useState, useEffect } from "react";
import { Eye, EyeOff, MapPin } from "lucide-react";

const banners = [
  {
    title: "মেগা পাইকারি অফার",
    subtitle: "নির্বাচিত পণ্যে ৪০% পর্যন্ত ছাড়",
    btn: "কিনুন",
    emoji: "🛒",
    bg: "from-purple-900 via-indigo-900 to-blue-900",
  },
  {
    title: "PK ওয়ালেটে পেমেন্ট",
    subtitle: "দ্রুত, সহজ, নিরাপদ পেমেন্ট",
    btn: "ওয়ালেট খুলুন",
    emoji: "💳",
    bg: "from-orange-900 via-red-900 to-pink-900",
  },
  {
    title: "কাছের দোকান অনলাইনে",
    subtitle: "আপনার এলাকার সেরা দোকান",
    btn: "দেখুন",
    emoji: "🏪",
    bg: "from-green-900 via-teal-900 to-cyan-900",
  },
];

export default function HeroSection() {
  const [showBalance, setShowBalance] = useState(true);
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlide((p) => (p + 1) % banners.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const banner = banners[slide];

  return (
   <div className="px-3 pt-3 flex flex-row gap-3">
      {/* Welcome + Wallet Card */}
      <div
        className="flex-1 rounded-2xl p-4 flex flex-col justify-between min-h-[130px] border"
        style={{
          background: "var(--pm-surface)",
          borderColor: "var(--pm-border)",
          backdropFilter: "blur(12px)",
        }}
      >
        <div>
          <p className="text-xs" style={{ color: "var(--pm-text-muted)" }}>
            স্বাগতম 👋
          </p>
          <p
            className="font-bold text-base mt-0.5 leading-tight"
            style={{ color: "var(--pm-text)" }}
          >
            Paikar Mart
          </p>
          <div className="flex items-center gap-1 mt-1">
            <MapPin className="w-3 h-3" style={{ color: "var(--pm-accent)" }} />
            <span className="text-xs" style={{ color: "var(--pm-text-muted)" }}>
              Bangladesh
            </span>
          </div>
        </div>

        {/* Wallet Balance */}
        <div
          className="mt-3 rounded-xl p-2.5 border"
          style={{
            background: "rgba(255,255,255,0.04)",
            borderColor: "var(--pm-border)",
          }}
        >
          <p className="text-xs mb-1" style={{ color: "var(--pm-text-muted)" }}>
            ওয়ালেট ব্যালেন্স
          </p>
          <div className="flex items-center justify-between">
            <span className="font-bold text-sm" style={{ color: "var(--pm-text)" }}>
              {showBalance ? "৳ 0" : "৳ ••••••"}
            </span>
            <button
              onClick={() => setShowBalance(!showBalance)}
              style={{ color: "var(--pm-text-muted)" }}
            >
              {showBalance ? (
                <Eye className="w-3.5 h-3.5" />
              ) : (
                <EyeOff className="w-3.5 h-3.5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Auto Banner Slider */}
      <div
        className={`flex-1 rounded-2xl p-4 flex flex-col justify-between min-h-[130px] bg-gradient-to-br ${banner.bg} border border-white/10 transition-all duration-500`}
      >
        <div>
          <p className="font-bold text-sm leading-tight text-white">
            {banner.title}
          </p>
          <p className="text-white/70 text-xs mt-1">{banner.subtitle}</p>
        </div>
        <div className="flex items-end justify-between mt-2">
          <button className="bg-white/20 hover:bg-white/30 text-white text-xs px-3 py-1.5 rounded-full border border-white/30 transition-all">
            {banner.btn}
          </button>
          <span className="text-3xl">{banner.emoji}</span>
        </div>
        {/* Dots */}
        <div className="flex gap-1 mt-2">
          {banners.map((_, i) => (
            <div
              key={i}
              className={`h-1 rounded-full transition-all duration-300 ${
                i === slide ? "w-5 bg-white" : "w-1.5 bg-white/30"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}