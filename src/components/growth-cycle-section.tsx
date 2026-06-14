import { GROWTH_CYCLE_STEPS } from "@/lib/site-content";

export function GrowthCycleSection() {
  return (
    <section id="growth-cycle" className="relative py-20 sm:py-24 lg:py-28">
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

          <div className="hidden gap-4 md:grid md:grid-cols-[minmax(0,1fr)_56px_minmax(0,1fr)_56px_minmax(0,1fr)_56px_minmax(0,1fr)_56px_minmax(0,1fr)]">
            {GROWTH_CYCLE_STEPS.map((step, index) => (
              <div key={step.title} className="contents">
                <article className="grid-card min-h-[220px]">
                  <div className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--gold-bright)]">
                    Step {index + 1}
                  </div>
                  <h3 className="mb-4 text-xl font-semibold tracking-[-0.03em] text-white">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-7 text-white/72">{step.body}</p>
                </article>
                {index < GROWTH_CYCLE_STEPS.length - 1 ? (
                  <div className="flow-arrow">
                    <span className="flow-arrow-icon">→</span>
                  </div>
                ) : null}
              </div>
            ))}
          </div>

          <div className="space-y-4 md:hidden">
            {GROWTH_CYCLE_STEPS.map((step, index) => (
              <div key={step.title} className="flex flex-col items-center">
                <article className="grid-card w-full">
                  <div className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--gold-bright)]">
                    Step {index + 1}
                  </div>
                  <h3 className="mb-4 text-lg font-semibold tracking-[-0.03em] text-white">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-7 text-white/72">{step.body}</p>
                </article>
                {index < GROWTH_CYCLE_STEPS.length - 1 ? (
                  <div className="flow-arrow flow-arrow-vertical h-16">
                    <span className="flow-arrow-icon">↓</span>
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
