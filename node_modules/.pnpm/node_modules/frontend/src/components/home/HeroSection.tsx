import { useState, useEffect } from "react";
import { Eye, EyeOff, MapPin, Loader2 } from "lucide-react";

const BANNER_GRADIENTS = [
  "linear-gradient(135deg, #4f46e5 0%, #7c3aed 50%, #1e40af 100%)",
  "linear-gradient(135deg, #ea580c 0%, #db2777 50%, #9f1239 100%)",
  "linear-gradient(135deg, #059669 0%, #0e7490 50%, #065f46 100%)",
];

const BANNERS = [
  { title: "মেগা পাইকারি অফার",    subtitle: "নির্বাচিত পণ্যে ৪০% পর্যন্ত ছাড়", btn: "কিনুন",         emoji: "🛒" },
  { title: "PK ওয়ালেটে পেমেন্ট", subtitle: "দ্রুত, সহজ, নিরাপদ পেমেন্ট",       btn: "ওয়ালেট খুলুন", emoji: "💳" },
  { title: "কাছের দোকান অনলাইনে", subtitle: "আপনার এলাকার সেরা দোকান",          btn: "দেখুন",         emoji: "🏪" },
];

function useCity() {
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (!navigator.geolocation) return;
    setLoading(true);
    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        try {
          const { latitude, longitude } = pos.coords;
          const res = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`);
          const data = await res.json();
          const detected = data.address?.city || data.address?.town || data.address?.county || "";
          if (detected) setCity(detected);
        } catch (_) {}
        setLoading(false);
      },
      () => setLoading(false),
      { timeout: 6000 }
    );
  }, []);
  return { city, loading };
}

export default function HeroSection() {
  const [showBalance, setShowBalance] = useState(true);
  const [slide, setSlide] = useState(0);
  const { city, loading: cityLoading } = useCity();

  useEffect(() => {
    const timer = setInterval(() => setSlide((p) => (p + 1) % BANNERS.length), 3600);
    return () => clearInterval(timer);
  }, []);

  const banner = { ...BANNERS[slide], grad: BANNER_GRADIENTS[slide] };

  return (
    <div className="px-3 pt-3 flex flex-row gap-3">
      {/* Welcome + Wallet Card */}
      <div
        className="flex-1 rounded-2xl p-3.5 flex flex-col justify-between border"
        style={{ background: "var(--pm-surface)", borderColor: "var(--pm-border)", backdropFilter: "blur(16px)", minHeight: "130px" }}
      >
        <div>
          <p className="text-[11px]" style={{ color: "var(--pm-text-muted)" }}>স্বাগতম 👋</p>
          <p className="font-bold text-[15px] mt-0.5 leading-tight" style={{ color: "var(--pm-text)" }}>
            Paikar Mart
          </p>
          <div className="flex items-center gap-1 mt-1">
            {cityLoading
              ? <Loader2 className="w-3 h-3 animate-spin" style={{ color: "var(--pm-accent)" }} />
              : <MapPin className="w-3 h-3" style={{ color: "var(--pm-accent)" }} />
            }
            <span className="text-[10px] truncate" style={{ color: "var(--pm-text-muted)" }}>
              {cityLoading ? "Detecting..." : city || "Bangladesh"}
            </span>
          </div>
        </div>

        <div className="mt-3 rounded-xl p-2.5 border" style={{ background: "var(--pm-accent-soft)", borderColor: "var(--pm-border)" }}>
          <p className="text-[10px] mb-1" style={{ color: "var(--pm-text-muted)" }}>ওয়ালেট ব্যালেন্স</p>
          <div className="flex items-center justify-between">
            <span className="font-bold text-sm" style={{ color: "var(--pm-text)" }}>
              {showBalance ? "৳ 0" : "৳ ••••••"}
            </span>
            <button onClick={() => setShowBalance(v => !v)} style={{ color: "var(--pm-text-muted)" }}>
              {showBalance ? <Eye className="w-3.5 h-3.5" /> : <EyeOff className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Banner Slider */}
      <div
        className="flex-1 rounded-2xl p-3.5 flex flex-col justify-between border border-white/10 overflow-hidden"
        style={{ background: banner.grad, minHeight: "130px", transition: "background 0.5s" }}
      >
        <div>
          <p className="font-bold text-sm leading-snug text-white">{banner.title}</p>
          <p className="text-white/70 text-[11px] mt-1">{banner.subtitle}</p>
        </div>
        <div className="flex items-end justify-between mt-2">
          <button className="bg-white/20 text-white text-[11px] font-semibold px-3 py-1.5 rounded-full border border-white/25">
            {banner.btn}
          </button>
          <span className="text-3xl">{banner.emoji}</span>
        </div>
        <div className="flex gap-1 mt-2">
          {BANNERS.map((_, i) => (
            <button key={i} onClick={() => setSlide(i)}
              className={`h-1 rounded-full transition-all duration-300 ${i === slide ? "w-5 bg-white" : "w-1.5 bg-white/30"}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}