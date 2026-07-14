import { ComparisonSection } from "@/components/comparison-section";
import { FirstVisitSubscribeModal } from "@/components/first-visit-subscribe-modal";
import { GrowthCycleSection } from "@/components/growth-cycle-section";
import { HeroSection } from "@/components/hero-section";
import { ManifestoSection } from "@/components/manifesto-section";
import { PhilosophySection } from "@/components/philosophy-section";
import { SupportSections } from "@/components/support-sections";
import { TeasersSection } from "@/components/teasers-section";

export default function Home() {
  return (
    <>
      <FirstVisitSubscribeModal />
      <main className="relative z-10 isolate overflow-hidden">
        <HeroSection />
        <PhilosophySection />
        <ComparisonSection />
        <GrowthCycleSection />
        <ManifestoSection />
        <TeasersSection />
        <SupportSections />
      </main>
    </>
  );
}
