import { AccessGate } from "@/components/access-gate";
import { GrowthCycleSection } from "@/components/growth-cycle-section";
import { HeroSection } from "@/components/hero-section";
import { PhilosophySection } from "@/components/philosophy-section";
import { SupportSections } from "@/components/support-sections";

export default function Home() {
  return (
    <AccessGate>
      <main className="relative isolate overflow-hidden">
        <HeroSection />
        <PhilosophySection />
        <GrowthCycleSection />
        <SupportSections />
      </main>
    </AccessGate>
  );
}
