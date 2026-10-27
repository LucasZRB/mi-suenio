import { TickerBar } from '../components/common/TickerBar/TickerBar';
import { CategoriesSection } from '../components/sections/Home/CategoriesSection';
import { HeroSection } from '../components/sections/Home/HeroSection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <TickerBar />
      <CategoriesSection />
      {/* Próximamente: Ticker bar y siguientes secciones */}
    </main>
  );
}
