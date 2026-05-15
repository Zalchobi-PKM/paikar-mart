import HeroSection from "@/components/home/HeroSection";
import QuickAccessGrid from "@/components/home/QuickAccessGrid";

export default function Home() {
  return (
    <div className="flex flex-col gap-0">
      <HeroSection />
      <QuickAccessGrid />
    </div>
  );
}