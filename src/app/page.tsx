import { DottedSurface } from "@/components/dotted-surface";
import { FirstVisitSubscribeModal } from "@/components/first-visit-subscribe-modal";
import { GrowthCycleSection } from "@/components/growth-cycle-section";
import { HeroSection } from "@/components/hero-section";
import { PhilosophySection } from "@/components/philosophy-section";
import { SupportSections } from "@/components/support-sections";

export default function Home() {
  return (
    <>
      <FirstVisitSubscribeModal />
      <DottedSurface className="opacity-65" />
      <div className="pointer-events-none fixed inset-0 z-[-5] bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_26%),linear-gradient(180deg,rgba(4,5,11,0.2),rgba(4,5,11,0.92)_70%,rgba(4,5,11,1))]" />
      <main className="relative z-10 isolate overflow-hidden">
        <HeroSection />
        <PhilosophySection />
        <GrowthCycleSection />
        <SupportSections />
      </main>
    </>
  );
}
