import HeroSection from "@/components/home/HeroSection";
import QuickAccessGrid from "@/components/home/QuickAccessGrid";
import FeaturedCategories from "@/components/home/FeaturedCategories";
import RecommendedProducts from "@/components/home/RecommendedProducts";

export default function Home() {
  return (
    <div className="pb-4">
      <HeroSection />
      <QuickAccessGrid />
      <FeaturedCategories />
      <RecommendedProducts />
    </div>
  );
}