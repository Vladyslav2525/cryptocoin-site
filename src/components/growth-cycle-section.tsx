"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { GROWTH_CYCLE_STEPS } from "@/lib/site-content";

export function GrowthCycleSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const firstRow = GROWTH_CYCLE_STEPS.slice(0, 2);
  const secondRow = GROWTH_CYCLE_STEPS.slice(2, 4);
  const finalStep = GROWTH_CYCLE_STEPS[4];
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
      setActiveStep((current) => (current + 1) % GROWTH_CYCLE_STEPS.length);
    }, 2200);

    return () => window.clearInterval(interval);
  }, [isVisible]);

  return (
    <section
      id="growth-cycle"
      ref={sectionRef}
      className="relative py-20 sm:py-24 lg:py-28"
    >
      <div className="section-shell">
        <div className="mx-auto max-w-6xl">
          <span className="section-kicker">Closed-loop value model</span>

          <div className="mb-10 max-w-4xl space-y-5">
            <h2 className="text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl">
              Как это работает: Замкнутый цикл роста
            </h2>
            <p className="text-base leading-7 text-[var(--muted-foreground)] sm:text-lg sm:leading-8">
              Схема ниже показывает, как физическое обеспечение, развитие
              проекта и доход из реального мира формируют цикл, который должен
              укреплять общую стоимость проекта.
            </p>
          </div>

          <div className="hidden lg:block">
            <div className="grid grid-cols-2 items-stretch gap-6">
              {firstRow.map((step, index) => (
                <article
                  key={step.title}
                  className={cn(
                    "grid-card min-h-[240px] break-words cycle-step",
                    activeStep === index && "cycle-step-active",
                  )}
                >
                  <div className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-white/50">
                    Step {index + 1}
                  </div>
                  <h3 className="mb-4 text-2xl font-semibold tracking-[-0.03em] text-white">
                    {step.title}
                  </h3>
                  <p className="text-base leading-8 text-white/72">{step.body}</p>
                </article>
              ))}
            </div>

            <div className="mt-6 grid grid-cols-2 items-stretch gap-6">
              <article
                className={cn(
                  "grid-card min-h-[240px] break-words cycle-step",
                  activeStep === 2 && "cycle-step-active",
                )}
              >
                <div className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-white/50">
                  Step 3
                </div>
                <h3 className="mb-4 text-2xl font-semibold tracking-[-0.03em] text-white">
                  {secondRow[0]?.title}
                </h3>
                <p className="text-base leading-8 text-white/72">
                  {secondRow[0]?.body}
                </p>
              </article>

              <article
                className={cn(
                  "grid-card min-h-[240px] break-words cycle-step",
                  activeStep === 3 && "cycle-step-active",
                )}
              >
                <div className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-white/50">
                  Step 4
                </div>
                <h3 className="mb-4 text-2xl font-semibold tracking-[-0.03em] text-white">
                  {secondRow[1]?.title}
                </h3>
                <p className="text-base leading-8 text-white/72">
                  {secondRow[1]?.body}
                </p>
              </article>
            </div>

            <div className="mx-auto mt-6 max-w-[calc(50%-0.75rem)]">
              <article
                className={cn(
                  "grid-card min-h-[220px] break-words cycle-step",
                  activeStep === 4 && "cycle-step-active",
                )}
              >
                <div className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-white/50">
                  Step 5
                </div>
                <h3 className="mb-4 text-2xl font-semibold tracking-[-0.03em] text-white">
                  {finalStep?.title}
                </h3>
                <p className="text-base leading-8 text-white/72">{finalStep?.body}</p>
              </article>
            </div>
          </div>

          <div className="hidden gap-5 md:grid lg:hidden md:grid-cols-2">
            {GROWTH_CYCLE_STEPS.map((step, index) => (
              <article
                key={step.title}
                className={cn(
                  "grid-card min-h-[220px] break-words cycle-step",
                  activeStep === index && "cycle-step-active",
                )}
              >
                <div className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-white/50">
                  Step {index + 1}
                </div>
                <h3 className="mb-4 text-xl font-semibold tracking-[-0.03em] text-white">
                  {step.title}
                </h3>
                <p className="text-sm leading-7 text-white/72 sm:text-base sm:leading-8">
                  {step.body}
                </p>
              </article>
            ))}
          </div>

          <div className="space-y-4 md:hidden">
            {GROWTH_CYCLE_STEPS.map((step, index) => (
              <div key={step.title} className="flex flex-col items-center">
                <article
                  className={cn(
                    "grid-card w-full break-words cycle-step",
                    activeStep === index && "cycle-step-active",
                  )}
                >
                  <div className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-white/50">
                    Step {index + 1}
                  </div>
                  <h3 className="mb-4 text-lg font-semibold tracking-[-0.03em] text-white">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-7 text-white/72">{step.body}</p>
                </article>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
