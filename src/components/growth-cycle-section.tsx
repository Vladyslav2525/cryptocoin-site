"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { useTranslations } from "@/lib/language-context";

export function GrowthCycleSection() {
  const t = useTranslations();
  const steps = t.treasuryGrowth.steps;
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
        if (entry.isIntersecting) {
          setActiveStep(0);
        }
      },
      {
        threshold: 0.35,
      },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) {
      return;
    }

    const interval = window.setInterval(() => {
      setActiveStep((current) => (current + 1) % steps.length);
    }, 2200);

    return () => window.clearInterval(interval);
  }, [isVisible, steps.length]);

  return (
    <section
      id="how-treasury-grows"
      ref={sectionRef}
      className="relative py-20 sm:py-24 lg:py-28"
    >
      <div className="section-shell">
        <div className="mx-auto max-w-6xl">
          <span className="section-kicker">{t.treasuryGrowth.kicker}</span>

          <div className="mb-10 max-w-4xl space-y-5">
            <h2 className="text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl">
              {t.treasuryGrowth.title}
            </h2>
            <p className="text-base leading-7 text-[var(--muted-foreground)] sm:text-lg sm:leading-8">
              {t.treasuryGrowth.description}
            </p>
          </div>

          {/* One grid for every breakpoint: the cycle gained a sixth step, and the
              old hand-laid 2+2+1 desktop layout silently dropped anything past the
              fifth. Column count is all that changes now. */}
          <div className="grid items-stretch gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {steps.map((step, index) => (
              <article
                key={step.title}
                className={cn(
                  "grid-card break-words cycle-step md:min-h-[220px] lg:min-h-[260px]",
                  activeStep === index && "cycle-step-active",
                )}
              >
                <div className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-white/50">
                  Step {index + 1}
                </div>
                <h3 className="mb-4 text-lg font-semibold tracking-[-0.03em] text-white sm:text-xl lg:text-2xl">
                  {step.title}
                </h3>
                <p className="text-sm leading-7 text-white/72 sm:text-base sm:leading-8">
                  {step.body}
                </p>
              </article>
            ))}
          </div>

          <div className="glass-panel mt-8 rounded-2xl px-6 py-5 text-center text-sm leading-7 text-[var(--gold-bright)] sm:text-base">
            {t.treasuryGrowth.cycleNote}
          </div>
        </div>
      </div>
    </section>
  );
}
