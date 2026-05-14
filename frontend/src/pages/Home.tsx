import HeroSection from "@/components/home/HeroSection";
import QuickAccessGrid from "@/components/home/QuickAccessGrid";

export default function Home() {
  return (
    <div className="h-[calc(100vh-128px)] flex flex-col overflow-hidden">
      {/* Fixed hero section */}
      <div className="flex-shrink-0">
        <HeroSection />
      </div>
      
      {/* Scrollable grid */}
      <div className="flex-1 overflow-y-auto scrollbar-hide">
        <QuickAccessGrid />
      </div>
    </div>
  );
}
