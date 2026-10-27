import { TickerBar } from '../components/common/TickerBar/TickerBar';
import { HeroSection } from '../components/sections/Home/HeroSection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <TickerBar />
      {/* Próximamente: Ticker bar y siguientes secciones */}
    </main>
  );
}
