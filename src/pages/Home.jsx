import { TickerBar } from '../components/common/TickerBar/TickerBar';
import { CategoriesSection } from '../components/sections/Home/CategoriesSection';
import { HeroSection } from '../components/sections/Home/HeroSection';
import { PromotionsSection } from '../components/sections/Home/PromotionsSection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <TickerBar />
      <CategoriesSection />
      <PromotionsSection />
    </main>
  );
}
