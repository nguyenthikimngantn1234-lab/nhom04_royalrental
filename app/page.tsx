import { NavigationBarSection } from "../components/NavigationBarSection";
import { FeaturedCategoryCardsSection } from "../components/FeaturedCategoryCardsSection";
import { BestSellerGallerySection } from "../components/BestSellerGallerySection";
import { BridalTrendPromoSection } from "../components/BridalTrendPromoSection";
import { FooterSection } from "../components/FooterSection";

export default function Home() {
  return (
    <main className="relative flex w-full min-h-screen flex-col items-center bg-white overflow-x-hidden">
      <NavigationBarSection />
      
      <div className="max-w-[1440px] w-full flex flex-col items-center gap-20 mt-20">
        <FeaturedCategoryCardsSection />
        {/* Đã xóa BridalProductCatalogSection để trang chủ không bị quá dài */}
        <BestSellerGallerySection />
        <BridalTrendPromoSection />
      </div>
      
      <FooterSection />
    </main>
  );
}